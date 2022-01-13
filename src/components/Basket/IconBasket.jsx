import "./index.css";
import { useContext } from "react";
import { ShopContext } from "../../context";
function Basket() {
  const {
    order,
    handleBasketShow = Function.prototype,
    isBasketShow,
  } = useContext(ShopContext);
  const quantity = order.length;
  if (isBasketShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <div onClick={handleBasketShow} className='cart light-blue darken-4'>
      <i className='material-icons '>shopping_cart</i>
      {quantity ? <span className='card-quantity'>{quantity}</span> : null}
    </div>
  );
}
export { Basket };
