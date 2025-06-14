import React, { useEffect } from 'react'
import { Categories, mockData } from '../assets/MockData'
import HeroImg from '../assets/Images/ban.png'
import InfoSection from '../Components/InfoSection'
import CategorySection from '../Components/CategorySection'
import { setProducts } from '../Redux/ProductSlice'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import Shop from '../Pages/Shop'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const heading = "WELCOME TO E-SHOP";

// ✅ Corrected spelling
const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 300,
    },
  }),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};



const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  return (
    <motion.div
      className="bg-white mt-2 px-4 md:px-16 lg:px-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        {/* Category List */}
        <motion.div className="w-full md:w-3/12" variants={fadeUpVariant}>
          <div className="bg-red-600 text-white text-lg font-bold px-2 py-2.5">
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {Categories.map((category, index) => (
              <motion.li
                key={index}
                className="flex items-center text-sm font-medium"
                variants={fadeUpVariant}
                transition={{ delay: index * 0.15 + 0.2 }}
              >
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative"
          variants={fadeUpVariant}
        >
          <img src={HeroImg} alt="" className="h-full w-full object-cover" />
          <motion.div
            className="absolute top-16 left-8"
            variants={fadeUpVariant}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-lg mb-4 font-bold">Top Brands</p>

            <h2 className="text-3xl md:text-5xl font-bold flex flex-wrap gap-1 mt-4 mb-4">
              {heading.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="italic inline-block bg-gradient-to-r from-purple-500 via-pink-500  to-red-500  bg-clip-text text-transparent hover:text-white transition-all duration-300"
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariant}
                  whileHover={{ scale: 1.2 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>

            <p className="text-xl mt-2.5 i text-gray-800">MILLIONS+ PRODUCTS</p>
            <motion.button
              className=" text-lg bg-red-600 px-8 py-2 text-white mt-4 rounded-lg shadow-md 
               hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 
               transition-colors duration-300"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95, rotate: -1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* InfoSection and CategorySection */}
      <motion.div variants={fadeUpVariant} className="mt-12">
        <InfoSection />
      </motion.div>

      <motion.div variants={fadeUpVariant} className="mt-12">
        <CategorySection />
      </motion.div>

      {/* Top Products */}
      <motion.div className="container mx-auto py-12" variants={containerVariants}>
        <motion.h2
          className="text-2xl font-bold mb-6 text-center"
          variants={fadeUpVariant}
        >
          Top Products
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.products.slice(0, 5).map((product, index) => (
            <motion.div key={product.id} variants={fadeUpVariant} transition={{ delay: index * 0.2 }}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Shop Component */}
      <motion.div variants={fadeUpVariant} className="mt-12">
        <Shop />
      </motion.div>
    </motion.div>
  );
};

export default Home;
