import style from "./FertiChart.module.scss";

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
  return (
    <div>
      <div className={style.container}>
        <Container color="#fdd866" name="Special" percentage="70%"></Container>
        <Container color="#a8d18c" name="A1" percentage="88%"></Container>
        <Container color="#c5e0b5" name="A2" percentage="85%"></Container>
        <Container color="#589bd8" name="B1" percentage="90%"></Container>
        <Container color="#9dc3e6" name="B2" percentage="100%"></Container>
      </div>
    </div>
  );
}
