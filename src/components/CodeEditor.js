
import React from "react";
import "./CodeEditor.css";
import LineNumber from "./LineNumber";
/**
 * 
 * @param {String} str 
 */
function countLines(str) {
    return str.split('\n').length;
}
class CodeEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfLines: 1
        }
        this.getLineNumbers = this.getLineNumbers.bind(this);
    }

    render() {

        return <div className="code-editor">
            {this.getLineNumbers()}
            <textarea onChange={(e) => this.setState({ numberOfLines: countLines(e.target.value) })}></textarea>
        </div>
    }


    getLineNumbers() {
        let lines = [];
        for (let x = 0; x < this.state.numberOfLines; x++) {
            lines.push(<LineNumber key={x} number={x} />)
        }
        return <div>{lines}</div>

    }

}

export default CodeEditor;