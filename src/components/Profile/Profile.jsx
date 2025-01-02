import style from "./Profile.module.scss";
import badge from "../../assets/badge.svg";
import { useData } from "../../Hooks/useData";

export default function Profile() {
  const { data } = useData();

  return (
    <section className={style.section_container}>
      <h1>Profile</h1>
      <div className={style.table}>
        <div className={style.img_container}>
          <img src={badge} />
        </div>
        <div className={style.info}>
          <div className={style.info_content}>
            <span>Name:</span>
            <span>{data?.user?.name}</span>
          </div>
          <div className={style.info_content}>
            <span>Email:</span>
            <span>{data?.user?.email}</span>
          </div>
          <div className={style.info_content}>
            <span>Location:</span>
            <span>somewhere</span>
          </div>
        </div>
      </div>
    </section>
  );
}
