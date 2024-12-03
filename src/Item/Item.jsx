import PropTypes from 'prop-types';
import watch from './watch.png'
import burner from './burner.png'

const Item = ({item}) => {
    //console.log(item)
    const {recipe_image,recipe_name,short_description,preparing_time,calories} =item;
    return (
        <div className='border-8'>
             <div className='p-8'>
             <p><img className='h-36 w-full rounded-xl' src= {recipe_image}></img></p>
            <p>{recipe_name}</p>
            <p>{short_description}</p>
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
    );
};

Item.propTypes =
{
  item : PropTypes.object.isRequired
}

export default Item;