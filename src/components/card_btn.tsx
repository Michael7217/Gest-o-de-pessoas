import React from "react";
import Btn from './button'

interface Icard_btn {
    onAdicionar?: () => void;
    onRemover?: () => void;
    onAtualizar?: () => void;
}

export default function Card_btn({ onAdicionar, onRemover, onAtualizar }: Icard_btn) {
    return (
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-4xl px-4">
            <Btn op="Adicionar" func={onAdicionar} className="flex-1 sm:w-auto" />
            <Btn op="Remover" func={onRemover} className="flex-1 sm:w-auto" />
            <Btn op="Atualizar" func={onAtualizar} className="flex-1 sm:w-auto" />
        </div>
    )
}