import React from 'react'

export default function Header(){
    return (
        <div className='flex justify-self-center
        items-center
        bg-slate-800 h-20
        border-5
        border-gray-400
        rounded-2xl
        w-full
        '>
            <button className='ml-4 cursor-pointer max-w-30'>menu</button>
            <h1 className='text-2xl text-white 
            font-italic w-full text-center
            '>Gestor de Pessoas</h1>
        </div>
    )
}