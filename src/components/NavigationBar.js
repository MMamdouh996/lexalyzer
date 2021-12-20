
import React from "react";
import { Braces, ExclamationCircle, Table } from "react-bootstrap-icons";
import "./InfoSection.css";
class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.switchCallback = props.switchCallback;
        this.state = {

        }
    }
    render() {

        return <div className="navigation-bar">
            <div className="navigation-button active">
                <Braces className="navigation-button-icon" size={25}/>
            </div>
            <div className="navigation-button">
                <Table className="navigation-button-icon" size={25}/>
            </div>
            <div className="navigation-button">
                <ExclamationCircle className="navigation-button-icon" size={25}/>
            </div>
        </div>
    }


}

export default NavigationBar;