/* eslint-disable react/prop-types */

import Section from "/src/components/UI/Section.jsx";
import { useState } from "react";
import classes from "./cartCheckout.module.css";
import Coupon from "./Coupon.jsx";
import CartTotal from "./CartTotal.jsx";

const CartCheckout = ({ totalPrice, itemsLength, setItems, CARTURL }) => {
  const [couponValue, setCouponValue] = useState(0);

  const updateCouponHandler = (value) => {
    setCouponValue(value);
  };

  return (
    <Section className={classes.cartTotals} sectionPadding>
      <div className={classes.totals}>
        <Coupon setCouponValue={updateCouponHandler} />
        <CartTotal
          totalPrice={totalPrice}
          couponValue={couponValue}
          setCouponValue={updateCouponHandler}
          itemsLength={itemsLength}
          CARTURL={CARTURL}
          setItems={setItems}
        />
      </div>
    </Section>
  );
};

export default CartCheckout;
