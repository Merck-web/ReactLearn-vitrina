import "./index.css";
import { useContext } from "react";
import { ShopContext } from "../../context";
function Basketitem(props) {
  const { id, name, price, quantity } = props;

  const { removeFromBasket, increementQuantity, dicreementQuantity } =
    useContext(ShopContext);

  return (
    <li className='collection-item'>
      <div className='left'>
        {name} x {quantity} = {price * quantity}$
        <span>
          <i
            onClick={() => dicreementQuantity(id)}
            className='material-icons icons remove'>
            remove
          </i>
          <i
            onClick={() => increementQuantity(id)}
            className='material-icons icons add'>
            add
          </i>
        </span>
      </div>
      <span onClick={() => removeFromBasket(id)} className='secondaru-content'>
        <i className='material-icons icons'>close</i>
      </span>
    </li>
  );
}
export { Basketitem };
