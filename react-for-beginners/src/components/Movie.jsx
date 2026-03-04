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

Movie.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(string).isRequired,
};

export default Movie;
