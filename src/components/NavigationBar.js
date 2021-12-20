
import React from "react";
import { Braces, ExclamationCircle, Table } from "react-bootstrap-icons";
import "./InfoSection.css";
class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return <div className="navigation-bar">
            <div className={this.props.activeTab == 'tokens' ? "navigation-button active" : "navigation-button"} onClick={() => this.props.switchCallback('tokens')}>
                <Braces className="navigation-button-icon" size={25} />
            </div>
            <div className={this.props.activeTab == 'symbol-table' ? "navigation-button active" : "navigation-button"} onClick={() => this.props.switchCallback('symbol-table')}>
                <Table className="navigation-button-icon" size={25} />
            </div>
            <div className={this.props.activeTab == 'errors' ? "navigation-button active" : "navigation-button"} onClick={() => this.props.switchCallback('errors')}>
                <ExclamationCircle className="navigation-button-icon" size={25} />
            </div>
        </div>
    }


}

export default NavigationBar;