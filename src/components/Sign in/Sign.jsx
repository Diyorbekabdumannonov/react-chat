import React from './Sign.css'

export default function Sign() {

    return (
        <>
            <div class="align-items-center bg-dark d-flex justify-content-around navbar text-white">
                <div class="d-flex">
                    <h1>Welcome to Note App</h1>💬</div>
                <button type="button" class="btn btn-lg btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#modelId">Sign In</button></div>

            <div className="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog text-dark" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Account</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid d-flex flex-column">
                                <label>Username:</label>
                                <input type="text" placeholder='Username' className='bg-dark border-0 mt-3 px-3 py-1 rounded-pill text-white' style={{ outline: 'none' }} />
                            </div>
                            <div className="container-fluid mt-4 d-flex flex-column">
                                <label>Password:</label>
                                <input type="text" placeholder='Password' className='bg-dark border-0 mt-3 px-3 py-1 rounded-pill text-white' style={{ outline: 'none' }} />
                            </div>
                            <div className="container-fluid mt-4 d-flex flex-column">
                                <label>Profile Photo</label>
                                <input type="text" placeholder='Profile Photo url' className='bg-dark border-0 mt-3 px-3 py-1 rounded-pill text-white' style={{ outline: 'none' }} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" onClick={e => {
                                e.target.parentElement.parentElement.children[1].children[0].children[1].value = '';
                            }}>Cancel</button>
                            <button type="button" onClick={e => {
                                e.target.parentElement.parentElement.children[1].children[0].children[1].value = '';
                            }} data-bs-dismiss='modal' className="btn btn-outline-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}
