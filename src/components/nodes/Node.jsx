import { useState } from 'react'
import './Node.css'
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import home from '../asset/Screenshot';

export default function Node() {
    const [send, setSend] = useState('d-none');
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.input.value = '';
        e.target.onsubmit = function () {
            return e.target.parentElement.children[1].append(e.target.children[0].value)
        }
    }
    return (
        <div className='position-relative w-100 node'>
            <div class="align-items-center bg-dark d-flex fs-3 ps-5 py-1"><button class="bg-transparent border-0 d-flex me-3 text-white">
                <ArrowBackIcon /></button><h3>Family</h3></div>
            <div id="node" name="site" className="p-3">
                <div className="align-items-center d-flex justify-content-end m-2 ms-auto w-auto">
                    <img src={home} className="person" /><div className="bg-dark box ms-4 p-2 rounded"><h3 className="fs-4">Hhhsdhhshdhfshdhello World</h3><span >5:03:34 PM</span>
                    </div>
                </div>
            </div>
            <form name='form' className='bottom-0 position-absolute' onSubmit={handleSubmit}>
                <input type="text" name='input' onKeyDown={() =>
                    setSend('d-inline-block')
                } className='input bg-dark border-0 text-white fs-5 px-3 py-2' placeholder='Enter Message...' />
                <button type='submit' className={send} style={{
                    position: 'absolute', marginLeft: '-40px',
                    marginTop: '11px',
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none'
                }}>
                    <SendIcon className='text-primary' />
                </button>
            </form>
        </div >
    )
}