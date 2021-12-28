import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from './components/categories/Categories';
import Node from './components/nodes/Node';
import SubCategory from './components/subCatecory/SubCategory';

function App() {
  return (
    <>
      <div className='all'>
        <div className='sidebar'>
          <Categories />
          <SubCategory />
        </div>
        <Node className='rightbar' />
      </div>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/menu" component={<Categories />} />
        </Routes>
      </BrowserRouter> */}

    </>
  );
}

export default App;
