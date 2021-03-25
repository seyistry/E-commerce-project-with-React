import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up-page.component'
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
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
