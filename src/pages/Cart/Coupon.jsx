/* eslint-disable react/prop-types */
import Button from "/src/components/UI/Button.jsx";
import Input from "/src/components/UI/Input.jsx";
import classes from "./coupon.module.css";

const Coupon = ({ setCouponValue }) => {
  return (
    <div className={classes.coupon}>
      <h3>Apply Coupon</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formdData = new FormData(e.target);
          setCouponValue(formdData.get("coupon"));
        }}
      >
        <label htmlFor="coupon-discount">Coupon Discount: </label>
        <Input
          type="text"
          name="coupon"
          id="coupon-discount"
          placeholder="Enter Your Coupon"
          defaultValue={0}
        />
        <Button type="submit" className="normal">
          Applay
        </Button>
      </form>
    </div>
  );
};

export default Coupon;
