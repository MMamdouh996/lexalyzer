
import React from "react";
import "./CodeEditor.css"
class LineNumber extends React.Component {



    render() {

        return <div className="line-number"> {this.props.number}</div>
    }


}

export default LineNumber;