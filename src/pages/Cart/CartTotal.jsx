/* eslint-disable react/prop-types */
import { json } from "react-router-dom";
import Button from "../../components/UI/Button";
import classes from "./cartTotal.module.css";

const CartTotal = ({
  totalPrice,
  couponValue,
  setCouponValue,
  itemsLength,
  CARTURL,
  setItems,
}) => {
  const handleCheckout = async (e) => {
    e.preventDefault();
    if (itemsLength > 0) {
      try {
        const response = await fetch(CARTURL, { method: "DELETE" });
        if (!response.ok) {
          throw json({ message: "Faild to fetch cart data!" }, { status: 500 });
        }
        setItems(undefined);
      } catch (error) {
        throw json({ message: error }, { status: error.status });
      }
    }
  };

  return (
    <div className={classes.cartTotal}>
      <h3>Cart Totals</h3>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Cart Subtotal</td>
              <td className={classes.subtotal}>
                $ <span>{totalPrice}</span>
              </td>
            </tr>
            <tr>
              <td>Coupon discount</td>
              <td className={classes.discount}>
                $<span> {couponValue !== undefined ? couponValue : 0}</span>
              </td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Total</td>
              <td className={classes.total}>
                <span>
                  ${" "}
                  {couponValue > totalPrice
                    ? 0 & setCouponValue(totalPrice)
                    : totalPrice - couponValue}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <Button type="submit" className="normal" onClick={handleCheckout}>
          Proceed to checkout
        </Button>
      </form>
    </div>
  );
};
export default CartTotal;
