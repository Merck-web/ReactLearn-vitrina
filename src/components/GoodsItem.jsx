import { useContext } from "react";
import {ShopContext} from "../context"
function GoodsItem(props) {
  const {
    id,
    name,
    description,
    price,
    image,
    full_background,
  } = props;

  const {addToBasket} = useContext(ShopContext)
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={full_background} alt={image} />
      </div>
      <div className='card-content'>
        <p className='card-name'>{name}</p>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
          className='btn  purple darken-4'>
          Купить
        </button>
        <span className='right price'>${price}</span>
      </div>
    </div>
  );
}

export { GoodsItem };
