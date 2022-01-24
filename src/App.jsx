import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from './components/categories/Categories';
import Node from './components/nodes/Node';
import SubCategory from './components/subCatecory/SubCategory';
import Select from './components/Select/Select';
import { useAuthState } from 'react-firebase-hooks/auth';
import Sign from './components/Sign in/Sign';
import { useState } from 'react';
import firebase from './firebase';
import Box from '@mui/material/Box'

function App() {
    return (
        <>
            <Box sx={{ bgcolor: 'text.primary' }}>
                <BrowserRouter >
                    <Routes >
                        <Route path='Sign' element={<div style={{ height: '80px', width: '100vw' }}><Sign /></div>}></Route>
                        <Route element={<>
                            <div className='sidebar'>
                                <Categories />
                            </div>
                            <div className='select'>
                                <Select />
                            </div>
                        </>} path=''>
                        </Route>
                        {/* <Route path={`/${firebase.firestore().collection('category').get().then(categories => {
                            categories.docs.forEach(category => {
                                const cat = category.data()
                            })
                        })}`}
                            element={
                                <>
                                    <div className='sidebar' >
                                        <Categories />
                                        <SubCategory />
                                    </div>
                                    <div className='select' >
                                        <Select />
                                    </div>
                                </>
                            } >
                        </Route> */}
                        {/* <Route path={`/${firebase.firestore().collection('category').get().then(categories => {
                            categories.docs.forEach(category => {
                                category.data()
                            })
                        })}` + `
                        /${firebase.firestore().collection('Subcategory').get().then(subs => {
                            subs.docs().forEach(sub => {
                                sub.data()
                            })
                        })}
                        `} */}
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
                </BrowserRouter>
            </Box>
        </>
    );
}

export default App;