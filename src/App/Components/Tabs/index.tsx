import React from 'react';
import '../../scss/tab.scss';

interface ITabsProps {
    tabs: any,
}
class Tabs extends React.Component<ITabsProps, any> {
    constructor(props:ITabsProps) {
        super(props);
        this.state = {};
    }

    renderTabs() {
        const { tabs } = this.props;
        return (
            <div className="tab-main-box">
                {
                    tabs.map((tab:any) => (
                        <div
                            role="button"
                            tabIndex={0}
                            className="tab"
                            key={tab.tab}
                            onClick={() => { window.location.href = tab.route; }}
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
export default Tabs;
