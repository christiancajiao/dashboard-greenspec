import styles from "./FertilizationCard.module.scss";

function FertilizationCard() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.top_text}>June</div>
        <div className={styles.bottom_text}>15</div>
      </div>
      <div className={styles.line}>
        <div className={styles.top_text}>June</div>
        <div className={styles.bottom_text}>30</div>
      </div>
      <div className={styles.line}>
        <div className={styles.top_text}>July</div>
        <div className={styles.bottom_text}>15</div>
      </div>
    </div>
  );
}

export default FertilizationCard;
