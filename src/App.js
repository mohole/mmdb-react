import { useEffect, useReducer } from 'react';
import {
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import { INIT_STATE, reducer } from './utils/state';

import { Alert } from './components/Alert';
import { Home } from './components/Home';
import { Add } from './components/Add';
import { View } from './components/View';

import 'normalize.css';
import './App.css';

function App() {
  // const [showAlert, setShowAlert] = useState(false);
  // const hideAlert = () => setShowAlert(false);

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();

  const hideAlert = () => dispatch({ type: 'hide-alert' });
  const updateData = (data) => dispatch({
    type: 'data-ready',
    payload: data
  });

  useEffect(() => {
    dispatch({ type: 'clear-current' });
  }, [location]);

  return (
    <div className="App">
      <Alert visible={state.alert.visible} dismiss={hideAlert} />

      <Link to="/">
        <h1>Mohole Movie Database</h1>
      </Link>

      <Switch>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/view/:id">
          <View />
        </Route>
        <Route path="/">
          <Home items={state.filters} dataReady={updateData} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
