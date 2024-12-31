import React from "react";
import styles from "./ColorCard.module.scss";

function ColorCard({ title, color, width, height, textcolor, icon, children }) {
  // Add a conditionally applied class for the special color
  const dynamicClass = color === "#dbffeb" ? styles.specialWidth : "";

  return (
    <div
      className={`${styles.container} ${dynamicClass}`}
      style={{
        backgroundColor: color || "white",
        height: height || "100%",
        color: textcolor || "black",
      }}
    >
      {icon && <img src={icon} alt="icon" />}
      {title && <p className={styles.title}>{title}</p>}
      {children}
    </div>
  );
}

export default ColorCard;
