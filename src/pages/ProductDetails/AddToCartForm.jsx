/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { CartItems } from "/src/contexts/shopping-cart";
import classes from "./addToCartForm.module.css";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

import Swal from "sweetalert2";

const AddToCartForm = ({ product, imageSrc }) => {
  const [item, setItem] = useState({});
  const cartCtx = useContext(CartItems);

  useEffect(() => {
    if (Object.keys(item).length > 0) {
      cartCtx.addItemToCart(item);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "The item added to the cart!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [item]);

  const addToCartHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const size = form.get("size");
    const quantity = parseInt(form.get("quantity"));
    const newItem = { ...product, imageSrc, size, quantity };

    setItem(newItem);
  };

  return (
    <form onSubmit={addToCartHandler} className={classes.form}>
      <select name="size" id="size" aria-placeholder="Select Size" required>
        <option value="">Select Size</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
        <option value="Small">Small</option>
        <option value="Large">Large</option>
      </select>
      <div className={classes.countSub}>
        <Input
          type="number"
          name="quantity"
          className={classes.quantity}
          min="1"
          max="100"
          defaultValue="1"
        />
        <Button
          type="submit"
          className={classes.addToCart}
          placeholder="Add To Cart"
        >
          Add To Cart
        </Button>
      </div>
    </form>
  );
};

export default AddToCartForm;
