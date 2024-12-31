import styles from "./YellowCard.module.scss";
import cube from "../../../assets/account_tree.svg";
import input from "../../../assets/input.svg";
import find from "../../../assets/find.svg";
import calendar from "../../../assets/calendar_month.svg";
import TitleIcon from "../../Atoms/TitleIcon/TtileIcon";
import TextDescription from "../../Atoms/TextDescription/TextDescription";

function SingleSection({ title, content, icon, color }) {
  return (
    <div className={styles.container_section}>
      <TitleIcon icon={icon} color={color} title={title} />
      <TextDescription title={content} />
    </div>
  );
}
function YellowCard({ color }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_subdivision}>
        <SingleSection
          title="Meteo"
          icon={cube}
          content="Main Stat"
          color={color}
        />
        <SingleSection
          title="Inputs"
          icon={input}
          content="Main Stat"
          color={color}
        />
      </div>
      <div className={styles.container_subdivision}>
        <SingleSection
          title="Irrigation Unit"
          icon={find}
          content="Main Stat"
          color={color}
        />
        <SingleSection
          title="Events"
          icon={calendar}
          content="Main Stat"
          color={color}
        />
      </div>
    </div>
  );
}

export default YellowCard;
