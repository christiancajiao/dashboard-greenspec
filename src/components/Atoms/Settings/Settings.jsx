import styles from "./Settings.module.scss";
import { useModal } from "../../../Hooks/useModal";

function Settings({ color, id }) {
  const { setModal } = useModal();

  function handleOpenModal(id) {
    setModal(id);
  }
  return (
    <div className={styles.container}>
      <button
        style={{ color: color }}
        id={id}
        onClick={(e) => handleOpenModal(e.target.id)}
      >
        Settings
      </button>
    </div>
  );
}

export default Settings;
