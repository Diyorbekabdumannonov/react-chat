import { useState } from 'react'
import './Node.css'
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from '@material-ui/core';

export default function Node() {
    const [hasValue, setHasValue] = useState('d-none');
    const messages = [];

    const handleChange = (e) => {
        setHasValue('d-inline-block px-2 bg-dark');
    }

    const submit = (e) => {
        e.preventDefault();
        const message = e.target.children[0].value;
        setHasValue('d-none')
        messages.push(message);
        console.log(messages)
        e.target.children[0].value = '';
    }

    return (
        <div className='position-relative w-100 node'>
            <div className="align-items-center bg-dark d-flex fs-3 ps-5 py-1">
                <Link to='/menu' className="bg-transparent border-0 d-flex me-3 text-white">
                    <ArrowBackIcon /></Link>
                <h3>Family</h3></div >
            <div id="node" name="site" className="p-1">
                <div className="align-items-center d-flex justify-content-end m-2 ms-auto w-auto">
                    <img src="data:image/jpeg;base64,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" className="person" />
                    <div className="bg-dark box ms-2 p-2 rounded">
                        <h3 className="fs-4">Hello World</h3><span >5:03:34 PM</span>
                    </div>
                </div>
            </div>
            <form onSubmit={submit} name='form' className='bottom-0 position-absolute' >
                <input type="text" name='message'
                    onChange={handleChange}
                    className='input bg-dark border-0 text-white fs-5 px-3 py-2' placeholder='Enter Message...' />
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

        </div >
    )
}