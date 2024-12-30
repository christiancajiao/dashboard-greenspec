import styles from "./ColorCard.module.scss";

function ColorCard({ title, color, width, height, textcolor, icon, children }) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: color || "white",
        width: width || "auto",
        height: height || "auto",
        color: textcolor || "black",
      }}
    >
      {icon && <img src={icon} />}
      {title && <p className={styles.title}>{title}</p>}

      {children}
    </div>
  );
}

export default ColorCard;
