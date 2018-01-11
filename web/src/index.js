import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import history from './history';
import registerServiceWorker from './registerServiceWorker';
import Welcome from './containers/Welcome';
import Diary from './containers/Diary';

ReactDOM.render(
    <Router history={history}>
      <div>
        <Route exact path="/" component={Welcome}></Route>   
        <Route path="/diary" name="diary" component={Diary}></Route>     
      </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();