
import MoviesCard from "../MoviesCard/MoviesCard";

export default function SavedMovies() {
  return (
      <section className="cardlist">
        <ul className="cardlist__container">
            <MoviesCard isSaved={true}/>
            <MoviesCard isSaved={true}/>
            <MoviesCard isSaved={true}/>
          </ul>
      </section>
  );
}