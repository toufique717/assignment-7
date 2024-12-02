 
import './App.css'
import Banner from './Banner/Banner'
import Cooking from './Cooking/Cooking'
 
import Items from './Items/Items'
import Navbar from './Navbar/Navbar'
import Ourrecepie from './Ourrecepie/Ourrecepie'

function App() {
   

  return (
    <>
       
       
       <div className='m-10'>
       <Navbar></Navbar>
       <Banner></Banner>
       <Ourrecepie></Ourrecepie>
        
       <div className='md:flex mt-8'>
       <Items></Items>
       <Cooking></Cooking>
        

       </div>
       </div>
       
        
    </>
  )
}

export default App
