
import { useParams } from 'react-router-dom';

import { BASE_URL, getData } from './../../utils/api';

const View = (props) => {
  const { id } = useParams();
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