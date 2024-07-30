import './App.css';
import Login from './Login Component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register Component/Register';
import Home from './Home/Home';
import DashBoard from './DashBoard/DashBoard';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/DashBoard' element={<DashBoard></DashBoard>}></Route> 
      </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
