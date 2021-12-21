import './App.css';
import Categories from './components/categories/Categories';
import Node from './components/nodes/Node';
import SubCategory from './components/subCatecory/SubCategory';

function App() {
  return (
    <>
      <Categories />
      <div  className='parent'>
        <SubCategory />
        <Node />
      </div>
    </>
  );
}

export default App;
