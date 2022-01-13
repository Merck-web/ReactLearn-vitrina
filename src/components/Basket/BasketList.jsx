import { Basketitem } from "./BasketItem";
import "./index.css";
function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    increementQuantity = Function.prototype,
    dicreementQuantity = Function.prototype,
  } = props;
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
              removeFromBasket={removeFromBasket}
              increementQuantity={increementQuantity}
              dicreementQuantity={dicreementQuantity}
            />
          ))
        ) : (
          <li className='collection-item'>Корзина пуста</li>
        )}
        <li className='collection-item active purple darken-3'>
          Общая стоимость: {totalPrice}$
        </li>
      </div>
    </div>
  );
}
export { BasketList };
