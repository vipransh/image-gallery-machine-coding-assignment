import React from 'react'

function Popup({isOpen,closePopup,data}) {
   
  return (
   
         <>
            {
            isOpen && <div className='absolute w-[90%] h-[95%] bg-gray-100 p-5 shadow-xl'>
            <div className='w-full flex  flex-row items-center justify-between '>
                <h1>Gallary</h1>
                <button onClick={()=>closePopup()}>X</button>
            </div>
            <div className='w-full h-full flex flex-row flex-wrap gap-4 justify-center py-2 overflow-y-auto '>
                {
                    data.map((ele,index)=>(
                        <img className='w-32 h-32' key={index} src={ele.url}/>
                        
                    ))
                }
            </div>
         </div>
         }
         </>
       

  )
}

export default Popup