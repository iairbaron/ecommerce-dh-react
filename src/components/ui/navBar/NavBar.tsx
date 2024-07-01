import Logo from "../../../assets/logo.svg";
import CartComponent from "../CartComponent";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navbarContainer}>
      <div onClick={() => navigate("/")} className={styles.navbarDetail}>
        <img src={Logo} alt="Logo de Ecommerce" width={50} height={50} />
        <div>
          <span>DH Ecommerce</span>
        </div>
      </div>
      <CartComponent/>
    </div>
  );
};

export default NavBar;
