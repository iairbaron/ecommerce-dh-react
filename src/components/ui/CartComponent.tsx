import { useState } from "react";
import styles from "../ui/NavBar/navbar.module.css";
import { useLocation } from "react-router-dom";
import useCartContext from "../../hooks/useCartContext";
import Cart from "../../assets/cart.svg";
import CartModal from "../cartModal/CartModal";

const CartComponent = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const location = useLocation();

  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const {
    state: { cartItems },
  } = useCartContext();
  const totalItems = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    return total;
  };

  return (
    <>
      {location.pathname == "/checkout" ? (
        <div></div>
      ) : (
        <div className={styles.navbarCartContainer}>
          <p className={styles.navbarTextAmount}>
            {totalItems() > 0 ? totalItems() : ""}
          </p>
          <img src={Cart} alt="" onClick={handleShowCartModal} />
        </div>
      )}
      {showCartModal && <CartModal handleShowCartModal={handleShowCartModal} />}
    </>
  );
};

export default CartComponent;
