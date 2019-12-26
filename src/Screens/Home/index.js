import React from 'react';

import '../../scss/home.scss'
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            url:"https://i.pinimg.com/originals/b1/55/ce/b155cec4a811dd6c8a840a89e0c03fb0.jpg",
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUpdate(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(e){
        console.log(e);
        let scrollTop = e.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);
        console.log(scrollTop, itemTranslate)
        this.setState((pre) =>({
            ...pre,
            url: "https://i.pinimg.com/originals/91/2f/82/912f8214449d625e8e3d4ba70c51416e.jpg",
        }))
    }

    render(){
        const { url } = this.state;
        return(
            <div>
                <div className="home" style={{backgroundImage:`url(${url})`}}>
                    <h1>
                        Home
                    </h1>
                </div>
                <div className="home"style={{backgroundImage:`url(${url})`}}>
                    hello
                </div>
            </div>
        );
    }
}

export default Home;