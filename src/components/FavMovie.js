import { useDispatch, useSelector } from "react-redux";
import { setMovieListem } from "../store/movieRedux";

export default function FavMovie() {
  const movieListem = useSelector((state) => state.movie.movieListem);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    const newList = movieListem.filter((_, i) => i !== index);
    dispatch(setMovieListem(newList));
  };

  return (
    <>
      {movieListem.map((movie, index) => (
        <div
          key={movie.id}
          className="flex p-3 pl-4 bg-white mb-2 shadow items-center group"
        >
          <div className="pr-4 flex-1">{movie.title}</div>
          <button
            onClick={() => handleDelete(index)}
            className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
          >
            Çıkar
          </button>
        </div>
      ))}
    </>
  );
}
