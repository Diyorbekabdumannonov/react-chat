import './App.css';
import Categories from './components/categories/Categories';
import Node from './components/nodes/Node';
import SubCategory from './components/subCatecory/SubCategory';

function App() {
  return (
    < div className='all'>
      <div className='sidebar'>
        <Categories />
        <SubCategory />
      </div>
      <Node className='rightbar'/>
    </div>
  );
}

export default App;
