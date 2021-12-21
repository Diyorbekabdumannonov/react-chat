import './Node.css'

export default function Node() {
    return (
        <div className='node'>
            <div id="node">
            </div>
            <form>
                <input type="text" className='input' name="input" placeholder='Enter Message...' />
            </form>
        </div>
    )
}
