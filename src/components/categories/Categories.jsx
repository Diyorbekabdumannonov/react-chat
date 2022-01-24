import { Link, Modal } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import './Categories.css'
import firebase from '../../firebase'
import { Menu } from '@material-ui/icons'

export default function Categories() {
    const [count, setCount] = useState(0)

    const parent = React.createRef();

    function showCard(e) {
        const div = document.createElement('div');
        div.className = 'd-flex mx-4 flex-column align-items-center w-25'
        const a = document.createElement('a')
        a.href = `/${e.name}`
        a.className = 'h6 h1-lg text-white text-decoration-none'
        a.textContent = e.name
        div.appendChild(a)
        parent.current.appendChild(div)
    }

    // firebase.firestore().collection('category').get().then(categories => {
    //     categories.docs.forEach(category => {
    //         showCard(category.data())
    //     })
    // })

    return (
        <div className='d-flex p-2 scroll position-relative align-items-center'>
            {/* <div>
                <button className='bg-black border-0 text-light' onClick={e => {
                    setCount(count + 1)
                    count % 2 == 0 ? (
                        e.target.parentElement.parentElement.parentElement.children[1].className = 'd-none') : (
                        e.target.parentElement.parentElement.parentElement.children[1].className = 'd-block'
                    )
                }}>
                    <Menu />
                </button>
                <div>
                    <div className='d-flex justify-content-center' style={{ width: '100vw', maxWidth: '300px    ' }}>
                        <div className='ProfileImg'></div>
                    </div>
                    <h1 className='my-2 text-center'>User</h1>
                    <div className="bg-black border px-2 py-1">
                        <a className="text-decoration-none text-white">Create new Category</a>
                    </div>
                    <div className="bg-black border px-2 py-1 mt-1">
                        <a className="text-decoration-none text-white">Create new SubCategory</a>
                    </div>
                    <div className="align-items-center d-flex mt-2">
                        <p>Night Mode</p>
                        <input type="checkbox" className="ms-3" />
                    </div>
                </div>
            </div> */}
            <div ref={parent} className='d-flex overflow-auto'>
            </div>
        </div >
    )
}
