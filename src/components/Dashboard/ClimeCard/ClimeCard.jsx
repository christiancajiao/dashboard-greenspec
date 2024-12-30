import styles from "./ClimeCard.module.scss";
import sun from "../../../assets/sunny.svg";

function ClimeCard() {
  return (
    <div className={styles.container}>
      <img src={sun} />
      <div>
        <div style={{ fontSize: "30px" }}>50</div>
        <div style={{ fontSize: "20px" }}>Watts</div>
      </div>
    </div>
  );
}

export default ClimeCard;
