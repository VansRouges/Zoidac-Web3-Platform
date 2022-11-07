import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import slide from '../images/slide.png'
import { GalleryData } from '../GalleryData';


export default function Index() {

/***********************      Gallery       ******************/ 

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

 /***********************      Testimonials       ******************/ 

  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const cards = [
    {
      id: "1",
      commentHead:"The Best NFT Marketplace",
      comment: "Zoidac is the best NFT Market place there is. The main benefit of non-fungible tokens is the ability to prove ownership.",
      image:"https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      person:"Mo Park",
      company:"CEO Raba Enterprises",
      stars:"⭐️⭐️⭐️⭐️⭐️",
    },
    {
      id: "2",
      commentHead:"Unique Blockchhain",
      comment: "Because NFTs operate on a blockchain network, they can aid in the assignment of property to a specific fund. ",
      image:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      person:"Mo Park",
      company:"CEO Raba Enterprises",
      stars:"⭐️⭐️⭐️⭐️",
    },
    {
      id: "3",
      commentHead:"Unique Blockchhain",
      comment: "Because NFTs operate on a blockchain network, they can aid in the assignment of property to a specific fund. ",
      image:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      person:"Mo Park",
      company:"CEO Raba Enterprises",
      stars:"⭐️⭐️⭐️⭐️",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      console.log(index);
    }, 3000);
  }, [index]);

/***********************      slider      ******************/ 
const [slider, setSlider] = useState(0);

  const mods = (n, m) => {
    let res = n % m;

    // Return a positive value
    return res >= 0 ? res : res + m;
  };

  const cardes = [
    {
      id: "1",
      image: slide,
    },
    {
      id: "2",
      image:"https://images.unsplash.com/photo-1608386964123-6b2cee22ea73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5zcGFsc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "3",
      image:"https://images.unsplash.com/photo-1623237954710-0564b420ea27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dW5zcGFsc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((slider + 1) % cardes.length);
      console.log(slider);
    }, 3500);
  }, [slider]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] 
        from-[#000324] via-purple-900 to-[#000324] h-[450px] grid grid-cols-2 gap-2 p-10
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

        <div className='w-full relative'>
          {/* <motion.img
            initial={{
              x:200,
              opacity:0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ once:true }}
            src={slide}
            className='w-40'
          /> */}
          {cardes.map((item, i) => {
              const indexLeft = mod(index - 1, cardes.length);
              const indexRight = mod(index + 1, cardes.length);

              let className = "imageCard";

              if (i === index) {
                className = "imageCard imageCard--active";
              } else if (i === indexRight) {
                className = "imageCard imageCard--right";
              } else if (i === indexLeft) {
                className = "imageCard imageCard--left";
              } else className = "imageCard";

              return (
                <img
                  key={item.id}
                  className={className}
                  src={item.image}
                  alt="Comic"
                />
              );
            })}
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
              <li><button className='mb-2 text-[#000324] bg-white uppercase px-9 py-2 cursor-pointer rounded-lg' onClick={()=> setData(GalleryData)}>All</button></li>
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
      <div className='bg-[#000324] text-white w-full p-10 h-screen'>
          <div className='bg-[#3A1E6366] w-full h-96 mt-10 p-4 rounded-lg'>
            <div className='w-full h-full relative'>
            <h1 className='text-3xl ml-5 font-bold'>What are people saying?</h1>

            {cards.map((item, i) => {
              const indexLeft = mod(index - 1, cards.length);
              const indexRight = mod(index + 1, cards.length);

              let className = "card";

              if (i === index) {
                className = "card card--active";
              } else if (i === indexRight) {
                className = "card card--right";
              } else if (i === indexLeft) {
                className = "card card--left";
              } else className = "card";

              return (
                <div
                  key={item.id}
                  className={className}
                  alt="Comic"
                >
                  <h2 className='text-white font-bold text-xl tracking-wider text-center'>{item.commentHead}</h2>
                  <p className='text-white text-center p-2 my-3'>{item.comment}</p>
                  <div className='bg-white w-[220px] h-[60px] flex m-auto text-xs'>
                      <div className='w-[40%]'>
                        <img className='w-16 h-16 object-cover p-2 m-auto rounded-full' src={item.image} />
                      </div>
                      <div className="w-[60%]">
                        <p className='font-bold text-black tracking-wider text-lg'>{item.person}</p>
                        <p className='text-black'>{item.company}</p>
                        <p className='tracking-widest'>{item.stars}</p>
                      </div>
                    </div>
                </div>
              );
            })}
            </div>
          </div>
      </div>
    </>
  )
}
