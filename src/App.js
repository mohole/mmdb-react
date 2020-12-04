import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Alert } from './components/Alert';
import { Home } from './components/Home';
import { Add } from './components/Add';

import 'normalize.css';
import './App.css';

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const hideAlert = () => setShowAlert(false);

  return (
    <div className="App">
      <Alert visible={showAlert} clicked={hideAlert} />

      <Router>
        <Link to="/">
          <h1>Mohole Movie Database</h1>
        </Link>

        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </Router>

    </div>
  );
}

export default App;
