import React from 'react'

interface Ibtn {
    op: string;
    func?: () => void;
    className?: string;
}

export default function Btn({ op, func, className = '' }: Ibtn) {
    return (
        <button
            className={`border-4 border-green-300 rounded-2xl w-full sm:w-auto h-14 sm:h-15 cursor-pointer bg-emerald-700 hover:bg-emerald-800 transition-colors font-semibold text-white text-lg ${className}`}
            onClick={func}
        >
            {op}
        </button>
    )
}