import { Toaster } from "sonner";
import CardCredit from "../../components/ui/CardCredit/CardCredit";
import styles from "./Checkout.module.css";
import ProductsTable from "../../components/ui/Table/Table";


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
