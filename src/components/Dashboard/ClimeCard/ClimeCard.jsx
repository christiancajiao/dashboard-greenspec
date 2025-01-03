import styles from "./ClimeCard.module.scss";
import sun from "../../../assets/sunny.svg";
import { useData } from "../../../Hooks/useData";

function ClimeCard() {
  const { dataUser } = useData();

  function averageLigthIntensity(climateOverview) {
    const totalLightIntensity = climateOverview.reduce((total, entry) => {
      return total + (entry.lightIntensity || 0);
    }, 0);
    return Math.floor(totalLightIntensity / climateOverview.length || 0);
  }
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>Ligth Intensity</h3>
      </div>
      <div className={styles.content}>
        <img src={sun} />
        <div className={styles.content_text}>
          <div className={styles.text1}>
            {averageLigthIntensity(dataUser[0].climateOverview)}
          </div>
          <div className={styles.text2}>Watts</div>
        </div>
      </div>
    </div>
  );
}

export default ClimeCard;
