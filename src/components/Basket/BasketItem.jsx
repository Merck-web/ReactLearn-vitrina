import "./index.css";
function Basketitem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
  } = props;
  return (
    <li className='collection-item'>
      {name} x {quantity} = {price * quantity}$
      <span onClick={() => removeFromBasket(id)} className='secondaru-content'>
        <i className='material-icons icons'>close</i>
      </span>
    </li>
  );
}
export { Basketitem };
