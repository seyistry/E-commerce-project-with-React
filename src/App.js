import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up-page.component";
import HomePage from "./pages/hompages/homepage.component";
import { auth } from "./firebase/firebase.utils";

const hatsPage = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hats Page</h1>
        </div>
    );
};

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
