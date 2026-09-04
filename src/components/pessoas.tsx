import React from "react";
interface Ipessoa {
    nome: string,
    id: string
}
export default function Pessoas({nome, id}:Ipessoa){
    return (
        <section>
            <div className="flex pl-8 gap-30
                border-b-4 rounded-b-sm
                border-slate-500 py-3 font-medium">
                <h1>{nome}</h1>
                <h1>{id}</h1>
                
            </div>
            
        </section>
    )
}
