import { Link } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import './Categories.css'

export default function Categories() {
    const [currentc, setCurrentC] = useState(false)
    const categories = [
        { name: 'Home' },
        { name: 'Library' }
    ]

    // function Card() {
    //     const catg = document.createElement('div');
    //     catg.className = 'd-flex mx-4 flex-column align-items-center w-25'
    //     const link = document.createElement('a')
    //     link.href = currentc
    //     link.onclick = e => {
    //         setCurrentC(e.target.textContent)
    //     }
    //     link.className = 'h6 h1-lg text-white'
    //     link.innerText = categories[0].name
    //     catg.appendChild(link)
    //     const parent = document.getElementById('catg')
    //     parent.appendChild(catg)
    // }
    // Card()
    return (
        <div className='d-flex p-2 scroll position-relative align-items-center'>
            <div className='d-flex overflow-auto' id='catg'>
                {/* <Card /> */}
                <div className='d-flex mx-4 flex-column align-items-center w-25'>
                    <Link href={`/${currentc}`} onClick={e => {
                        setCurrentC(e.target.textContent)
                    }} className='h6 h1-lg text-white'>Home</Link>
                </div>
                <div className='d-flex mx-4 flex-column align-items-center w-25'>
                    <Link href={`/${currentc}`} onClick={e => {
                        setCurrentC(e.target.textContent)
                    }} className='h6 text-white'>Library</Link>
                </div>
            </div>
        </div >
    )
}
