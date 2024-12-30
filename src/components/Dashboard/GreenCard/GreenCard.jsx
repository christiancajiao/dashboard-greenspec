import GreenSwitch from "../Switch/Switch";
import styles from "./GreenCard.module.scss";
import home from "../../../assets/home.svg";
import fan from "../../../assets/mode_fan.svg";
import TitleIcon from "../../Atoms/TitleIcon/TtileIcon";
import TextDescription from "../../Atoms/TextDescription/TextDescription";
import Settings from "../../Atoms/Settings/Settings";

function GreenCard({ title1, title2, content1, color }) {
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <TitleIcon title={title1} icon={home} color={color} />
        <TextDescription title={content1} />
      </div>
      <div className={styles.sub_container}>
        <div className={styles.title}>
          <TitleIcon icon={fan} title={title2} color={color} />
          <GreenSwitch size="small"></GreenSwitch>
        </div>
        <Settings color={color} id="4" />
      </div>
    </div>
  );
}

export default GreenCard;
