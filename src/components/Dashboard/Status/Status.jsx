import Card from "../Card/Card";
import styles from "./Status.module.scss";
import info from "../../../assets/info.svg";
import error from "../../../assets/error.svg";
import check from "../../../assets/check_circle.svg";
function Status({ title, count, icon, color }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon} style={{ color: color }}>
        <img src={icon} />
      </div>
      <p className={styles.text}>{title}</p>
      <div className={styles.counter} style={{ backgroundColor: color }}>
        {count}
      </div>
    </div>
  );
}
function StatusContainer() {
  return (
    <Card>
      <div className={styles.container_status}>
        <Status color="#3ab073" title="Active" count="23" icon={check} />
        <Status color="#ffbe07" title="Acquit" count="0" icon={error} />
        <Status color="#0c6dfd" title="On delay" count="1" icon={info} />
      </div>
    </Card>
  );
}
export default StatusContainer;
