import React from 'react'
import ManCategory from '../assets/Images/men-banner.png'
import WomenCategory from '../assets/Images/women-ban.png'
import KidCategory from '../assets/Images/kids-ban.png'

const categories=[
    {
        title:'Men',
        imageUrl: ManCategory
    },
    {
        title:'Women',
        imageUrl: WomenCategory
    },
    {
        title:'Kids',
        imageUrl: KidCategory
    },
]


const CategorySection = () => {
    
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 '>
        {categories.map((item, index)=>(
            <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                <img src={item.imageUrl}alt='' className='w-full h-full object-cover rounded-lg shadow-md'/>
                <div className='absolute top-20 left-12'>
                    <p className='text-2xl font-bold'>{item.title}</p>
                    <p className='text-gray-950'>View All</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CategorySection