import "./index.css";
function Basketitem(props) {
  const { id, name, price, quantity } = props;
  return (
    <li className='collection-item'>
      {name} x {quantity} = {price}$
      <span className='secondaru-content'>
        <i className='material-icons icons'>close</i>
      </span>
    </li>
  );
}
export { Basketitem };
