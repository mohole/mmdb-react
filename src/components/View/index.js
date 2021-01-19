
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { BASE_URL, getData } from './../../utils/api';
import { AppContext } from './../../utils/state';

const View = (props) => {
  const { dispatch } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: 'update-current', payload: id });
  }, []);

  const dataReady = props.dataReady || function () {
    console.warn('MMDB: no dataReady callback has been passed to the <View /> component!')
  };

  if (!props.item) {
    getData(`${BASE_URL}/movies/${id}`)
      .then((data) => dataReady(data));
  }

  return (
    <section>
      <h3>View</h3>
      <p>Viewing element with id {id}</p>
    </section>
  )
}

export {
  View
}