import React from 'react'

interface Ibtn {
        op: string
    }
export default function Btn({op}:Ibtn){
    return(
        <button className='border-4 border-green-300
        rounded-2xl w-40 h-15 max-h-16
        cursor-pointer bg-emerald-700
        my-4'>
            <h1 className='text-white
            font-italic text-[20px]'>{op}</h1>
        </button>
    )
}