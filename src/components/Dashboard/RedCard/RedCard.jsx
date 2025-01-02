import styles from "./RedCard.module.scss";
import icon from "../../../assets/device_thermostat.svg";
import TitleIcon from "../../Atoms/TitleIcon/TtileIcon";
import Settings from "../../Atoms/Settings/Settings";
import { useData } from "../../../Hooks/useData";
import { useEffect, useState } from "react";

function RedCard({ title, temperature, color }) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1);
  const { dataUser } = useData();

  const temp = dataUser[0]?.sensors.waterHeat || {};

  function handleChangeMin(e) {
    setMin(e.target.value);
  }
  function handleChangeMax(e) {
    setMax(e.target.value);
  }
  useEffect(() => {
    setMax(temp.max);
    setMin(temp.min);
  }, [dataUser]);
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <TitleIcon icon={icon} color={color} title={title} />
      </div>
      <div className={styles.content_container}>
        <div className={styles.left_section} style={{ color: color }}>
          {temp?.current}°
        </div>
        <div className={styles.rigth_section}>
          <div className={styles.temperature}>
            <span>
              Min
              <input
                type="number"
                value={min}
                onChange={(e) => handleChangeMin(e)}
              />
            </span>
            <span>
              Max{" "}
              <input
                type="number"
                value={max}
                onChange={(e) => handleChangeMax(e)}
              />
            </span>
          </div>
          <div className={styles.settings}>
            <Settings id="5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedCard;
