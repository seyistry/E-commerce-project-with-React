import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import "./App.css";
import HomePage from "./pages/hompages/homepage.component";

const hatsPage = (props) => {
    console.log(props);
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
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
