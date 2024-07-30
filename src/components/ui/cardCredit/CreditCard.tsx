import Cards, { Focused } from "react-credit-cards-2";
import styles from "./CardCredit.module.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useState } from "react";
import { toast } from "sonner";
import useCartContext from "../../../hooks/useCartContext";
import { CartProduct } from "../../../interface";
import { useNavigate } from "react-router-dom";
import { validateName, validateNumberAndLength } from "../../../hooks/validator";

const CreditCard = () => {
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const navigate = useNavigate();

  const { dispatch } = useCartContext();

  const { number, name, expiry, cvc } = cardData;

  const [errorMessages, setErrorMessages] = useState({
    errorNumber: "",
    errorName: "",
    errorExpiry: "",
    errorCvc: "",
  });

 
  const validateInput = (name: string, value: string): boolean => {
    let errorMessage = "";
    switch (name) {
      case "number":
        errorMessage = validateNumberAndLength(value, 20, "number");
        break;
      case "cvc":
        errorMessage = validateNumberAndLength(value, 3, "cvc");
        break;
      case "expiry":
        errorMessage = validateNumberAndLength(value, 4, "expiry");
        break;
      case "name":
        errorMessage = validateName(value);
        break;
      default:
        return false;
    }

    if (errorMessage) {
      setErrorMessages({
        ...errorMessages,
        [`error${name.charAt(0).toUpperCase() + name.slice(1)}`]: errorMessage,
      });
      return false;
    } else {
      setErrorMessages({
        ...errorMessages,
        [`error${name.charAt(0).toUpperCase() + name.slice(1)}`]: "",
      });
      return true;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isValid: boolean = validateInput(name, value);
    if (isValid) {
      setCardData({ ...cardData, [name]: value });
    }
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

    toast.success("Success! Thank you for your purchase.");

    setTimeout(() => {
      navigate("/");
    }, 2000);
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
            inputMode="numeric"
          />
          {errorMessages.errorNumber && (
            <p style={{ color: "#ff1111", fontSize: "small" }}>
              {errorMessages.errorNumber}
            </p>
          )}
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
          {errorMessages.errorName && (
            <p style={{ color: "#ff1111", fontSize: "small" }}>
              {errorMessages.errorName}
            </p>
          )}
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
            {errorMessages.errorExpiry && (
              <p style={{ color: "#ff1111", fontSize: "small" }}>
                {errorMessages.errorExpiry}
              </p>
            )}
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
            <p style={{ color: "#ff1111", fontSize: "small" }}>
              {errorMessages.errorCvc}
            </p>
          </div>
        </div>
        <button type="submit" className={styles.buyButton}>
          Buy now
        </button>
      </form>
    </div>
  );
};

export default CreditCard;
