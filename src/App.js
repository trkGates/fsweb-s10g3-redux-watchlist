import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useSelector, useDispatch } from "react-redux";
import { sonrakiFilm } from "./store/sira";
import { setMovieListem } from "./store/movieRedux";

function App() {
  const { movieMevcut, movieListem } = useSelector((state) => state.movie);
  console.log("Fav Eklenenler", movieListem);
  const favMovies = [...movieListem];

  const sira = useSelector((state) => state.sira.sira);
  const dispatch = useDispatch();

  const isFilmListede = movieListem.some(
    (movie) => movie.id === movieMevcut.id
  ); // Eğer film movieListem'de varsa true, yoksa false

  console.log(sira);
  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie />

          <div className="flex gap-3 justify-end py-3">
            <button
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              onClick={() => dispatch(sonrakiFilm())}
            >
              Sıradaki
            </button>
            <button
              onClick={() => {
                dispatch(setMovieListem([...movieListem, movieMevcut]));
              }}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
              disabled={isFilmListede} // Eğer film movieListem'de varsa devre dışı bırak
            >
              {isFilmListede ? "Listede" : "Listeye Ekle"}
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            <FavMovie />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
