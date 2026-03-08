import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, poster_path, title, overview, genre_ids }) {
  return (
    <div>
      <img src={poster_path} alt="title" />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{overview}</p>
      <ul>{genre_ids}</ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
