import styles from "./RedCard.module.scss";
import icon from "../../../assets/device_thermostat.svg";
import TitleIcon from "../../Atoms/TitleIcon/TtileIcon";
import Settings from "../../Atoms/Settings/Settings";

function RedCard({ title, temperature, color }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <TitleIcon icon={icon} color={color} title={title} />
      </div>
      <div className={styles.content_container}>
        <div className={styles.left_section} style={{ color: color }}>
          {temperature}°
        </div>
        <div className={styles.rigth_section}>
          <div className={styles.temperature}>
            <span>
              Min <input type="number" />
            </span>
            <span>
              Max <input type="number" />
            </span>
          </div>
          <div>
            <Settings id="5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedCard;
