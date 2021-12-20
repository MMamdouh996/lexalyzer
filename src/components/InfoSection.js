
import React from "react";
import NavigationBar from "./NavigationBar";

class InfoSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
        };
        this.onSwitch = this.onSwitch.bind(this);
    }
    render() {

        return <div className="info-section">
            <NavigationBar switchCallback={this.onSwitch}/>
        </div>
    }

    onSwitch(tabNumber){

    }


}

export default InfoSection;