import PropTypes from "prop-types";

function Movie({ poster_path, title, overview, genre_ids }) {
  return (
    <div>
      <img src={poster_path} alt="title" />
      <h2>{title}</h2>
      <p>{overview}</p>
      <ul>{genre_ids}</ul>
    </div>
  );
}

export default Movie;
