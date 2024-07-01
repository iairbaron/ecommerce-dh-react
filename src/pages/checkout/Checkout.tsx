import { Toaster } from "sonner";
import CardCredit from "../../components/ui/cardCredit/CardCredit";
import ProductsTable from "../../components/ui/table/Table";
import styles from "./Checkout.module.css";

const Checkout = () => {
  return (
    <>
    <Toaster richColors visibleToasts={1} />
      <div className={styles.container}>
        <h1 className={styles.title}>Checkout</h1>
        <div className={styles.grid}>
          <div className={styles.tableContainer}>
            <ProductsTable />
          </div>
          <CardCredit/>
        </div>
      </div>
    </>
  );
};

export default Checkout;
