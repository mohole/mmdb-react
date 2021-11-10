
import { useReducer, useContext } from 'react';
import { useNavigate, Link } from "react-router-dom";

import { BASE_URL } from './../../utils/api';
import { AppContext } from './../../utils/state';

// Local reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'update-title':
      return { ...state, title: action.payload };
    case 'update-year':
      const year = parseInt(action.payload);
      return { ...state, year };
    case 'update-poster':
      return { ...state, poster: action.payload };
    case 'update-description':
      return { ...state, description: action.payload };
    default:
      return state;
  }
}

const Add = () => {
  const { dispatch } = useContext(AppContext);  // Get dispatch() from global context
  const year = new Date().getFullYear();        // "Calculate" current year
  const history = useNavigate();                 // Force routing from JS code without a component

  // Local state
  const formState = {
    title: '',
    poster: '',
    description: '',
    year
  }

  const [state, dispacth] = useReducer(reducer, formState);

  const changeHandler = (event) => {
    const value = event.target.value;

    // Switch case is similar to multiple IFs
    switch (event.target.name) {
      case 'title':
        dispacth({ type: 'update-title', payload: value });
        break;
      case 'year':
        dispacth({ type: 'update-year', payload: value });
        break;
      case 'poster':
        dispacth({ type: 'update-poster', payload: value });
        break;
      case 'description':
        dispacth({ type: 'update-description', payload: value });
        break;
      default:
        break;
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();

    // POST data to the backend
    fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
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
      <h3>Add a new movie</h3>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Movie title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="ex: Into the wild"
            value={state.title}
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
            value={state.year}
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
            value={state.poster}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Link to poster image</label>
          <textarea className="form-control" name="description"
            value={state.description}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <div className="btn-group" role="group" aria-label="Form actions">
            <button className="btn btn-primary">
              Create new entry
            </button>
            <Link to="/">
              <button type="button" className="btn btn-outline-primary">
                Go back to main page
              </button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Add;