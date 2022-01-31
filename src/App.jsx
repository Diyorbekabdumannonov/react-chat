import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from './components/categories/Categories';
import Node from './components/note/Note';
import SubCategory from './components/subCatecory/SubCategory';
import Select from './components/select/Select';
import { useAuthState } from 'react-firebase-hooks/auth';
import Sign from './components/signIn/Sign';
import { useState } from 'react';
import firebase from './firebase-config';
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { maxWidth } from '@mui/system';

function App() {
    return (
        <Box fontFamily='system-ui'>
            <BrowserRouter >
                <Routes >
                    <Route path='Sign' element={<Sign />}></Route>
                    <Route element={<>
                        <Box display="flex" alignItems="start">
                            <Box width="20%" borderRight="2px solid #000" paddingRight='5px' height="100vh">
                                <Categories />
                            </Box>
                            <Select />
                        </Box>
                    </>} path='/'>
                    </Route>
                    <Route element={<>
                        <Box display="flex" alignItems="start">
                            <Box width="20%" height="100vh" borderRight="2px solid #000" paddingRight='5px'>
                                <Categories />
                                <SubCategory />
                            </Box>
                            <Select />
                        </Box>
                    </>} path='/Home'>
                    </Route>
                    <Route path="/Home/Personal"
                        element={
                            <Box display="flex" alignItems="start">
                                <Box width="20%" height="100vh" borderRight="2px solid #000" paddingRight='5px'>
                                    <Categories />
                                    <SubCategory />
                                </Box>
                                <Box width="80%">
                                    <Node />
                                </Box>
                            </Box>
                        } >
                    </Route>
                </Routes>
            </BrowserRouter>
        </Box>
    );
}

export default App;