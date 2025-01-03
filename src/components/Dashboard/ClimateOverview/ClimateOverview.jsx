import Card from "../Card/Card";
import ClimeCard from "../ClimeCard/ClimeCard";
import ColorCard from "../ColorCard/ColorCard";
import TemperatureChart from "../TemperatureChart/TemperatureChart";
import styles from "./ClimateOverview.module.scss";

function ClimateOverview() {
  return (
    <Card title="Climate Overview">
      <div className={styles.container_status}>
        <div className={styles.card}>
          <ClimeCard />
        </div>

        <TemperatureChart></TemperatureChart>
      </div>
    </Card>
  );
}
export default ClimateOverview;
