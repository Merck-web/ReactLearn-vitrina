import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../config";
import { Basket } from "../Basket/Basket";
import { GoodsList } from "../GoodsList";
import { Preloader } from "../Preloader/Preloader";
function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className='content container'>
      <Basket quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
}

export { Shop };
