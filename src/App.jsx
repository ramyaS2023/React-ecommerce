import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Order from './Pages/Order'
import FilterData from './Pages/FilterData'
import ProductDetail from './Pages/ProductDetail'
import Contact from './Pages/Contact'
import About from './Pages/About'


const App = () => {
  const [order, setOrder] = useState(null)
  return (
    <BrowserRouter>
    <NavBar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout setOrder={setOrder}/>}></Route>
        <Route path='/order-conformation' element={<Order order={order}/>}></Route>
        <Route path='/filter-data' element={<FilterData />}></Route>
        <Route path='/product/:id' element={<ProductDetail />}></Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App