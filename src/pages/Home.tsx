import React from 'react'
import Header from '../components/header'
import Board from '../components/board'
import Card_btn from '../components/card_btn'
export default function Home() {
    return(
        <div className='flex flex-col items-center gap-4 bg-slate-500 h-screen w-full p-4'>
            <Header/>
            <Board/>
            <Card_btn/>
        </div>
    )
}