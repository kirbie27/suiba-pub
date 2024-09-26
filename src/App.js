
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home.js';
function App() {
  return (
    <div className="container" >
      <Routes>
        <Route index Component={Home} />
        <Route path="/home" Component={Home} />
      </Routes>
    </div>

  );
}

export default App;
