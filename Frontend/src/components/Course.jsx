import React, { useEffect, useState } from 'react'
import Cards from "./Cards"
import list from '../../public/list.json'
import axios from "axios"
import {Link} from 'react-router-dom'
function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        axios.get("")
      } catch{

      }
    }
  },[])
  return (
   <>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4" >
      <div className='mt-28 items-center justify-center text-center'>
       <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you 
       <span className='text-blue-500'> here! :)</span>
       </h1>
       <p className='mt-12'>
       Books are crucial to library management systems. This course teaches cataloging books with details like titles and authors, and managing checkouts, returns, and availability. You'll also learn how to track book usage and handle overdue items. Mastering these aspects will help you create a system that improves user access, maintains an organized collection, and supports efficient library operations, enhancing the library experience for all.
       </p>
       <Link to="/">
       <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
       </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item)=>(  
            <Cards key={item.id} item={item}/>
          ))  
        }
      </div>
    </div>
   </>
  )
}

export default Course
