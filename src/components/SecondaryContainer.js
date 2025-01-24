import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.addNowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 relative">
          <MovieList
            title={"Now Playing"}
            movies={movies.addNowPlayingMovies}
          />
        </div>
        {/* <MovieList title={"Trending"} movies={movies.addNowPlayingMovies} /> */}
        <MovieList title={"Popular"} movies={movies.addPopularMovies} />
        <MovieList title={"Top Rated"} movies={movies.addTopRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.addUpcomingMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
