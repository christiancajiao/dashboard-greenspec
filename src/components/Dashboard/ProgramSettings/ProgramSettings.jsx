import { Switch } from "@mui/material";
import Settings from "../../Atoms/Settings/Settings";
import styles from "./ProgramSettings.module.scss";
import Card from "../Card/Card";
import { useState } from "react";

function ProgramSettings() {
  const [checked, setChecked] = useState(true);

  function handleChange(event) {
    setChecked(event.target.checked);
  }
  return (
    <div className={styles.container}>
      <div>
        <span>Group Start</span>
        <Switch size="small" checked={checked} onChange={handleChange} />
      </div>
      <div style={{ display: checked ? "block" : "none" }}>
        <Settings id="3" />
      </div>
    </div>
  );
}
function ProgramSettingsSection() {
  return (
    <Card title="Quick Program Settings">
      <ProgramSettings />
    </Card>
  );
}
export default ProgramSettingsSection;
