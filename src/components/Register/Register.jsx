// Register (почти аналогично логину + показать сообщение, что регистрация успешна).
import { Link } from 'react-router-dom';
import "./Register.css";

export default function Register() {

  return (
    <section className="register">
      <Link to="/" className="register__logo-link">
        <div className="register__logo"></div>
      </Link>
      <h3 className="register__title">Добро пожаловать!</h3>
      <form className="register__form" name="register">
        <label className="register__input-label">
          Имя
        </label>
        <input
            className="register__input"
            type="Имя"
            placeholder="Оксана"
            required />
        <span className="register__error"></span>
        <label className="register__input-label">
          E-mail
        </label>
        <input
            className="register__input"
            type="email"
            placeholder="pochta@yandex.ru"
            required>
          </input>
        <span className="register__error"></span>
        <label className="register__input-label">
          Пароль
        </label>
        <input
            className="register__input"
            type="password"
            placeholder="Пароль"
            required
        />
        <span className="register__error">Что-то пошло не так...</span>
        
        <button className="register__submit">Зарегистрироваться</button>
      </form>
      <p className="register__text">Уже зарегистрированы?
        <Link to="/signin" className="register__link">Войти</Link>
      </p>
    </section>
  );
};
