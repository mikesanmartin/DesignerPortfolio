import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Router';
import NavBar from './components/navbar/NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <RouterProvider router={Router}/>
    </div>
  );
}

export default App;
