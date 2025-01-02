import GreenSwitch from "../Switch/Switch";
import styles from "./GreenCard.module.scss";
import home from "../../../assets/home.svg";
import fan from "../../../assets/mode_fan.svg";
import TitleIcon from "../../Atoms/TitleIcon/TtileIcon";
import TextDescription from "../../Atoms/TextDescription/TextDescription";
import Settings from "../../Atoms/Settings/Settings";
import { useState } from "react";

function GreenCard({ title1, title2, content1, color }) {
  const [checked, setChecked] = useState(true);

  function handleChange(event) {
    setChecked(event.target.checked);
  }
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <TitleIcon title={title1} icon={home} color={color} />
        <TextDescription title={content1} />
      </div>
      <div className={styles.sub_container}>
        <div className={styles.title}>
          <TitleIcon icon={fan} title={title2} color={color} />
          <GreenSwitch
            size="small"
            checked={checked}
            onChange={handleChange}
          ></GreenSwitch>
        </div>
        <div style={{ display: checked ? "block" : "none" }}>
          <Settings color={color} id="4" />
        </div>
      </div>
    </div>
  );
}

export default GreenCard;
