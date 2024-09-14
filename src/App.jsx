
import useFetchData from './hooks/useFetchData'

import './App.css'
import Popup from './components/Popup';
import { useState } from 'react';

function App() {
   const {data}=useFetchData();
   const [isOpen,setIsOpen]=useState(false);
   const [images,setImages]=useState([])

  function openGallary(key){
    setIsOpen(true);
    setImages(data[key])
  }

  function closePopup(){
    setIsOpen(false)
  }

  return (
  
  
       <>
         <div className='flex flex-row justify-center flex-wrap gap-4 w-full '>
        {
          Object.keys(data)?.map((objKey,index)=>(
          <div onClick={()=>openGallary(objKey)} key={index} className='w-32 h-32 border border-black flex items-center justify-center cursor-pointer'>
            <h1>AlbumId {data[objKey][0]?.albumId}</h1>
          </div>
        ))
        }
        <Popup isOpen={isOpen} closePopup={closePopup} data={images}/>
      </div>
     
       </>
      

  )
}

export default App
