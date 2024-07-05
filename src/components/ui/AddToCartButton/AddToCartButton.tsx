import { FC } from "react";
import { CartProduct } from "../../../interface";
import useCartContext from "../../../hooks/useCartContext";
import styles from "./buttonStyles.module.css";
import { toast } from "sonner";

interface AddToCartButtonProps {
  productItem: CartProduct;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ productItem }) => {
  const { dispatch } = useCartContext();

  const addToCart = (productItem: CartProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: productItem });
    toast.success("Product added to cart");
  };
  return (
    <button
      className={styles.cardButton}
      onClick={() => {
        addToCart(productItem);
      }}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
