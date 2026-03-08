import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

  const url = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`;
  const genreUrl =
    "https://api.themoviedb.org/3/genre/movie/list?language=ko-KR";
  const imageUrl = "https://image.tmdb.org/t/p/w200";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  const getMovies = async () => {
    const movieJson = await (await fetch(url, options)).json();
    setMovies(movieJson.results);
  };
  const getGenres = async () => {
    const genresJson = await (await fetch(genreUrl, options)).json();
    console.log(genresJson);
    const map = {};
    genresJson.genres.forEach((genreIndex) => {
      map[genreIndex.id] = genreIndex.name;
    });
    setGenre(map);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              poster_path={imageUrl + movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              genre_ids={movie.genre_ids
                .map((id) => <li key={id}>{genre[id]}</li>)
                .filter(Boolean)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
