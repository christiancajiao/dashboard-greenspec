import styles from "./TextDescription.module.scss";

function TextDescription({ title, value }) {
  return (
    <div className={styles.container}>
      <span>{title}</span>
      <span> {value} </span>
    </div>
  );
}

export default TextDescription;
