
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { BASE_URL, getData } from './../../utils/api';

import styles from './styles.module.scss';

const View = () => {
  const state = {
    title: '',
    poster: '',
    year: 0,
    description: ''
  }

  const [movie, setMovie] = useState(state);
  // get the "id" paramter from the routing
  const { id } = useParams();                 

  useEffect(() => {
    getData(`${BASE_URL}/movies/${id}`)
      .then((data) => setMovie(data));
  }, [id]);


  return (
    <section className={styles.movieDetails}>
      <h3>{movie.title}</h3>
      <div className="row">
        <div className="col-sm-4">
          <img src={movie.poster} alt={movie.title} />
        </div>
        <div className="col-sm-8">
          <p><strong>Year:</strong> {movie.year}</p>
          <h4>Description</h4>
          <p>{movie.description}</p>
        </div>
        <div className="col-sm-12">
          <Link to="/">
            <button type="button" className="btn btn-outline-primary">
              Go back to main page
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default View;