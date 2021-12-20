
import React from "react";
import "./CodeEditor.css";
import LineNumber from "./LineNumber";
/**
 * 
 * @param {String} str 
 */
function countLines(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == '\n') counter++;
    }
    return counter;
}
class CodeEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.getLineNumbers = this.getLineNumbers.bind(this);
    }

    render() {

        return <div className="code-editor">
            {this.getLineNumbers()}
            <textarea onChange={(e) => {
                this.props.onTextChange(e.target.value);
                this.setState({ text: e.target.value });
            }}></textarea>
        </div>
    }


    getLineNumbers() {
        let lines = [];
        let numberOfLines = countLines(this.state.text) + 1;
        for (let x = 0; x < numberOfLines; x++) {
            lines.push(<LineNumber key={x} number={x + 1} />)
        }
        return <div>{lines}</div>

    }

}

export default CodeEditor;