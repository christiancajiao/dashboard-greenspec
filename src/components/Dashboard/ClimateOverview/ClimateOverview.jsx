import Card from "../Card/Card";
import ClimeCard from "../ClimeCard/ClimeCard";
import ColorCard from "../ColorCard/ColorCard";
import TemperatureChart from "../TemperatureChart/TemperatureChart";
import styles from "./ClimateOverview.module.scss";

function ClimateOverview() {
  return (
    <Card title="Climate Overview">
      <div className={styles.container_status}>
        <div>
          <ColorCard color="#fdd866">
            <ClimeCard />
          </ColorCard>
        </div>

        <TemperatureChart></TemperatureChart>
      </div>
    </Card>
  );
}
export default ClimateOverview;
