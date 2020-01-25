/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-string-refs */
import React from 'react';

import '../../scss/home.scss';

class Home extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="home">
                <h3>
                    Hey you.... Hi....
                </h3>
            </div>
        );
    }
}

export default Home;
