import { useData } from "../../../Hooks/useData";
import styles from "./FertilizationCard.module.scss";

function FertilizationCard() {
  const { dataUser } = useData();

  const nextDates = dataUser[0]?.nextFertilization;
  return (
    <div className={styles.container}>
      {nextDates.map((date, index) => {
        return (
          <div className={index > 0 && index ? styles.line : null}>
            <div className={styles.top_text}>{date?.month}</div>
            <div className={styles.bottom_text}>{date?.day}</div>
          </div>
        );
      })}
    </div>
  );
}

export default FertilizationCard;
