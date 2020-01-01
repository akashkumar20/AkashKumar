import React from 'react';

import '../../scss/home.scss';

interface IHomeProps{}
interface IHomeState{
    url: string,
}
class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props:IHomeProps) {
        super(props);
        this.state = {
            url: 'https://i.pinimg.com/originals/b1/55/ce/b155cec4a811dd6c8a840a89e0c03fb0.jpg',
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    // componentWillMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    // componentWillUpdate() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

    handleScroll(e:any) {
        console.log(e);
        const { scrollTop } = e.srcElement.body;
        const itemTranslate = Math.min(0, scrollTop / 3 - 60);
        console.log(scrollTop, itemTranslate);
        this.setState(pre => ({
            ...pre,
            url: 'https://i.pinimg.com/originals/91/2f/82/912f8214449d625e8e3d4ba70c51416e.jpg',
        }));
    }

    render() {
        // const { url } = this.state;
        return (
            <div>
                <div className="home">
                    <h1>
                        Home
                    </h1>
                </div>
            </div>
        );
    }
}

export default Home;
