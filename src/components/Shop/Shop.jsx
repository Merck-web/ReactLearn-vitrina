import { useEffect, useContext } from "react";
import { ShopContext } from "../../context";
import { API_KEY, API_URL } from "../../config";
import { Alert } from "../Alert/Alert";
import { BasketList } from "../Basket/BasketList";
import { Basket } from "../Basket/IconBasket";
import { GoodsList } from "../GoodsList";
import { Preloader } from "../Preloader/Preloader";
function Shop() {
  const { setGoods, loading, order, isBasketShow, alertName } =
    useContext(ShopContext);
  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className='content container'>
      <Basket quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export { Shop };
