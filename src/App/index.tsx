import React from 'react';

import Container from './Screens';
import './scss/mixins.scss';

interface IAppsProps {}
class App extends React.Component<IAppsProps> {
    constructor(props:IAppsProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Container />
            </div>
        );
    }
}

export default App;
