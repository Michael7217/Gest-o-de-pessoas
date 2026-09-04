import React from 'react';

export default function Header() {
    return (
        <header className="w-full max-w-4xl">
            <div className="flex items-center justify-between bg-slate-800 h-16 sm:h-20 border-2 border-slate-700 rounded-2xl px-4 sm:px-6">
                <h1 className="text-xl sm:text-2xl font-italic text-white">Gestor de Pessoas</h1>
            </div>
        </header>
    );
}