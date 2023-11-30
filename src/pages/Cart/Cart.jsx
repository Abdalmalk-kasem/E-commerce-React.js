import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import PageHeader from "/src/components/UI/PageHeader";
import cartImage from "/src/assests/banner/cart-banner.webp";
import CartItems from "./CartItems";
import CartCheckout from "./CartCheckout";

const CARTURL = import.meta.env.VITE_CART_API;

const Cart = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(CARTURL);
        if (!response.ok) {
          throw json({ message: "Faild to fetch cart data!" }, { status: 500 });
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        throw json({ message: "Faild to fetch cart data!" }, { status: 500 });
      }
    };
    fetchData();
  }, []);

  const updateItemsHandler = (value) => {
    setItems(value);
  };

  const updateTotalPrice = (price) => {
    setTotalPrice(price);
  };

  return (
    <>
      <PageHeader
        id="page-header"
        className={`cart d-flex-cc`}
        title="#cart"
        paragraph='"FEEL FREE TO DROP A NOTE, We&apos;re all ears when it comes to your cart!"'
        image={cartImage}
      />
      <CartItems items={items} setTotalPrice={updateTotalPrice} />
      <CartCheckout
        totalPrice={totalPrice}
        itemsLength={items ? items.length : 0}
        setItems={updateItemsHandler}
        CARTURL={CARTURL}
      />
    </>
  );
};

export default Cart;
