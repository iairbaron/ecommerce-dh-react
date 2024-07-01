import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroTitleContainer}>
        <h1>
          Super Flash sale <span>50% off </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
