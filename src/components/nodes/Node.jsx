import { useState } from 'react'
import './Node.css'
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from '@material-ui/core';
import firebase from '../../firebase';
import { MoreVert } from '@material-ui/icons';

export default function Node() {
    const [blogs, setBlogs] = useState([])
    const [hasValue, setHasValue] = useState('d-none');
    const handleChange = (e) => {
        setHasValue('d-inline-block px-2 bg-dark');
    }
    const showMessage = (note) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="align-items-center d-flex justify-content-end m-2 ms-auto w-auto">
                <img src="${note.photoURL}" class="person">
                    <div class="d-flex align-items-start bg-dark box ms-2 p-2 rounded">
                        <div>
                            <h3>${note.text}</h3>
                            <span>${note.date}</span>
                        </div>
                        <button onclick='e=>{
                            console.log(target)
                        }' class="align-items-center btn btn-dark d-flex justify-content-center ms-3 px-2 rounded-circle"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                            </button>
                              <div class="hover">
                        <p>Delete</p>
                        <p>Update</p>
                        </div>
                    </div>
            </div>`
        document.getElementById('node').appendChild(div)
    }

    window.onload = () => {
        // firebase.firestore().collection('note').get().then(notes => {
        //     notes.docs.forEach(note => {
        //         showMessage(note.data())
        //     })
        // })
    }

    const submit = (e) => {
        e.preventDefault();
        const message = e.target.children[0].value;
        const date = new Date().toLocaleTimeString();
        const fullMessage = {
            text: message,
            date: date,
            photoURL: ''
        }
        setHasValue('d-none')
        if (message !== '') {
            showMessage(fullMessage)
            firebase.firestore().collection('note').add(fullMessage)
        }
        e.target.children[0].value = ''
    }
    return (
        <div className='position-relative w-100 node'>
            <div name='parent' className='parent'>
                <div className="align-items-center topbar bg-dark d-flex fs-3 ps-5 py-1">
                    <Link href='/Home/All/menu' className="bg-transparent border-0 d-flex me-3 text-white">
                        <ArrowBackIcon />
                        </Link>
                    <h3 className='text'>{window.location.href.slice(27, 35)}</h3>
                </div >
                <div id="node" name="site" className="p-1"></div>
                <form onSubmit={submit} name='form' className='bottom-0 topbar w-100 position-absolute' >
                    <input type="text" name='message'
                        onChange={handleChange}
                        className='text input h-100 bg-dark border-0 w-100 text-white px-3 py-2' placeholder='Enter Message...' />
                    {hasValue ?
                        <button type='submit' className={hasValue + ' ' + 'plus h-100'}>
                            <SendIcon className='text-primary' />
                        </button>
                        : ''
                    }
                </form>
            </div>
        </div >
    )
}