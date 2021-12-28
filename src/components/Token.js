import React from "react";
import { App, Box, Braces, Key, Plus, Square } from "react-bootstrap-icons";
import "./InfoPanel.css";
class Token extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <tr className="record" >
            <td style={{ width: '30px', textAlign: "center", alignItems: 'center' }}>{getIcon(this.props.type)}</td>
            <td style={{ width: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{this.props.type}</td>
            <td style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{this.props.charSequence}</td>
            {/* <td className="record-tooltip">{JSON.stringify(this.props)}</td> */}
        </tr >
    }
}

function getIcon(type) {
    switch (type) {
        case 'keyword':
            return <Key color="#DC143C" size={15} />
        case 'number': case 'string':
            return <Square color="#96969A" size={15} />
        case 'identifier':
            return <Box color="#4B0082" size={15} />
        case 'punctuation':
            return <Braces color="#20B2AA" size={15} />
        case 'operator':
            return <Plus color="#CD5C5C" size={15} />
    }
}

export default Token;