import styles from "./BlueCard.module.scss";
import icon from "../../../assets/valve.svg";
import TitleIcon from "../../Atoms/TitleIcon/TtileIcon";
import Settings from "../../Atoms/Settings/Settings";
import ValvesChart from "../ValvesChart/ValvesChart";

function BlueCard({ title, temperature, color }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <TitleIcon icon={icon} color={color} title={title} />
      </div>
      <div className={styles.content_container}>
        <div className={styles.left_section} style={{ color: color }}>
          <ValvesChart />
        </div>
        <div className={styles.rigth_section}>
          <div
            className={styles.temperature}
            style={{ marginTop: "1em", marginBottom: "1em" }}
          >
            <Settings id="1" />
            <Settings id="2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueCard;
