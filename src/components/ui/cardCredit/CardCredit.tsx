import Cards, { Focused } from "react-credit-cards-2";
import styles from "./CardCredit.module.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useState } from "react";
import { toast } from "sonner";
import useCartContext from "../../../hooks/useCartContext";
import { CartProduct } from "../../../interface";

const CardCredit = () => {
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const { dispatch } = useCartContext();

  const { number, name, expiry, cvc } = cardData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setCardData({ ...cardData, focus: e.target.name });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ([number, name, expiry, cvc].includes("")) {
      toast.error("All field are required");
      return;
    }
    setCardData({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      focus: "",
    });

    dispatch({ type: "CLEAR_CART", payload: {} as CartProduct });
  };

  return (
    <div className={styles.container}>
      <div>
        <Cards
          cvc={cvc}
          expiry={expiry}
          name={name}
          number={number}
          focused={cardData.focus as Focused}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formControl}>
          <label htmlFor="number">Card Number</label>
          <input
            value={number}
            onFocus={handleInputFocus}
            onChange={handleInputChange}
            type="text"
            name="number"
            id="number"
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="name">Card Name</label>
          <input
            value={name}
            onFocus={handleInputFocus}
            onChange={handleInputChange}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className={styles.formInputGrup}>
          <div className={styles.formControl}>
            <label htmlFor="expiry">Expiry</label>
            <input
              value={expiry}
              onFocus={handleInputFocus}
              onChange={handleInputChange}
              type="text"
              name="expiry"
              id="expiry"
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="cvc">CVC</label>
            <input
              value={cvc}
              onFocus={handleInputFocus}
              onChange={handleInputChange}
              type="text"
              name="cvc"
              id="cvc"
            />
          </div>
        </div>
        <button type="submit" className={styles.buyButton}>
          Buy now
        </button>
      </form>
    </div>
  );
};

export default CardCredit;
