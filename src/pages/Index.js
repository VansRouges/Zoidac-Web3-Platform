import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import slide from '../images/slide.png'
import { GalleryData } from '../GalleryData';


export default function Index() {

  const [data,setData] = useState([]);
  const [collection,setCollection] = useState([]);

  useEffect(()=>{
    setData(GalleryData);
    setCollection([... new Set(GalleryData.map((item)=> item.title))])
  },[]) 

  const gallery_filter = (itemData) =>{
    const filterData = GalleryData.filter((item)=> item.title == itemData);
    setData(filterData);
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] 
        from-[#000324] via-purple-900 to-[#000324] h-[450px] grid grid-cols-2 gap-4 p-10
      '>
        <div className='p-2 py-10'>
          <motion.h1
            initial={{
              x:-200,
              opacity:0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ once:true }}
            className='text-white text-5xl font-bold'>
            Dive into the world of <span className='text-[#CB22A6]'>NFT</span> with us
          </motion.h1>
          <motion.p
            initial={{
              x:-200,
              opacity:0,
            }}
            transition={{ duration: 1.6 }}
            whileInView={{ opacity: 1, x:0 }}
            className='text-white py-3 my-2 font-medium text-base'>
            Dive into the world of priceless arts, music and much more with us. 
            Explore the world of possibilities now
          </motion.p>
          <motion.div
            initial={{
              y:80,
              opacity:0,
            }}
            transition={{ duration: 2.0 }}
            whileInView={{ opacity: 1, y:0 }}
            className='flex text-white font-semibold w-[288px] my-5 justify-between'>
            <button className='bg-[#B51F98] w-32 h-10 rounded-lg'>Create</button>
            <button className='bg-transparent border-[#B51F98] border-2 w-36 h-10 p-1 rounded-lg'>Connect Wallet</button>
          </motion.div>
        </div>

        <div className='bg-black'>
          <motion.img
            initial={{
              x:200,
              opacity:0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ once:true }}
            src={slide}
            className='w-40'
          />
        </div>
      </motion.div>
      <div className='bg-[#000324] bg-gradient-to-l from-[#000324] via-[#000324] to-purple-900 w-full h-24 text-white flex justify-evenly p-4'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold'>1000+</h1>
            <p className='text-sm'>NFTs</p>
          </div>

          <div className='text-center'>
            <h1 className='text-4xl font-bold'>200+</h1>
            <p className='text-sm'>Creators</p>
          </div>

          <div className='text-center'>
            <h1 className='text-4xl font-bold'>950+</h1>
            <p className='text-sm'>Sold</p>
          </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='bg-[#000324] text-white w-full p-10'>
        <h1 className='text-4xl font-bold mb-5'>Explore Amazing Artworks</h1>
        <div className="galleryWrapper p-5">
          <div className="filterItem">
            <ul className='flex items-center justify-center list-none p-0 mb-9 overflow-hidden overflow-x-scroll scrollbar-thumb-purple-600 scrollbar-track-purple-400 scrollbar-hidden hover:scrollbar-thin'>
              <li><button className='mb-2 text-[#000324] ml-60 bg-white uppercase px-9 py-2 cursor-pointer rounded-lg' onClick={()=> setData(GalleryData)}>All</button></li>
              {
                collection.map((item)=> <li><button className='text-white cursor-pointer uppercase px-8 py-2 rounded-3xl' onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
              }
            </ul>
          </div>
          <div className="grid grid-cols-4 gap-5">
            {
              data.map((item)=> <div key={item.id} className="">
                  <img className='rounded-3xl object-cover h-52 w-full' src={item.image} />
                </div> 
                )
            }
          </div>
      </div>
      </motion.div>
    </>
  )
}
