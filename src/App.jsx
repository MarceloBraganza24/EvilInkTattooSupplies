import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Login from './components/Login'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingUp from './components/SingUp'
import Contact from './components/Contact'
import Home from './components/Home'
import UlCategories from './components/UlCategories'
import { ShoppingCartContext } from './context/ShoppingCartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (

    <BrowserRouter>

        <ShoppingCartContext>

            <NavBar />

            <Routes>

                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/singUp" element={<SingUp/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/cart" element={<Cart/>}/>
                <Route exact path="/ulCategories" element={<UlCategories/>}/>
                <Route exact path="/" element={<ItemListContainer/>}/>
                <Route exact path="/category/:category" element={<ItemListContainer/>}/> 
                <Route exact path="/item/:id" element={<ItemDetailContainer/>}/> 

            </Routes>

            <ToastContainer />

        </ShoppingCartContext>
        
    </BrowserRouter>

  )

}

export default App
