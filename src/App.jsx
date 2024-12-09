 
import { useState } from 'react'
import './App.css'
import Banner from './Banner/Banner'
import Cooking from './Cooking/Cooking'
 
import Items from './Items/Items'
import Navbar from './Navbar/Navbar'
import Ourrecepie from './Ourrecepie/Ourrecepie'

function App() {

  const [cooking,setcooking] = useState([]);

  const handlecooking = (cooking) =>
  {
    console.log('cooking');
  }
   

  return (
    <>
       
       
       <div className='m-10'>
       <Navbar></Navbar>
       <Banner></Banner>
       <Ourrecepie></Ourrecepie>
        
       <div className='md:flex mt-8'>
        <div className=''>
          <Items handlecooking={handlecooking} ></Items>
          </div>
        
       <Cooking className=''></Cooking>
        

       </div>
       </div>
       
        
    </>
  )
}

export default App
