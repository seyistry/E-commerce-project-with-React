import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/hompages/homepage.component";

const hatsPage = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hats Page</h1>
        </div>
    );
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={HomePage} />
                <Route path="/hats" component={hatsPage} />
            </div>
        );
    }
}

export default App;
