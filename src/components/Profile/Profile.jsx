import "./Profile.css";

function Profile() {

  return (
    <section className="profile">
      <h3 className="profile__title">Привет, Оксана!</h3>
      <form className="profile__form">
          <div className="profile__input-container">
            <label className="profile__input-label">
              Имя
            </label>
            <input
              className="profile__input"
              type="text"
              placeholder="Оксана"
            />
          </div>
          <div className="profile__line"></div>
          <div className="profile__input-container">
            <label className="profile__input-label">
              E-mail
            </label>
            <input
              type="text"
              className="profile__input"
              placeholder="Email"
            />
          </div>
          <button className="profile__submit">Редактировать</button>
        </form>
        <button className="profile__logout-btn">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;