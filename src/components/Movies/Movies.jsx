import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies() {
  return (
    <main>
      <section className="movies">
        <MoviesCardList />
      </section>
    </main>
  );
}
