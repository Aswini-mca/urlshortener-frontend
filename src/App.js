import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import ForgetPassword from './components/ForgetPassword';
import Activation from './components/Activation';
import PasswordReset from './components/PasswordReset';
import CreateShortUrl from './components/CreateShortUrl';
import CreatedUrls from './components/createdUrls';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/activation/:activateToken' element={<Activation/>}/>
        <Route path='/reset-password/:resetToken' element={<PasswordReset/>}/>
        <Route path='/create-short-url' element={<CreateShortUrl/>}/>
        <Route path='/created-urls' element={<CreatedUrls/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
