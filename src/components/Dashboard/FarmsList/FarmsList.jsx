import styles from "./FarmsList.module.scss";
import check from "../../../assets/check_circle_gray.svg";
import plant from "../../../assets/grass.svg";
import yard from "../../../assets/yard.svg";
import fruit from "../../../assets/nutrition0.svg";
import Card from "../Card/Card";
import { useContext } from "react";
import { DataContext } from "../../../Providers/DataProvider/DataProvider";

function FarmsList() {
  const { data, selectFarm } = useContext(DataContext);
  return (
    <div className={styles.container}>
      <dl>
        <dt
          style={{ borderBottom: "1px solid black" }}
          onClick={() => selectFarm(data.farms[0].name)}
        >
          <div>
            <img src={plant} />
            {data.farms[0].name}
          </div>
          <img src={check} />
        </dt>
        <dt
          style={{ borderBottom: "1px solid black" }}
          onClick={() => selectFarm(data.farms[1].name)}
        >
          <div>
            <img src={yard} />
            {data.farms[1].name}
          </div>
          <img src={check} />
        </dt>
        <dt onClick={() => selectFarm(data.farms[2].name)}>
          <div>
            <img src={fruit} />
            {data.farms[2].name}
          </div>
          <img src={check} />
        </dt>
      </dl>
    </div>
  );
}

function FarmSection() {
  return (
    <Card title="Your Farms (GSC Tabs)">
      <FarmsList />
    </Card>
  );
}
export default FarmSection;
