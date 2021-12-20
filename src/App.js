import React from "react";
import './App.css';
import CodeEditor from './components/CodeEditor';
import InfoSection from './components/InfoSection';



class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <InfoSection></InfoSection>
                <CodeEditor></CodeEditor>
            </div>
        );
    }
}

export default App;
