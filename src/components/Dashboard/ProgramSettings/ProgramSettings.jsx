import { Switch } from "@mui/material";
import Settings from "../../Atoms/Settings/Settings";
import styles from "./ProgramSettings.module.scss";

function ProgramSettings() {
  return (
    <div className={styles.container}>
      <div>
        <span>Group Start</span>
        <Switch size="small" />
      </div>
      <div>
        <Settings id="3" />
      </div>
    </div>
  );
}

export default ProgramSettings;
