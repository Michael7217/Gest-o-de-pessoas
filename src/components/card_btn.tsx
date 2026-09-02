import React from "react";
import Btn from './button'
export default function Card_btn() {
    enum btns {
        adicionar = 'Adicionar',
        remover = 'Remover',
        atualizar = 'Atualizar',
        listar = 'Listar'

    }
    return (
        <div className="flex justify-around w-lvh gap-8 ">
            <Btn op={btns.adicionar}/>
            <Btn op={btns.remover}/>
            <Btn op={btns.atualizar}/>
            <Btn op={btns.listar}/>
        </div>
    )
}