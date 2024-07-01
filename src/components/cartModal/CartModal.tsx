import styles from "./CartModal.module.css";
import Close from "../../assets/close.svg";
import { FC } from "react";
import Table from "../ui/table/Table.tsx";
import { useNavigate } from "react-router-dom";

interface Props {
  handleShowCartModal: () => void;
}

const CartModal: FC<Props> = ({ handleShowCartModal }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    handleShowCartModal()

    navigate("/checkout");
  };

  return (
    <div className={styles.modalContainer}>
      <button onClick={handleShowCartModal} className={styles.modalCloseButton}>
        <img src={Close} alt="Close" />
      </button>
      <Table />
      <div>
        <button onClick={handleNavigate} className={styles.modalButtonContainer}>Checkout</button>
      </div>
    </div>
  );
};

export default CartModal;
