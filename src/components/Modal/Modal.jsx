import { useModal } from "../../Hooks/useModal";
import styles from "./Modal.module.scss";

function one() {
  return (
    <div>
      <input type="checkbox" />
    </div>
  );
}
function two() {
  return <div>OPCION 2</div>;
}
function three() {
  return <div>OPCION 3</div>;
}
function four() {
  return <div>OPCION 4</div>;
}
function five() {
  return <div>OPCION 5</div>;
}

function Modal() {
  const { isOn, setModal, currentId } = useModal();
  return (
    <div style={{ display: isOn ? "block" : "none" }}>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <button onClick={setModal}>X</button>

          {currentId === "1" ? one() : null}
          {currentId === "2" ? two() : null}
          {currentId === "3" ? three() : null}
          {currentId === "4" ? four() : null}
          {currentId === "5" ? five() : null}
        </div>
      </div>
    </div>
  );
}

export default Modal;
