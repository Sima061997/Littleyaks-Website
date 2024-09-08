import './App.css';
import { Navbar } from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/backpack' element= {<ShopCategory category="backpack"/>}/>
        <Route path='/fannypack' element= {<ShopCategory category="fannypack"/>}/>
        <Route path='/all' element= {<ShopCategory category="all"/>}/>
        <Route path='/sale' element= {<ShopCategory category="sale"/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
