import { useContext } from "react";
import style from "./Profile.module.scss";
import { DataContext } from "../../Providers/DataProvider/DataProvider";
import badge from "../../assets/badge.svg";

export default function Profile() {
  const { dataUser } = useContext(DataContext);

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
            <span>{dataUser.user.name}</span>
          </div>
          <div className={style.info_content}>
            <span>Email:</span>
            <span>{dataUser.user.email}</span>
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
