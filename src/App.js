import './App.css';
import Categories from './components/categories/Categories';
import Node from './components/nodes/Node';
import SubCategory from './components/subCatecory/SubCategory';

function App() {
  return (
    < div className='all'>
      <Categories />
      <div className='parents'>
        <SubCategory />
        <Node />
      </div>
    </div>
  );
}

export default App;
