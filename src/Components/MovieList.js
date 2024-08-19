import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="px-5">
        <h1 className="text-2xl text-white py-6 font-medium">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex ">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterpath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
