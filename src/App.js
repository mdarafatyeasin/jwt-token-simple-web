import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Page/Home/Home' 
import Order from './Components/Page/Order/Order' 
import About from './Components/Page/About/About' 
import Login from './Components/Page/Login/Login' 

function App() {
  return (
    <div className="App">
      <Header></Header>

      {/* navigation routers */}
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
