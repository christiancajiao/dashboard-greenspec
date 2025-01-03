import styles from "./FarmsList.module.scss";
import check from "../../../assets/check_circle_gray.svg";
import plant from "../../../assets/potted_plant.svg";
import yard from "../../../assets/yard.svg";
import fruit from "../../../assets/nutrition0.svg";
import Card from "../Card/Card";
import { useData } from "../../../Hooks/useData";

function FarmsList() {
  const { data, selectFarm, dataUser } = useData();

  const selectedFarmName = dataUser[0]?.name;
  const farmName1 = data.farms[0].name;
  const farmName2 = data.farms[1].name;
  const farmName3 = data.farms[2].name;
  return (
    <div className={styles.container}>
      <dl>
        <dt
          className={selectedFarmName === farmName1 ? styles.active : null}
          style={{ borderBottom: "1px solid black" }}
          onClick={() => selectFarm(farmName1)}
        >
          <div>
            <img src={plant} />
            {farmName1}
          </div>
          <img src={check} />
        </dt>
        <dt
          className={selectedFarmName === farmName2 ? styles.active : null}
          style={{ borderBottom: "1px solid black" }}
          onClick={() => selectFarm(farmName2)}
        >
          <div>
            <img src={yard} />
            {farmName2}
          </div>
          <img src={check} />
        </dt>
        <dt
          className={selectedFarmName === farmName3 ? styles.active : null}
          onClick={() => selectFarm(farmName3)}
        >
          <div>
            <img src={fruit} />
            {farmName3}
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
