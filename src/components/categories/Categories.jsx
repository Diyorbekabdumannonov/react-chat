import { Link } from '@mui/material'
import React from 'react'
import './Categories.css'
import firebase from '../../firebase'

export default function Categories() {
    const showCard = e => {
        return (
            <div key={e} className='d-flex mx-4 flex-column align-items-center w-25'>
                <Link className="h6 h1-lg text-white text-decoration-none" href={`/${e.name}`}>{e.name}</Link>
            </div>
        )
    }
    return  (
        <div className='d-flex p-2 scroll position-relative align-items-center'>
            <div className='d-flex overflow-auto'>
                {firebase.firestore().collection('category').get().then(res => {
                    res.docs.map(response => {
                        return showCard(response)
                    })
                })}
            </div>
        </div >
    )
}
