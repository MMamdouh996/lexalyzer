
import React from "react";
import NavigationBar from "./NavigationBar";
import Token from "./Token";
import "./InfoSection.css";
import Error from "./Error";
import Symbol from "./Sybmol";
import { Braces, ExclamationCircle, Table } from "react-bootstrap-icons";


class InfoSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'tokens',
        };
        this.getContent = this.getContent.bind(this);
    }
    render() {
        return (
            <div className="info-section">
                <div className="navigation-bar">
                    <div className={this.state.activeTab == 'tokens' ? "navigation-button active" : "navigation-button"} onClick={() => this.setState({ activeTab: 'tokens' })}>
                        <Braces className="navigation-button-icon" size={25} />
                        <div className="count-bubble primary">{this.props.tokens.length}</div>
                    </div>
                    <div className={this.state.activeTab == 'symbol-table' ? "navigation-button active" : "navigation-button"} onClick={() => this.setState({ activeTab: 'symbol-table' })}>
                        <Table className="navigation-button-icon" size={25} />
                        <div className="count-bubble primary">{Object.keys(this.props.symbolTable).length}</div>

                    </div>
                    <div className={this.state.activeTab == 'errors' ? "navigation-button active" : "navigation-button"} onClick={() => this.setState({ activeTab: 'errors' })}>
                        <ExclamationCircle className="navigation-button-icon" size={25} />
                        {this.props.errors.length > 0 ? <div className="count-bubble danger">{this.props.errors.length}</div> : undefined}


                    </div>
                </div>
                <div style={{ minWidth: 300 }}>
                    <div className="" style={{ height: '100%',overflowY: 'scroll' }}>
                    <div style={{ padding: 5, fontFamily: "monospace", textTransform: "uppercase" }}>{this.state.activeTab}</div>
                        <table style={{ width: "100%" }}>
                            <tbody className="p-relative" style={{ overflow: 'hidden' }}>
                                {this.getContent()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }


    getContent() {
        switch (this.state.activeTab) {
            case 'tokens':
                return this.props.tokens.map((e, index) => <Token key={index} type={e.type} charSequence={e.symbolPointer.charSequence} />);

            case 'symbol-table':
                return Object.keys(this.props.symbolTable).map((key, index) => (
                    <Symbol type={this.props.symbolTable[key].production.type} index={index} charSequence={this.props.symbolTable[key].charSequence} />
                ));

            case 'errors':
                return this.props.errors.map((e, index) => <Error key={index} msg={e.msg} row={e.row} column={e.column} />);
        }
    }


}

export default InfoSection;
