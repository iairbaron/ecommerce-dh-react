import useCartContext from "../../../hooks/useCartContext";
import styles from "./table.module.css";
import { CartProduct } from "../../../interface";
import { useMemo } from "react";

export const ProductsTable = () => {
  const {
    state: { cartItems },
  } = useCartContext();

  const { dispatch } = useCartContext();

  const addToCart = (item: CartProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (item: CartProduct) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const totalPay = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <>
      <table className={styles.modalTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Delete</th>
            <th>Quantity</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <button
                    onClick={() => removeFromCart(item)}
                    className={styles.modalButtonRemove}
                  >
                    {" "}
                    -1
                  </button>
                </td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    onClick={() => addToCart(item)}
                    className={styles.modalButtonAdd}
                  >
                    +1
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.modalTotalContainer}>
        <h3>total: ${totalPay}</h3>
      </div>
    </>
  );
};

export default ProductsTable;
