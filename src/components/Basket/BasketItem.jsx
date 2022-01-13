import "./index.css";
function Basketitem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    increementQuantity = Function.prototype,
    dicreementQuantity = Function.prototype,
  } = props;
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
