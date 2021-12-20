
import React from "react";
import "./CodeEditor.css";

class Symbol extends React.Component {



    render() {
        return (
            <tr className="record">
                <td style={{ width: '30px', textAlign: "center", alignItems: 'center' }}>{this.props.index}</td>
                <td style={{ width: '100px', maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{this.props.type}</td>
                <td style={{ width: '100px', maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{this.props.charSequence}</td>
            </tr>
        );
    }


}

export default Symbol;