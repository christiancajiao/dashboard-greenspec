import { useModal } from "../../Hooks/useModal";
import styles from "./Modal.module.scss";

function Modal({ title, children }) {
  const { isOn, setModal, currentId } = useModal();
  return (
    <div style={{ display: isOn ? "block" : "none" }} onClick={setModal}>
      <div className={styles.container}>
        <div className={styles.container_content}>
          {currentId ? "si" : "no"}
          {title && <p className={styles.title}>{title}</p>}
          {children && <div className={styles.content}>{children}</div>}
        </div>
      </div>
    </div>
  );
}

export default Modal;
