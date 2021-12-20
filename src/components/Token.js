import React from "react";

class Token extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <tr>
            <td>{this.props.index}</td>
            <td> {this.props.type}</td>
            <td>{this.props.lexeme}</td>
        </tr>
    }
}

export default Token;