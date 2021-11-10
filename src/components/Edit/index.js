

import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { BASE_URL, getData } from './../../utils/api';
import { AppContext } from './../../utils/state';

const Edit = () => {
  const state = {
    title: '',
    poster: '',
    year: 0,
    description: ''
  }

  const { dispatch } = useContext(AppContext);  // Get dispatch() from global context
  const year = new Date().getFullYear();        // "Calculate" current year
  const history = useNavigate();                 // Force routing from JS code without a component
  const { id } = useParams();                   // get the "id" paramter from the routing
  const [movie, setMovie] = useState(state);

  useEffect(() => {
    getData(`${BASE_URL}/movies/${id}`)
      .then((data) => setMovie(data));
  }, [id]);

  // Same as the "Add" form, but handled with useState instead of useReducer
  const changeHandler = (event) => {
    const value = event.target.value;

    // Switch case is similar to multiple IFs
    switch (event.target.name) {
      case 'title':
        const updateTitle = { ...movie, title: value }
        setMovie(updateTitle);
        break;
      case 'year':
        const updateYear = {...movie, year: parseInt(value)}
        setMovie(updateYear);
        break;
      case 'poster':
        const updatePoster = { ...movie, poster: value }
        setMovie(updatePoster);
        break;
      case 'description':
        const updateDescr = { ...movie, description: value }
        setMovie(updateDescr);
        break;
      default:
        break;
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();

    // POST data to the backend
    fetch(`${BASE_URL}/movies/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
      .then((response) => response.json())
      // If success, nothing happens, just a console.log
      .then((data) => {
        console.log(data);
      })
      // If fetch fails, display a message through the global alert component
      .catch((err) => {
        dispatch({
          type: 'show-alert',
          payload: 'There was an error... check the console'
        });
        console.error(err);
      });
  }

  const deleteHandler = () =>{
    // DELETE an entry from the backend
    fetch(`${BASE_URL}/movies/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      // If success navigate back to home page
      .then((data) => {
        console.log(data);
        history.push('/');
      })
      // If fetch fails, display a message through the global alert component
      .catch((err) => {
        dispatch({
          type: 'show-alert',
          payload: 'There was an error... check the console'
        });
        console.error(err);
      });
  }

  return (
    <section>
      <h3>Edit or delete movie</h3>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Movie title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="ex: Into the wild"
            value={movie.title}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">Year</label>
          <input
            type="number"
            min="1800" max={year} step="1"
            className="form-control"
            name="year"
            value={movie.year}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="poster" className="form-label">Link to poster image</label>
          <input
            type="text"
            placeholder="ex: https://www.domain.com/image.jpg"
            className="form-control"
            name="poster"
            value={movie.poster}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Link to poster image</label>
          <textarea className="form-control" name="description"
            value={movie.description}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <div className="btn-group" role="group" aria-label="Form actions">
            <button className="btn btn-primary">
              Edit Movie
            </button>
            <Link to="/">
              <button type="button" className="btn btn-outline-primary">
                Go back to main page
              </button>
            </Link>
            <button className="btn btn-danger" onClick={deleteHandler}>
              Delete Movie
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Edit;