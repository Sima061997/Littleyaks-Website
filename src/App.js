import './App.css';
import { Navbar } from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Backpack from './Pages/Backpack';
import Fannypack from './Pages/Fannypack';
import AllProducts from './Pages/AllProducts';
import Sale from './Pages/Sale';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/backpack' element= {<Backpack />}/>
        <Route path='/fannypack' element= {<Fannypack />}/>
        <Route path='/all' element= {<AllProducts />}/>
        <Route path='/sale' element= {<Sale />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
