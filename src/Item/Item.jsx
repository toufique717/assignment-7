import PropTypes from 'prop-types';

const Item = ({item}) => {
    //console.log(item)
    const {recipe_name} =item;
    return (
        <div>
            <h1>{recipe_name}</h1>
        </div>
    );
};

Item.propTypes =
{
  item : PropTypes.object.isRequired
}

export default Item;