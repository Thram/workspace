/**
 * Created by thram on 21/01/17.
 */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// Server rendering support
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import { Group } from './components/pure';
import { Todo, Mocks, Icons } from './views';
import todoApp from './reducers';
import './styles/main.css';

const store = createStore(todoApp);

const App = () => (
  <Provider store={store}>
    <Router>
      <Group container style={{ padding: '2rem' }}>
        <h2>Examples</h2>
        <div>
          <NavLink to="/" style={{}}>Home</NavLink>
          <NavLink to="/mocks">Mocks</NavLink>
          <NavLink to="/icons">Icons</NavLink>
        </div>
        <Route exact path="/" component={Todo} />
        <Route exact path="/mocks" component={Mocks} />
        <Route exact path="/icons" component={Icons} />
      </Group>
    </Router>
  </Provider>
);

export default App;