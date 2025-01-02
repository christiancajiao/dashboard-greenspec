import BlueCard from "../BlueCard/BlueCard";
import Card from "../Card/Card";
import ColorCard from "../ColorCard/ColorCard";
import GreenCard from "../GreenCard/GreenCard";
import RedCard from "../RedCard/RedCard";
import YellowCard from "../YellowCard/YellowCard";
import styles from "./MonitorSensors.module.scss";

function MonitorSensorsSection() {
  return (
    <Card title="Monitor Sensors">
      <div className={styles.sensors_layout}>
        <ColorCard color="#dbffeb" textcolor="#138349">
          <GreenCard
            title1="Compart"
            title2="Vents"
            content1="Main Stat"
            color="#138349"
          />
        </ColorCard>
        <ColorCard color="#ffe6bf">
          <YellowCard color="#cc9b0f" />
        </ColorCard>
        <div className={styles.sensors_layout_subdivision}>
          <ColorCard color="#fae6e7" width="100%" height="100%">
            <RedCard title="Water Heat" temperature="24" color="#9b1118" />
          </ColorCard>
          <ColorCard color="#dae7f0" width="100%" height="100%">
            <BlueCard color="#11289b" title="Valves" />
          </ColorCard>
        </div>
      </div>
    </Card>
  );
}
export default MonitorSensorsSection;
