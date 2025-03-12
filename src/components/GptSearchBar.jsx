import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/GptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  //search movie in TMDB
  const searchMoveTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearch = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query :" +
      searchText.current.value +
      ".Only give names of five movies, comma separated.";
    //Make API call to GPT API and get movie results
    const gptResults = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [{ role: "user", content: gptQuery }],
    });

    if (!gptResults.choices) {
      //error handling here
    }
    console.log(gptResults.choices[0]?.message?.content);

    const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    console.log(gptMovies);

    //for each movie search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMoveTMDB(movie));
    //[promies,promise,promise,promise,promise]
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%]  flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12 bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="bg-red-700 py-2 px-4 text-white rounded-lg col-span-3 m-4"
          onClick={handleGPTSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
