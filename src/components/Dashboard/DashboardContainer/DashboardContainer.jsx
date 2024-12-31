import Card from "../Card/Card";
import styles from "./DashboardContainer.module.scss";
import { DataContext } from "../../../Providers/DataProvider/DataProvider";
import { useContext, useEffect } from "react";
import TemperatureChart from "../TemperatureChart/TemperatureChart";
import ColorCard from "../ColorCard/ColorCard";
import Status from "../Status/Status";
import Search from "../Search/Search";
import info from "../../../assets/info.svg";
import error from "../../../assets/error.svg";
import check from "../../../assets/check_circle.svg";
import GreenCard from "../GreenCard/GreenCard";
import YellowCard from "../YellowCard/YellowCard";
import RedCard from "../RedCard/RedCard";
import BlueCard from "../BlueCard/BlueCard";
import ClimeCard from "../ClimeCard/ClimeCard";
import FertilizationCard from "../FertilizationCard/FertilizationCard";
import FarmsList from "../FarmsList/FarmsList";
import ProgramSettings from "../ProgramSettings/ProgramSettings";
import FertiChart from "../FertiChart/FertiChart";

function DashboardContainer() {
  const { dataUser } = useContext(DataContext);

  return (
    <div className={styles.section_container}>
      <section className={styles.section}>
        <div className={styles.user_information}>
          <h1>Hi {dataUser.user.name}</h1>
          <p>Let’s check out your farm metrics</p>
        </div>
        <div className={styles.input_search}>
          <form>
            <Search />
          </form>
        </div>
        <div className={styles.status}>
          <Card>
            <div className={styles.container_status}>
              <Status color="#3ab073" title="Active" count="23" icon={check} />
              <Status color="#ffbe07" title="Acquit" count="0" icon={error} />
              <Status color="#0c6dfd" title="On delay" count="1" icon={info} />
            </div>
          </Card>
        </div>
        <div className={styles.farms}>
          <Card title="Your Farms (GSC Tabs)">
            <FarmsList />
          </Card>
        </div>
        <div className={styles.quick_settings}>
          <Card title="Quick Program Settings">
            <ProgramSettings />
          </Card>
        </div>
        <div className={styles.monitor_sensors}>
          <Card title="Monitor Sensors">
            <div className={styles.sensors_layout}>
              <ColorCard color="#dbffeb" textcolor="#138349">
                <GreenCard
                  title1="Compart"
                  title2="Vents"
                  content1="Main Stat"
                  color="#138349"
                />
              </ColorCard>
              <ColorCard color="#ffe6bf">
                <YellowCard color="#cc9b0f" />
              </ColorCard>
              <div className={styles.sensors_layout_subdivision}>
                <ColorCard color="#fae6e7" width="100%" height="100%">
                  <RedCard
                    title="Water Heat"
                    temperature="24"
                    color="#9b1118"
                  />
                </ColorCard>
                <ColorCard color="#dae7f0" width="100%" height="100%">
                  <BlueCard color="#11289b" title="Valves" />
                </ColorCard>
              </div>
            </div>
          </Card>
        </div>
        <div className={styles.climate_overview}>
          <Card title="Climate Overview">
            <div className={styles.container_status}>
              <div>
                <ColorCard color="#fdd866">
                  <ClimeCard />
                </ColorCard>
              </div>

              <TemperatureChart></TemperatureChart>
            </div>
          </Card>
        </div>
        <div className={styles.ferti_overview}>
          <Card title="Ferti Overview">
            <div className={styles.ferti_container}>
              <div className={styles.ferti_card}>
                <ColorCard
                  color="#8cddb0"
                  title="Next Fertilization"
                  textcolor="white"
                >
                  <FertilizationCard />
                </ColorCard>
              </div>
              <div className={styles.ferti_chart}>
                <FertiChart />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default DashboardContainer;
