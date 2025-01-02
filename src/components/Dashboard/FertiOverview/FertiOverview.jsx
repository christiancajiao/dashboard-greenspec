import Card from "../Card/Card";
import ColorCard from "../ColorCard/ColorCard";
import FertiChart from "../FertiChart/FertiChart";
import FertilizationCard from "../FertilizationCard/FertilizationCard";
import styles from "./FertiOverview.module.scss";

function FertiOverview() {
  return (
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
  );
}
export default FertiOverview;
