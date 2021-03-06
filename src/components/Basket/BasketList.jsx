import { Basketitem } from "./BasketItem";
import { useContext } from "react";
import { ShopContext } from "../../context";
import "./index.css";
function BasketList() {
  const {
    order = [],
    handleBasketShow = Function.prototype
  } = useContext(ShopContext);
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity; //цена на колличество + сумма предыдущего товара
  }, 0);
  return (
    <div className='basket'>
      <div className='basket-bg'></div>
      <div className='collection  basket-list'>
        <li className='collection-item collection-item-header active purple darken-3'>
          <h6>Корзина</h6>
          <i onClick={handleBasketShow} className='material-icons'>
            close
          </i>
        </li>
        {order.length ? (
          order.map((item) => (
            <Basketitem
              key={item.id}
              {...item}
            />
          ))
        ) : (
          <li className='collection-item'>Корзина пуста</li>
        )}
        <li className='collection-item active purple darken-3'>
          Общая стоимость: {totalPrice}$
          <button className='secondaru-content btn purple darken-1'>
            Оформить
          </button>
        </li>
      </div>
    </div>
  );
}
export { BasketList };
