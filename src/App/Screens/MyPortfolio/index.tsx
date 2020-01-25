import React from 'react';
// import Tribe from '../../Components/website/tribe';

// import * as js from './app.bundle.js';

// const test = `<div>${Trbe}</div>`;
// eslint-disable-next-line import/no-unresolved
// import App from 'tribeman';

// import InnerHTML from 'dangerously-set-html-content';

// const html = require('../../Components/website/tribe/index.html');

// const temp = { __html: html };
// const data = temp._;
class MyPortfolio extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        // console.log(js);
        return (
        // eslint-disable-next-line react/no-danger
            // <div>
            //     <App />
            // </div>
            // <div dangerouslySetInnerHTML={temp} />
            // <InnerHTML html={temp} />
            <div className="websites">
                {/* <Tribe /> */}
                <iframe width="1024" height="768" title="tribe" src="https://akashkumar20.github.io/tribe/" />
                <iframe width="1024" height="768" title="akashkumar" src="https://akashkumar20.github.io/akashkumar/" />
            </div>
        );
    }
}
export default MyPortfolio;
