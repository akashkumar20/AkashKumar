import React from 'react';
import '../../scss/tab.scss'
class Tabs extends React.Component{
    constructor(props){
        console.log(props)
        super(props);
        this.state={};
    }

    renderTabs(){
        const { tabs } = this.props;
        return(
            <div className="tab-main-box">
                {
                    tabs.map((tab) => (
                        <div className="tab" key={tab.tab}>
                            <span>{tab.tab}</span>
                        </div>
                        )
                    )
                }
            </div>
        )
    }

    render(){
        const { tabs } = this.props;
        if(tabs.length !== 0){
            return(
                <div>
                    {this.renderTabs()}
                </div>
            );
        }
        return <></>;
    }
}
export default Tabs;