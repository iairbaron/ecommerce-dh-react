import { FC } from "react";
import style from "./CardProduct.module.css";
import { CartProduct, Product } from "../../../interface";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

interface Props {
  product: Product;
}

export const CardProduct: FC<Props> = ({ product }) => {
  const navigate = useNavigate();

  const item: CartProduct = {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    quantity: 1,
  };

  const handleProductDetail = () => {
    navigate("/product_detail", { state: { product: item } });
  };

  return (
    <div className={style.cardContainer}>
      <CardActionArea onClick={handleProductDetail}>
        <img
          style={{
            margin: "2rem",
            objectFit: "contain",
            width: "110px",
            maxHeight: "140px",
            transform: "translateY(0%) translateX(50%)",
            zIndex: 10000,
          }}
          src={product.image}
          alt={product.name}
        />
        <div className={style.cardDetail}>
          <h3 className={style.cardTitle}>{product.name}</h3>
          <div className={style.cardbody}>
            <p className={style.cardType}>{product.type}</p>
            <p className={style.cardPrice}>
              {" "}
              {product.price},<small>00</small>
            </p>
          </div>
        </div>
      </CardActionArea>
      <AddToCartButton productItem={item} />
    </div>
  );
};

export default CardProduct;
