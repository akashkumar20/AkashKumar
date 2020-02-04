import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MyPortfolio from './App/Screens/MyPortfolio';

ReactDOM.render(
    <BrowserRouter basename="/myPortfolio">
        <MyPortfolio />
    </BrowserRouter>,
    document.querySelector('#portfolio'),
);
