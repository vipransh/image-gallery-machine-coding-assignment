
import { useEffect,useState  } from 'react';


function useFetchData() {
    const [data,setData]=useState({});
   
    useEffect(()=>{

     const fetchData=async()=>{
        const url="https://jsonplaceholder.typicode.com/photos"
        try {
            const data=await fetch(url);
            const res=await data.json();
            filter(res);
            
        } catch (error) {
            console.log(error);
        }
     }  
     fetchData(); 
    },[]);

    function filter(data){
    let albumMap={}

data?.forEach((element,index) => {
    if(albumMap[element.albumId])
        albumMap[element.albumId].push(element);
    else{
        albumMap[element.albumId]=[];
        albumMap[element.albumId].push(element);
    }
});


setData(albumMap);

}

  return {
    data
  }
}

export default useFetchData