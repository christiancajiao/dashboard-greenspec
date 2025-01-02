import styles from "./DashboardContainer.module.scss";
import StatusContainer from "../Status/Status";
import Search from "../Search/Search";
import FarmSection from "../FarmsList/FarmsList";
import ProgramSettingsSection from "../ProgramSettings/ProgramSettings";
import MonitorSensorsSection from "../MonitorSensors/MonitorSensors";
import ClimateOverview from "../ClimateOverview/ClimateOverview";
import FertiOverview from "../FertiOverview/FertiOverview";
import { useData } from "../../../Hooks/useData";

/**
 * Main Dashboard Container
 * Displays user information, search, and multiple cards for monitoring data.
 */
function DashboardContainer() {
  const { data } = useData();

  return (
    <main className={styles.section_container}>
      <section className={styles.section}>
        {/* User Greeting Section */}

        <header className={styles.user_information}>
          <h1>Hi {data?.user?.name}</h1>
          <p>Let’s check out your farm metrics</p>
        </header>
        <div className={styles.input_search}>
          <form aria-label="Search farms">
            <Search />
          </form>
        </div>
        {/* Status Overview Section */}
        <section className={styles.status} aria-labelledby="status-heading">
          <StatusContainer />
        </section>
        {/* Farms List Section */}
        <section className={styles.farms} aria-labelledby="farms-heading">
          <FarmSection />
        </section>
        {/* Quick Program Settings */}
        <section
          className={styles.quick_settings}
          aria-labelledby="settings-heading"
        >
          <ProgramSettingsSection />
        </section>
        {/* Monitor Sensors Section */}

        <section
          className={styles.monitor_sensors}
          aria-labelledby="sensors-heading"
        >
          <MonitorSensorsSection />
        </section>

        <section className={styles.climate_overview}>
          <ClimateOverview />
        </section>
        <section className={styles.ferti_overview}>
          <FertiOverview />
        </section>
      </section>
    </main>
  );
}

export default DashboardContainer;
