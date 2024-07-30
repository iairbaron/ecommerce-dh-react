import { Toaster } from "sonner";
import styles from "./Checkout.module.css";
import ProductsTable from "../../components/ui/Table/Table";
import CreditCard from "../../components/ui/CardCredit/CreditCard";

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
          <CreditCard />
        </div>
      </div>
    </>
  );
};

export default Checkout;
