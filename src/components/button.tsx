import React from 'react'

interface Ibtn {
        op: string
    }
export default function Btn({op}:Ibtn){
    return(
        <button className='border-4 border-green-300
        rounded-2xl w-40 min-h-15
        cursor-pointer bg-emerald-700'>
            <h1 className='text-white
            font-italic text-[20px]'>{op}</h1>
        </button>
    )
}