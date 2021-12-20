
import React from "react";
import NavigationBar from "./NavigationBar";
import Token from "./Token";

class InfoSection extends React.Component {
    constructor(props) {
        super(props);

        this.symbolTable = {
            ';': {
                type: 'punctuation'
            },
            '+': {
                type: 'punctuation'
            },
            'a': {
                type: 'identifier',
                info: {
                    occurrenceIndex: 10
                }
            },
            'b': {
                type: 'identifier',
                info: {
                    occurrenceIndex: 15
                }
            }
        };
        this.tokens = [
            { type: 'keyword', msg: "expecting closing ')' bracket" },
            { type: 'identifier', lexeme: "a", symbolTableRecord: this.symbolTable['a'] },
            { type: 'punctuation', lexeme: "+", symbolTableRecord: this.symbolTable['+'] },
            { type: 'identifier', lexeme: "b", symbolTableRecord: this.symbolTable['b'] },
            { type: 'punctuation', lexeme: ";", symbolTableRecord: this.symbolTable[';'] },
        ];
        this.errors = [
            { lineNumber: 10, msg: "expecting closing ')' bracket" },
            { lineNumber: 16, msg: "missing closing '}' bracket" },
        ];
        this.state = {
            activeTab: 'tokens',
        };
        this.onSwitch = this.onSwitch.bind(this);
        this.getContent = this.getContent.bind(this);
    }
    render() {
        return <div className="info-section">
            <NavigationBar activeTab={this.state.activeTab} switchCallback={(tab) => this.setState({ activeTab: tab })} />
            <div style={{ minWidth: 300 }}>
                {this.getContent()}
            </div>
        </div>;
    }

    onSwitch(tabNumber) {

    }

    getContent() {
        switch (this.state.activeTab) {
            case 'tokens':
                return <table><tbody>{this.tokens.map((e, index) => <Token key={index} type={e.type} lexeme={e.lexeme} />)}</tbody></table>;
            case 'symbol-table':
                break;
            case 'errors':
                break;
        }
    }


}

export default InfoSection;
