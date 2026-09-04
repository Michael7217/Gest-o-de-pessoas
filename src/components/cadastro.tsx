import React, { useState } from "react";
import axios from 'axios';
import Btn from "./button";
import { criar, removerpid, atualizarpid, buscarpid } from '../services/metodos/metodos'

interface Icad {
    op: string;
    onConcluido?: () => void;
    pessoa?: { nome: string; id: string; email?: string; telefone?: string };
}

interface Ipessoa {
    nome: string;
    id: string;
    email?: string;
    telefone?: string;
}

const camposObrigatorios: Record<string, string[]> = {
    Cadastrar: ['nome', 'id'],
    Atualizar: ['id'],
    Remover: ['id'],
};

export default function Cadastro({ op, onConcluido, pessoa }: Icad) {
    const [Pes, setPes] = useState<Ipessoa>({
        nome: pessoa?.nome ?? '',
        id: pessoa?.id ?? '',
        email: pessoa?.email ?? '',
        telefone: pessoa?.telefone ?? '',
    });
    const [carregado, setCarregado] = useState<boolean>(Boolean(pessoa));
    const [erro, setErro] = useState<string>('');

    const validar = () => {
        const obrig = camposObrigatorios[op] ?? [];
        for (const campo of obrig) {
            if (!Pes[campo as keyof Ipessoa]?.toString().trim()) {
                return `Campo "${campo}" é obrigatório`;
            }
        }
        if (Pes.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Pes.email)) {
            return 'Email inválido';
        }
        return '';
    };

    const carregarPessoa = async () => {
        if (!Pes.id.trim()) {
            setErro('Digite um ID');
            return;
        }
        const atual = await buscarpid(Pes.id.trim());
        if (!atual?.data) {
            setErro('ID não encontrado');
            return;
        }
        setPes({
            nome: atual.data.nome,
            id: atual.data.id,
            email: atual.data.email ?? '',
            telefone: atual.data.telefone ?? '',
        });
        setCarregado(true);
        setErro('');
    };

    const submit = async () => {
        if (op === 'Atualizar' && !carregado) {
            await carregarPessoa();
            return;
        }

        const err = validar();
        if (err) {
            setErro(err);
            return;
        }
        setErro('');

        try {
            if (op === 'Cadastrar') {
                await criar(Pes);
            } else if (op === 'Remover') {
                await removerpid(Pes.id);
            } else if (op === 'Atualizar') {
                await atualizarpid(Pes.id, { nome: Pes.nome, email: Pes.email, telefone: Pes.telefone });
            }
            setPes({ nome: '', id: '', email: '', telefone: '' });
            setCarregado(false);
            onConcluido?.();
        } catch (err) {
            if (axios.isAxiosError(err) && err.response?.status === 404) {
                setErro(op === 'Cadastrar' ? 'Erro ao comunicar com a API' : 'Pessoa não encontrada');
            } else if (axios.isAxiosError(err) && err.response?.status === 409) {
                setErro('Já existe uma pessoa com esse id');
            } else {
                setErro('Erro ao comunicar com a API');
            }
        }
    };

    const isCadastro = op === 'Cadastrar';
    const mostrarNomeEmailTelefone = isCadastro || (op === 'Atualizar' && carregado);
    const labelBotao = op === 'Atualizar' && !carregado ? 'Carregar' : op;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onConcluido}>
            <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-800 text-white shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
                <h1 className="text-2xl font-bold mb-6 text-center">{op} Pessoa</h1>
                {erro && (
                    <div className="mb-4 p-3 rounded bg-red-900/50 border border-red-600 text-red-100 text-sm">
                        {erro}
                    </div>
                )}
                <div className="flex flex-col gap-4">
                    {mostrarNomeEmailTelefone && (
                        <div className="w-full">
                            <label htmlFor="nome" className="block text-sm font-medium mb-1">Nome *</label>
                            <input
                                id="nome"
                                value={Pes.nome}
                                onChange={(e) => setPes({ ...Pes, nome: e.target.value })}
                                placeholder="Digite o nome"
                                type="text"
                                className="w-full h-12 px-4 rounded-xl bg-slate-700 border border-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-400"
                                required
                            />
                        </div>
                    )}
                    <div className="w-full">
                        <label htmlFor="id" className="block text-sm font-medium mb-1">ID *</label>
                        <input
                            id="id"
                            value={Pes.id}
                            onChange={(e) => setPes({ ...Pes, id: e.target.value })}
                            placeholder="Digite o ID"
                            type="text"
                            readOnly={op === 'Atualizar' && carregado}
                            className="w-full h-12 px-4 rounded-xl bg-slate-700 border border-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-400 disabled:opacity-80"
                            required
                        />
                    </div>
                    {mostrarNomeEmailTelefone && (
                        <>
                            <div className="w-full">
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    id="email"
                                    value={Pes.email ?? ''}
                                    onChange={(e) => setPes({ ...Pes, email: e.target.value })}
                                    placeholder="exemplo@email.com"
                                    type="email"
                                    className="w-full h-12 px-4 rounded-xl bg-slate-700 border border-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-400"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="telefone" className="block text-sm font-medium mb-1">Telefone</label>
                                <input
                                    id="telefone"
                                    value={Pes.telefone ?? ''}
                                    onChange={(e) => setPes({ ...Pes, telefone: e.target.value })}
                                    placeholder="(11) 99999-9999"
                                    type="tel"
                                    className="w-full h-12 px-4 rounded-xl bg-slate-700 border border-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-400"
                                />
                            </div>
                        </>
                    )}
                    <Btn op={labelBotao} func={submit} className="w-full mt-2" />
                </div>
            </div>
        </div>
    );
}