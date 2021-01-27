import { useReducer, Suspense, lazy } from 'react';
import { Switch, Route, Link } from "react-router-dom";

import { INIT_STATE, reducer, AppContext } from './utils/state';

import { Alert } from './components/Alert';

import 'normalize.css';
import './App.css';

// "Loading in progress" component
const Loading = () => <div>Loading...</div>;
// Lazy loading wrapper componnents for page components
const LazyHome = lazy(() => import('./components/Home'));
const LazyView = lazy(() => import('./components/View'));
const LazyAdd = lazy(() => import('./components/Add'));
const LazyEdit = lazy(() => import('./components/Edit'));

function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const hideAlert = () => dispatch({ type: 'hide-alert' });

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="App container">
        <Alert visible={state.alert.visible} 
          message={state.alert.message} 
          dismiss={hideAlert} 
        />

        <Link to="/">
          <h1>Mohole Movie Database</h1>
        </Link>

        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/add" component={LazyAdd} />
            <Route path="/view/:id" component={LazyView} />
            <Route path="/edit/:id" component={LazyEdit} />
            <Route exact path="/" component={LazyHome} />
          </Switch>
        </Suspense>

      </div>
    </AppContext.Provider>
  );
}

export default App;
