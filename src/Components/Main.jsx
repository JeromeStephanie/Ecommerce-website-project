import React,{useState} from 'react'
import {CiSearch, CiShoppingCart} from 'react-icons/ci'
import watch from '../assets/tech_sound.jpg'
import laptop from '../assets/tech_phone.jpg'
import keyboard from '../assets/tech_tablet.jpg'
import sunGlass from '../assets/tech_sound.jpg'
import leatherWatch from '../assets/tech_sound.jpg'
import mouse from '../assets/tech_sound.jpg'
import monitor from '../assets/tech_sound.jpg'

const Main = () => {
  // Array of Product For the Search bar
  let Products = [
    {
      img: sunGlass,
      title: 'Sun Glasses',
      description: 'lorem ipsum dolar',
      price: 40
    },
    {
      img: keyboard,
      title: 'Black keyboard',
      description: 'lorem ipsum dolar',
      price: 70
    },
    {
      img: watch,
      title: 'Apple Watch',
      description: 'lorem ipsum dolar',
      price: 900
    },
    {
      img: mouse,
      title: 'Black Mouse',
      description: 'lorem ipsum dolar',
      price: 390
    },
    {
      img: laptop,
      title: 'accer laptop',
      description: 'lorem ipsum dolar',
      price: 999
    },
    {
      img: leatherWatch,
      title: 'Leather Watch',
      description: 'lorem ipsum dolar',
      price: 560
    },
    {
      img: monitor,
      title: 'One plus monitor',
      description: 'lorem ipsum dolar',
      price: 800
    },
    {
      img: sunGlass,
      title: 'Pink Glasses',
      description: 'lorem ipsum dolar',
      price: 670
    },
    {
      img: mouse,
      title: 'Mouse',
      description: 'lorem ipsum dolar',
      price: 450
    },
    {
      img: leatherWatch,
      title: 'Leather',
      description: 'lorem ipsum dolar',
      price: 40
    },
    {
      img: laptop,
      title: 'Hp Laptop',
      description: 'lorem ipsum dolar',
      price: 1500
    },
  ]
  const [filteredProducts, setFilteredProducts] = useState(Products)
  const searchHandler = (e) => {
    const filteredArray = Products.filter((product)=> product.title.toLocaleLowerCase().includes(e.target.value))
    if (filteredArray.length !=0) {
      setFilteredProducts(filteredArray);
    }
  }

  return (
    <div className='w-full relative'>
      <div className='sticky top-0 z-10'>
        <div className='header flex justify-between items-center p-4 bg-white'>
          <h1 className='font-bold text-3xl '>Steph Shop</h1>
          <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
            <input type="text" onChange={searchHandler} placeholder='Search product' className='bg-transparent outline-0'/>
            <button onClick={(e)=> searchHandler(e)}><CiSearch/></button>
          </div>
        </div>
        <div className="categories w-full bg-white flex justify-between space-x-8 px-2 py-10">
          <div className='bg-black text-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Watches</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Laptops</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Monitors</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Mouses</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Glasses</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Keyboards</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Watches</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Watches</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Watches</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Laptops</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Monitors</p>
          </div>
          <div className='bg-white text-black px-5 py-2 rounded-full drop-shadow-xl'>
            <p>Mouses</p>
          </div>
        </div>
      </div>
      <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
        {filteredProducts && filteredProducts.map((product, idx) => {
          return(
            <div key={idx} className="product h-[300px] bg-white drop-shadow-xl p-2 border">
            <img src={product.img} alt="glass" className='w-full h-[60%] object-cover p-2'/>
            <div className='m-2 bg-gray-100 p-2'>
              <h1 className='text-xl font-semibold'>{product.title}</h1>
              <p className='text-sm'>{product.description}</p>
              <div className='flex justify-between items-center'>
                <p className='text-xl font-bold'>${product.price}.00</p>
                <CiShoppingCart size={'1.4rem'}/>
              </div>
            </div>
            </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default Main
