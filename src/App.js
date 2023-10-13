import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componentes/Home';
import Login from './componentes/Login';
import Registration from './componentes/Registration';
import ForgetPassword from './componentes/ForgetPassword';
import Activation from './componentes/Activation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/activation/:activateToken' element={<Activation/>}/>
      </Routes>
    </div>
  );
}

export default App;
