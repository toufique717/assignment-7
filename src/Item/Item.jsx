import PropTypes from 'prop-types';

const Item = ({item}) => {
    console.log(item)
    return (
        <div>
            
        </div>
    );
};

Item.propTypes =
{
  item : PropTypes.object.isRequired
}

export default Item;