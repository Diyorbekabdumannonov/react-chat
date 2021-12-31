import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from './components/categories/Categories';
import Node from './components/nodes/Node';
import SubCategory from './components/subCatecory/SubCategory';

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
                  <SubCategory />
                </div>
                <Node className='rightbar' />
              </>} path='/' exact></Route>
            <Route path='menu' element={
              <>
                <div className='sidebar-mobile'>
                  <Categories className='category-mobile' />
                  <SubCategory className='subcategory-mobile' />
                </div>
              </>
            } component={<Categories />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
