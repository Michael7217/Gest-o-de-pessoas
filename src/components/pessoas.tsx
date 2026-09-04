import React from "react";

interface Ipessoa {
    nome: string;
    id: string;
    email?: string;
    telefone?: string;
}

export default function Pessoas({ nome, id, email, telefone }: Ipessoa) {
    return (
        <section>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pl-4 pr-4 py-3 border-b border-slate-300 bg-white hover:bg-slate-50 transition-colors">
                <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-slate-900 truncate">{nome}</h2>
                    <p className="text-sm text-slate-500">ID: {id}</p>
                    {email && <p className="text-sm text-slate-500">Email: {email}</p>}
                    {telefone && <p className="text-sm text-slate-500">Telefone: {telefone}</p>}
                </div>
            </div>
        </section>
    )
}