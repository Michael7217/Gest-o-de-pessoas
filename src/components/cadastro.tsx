import React from "react";
import Btn from "./button";
export default function Cadastro() {
    return (
        <div className="flex flex-col items-center border-2 w-1/2 rounded-2xl bg-slate-800 text-white">
            <h1 className="text-2xl">Cadastrar Pessoa</h1>
            <div className="flex flex-col items-center gap-2">
                <label htmlFor="1" >Nome</label>
                <input placeholder='Digite o nome'type="text" name="nome" id="1" className="h-15 border-4 rounded-2xl bg-slate-600 placeholder:text-white"/>
                <label htmlFor="2" >id</label>
                <input placeholder='Digite o id' type="text" name="nome" id="2" className="h-15 border-4 rounded-2xl bg-slate-600"/>
                <Btn op='Cadastrar'></Btn>
            </div>
        </div>
    );
}