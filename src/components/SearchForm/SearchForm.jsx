import "./SearchForm.css";

export default function SearchForm() {
  return (
    <section className="searchform">
      <form className="searchform__form">
        <span className="searchform__form_icon"></span>
        <div className="searchform__form_input-container">
          <input
            type="text"
            className="searchform__input"
            placeholder="Фильм"
            name="search"
            required
          />
          <span className="searchform__error">Что то не так</span>
          <button type="submit" className="searchform__submit">
            Найти
          </button>
        </div>
        <div className="searchform__vertline"></div>
        <div className="searchform__switch">
          <div>
            <label className="searchform__switch_checkbox">
              <input className="searchform__switch_input" type="checkbox" />
              <span className="searchform__switch_slider"></span>
            </label>
          </div>
          <span className="searchform__switch-text">Короткометражки</span>
        </div>
      </form>
      <div className="searchform__line"></div>
    </section>
  );
}

