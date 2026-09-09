import React, { useState, useCallback } from 'react';
import Header from '../components/header';
import Board from '../components/board';
import Card_btn from '../components/card_btn';
import Cadastro from '../components/cadastro';
import { buscarpid } from '../services/metodos/metodos';
import Btn from '../components/button';

export default function Home() {
    const [showCadastro, setShowCadastro] = useState(false);
    const [showRemover, setShowRemover] = useState(false);
    const [showAtualizar, setShowAtualizar] = useState(false);
    const [pessoaParaAtualizar, setPessoaParaAtualizar] = useState<{ nome: string; id: string; email?: string; telefone?: string } | null>(null);
    const [refresh, setRefresh] = useState(0);
    const [filtro, setFiltro] = useState('');
    const [buscaId, setBuscaId] = useState('');
    const [erroBusca, setErroBusca] = useState('');

    const handleConcluido = useCallback((tipo: 'cadastro' | 'remover' | 'atualizar') => {
        if (tipo === 'cadastro') setShowCadastro(false);
        else if (tipo === 'remover') setShowRemover(false);
        else if (tipo === 'atualizar') {
            setShowAtualizar(false);
            setPessoaParaAtualizar(null);
        }
        setRefresh(r => r + 1);
    }, []);

    const handleAbrirAtualizar = async () => {
        if (!buscaId.trim()) return;
        setErroBusca('');
        try {
            const response = await buscarpid(buscaId.trim());
            if (response?.data) {
                setPessoaParaAtualizar(response.data);
                setShowAtualizar(true);
                setBuscaId('');
            } else {
                setErroBusca('ID não encontrado');
            }
        } catch {
            setErroBusca('Erro ao buscar pessoa');
        }
    };

    return (
        <div className='flex flex-col items-center gap-4 bg-slate-100 min-h-screen w-full p-4 sm:p-6 lg:p-8'>
            <Header />

            <div className="w-full max-w-4xl flex flex-col gap-4">
                <div className="bg-white rounded-2xl border border-slate-300 p-4 sm:p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-800 mb-4">Buscar por ID para Atualizar</h2>
                    <div className="flex flex-col sm:gap-3">
                        <input
                            type="text"
                            value={buscaId}
                            onChange={(e) => { setBuscaId(e.target.value); setErroBusca(''); }}
                            placeholder="Digite o ID para buscar"
                            className="flex-1 h-12 min-h-12 px-4 rounded-xl border border-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 bg-slate-50"
                        />
                        <Btn op="Buscar" func={handleAbrirAtualizar} className="w-full sm:w-auto" />
                    </div>
                    {erroBusca && (
                        <div className="mt-3 p-3 rounded bg-red-50 border border-red-300 text-red-700 text-sm">
                            {erroBusca}
                        </div>
                    )}
                </div>

                <div className="bg-white rounded-2xl border border-slate-300 p-4 sm:p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-800 mb-4">Filtrar por nome</h2>
                    <input
                        type="text"
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                        placeholder="Digite parte do nome..."
                        className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 bg-slate-50"
                    />
                </div>

                <Card_btn
                    onAdicionar={() => setShowCadastro(true)}
                    onRemover={() => setShowRemover(true)}
                    onAtualizar={() => { setPessoaParaAtualizar(null); setShowAtualizar(true); }}
                />

                <Board refresh={refresh} filtro={filtro} />
            </div>

            {showCadastro && (
                <Cadastro
                    op="Cadastrar"
                    onConcluido={() => handleConcluido('cadastro')}
                />
            )}
            {showRemover && (
                <Cadastro
                    op="Remover"
                    onConcluido={() => handleConcluido('remover')}
                />
            )}
            {showAtualizar && (
                <Cadastro
                    op="Atualizar"
                    onConcluido={() => handleConcluido('atualizar')}
                    pessoa={pessoaParaAtualizar ?? undefined}
                />
            )}
        </div>
    );
}