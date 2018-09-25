import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';

import TaskCreator from './TaskCreator';

import '../styles/style.sass';

const App = () => (
    <div>
        <TaskCreator />
    </div>
);

render( <App />, document.getElementById('root') );