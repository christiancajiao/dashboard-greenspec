import { useModal } from "../../Hooks/useModal";
import styles from "./Modal.module.scss";

function one() {
  return <div>Valves Settings 1</div>;
}
function two() {
  return <div>Valves Settings 2</div>;
}
function three() {
  return <div>Quick Program Settings</div>;
}
function four() {
  return <div>Vent Settings</div>;
}
function five() {
  return <div>Water heat Settings</div>;
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
