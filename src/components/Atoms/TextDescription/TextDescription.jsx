import styles from "./TextDescription.module.scss";

function TextDescription({ title }) {
  return (
    <div className={styles.container}>
      <span>{title}</span>
      <span> 120x </span>
    </div>
  );
}

export default TextDescription;
