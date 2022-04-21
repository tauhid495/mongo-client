import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/adduser/AddUser';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='user/add' element={<AddUser />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
