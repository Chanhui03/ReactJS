import { useEffect } from "react";
import { useParams } from "react-router-dom";

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

function Detail() {
  const { id } = useParams();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };
  const getMovie = async () => {
    const detailUrl = `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`;
    const json = await (await fetch(detailUrl, options)).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
