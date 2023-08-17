import "./SavedMovies.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function SavedMovies() {
  return (
    <main className="cardlist">
      <ul className="cardlist__container cardlist__container-type-saved">
        <MoviesCard isSaved={true} />
        <MoviesCard isSaved={true} />
        <MoviesCard isSaved={true} />
      </ul>
    </main>
  );
}