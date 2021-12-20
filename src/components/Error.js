
import React from "react";
import "./CodeEditor.css";

class Error extends React.Component {



    render() {
        return (
            <tr className="record">
                <td>{this.props.row}:{this.props.column}</td>
                <td style={{ width: '100%' }}>{this.props.msg}</td>
            </tr>
        );
    }


}

export default Error;