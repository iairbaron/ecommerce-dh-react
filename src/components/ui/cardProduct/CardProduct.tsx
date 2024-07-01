import { FC } from "react";
import style from "./CardProduct.module.css";
import { CartProduct, Product } from "../../../interface";
import useCartContext from "../../../hooks/useCartContext";
import { toast } from "sonner";

interface Props {
  product: Product;
}

export const CardProduct: FC<Props> = ({ product }) => {
  const { dispatch } = useCartContext();

  const item: CartProduct = {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    quantity: 1,
  };

  const addToCart = (item: CartProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    toast.success("Product added to cart")

  };

  return (
    <div className={style.cardContainer}>
      <img className={style.cardImage} src={product.image} alt={product.name} />
      <div className={style.cardDetail}>
        <h3 className={style.cardTitle}>{product.name}</h3>
        <div className={style.cardbody}>
          <p className={style.cardType}>{product.type}</p>
          <p className={style.cardPrice}>
            {" "}
            {product.price},<small>00</small>
          </p>
        </div>
        <button onClick={() => addToCart(item)} className={style.cardButton}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
