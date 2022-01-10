import './index.css'
function Basket(props) {
  const { quantity = 0 } = props;
  return (
    <div className="cart light-blue darken-4">
      <i className='material-icons '>shopping_cart</i>
      {quantity ? <span className="card-quantity">{quantity}</span> : null}
    </div>
  );
}
export { Basket };
