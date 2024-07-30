import { useNavigate } from "react-router-dom";
import style from "./CardProduct.module.css";
import { Product } from "../../../interface";
import { CardActionArea } from "@mui/material";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

interface Props {
  product: Product;
}

export const CardProduct = ({ product }: Props) => {
  const navigate = useNavigate();

  const handleProductDetail = () => {
    navigate("/product_detail", { state: { product } });
  };

  return (
    <div className={style.cardContainer}>
      <CardActionArea onClick={handleProductDetail}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{
              margin: "2rem",
              objectFit: "contain",
              width: "110px",
              maxHeight: "140px",
              position: "relative",
              zIndex: 10000,
            }}
            src={product.image}
            alt={product.name}
          />
        </div>
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
      <AddToCartButton productItem={{...product, quantity: 1}} />
    </div>
  );
};

export default CardProduct;
