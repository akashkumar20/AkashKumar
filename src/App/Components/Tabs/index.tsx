import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import '../../scss/tab.scss';

interface ITabsProps extends RouteComponentProps {
    tabs: any,
}
class Tabs extends React.Component<ITabsProps, any> {
    constructor(props:ITabsProps) {
        super(props);
        this.state = {
            active: 0,
        };
    }

    componentDidMount() {
        const { history: { location: { pathname } }, tabs } = this.props;
        const split = pathname.split('/')[1];
        tabs.forEach((el:any, i:number) => {
            if (split === el.route) {
                this.setState((pre: any) => ({
                    ...pre,
                    active: i,
                }));
            }
        });
    }

    renderTabs() {
        const { tabs, history } = this.props;
        const { active } = this.state;
        return (
            <div className="tab-main-box">
                {
                    tabs.map((tab:any, i:number) => (
                        <div
                            role="button"
                            tabIndex={0}
                            className={`tab ${active === i ? 'active' : ''}`}
                            key={tab.tab}
                            onClick={() => { history.push(`/AkashKumar/${tab.route}`); }}
                            onKeyPress={() => (console.log())}
                        >
                            <span>{tab.tab}</span>
                        </div>
                    ))
                }
            </div>
        );
    }

    render() {
        const { tabs } = this.props;
        if (tabs.length !== 0) {
            return (
                <div>
                    {this.renderTabs()}
                </div>
            );
        }
        return <></>;
    }
}
export default withRouter(Tabs);
