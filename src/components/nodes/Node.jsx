import { useState } from 'react'
import './Node.css'
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from '@material-ui/core';

export default function Node() {
    const [hasValue, setHasValue] = useState('d-none');
    const handleChange = (e) => {
        setHasValue('d-inline-block px-2 bg-dark');
    }
    const showMessage = (message, date) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="align-items-center d-flex justify-content-end m-2 ms-auto w-auto"> 
        <img src="file:///C:/Users/Diyorbek/Pictures/Cars/Kia.jpg">
        <div class="bg-dark box ms-2 p-2 rounded">
        <h3>${message}</h3>
        <span>${date}</span>
        </div>
        </div>`
        console.log(div);
        document.getElementById('node').appendChild(div)
    }
    const submit = (e) => {
        e.preventDefault();
        const message = e.target.children[0].value;
        const date = new Date().toLocaleTimeString();
        const fullMessage = {
            text: message,
            date: date
        }
        setHasValue('d-none')
        if (message !== '') {
            // console.warn(db.collection('react-chat').add({ name: e.target.children[0].value }));
            showMessage(message, date);
        }
        e.target.children[0].value = ''
    }
    return (
        <div className='position-relative w-100 node'>
            <div name='parent' className='parent'>
                <div className="align-items-center bg-dark d-flex fs-3 ps-5 py-1">
                    <Link href='/Home/Personal/menu' className="bg-transparent border-0 d-flex me-3 text-white">
                        <ArrowBackIcon /></Link>
                    <h3>{window.location.href.slice(27, 35)}</h3></div >
                <div id="node" name="site" className="p-1">
                </div>
                <form onSubmit={submit} name='form' style={{ bottom: 0 }} className='w-100 position-absolute' >
                    <input type="text" name='message'
                        onChange={handleChange}
                        className='input bg-dark border-0 w-100 text-white fs-5 px-3 py-2' placeholder='Enter Message...' />
                    {hasValue ?
                        <button type='submit' className={hasValue} style={{
                            position: 'absolute', marginLeft: '-40px',
                            marginTop: '11px',
                            cursor: 'pointer',
                            border: 'none'
                        }}>
                            <SendIcon className='text-primary' />
                        </button>
                        : ''
                    }
                </form>
            </div>
        </div >
    )
}