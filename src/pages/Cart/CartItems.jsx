/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Section from "/src/components/UI/Section";
import classes from "./cartItems.module.css";
import Button from "/src/components/UI/Button";
import Input from "/src/components/UI/Input";
import Image from "/src/components/UI/Image";

const CartItems = ({ items, setTotalPrice }) => {
  let totalPrice = 0;

  useEffect(() => {
    setTotalPrice(totalPrice);
  }, [totalPrice, setTotalPrice]);

  // DOESN'T WORK BECAUSE OF THE SERVER //

  // const removeItemHandler = async (id) => {
  //   try {
  //     const response = await fetch(CARTURL + `/${id}`, { method: "PATCH" });
  //     if (!response.ok) {
  //       throw json({ message: "Faild to fetch cart data!" }, { status: 500 });
  //     }
  //   } catch (error) {
  //     throw json({ message: error }, { status: error.status });
  //   }
  // };

  return (
    <Section className={classes.cartContainer} sectionPadding>
      <table>
        <thead>
          <tr>
            <th>REMOVE</th>
            <th>IMAGE</th>
            <th>PRODUCT</th>
            <th>SIZE</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item) => {
              const subtotal = item.price * item.quantity;
              const id = Math.trunc(Math.random() * 10000);
              totalPrice += subtotal;
              return (
                <tr key={id}>
                  <td>
                    <Button
                      type="Button"
                      onClick={() => {
                        // removeItemHandler(item.id);
                      }}
                      className={classes.removeBtn}
                    >
                      Remove
                    </Button>
                  </td>
                  <td>
                    <Image
                      imageSrc={item.imageSrc}
                      imageHash={item.imageHash}
                      alt={item.title}
                      width="70px"
                      height="70px"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <span className={classes.size}>{item.size}</span>
                  </td>
                  <td>
                    <span className={classes.price}>${item.price}</span>
                  </td>
                  <td>
                    <Input
                      type="text"
                      name="quantity"
                      disabled="disabled"
                      id="quantity"
                      className={classes.quantity}
                      min="1"
                      defaultValue={item.quantity}
                    />
                  </td>
                  <td>
                    <span className={classes.subTotal}>${subtotal}</span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {!items && (
        <div className={classes.cartMessage}>
          There&apos;s No Element&apos;s In The Cart
        </div>
      )}
    </Section>
  );
};

export default CartItems;
