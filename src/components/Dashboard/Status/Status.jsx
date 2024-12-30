import styles from "./Status.module.scss";

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

export default Status;
