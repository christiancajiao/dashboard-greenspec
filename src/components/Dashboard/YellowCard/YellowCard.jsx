import styles from "./YellowCard.module.scss";
import cube from "../../../assets/account_tree.svg";
import input from "../../../assets/input.svg";
import find from "../../../assets/find.svg";
import calendar from "../../../assets/calendar_month.svg";
import TitleIcon from "../../Atoms/TitleIcon/TtileIcon";
import TextDescription from "../../Atoms/TextDescription/TextDescription";
import { useData } from "../../../Hooks/useData";

function SingleSection({ title, content, icon, color, value }) {
  return (
    <div className={styles.container_section}>
      <TitleIcon icon={icon} color={color} title={title} />
      <TextDescription title={content} value={value} />
    </div>
  );
}
function YellowCard({ color }) {
  const { dataUser } = useData();
  const meteo = dataUser[0]?.sensors.meteo?.stat || 0;
  const inputs = dataUser[0]?.sensors.inputs.stat || 0;
  const irrigation = dataUser[0]?.sensors.irrigationUnit?.stat || 0;
  const events = dataUser[0]?.sensors.events?.stat || 0;
  return (
    <div className={styles.container}>
      <div className={styles.container_subdivision}>
        <SingleSection
          title="Meteo"
          icon={cube}
          content="Main Stat"
          color={color}
          value={meteo}
        />
        <SingleSection
          title="Inputs"
          icon={input}
          content="Main Stat"
          color={color}
          value={inputs}
        />
      </div>
      <div className={styles.container_subdivision}>
        <SingleSection
          title="Irrigation Unit"
          icon={find}
          content="Main Stat"
          color={color}
          value={irrigation}
        />
        <SingleSection
          title="Events"
          icon={calendar}
          content="Main Stat"
          color={color}
          value={events}
        />
      </div>
    </div>
  );
}

export default YellowCard;
