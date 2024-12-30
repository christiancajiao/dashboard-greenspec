import style from "./Profile.module.scss";

export default function Profile() {
  return (
    <section className={style.section_container}>
      <div className={style.section}>
        <h1>Profile</h1>
        <div>
          <p>Profile route</p>
        </div>
      </div>
    </section>
  );
}
