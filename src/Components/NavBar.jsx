import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Register from './Register';
import Login from './Login';
import Modal from './Modal';
import { setSearchTerm } from '../Redux/ProductSlice';

const NavBar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [search, setSearch] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch =(e)=>{
      e.preventDefault()
      dispatch(setSearchTerm(search))
      navigate('/filter-data')
  }

  const openSignUp = () =>{
    setIsLogin(false)
    setIsModelOpen(true)
  }
  const openLogin = () =>{
    setIsLogin(true)
    setIsModelOpen(false)
  }
  
  const products = useSelector(state =>state.cart.products)
  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24  py-4 flex justify-between items-center'>
        <div className='text-xl font-bold'>
        <Link to="/" className="italic">E-Shop</Link>
        </div>
        <div className='relative flex-1 mx-4'>
          <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search Product" className='w-full border py-2 px-4' onChange={(e) =>setSearch(e.target.value)}/>
            <FaSearch className='absolute top-3 right-3 text-red-500 text-xl'/>
          </form>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to="/cart" className=' relative'>
            <FaShoppingCart className='text-xl'/>
              {products.length > 0 && (
                <span className='absolute top-0 text-xs w-3 left-3  bg-red-600 rounded-full flex justify-center items-center text-white'>{products.length}</span>
              )}
          </Link>
          <button className='hidden md:block text-xl' onClick={() =>setIsModelOpen(true)}>Login | Register</button>
          <button>
            <FaUser  className='block md:hidden text-xl' onClick={() =>setIsModelOpen(true)}/>
          </button>
        </div>
      </div>

      <div className='flex items-center justify-center space-x-10 py-4 text-lg italic font-bold'>
        <Link to="/" className='hover:text-blue-500 transition hover:underline'>Home</Link>
        <Link to="/shop" className='hover:text-blue-500 transition hover:underline'>Shop</Link>
        <Link to="/contact" className="hover:text-blue-500 transition hover:underline">Contact</Link>
        <Link to="/about" className='hover:text-blue-500 transition hover:underline'>About</Link>
      </div>
      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin}/>}
      </Modal>
    </nav>
  );
};

export default NavBar;
