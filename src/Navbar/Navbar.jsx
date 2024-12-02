 
 import frame from "./frame.png"
const Navbar = () => {
    return (
        <div className="grid grid-cols-3 justify-between">

            <div className='text-3xl font-bold'>
                Recepie Calories
            </div>
            <div className="grid grid-cols-4 text-2xl">
                <div>Home</div>
                <div>Recepie</div>
                <div>About</div>
                <div>search</div>
            </div>

            <div className='grid grid-cols-2 pl-10'>
                <div>
                <input type="text" value="Search Here" className='bg-gray-200 rounded-full h-10 p-5'/>
                </div>
                <div className="ml-12">
                <img src= {frame} alt="A local image" />
                </div>
            </div>
        </div>
    )
}
            
   

export default Navbar;