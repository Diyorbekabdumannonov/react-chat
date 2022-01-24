import React from 'react'
import { Link } from '@material-ui/core'
import { useState } from 'react'
import Node from '../nodes/Node'
import './SubCategory.css'
import { useRef } from 'react'
import firebase from '../../firebase'

export default function SubCategory() {
    const parent = React.createRef();

    const showSub = e => {
        const div = document.createElement('div');
        const link = document.createElement('a')
        link.href = `/Home/${e.name}`
        link.className = "border text-decoration-none border-1 border-dark card2 d-flex py-1"
        const h2 = document.createElement('h2')
        h2.className = "fs-4 mb-0 px-3 text-white"
        h2.innerText = e.name
        link.appendChild(h2)
        div.appendChild(link)
        parent.current.appendChild(div)
        console.log(div)
    }

    // firebase.firestore().collection('Subcategory').get().then(subs => {
    //     subs.docs.forEach(sub => {
    //         showSub(sub.data())
    //         console.log(sub.data())
    //     })
    // })

    return (
        <>
            <div className='overflow-auto scroll' style={{ height: '100vh' }}>
                <div id='main' ref={parent}>
                </div>
            </div>
        </>
    )
}
