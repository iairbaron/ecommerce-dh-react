import { FC } from "react";
import { Product } from "../../interface";
import { Toaster } from "sonner";
import { useLocation } from "react-router-dom";
import AddToCartButton from "../../components/ui/AddToCartButton/AddToCartButton";

interface Props {
  product?: Product;
}

const ProductDetail: FC<Props> = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <>
      <Toaster />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a79fb",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              width: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px",
            }}
          >
            <img
              style={{
                margin: "2rem",
                objectFit: "contain",
                width: "70%",
                maxHeight: "500px",
              }}
              src={product.image}
              alt={product.name}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <h1 style={{ fontSize: "2.25rem", fontWeight: "bold" }}>
              {product.name}
            </h1>
            <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>
              ${product.price}
            </p>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "0.25rem",
              }}
            >
              Descripcion:
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              dolorem suscipit rem voluptatibus ducimus nostrum alias
              repudiandae. Consectetur asperiores doloremque eum amet provident,
              dicta nobis deserunt, voluptatum officiis nisi omnis.lorem
            </p>
            <div style={{marginTop:"30px"}}>
              <AddToCartButton productItem={product} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;


