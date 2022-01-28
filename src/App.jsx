import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from './components/categories/Categories';
import Node from './components/nodes/Node';
import SubCategory from './components/subCatecory/SubCategory';
import Select from './components/select/Select';
import { useAuthState } from 'react-firebase-hooks/auth';
import Sign from './components/signIn/Sign';
import { useState } from 'react';
import firebase from './firebase';
import Box from '@mui/material/Box'

function App() {
    return (
        <Box>
                <Categories />
                <Select />
            {/* <BrowserRouter >
                <Routes >
                    <Route path='Sign' element={<Sign />}></Route>
                    <Route element={<>
                        <div className='sidebar'>
                            <Categories />
                        </div>
                        <div className='select'>
                            <Select />
                        </div>
                    </>} path='/'>
                    </Route>
                    <Route path="Home/Personal"
                        element={
                            <>
                                <div className='sidebar2' >
                                    <Categories />
                                    <SubCategory />
                                </div>
                                <div className='w-100'>
                                    <Node />
                                </div>
                            </>
                        } >
                    </Route>
                    <Route path='/Home/All/menu'
                        element={<>
                            <div className='sidebar-mobile' >
                                <Categories />
                                <SubCategory />
                            </div>
                            <div className='rightbar-mobile' >
                                <Select />
                            </div>
                        </>
                        }
                        component={< Categories />} > </Route>
                </Routes>
            </BrowserRouter> */}
        </Box>
    );
}

export default App;