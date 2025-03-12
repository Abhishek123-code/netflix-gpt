import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addvideoTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideos = useSelector((store) => store.movies.videoTrailer);

  //fetch trailer
  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addvideoTrailer(trailer));
  };

  useEffect(() => {
    !trailerVideos && getTrailer();
  }, []);
};

export default useMovieTrailer;
