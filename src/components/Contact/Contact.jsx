import style from "./Contact.module.scss";
import contact from "../../assets/contact_mail.svg";
import { useContext } from "react";
import { DataContext } from "../../Providers/DataProvider/DataProvider";

export default function Contact() {
  const { dataUser } = useContext(DataContext);

  return (
    <section className={style.section_container}>
      <h1>Contact</h1>
      <div className={style.table}>
        <div className={style.img_container}>
          <img src={contact} />
        </div>
        <div className={style.info}>
          <div className={style.info_content}>
            <span>Phone Number:</span>
            <span>4444-444-4444-44</span>
          </div>

          <div className={style.info_content}>
            <span>Address:</span>
            <span>somewhere</span>
          </div>
        </div>
      </div>
    </section>
  );
}
