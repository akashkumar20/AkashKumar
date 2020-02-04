import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AboutMe from './App/Screens/AboutMe';

ReactDOM.render(
    <BrowserRouter basename="/aboutMe">
        <AboutMe />
    </BrowserRouter>,
    document.querySelector('#aboutMe'),
);
