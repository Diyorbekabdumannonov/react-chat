import { Link } from '@material-ui/core'
import { useState } from 'react'
import './Categories.css'

export default function Categories() {
    const [currentc, setCurrentC] = useState(false)
    localStorage.setItem('currentc', currentc)
    function Card(db) {
        return (
            <div className=''>
                <img className='logo' src={db.photoUrl} />
                <h3>{db.name}</h3>
            </div>
        )
    }

    return (
        <div className='d-flex p-2 scroll position-relative align-items-center'>
            <div className='d-flex overflow-auto'>
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
