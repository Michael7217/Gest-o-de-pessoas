import React, { useEffect, useState } from "react";
import Pessoas from "./pessoas"
import * as Services from '../services/metodos/metodos'
interface Ipessoa {
    nome: string;
    id: string
}
const services = {
    'listar': Services.listar,
    'criar': Services.criar,
    'buscar' : {
        'buscarpid': Services.buscarpid,
        'buscarpnome': Services.buscarpnome
    },
    'atualizarpid': Services.atualizarpid,
    'removerpid': Services.removerpid
}

export default function Board() {
    const [pessoas, setPessoas] = useState<Ipessoa[]>([])
    useEffect(() => {
        const carregarpessoas = async () => {
            const response = await services.listar()
            setPessoas(response?.data ?? [])
        }
        carregarpessoas()
    }, []) 

    return (
        <div className="flex flex-col
        border-4 
        border-gray-400 rounded-2xl
        flex-1 min-h-0 w-full bg-slate-200">
            {pessoas.map(pessoa => (
                <Pessoas key={pessoa.id} id={pessoa.id} nome={pessoa.nome}/>
            ))}
            
    
        </div>
    )
}