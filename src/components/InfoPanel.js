
import React from "react";
import NavigationBar from "./NavigationBar";
import Token from "./Token";
import "./InfoPanel.css";
import Error from "./Error";
import Symbol from "./Sybmol";
import { Braces, ExclamationCircle, MoonFill, Table } from "react-bootstrap-icons";

import ResizePanel from "react-resize-panel";

class InfoPanel extends React.Component {
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
                <ResizePanel direction="e" handleClass='resize-handle' borderClass="resize-border" style={{ minWidth: '300px'}}>
                    <div style={{ height: '100%', width: '100%', overflowY: 'scroll'    }}>
                        <div className="header">{this.state.activeTab}</div>
                        <table style={{ width: "100%" } } cellSpacing={0} cellPadding={3}>
                            <tbody className="p-relative" style={{ overflow: 'hidden' }}>
                                {this.getContent()}
                            </tbody>
                        </table>
                    </div>
                </ResizePanel>
            </div>
        );
    }


    getContent() {
        switch (this.state.activeTab) {
            case 'tokens':
                return this.props.tokens.map((e, index) => <Token key={index} type={e.type} charSequence={e.symbolPointer.charSequence} />);

            case 'symbol-table':
                return Object.keys(this.props.symbolTable).map((key, index) => (
                    <Symbol  key={index} type={this.props.symbolTable[key].production.type} index={index} charSequence={this.props.symbolTable[key].charSequence} />
                ));

            case 'errors':
                return this.props.errors.map((e, index) => <Error key={index} msg={e.msg} row={e.row} column={e.column} />);
        }
    }


}

export default InfoPanel;
