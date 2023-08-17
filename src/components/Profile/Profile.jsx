import "./Profile.css";
import { Link } from 'react-router-dom';

function Profile() {

  return (
    <section className="profile">
      <h3 className="profile__title">Привет, Оксаана!</h3>
      <form className="profile__form">
        <div className="profile__input_container">
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
        <div className="profile__input_container">
          <label className="profile__input-label">
            E-mail
          </label>
          <input
            type="text"
            className="profile__input"
            placeholder="shishova.oksana2017@yandex.ru"
          />
        </div>
        <button className="profile__submit">Редактировать</button>
      </form>
      <Link to="/" className="profile__logout_btn">Выйти из аккаунта</Link>
    </section>
  );
}

export default Profile;