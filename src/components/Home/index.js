// import { useState, useEffect } from 'react';           | useState() version
import { useEffect, useContext } from 'react';
import { Link } from "react-router-dom";

import { Card } from './../Card';
import { BASE_URL, getData } from './../../utils/api';
import { AppContext } from './../../utils/state';

import styles from './styles.module.scss';

const Home = (props) => {
  //const [items, setItems] = useState([]);               | useState() version
  const { state, dispatch } = useContext(AppContext);     // Get state and dispatch() from global context

  useEffect(() => {
    getData(`${BASE_URL}/movies`)
      //.then((data) => setItems(data));                  | useState() version
      .then((data) => dispatch({
        type: 'data-ready',
        payload: data
      }));
  }, [dispatch]);

  const list = () => state.data.map((item, i) => {
    const path = `/view/${item.id}`;
    const edit = `/edit/${item.id}`;

    return (
      <li key={item.id} >
        <Card title={item.title} link={path} image={item.poster} edit={edit} />
      </li>
    );
  });

  return (
    <section>
      <Link to="/add">
        <a className="btn btn-primary" href="/add" role="button">
          Add new movie to the database
        </a>
      </Link>
      <h3>List of movies</h3>
      <ul className={styles.movieList}>
        {list()}
      </ul>
    </section>
  )
}

export default Home;