import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from './components/categories/Categories';
import Node from './components/nodes/Node';
import SubCategory from './components/subCatecory/SubCategory';
import Select from './components/Select/Select';

function App() {
  return (
    <>
      <div className='all'>
        <BrowserRouter>
          <Routes>

            <Route element={
              <>
                <div className='sidebar'>
                  <Categories />
                </div>
                <div className='select'>
                  <Select />
                </div>
              </>} path='/' exact></Route>

            <Route path='/Home/Personal/menu' element={
              <>
                <div className='sidebar-mobile'>
                  <Categories />
                  <SubCategory />
                </div>
                <div className='rightbar-mobile'>
                  <Select />
                </div>
              </>
            } component={<Categories />}></Route>

            <Route path='Home' element={
              <>
                <div className='sidebar'>
                  <Categories />
                  <SubCategory />
                </div>
                <div className='select'>
                  <Select />
                </div>
              </>
            }></Route>

            <Route path='/Home/Personal' element={
              <>
                <div className='sidebar'>
                  <Categories />
                  <SubCategory />
                </div>
                <div className='w-100'>
                  <Node />
                </div>
              </>
            }></Route>

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
