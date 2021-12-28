
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

            <textarea
                placeholder="Write your code here!"
                onChange={(e) => {
                    this.props.onTextChange(e.target.value);
                    this.setState({ text: e.target.value });
                }}
                onKeyDown={(e) => {
                    // handle indents
                    if (e.key === 'Tab') {
                        let start = e.target.selectionStart;
                        let end = e.target.selectionEnd;
                        if (end - start > 1) {
                            end = e.target.value.indexOf('\n', end);
                            const lines = e.target.value.substring(start, end).split('\n');
                            const tabbed = lines.map(l => '\t' + l).join('\n');
                            const before = e.target.value.substring(0, start);
                            const after = e.target.value.substring(end);
                            e.target.value = before + tabbed + after;
                            e.target.selectionStart = start;
                            e.target.selectionEnd = end + lines.length;
                        } else {
                            const before = e.target.value.substring(0, start);
                            const after = e.target.value.substring(start);
                            e.target.value = before + '\t' + after;
                            e.target.selectionEnd = start + 1;
                            e.target.selectionEnd = end + 1;
                        }
                        e.preventDefault();
                    }
                }}
            />
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