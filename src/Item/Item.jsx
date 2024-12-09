import PropTypes from 'prop-types';
import watch from './watch.png'
import burner from './burner.png'

const Item = ({item,handlecooking}) => {
    //console.log(item)
    const {recipe_image,recipe_name,short_description,preparing_time,calories,ingredients} =item;
    return (
        <div className='border-2 rounded-2xl' >
             <div className='p-8'>
             <p><img className='h-36 w-full rounded-xl' src= {recipe_image}></img></p>
            <p className='text-xl font-bold pt-3'>{recipe_name}</p>
            <p className='py-4 border-b-2'>{short_description}</p>

             
            <div>
            <p className='text-xl font-bold py-4 border-b-2'>Ingredients :{ingredients.length}</p>

            <p>
               {
                ingredients.map((sum,idx) =><ol key={idx}><li>{sum} </li></ol>)
               }
            </p>
            </div>
               <div className='py-4'>
               <div className='flex justify-between'>
              <div className='flex'>
             <img src= {watch}></img>
             <p>{preparing_time}</p>
             </div>
             <div className='flex'>
             <img src= {burner}></img>
             <p>{calories}</p>
             </div>
              </div>
             </div>
               </div>

               <div className='pb-4 pl-6'>
               <button className=' bg-green-500  font-bold px-6 py-2 rounded-full '
               onClick={handlecooking}> Want to cook</button>
               </div>
        </div>
    );
};

Item.propTypes =
{
  item : PropTypes.object.isRequired
}

export default Item;