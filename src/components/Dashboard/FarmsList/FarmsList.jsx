import styles from "./FarmsList.module.scss";
import check from "../../../assets/check_circle.svg";
import plant from "../../../assets/grass.svg";
import yard from "../../../assets/yard.svg";
import fruit from "../../../assets/nutrition0.svg";

function FarmsList() {
  return (
    <div className={styles.container}>
      <dl>
        <dt>
          <img src={plant} />
          subachoque <img src={check} />
        </dt>
        <dt>
          <img src={yard} />
          Facatativa
          <img src={check} />
        </dt>
        <dt>
          <img src={fruit} />
          El rosal
          <img src={check} />
        </dt>
      </dl>
    </div>
  );
}

export default FarmsList;
