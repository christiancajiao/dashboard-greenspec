import styles from "./Card.module.scss";

function Card({ title, children }) {
  return (
    <div className={styles.container}>
      {title && <p className={styles.title}>{title}</p>}
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
}

export default Card;
