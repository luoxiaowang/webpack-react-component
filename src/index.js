import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router';
import {createHashHistory, useBasename } from 'history';

const history = useBasename(createHashHistory)({});
history.__v2_compatible__ = true;

// Render the main component into the dom

import App from './components/Main';
import TodoList from './components/todolist/index';

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App}></Route>
    <Route path="todolist" component={TodoList}></Route>
  </Router>,
  document.getElementById('app')
);
