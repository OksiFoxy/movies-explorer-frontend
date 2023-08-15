import "./SearchForm.css";

export default function SearchForm() {
  return (
    <section>
      <form className="searchform">
        <div className="searchform__container">
          <div className="searchform__icon"></div>
          <div className="searchform__input-container">
            <input
              type="text"
              className="searchform__input"
              placeholder="Фильм"
              name="search"
              required
            />
            <button type="submit" className="searchform__button-submit">
              Найти
            </button>
          </div>
          <div className="searchform__vertical-line"></div>
          <div className="searchform__shorts-container">
              <label className="searchform__switch-box">
                <input className="searchform__switch_input" type="checkbox" />
                <span className="searchform__switch_slider"></span>
              </label>
            <span className="searchform__shorts-text">Короткометражки</span>
          </div>
        </div>
      </form>
      <div className="searchform__line"></div>
    </section>
  );
}

