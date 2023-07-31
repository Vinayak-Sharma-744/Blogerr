import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/nav/Navbar';
import Home from './components/home/Home';
import Login from './components/firebase/Login';
import Pages from './components/pages/Pages';
import Create from './components/create/Create';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/login'  element={<Login />}/>
        <Route path='/pages'  element={<Pages />}/>
        <Route path='/create' element={<Create />}/>
      </Routes> 
    </div>
  );
}

export default App;
