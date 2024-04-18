import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';

function App() {
  const navigate=useNavigate();
  return (
    <div className="App">
         <button onClick={()=>navigate('/login')}>Login</button>
       <button onClick={()=>navigate('/signup')}>SignUp</button>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
         
    </div>
  );
}

export default App;
