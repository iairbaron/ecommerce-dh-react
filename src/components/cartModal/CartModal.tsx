import styles from "./CartModal.module.css";
import Close from "../../assets/close.svg";
import { FC } from "react";
import Table from "../ui/table/Table.tsx";
import { useNavigate } from "react-router-dom";
import useCartContext from "../../hooks/useCartContext.ts";

interface Props {
  handleShowCartModal: () => void;
}

const CartModal: FC<Props> = ({ handleShowCartModal }) => {
  const navigate = useNavigate();

  const {
    state: { cartItems },
  } = useCartContext();

  const handleNavigate = () => {
    console.log(cartItems.length);
    handleShowCartModal();

    navigate("/checkout");
  };

  return (
    <div className={styles.modalContainer}>
      <button onClick={handleShowCartModal} className={styles.modalCloseButton}>
        <img src={Close} alt="Close" />
      </button>
      {cartItems.length === 0 ? (
        <div className={styles.emptyCartMessage}>Cart is empty</div>
      ) : (
        <>
          <Table />
          <div>
            <button
              onClick={handleNavigate}
              className={styles.modalButtonContainer}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};


export default CartModal;
