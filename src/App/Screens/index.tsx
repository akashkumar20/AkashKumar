import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Tabs from '../Components/Tabs';
import Home from './Home';
import AboutMe from './AboutMe';
// import ContactMe from './ContactMe';
import MyPortfolio from './MyPortfolio';

interface IContainerProps {}
class Container extends React.Component<IContainerProps, any> {
    constructor(props:IContainerProps) {
        super(props);
        this.state = {
            active: 0,
        };
    }

    onClick(i:number) {
        this.setState((pre:any) => ({
            ...pre,
            active: i,
        }));
    }

    renderTabs() {
        // const { tabs, history } = this.props;
        const { active } = this.state;
        const tabs = [
            {
                tab: 'Home',
                route: '/',
            },
            // {
            //     tab: 'ContactMe',
            //     route: 'contactMe',
            // },
            {
                tab: 'MyPortfolio',
                route: 'myPortfolio',
            },
            {
                tab: 'About Me',
                route: 'aboutMe',
            },
        ];
        return (
            <div className="tab-main-box">
                {
                    tabs.map((tab:any, i:number) => (
                        <div
                            role="button"
                            tabIndex={0}
                            className={`tab ${active === i ? 'active' : ''}`}
                            key={tab.tab}
                            onClick={() => this.onClick(i)}
                            onKeyPress={() => (console.log())}
                        >
                            <span>{tab.tab}</span>
                        </div>
                    ))
                }
            </div>
        );
    }

    renderComponent() {
        const { active } = this.state;
        if (active === 1) {
            return <MyPortfolio />;
        }
        if (active === 2) {
            return <AboutMe />;
        }
        return <Home />;
    }

    render() {
        // const background = 'https://i.pinimg.com/originals/b1/55/ce/b155cec4a811dd6c8a840a89e0c03fb0.jpg';
        return (
            <div className="container">
                <div>
                    {this.renderTabs()}
                </div>
                {/* <BrowserRouter>
                    <Switch>
                        <Route exact path="/AkashKumar" component={Home} />
                        <Route exact path="/contactMe" component={ContactMe} />
                        <Route exact path="/AkashKumar/myPortfolio" component={MyPortfolio} />
                        <Route exact path="/AkashKumar/aboutMe" component={AboutMe} />
                    </Switch>
                </BrowserRouter> */}
                {this.renderComponent()}
            </div>
        );
    }
}

export default Container;
