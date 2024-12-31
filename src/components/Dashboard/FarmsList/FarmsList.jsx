import styles from "./FarmsList.module.scss";
import check from "../../../assets/check_circle_gray.svg";
import plant from "../../../assets/grass.svg";
import yard from "../../../assets/yard.svg";
import fruit from "../../../assets/nutrition0.svg";

function FarmsList() {
  return (
    <div className={styles.container}>
      <dl>
        <dt style={{ borderBottom: "1px solid black" }}>
          <div>
            <img src={plant} />
            subachoque
          </div>
          <img src={check} />
        </dt>
        <dt style={{ borderBottom: "1px solid black" }}>
          <div>
            <img src={yard} />
            Facatativa
          </div>
          <img src={check} />
        </dt>
        <dt>
          <div>
            <img src={fruit} />
            subachoque
          </div>
          <img src={check} />
        </dt>
      </dl>
    </div>
  );
}

export default FarmsList;
