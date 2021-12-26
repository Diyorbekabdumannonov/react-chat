import './App.css';
import Categories from './components/categories/Categories';
import Node from './components/nodes/Node';
import SubCategory from './components/subCatecory/SubCategory';

function App() {
  return (
    <div className='all'>
      <nav class="navbar-expand-lg navbar-dark">
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className='sidebar'>
            <Categories />
            <SubCategory />
          </div>
        </div>
      </nav>
      <Node className='rightbar' />
    </div>
  );
}

export default App;
