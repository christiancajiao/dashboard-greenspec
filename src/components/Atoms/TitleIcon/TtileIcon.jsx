import styles from "./TitleIcon.module.scss";

function TitleIcon({ title, color, icon }) {
  return (
    <div className={styles.container} style={{ color: color }}>
      <img src={icon} /> <p>{title}</p>
    </div>
  );
}

export default TitleIcon;
