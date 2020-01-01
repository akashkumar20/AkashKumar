import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Tabs from '../Components/Tabs';
import Home from './Home';
import ContactMe from './ContactMe';

interface IContainerProps {}
class Container extends React.Component<IContainerProps> {
    constructor(props:IContainerProps) {
        super(props);
        this.state = {};
    }

    render() {
        const tabs = [
            {
                tab: 'Home',
                route: '/',
            },
            {
                tab: 'ContactMe',
                route: 'contactMe',
            },
        ];
        // const background = 'https://i.pinimg.com/originals/b1/55/ce/b155cec4a811dd6c8a840a89e0c03fb0.jpg';
        return (
            <div className="container">
                <Tabs tabs={tabs} />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contactMe" component={ContactMe} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Container;
