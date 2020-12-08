
import { Link } from "react-router-dom";

import { BASE_URL, getData } from './../../utils/api';

const Home = (props) => {
  const items = props.items || [];
  const dataReady = props.dataReady || function () {
    console.warn('MMDB: no dataReady callback has been passed to the <Home /> component!')
  };

  if (!items.length) {
    getData(`${BASE_URL}/movies`)
      .then((data) => dataReady(data) );
  }

  const list = () => items.map((item, i) => {
    const path = `/view/${item.id}`;

    return (
      <Link to={path} key={item.id}>
        <li key={item.id}>{item.title}</li>
      </Link>
    );
  });

  return (
    <section>
      <h3>home</h3>
      <ul>
        {list()}
      </ul>
    </section>
  )
}

export {
  Home
}