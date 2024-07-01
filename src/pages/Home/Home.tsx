import Hero from "../../components/ui/hero/Hero";
import styles from "./Home.module.css";
import CardProduct from "../../components/ui/cardProduct/CardProduct";
import { getProducts } from "../../service/products.service";
import { Toaster } from "sonner";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Home = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(page),
    placeholderData: keepPreviousData,
  });

  return (
    <>
      <Hero />
      <Toaster />
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error getting the products</p>}

      <div className={styles.container}>
        {data?.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <button
          onClick={() => setPage(page - 1)}
          className={styles.paginationButton}
          disabled={page === 1}
        >
          previus page
        </button>
        <div className={styles.paginationActive}>
          <span>{page}</span>
        </div>
        <button
          className={styles.paginationButton}
          onClick={() => setPage(page + 1)}
        >
          next page
        </button>
      </div>
    </>
  );
};

export default Home;
