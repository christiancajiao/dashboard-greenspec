import { useMemo } from "react";
import style from "./FertiChart.module.scss";
import { useData } from "../../../Hooks/useData";

function Container({ percentage, color, name }) {
  return (
    <div className={style.container_ind}>
      <div className={style.sub_container} style={{ borderColor: color }}>
        <div
          className={style.amount}
          style={{ backgroundColor: color, height: percentage }}
        >
          {name}
        </div>
      </div>
      <div className={style.container_line}>
        <div className={style.line}></div>
      </div>
    </div>
  );
}
export default function FertiChart() {
  const { dataUser } = useData();
  const fertilizerStock = useMemo(
    () => dataUser[0]?.fertilizerStock || [],
    [dataUser]
  );
  return (
    <div>
      <div className={style.container}>
        {fertilizerStock.map((stock, index) => {
          return (
            <Container
              key={index}
              color={stock.color}
              name={stock.type}
              percentage={`${stock.stock}%`}
            ></Container>
          );
        })}
      </div>
    </div>
  );
}
