import styles from "./ClimeCard.module.scss";
import sun from "../../../assets/sunny.svg";

function ClimeCard() {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>Ligth Intensity</h3>
      </div>
      <div className={styles.content}>
        <img src={sun} />
        <div className={styles.content_text}>
          <div className={styles.text1}>50</div>
          <div className={styles.text2}>Watts</div>
        </div>
      </div>
    </div>
  );
}

export default ClimeCard;
