import { Link } from '@material-ui/core'
import { useState } from 'react'
import Node from '../nodes/Node'
import './SubCategory.css'

export default function SubCategory() {
    const [current, setCurrent] = useState();
    console.log(current)
    return (
        <>
            <div className='overflow-auto scroll' style={{ height: '100vh' }}>
                <div className=''>
                    <Link href={`http://localhost:3000/Home/${current}`} className="border text-decoration-none border-1 border-dark card2 d-flex py-1" onClick={(e) => {
                        setCurrent(e.target.textContent)
                    }}><h2 className="fs-4 mb-0 px-3 text-white">Personal</h2></Link>
                    <Link href={`http://localhost:3000/Home/${current}`} className="border text-decoration-none border-1 border-dark card2 d-flex py-1" onClick={(e) => {
                        setCurrent(e.target.textContent)
                    }}><h2 className="fs-4 mb-0 px-3 text-white">Family</h2></Link>
                    <Link href={`http://localhost:3000/Home/${current}`} className="border text-decoration-none border-1 border-dark card2 d-flex py-1" onClick={(e) => {
                        setCurrent(e.target.textContent)
                    }}><h2 className="fs-4 mb-0 px-3 text-white">shop</h2></Link>
                    <Link href={`http://localhost:3000/Home/${current}`} className="border text-decoration-none border-1 border-dark card2 d-flex py-1" onClick={(e) => {
                        setCurrent(e.target.textContent)
                    }}><h2 className="fs-4 mb-0 px-3 text-white">hospital</h2></Link>
                </div>
            </div>
        </>
    )
}
