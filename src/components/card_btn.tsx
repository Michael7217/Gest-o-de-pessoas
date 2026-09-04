import React from "react";
import Btn from './button'
// import {listar,
//         criar,
//         atualizarpid,
//         buscarpid,
//         buscarpnome,
//         removerpid} from '../services/metodos/metodos.ts'
// const mets = {
//     listar: listar,
//     criar: criar,
//     atualizarpid: atualizarpid,
//     buscarpid: buscarpid,
//     buscarpnome: buscarpnome,
//     removerpid: removerpid
// }

export default function Card_btn() {
    enum btns {
        adicionar = 'Adicionar',
        remover = 'Remover',
        atualizar = 'Atualizar',
        listar = 'Listar'

    }
    return (
        <div className="flex justify-around w-lvh gap-8 max-w-screen px-4">
            <Btn op={btns.adicionar}/>
            <Btn op={btns.remover}/>
            <Btn op={btns.atualizar}/>
            
        </div>
    )
}