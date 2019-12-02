import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import LogIn from "./views/LogIn";
import LogOut from "./views/LogOut";
import SignUp from "./views/SignUp";
import httpClient from "./httpClient";

class App extends React.Component {
  state = { currentUser: httpClient.getCurrentUser() };

  onLoginSuccess(user) {
    this.setState({ currentUser: httpClient.getCurrentUser() });
  }

  logOut() {
    httpClient.logOut();
    this.setState({ currentUser: null });
  }
  render() {
    const { currentUser } = this.state;
    return (
      <Router>
        <Nav currentUser={currentUser} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products/:type?" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/login"
            render={props => {
              return (
                <LogIn
                  {...props}
                  onLoginSuccess={this.onLoginSuccess.bind(this)}
                />
              );
            }}
          />

          <Route
            path="/logout"
            render={props => {
              return <LogOut onLogOut={this.logOut.bind(this)} />;
            }}
          />

          {/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
          <Route
            path="/signup"
            render={props => {
              return (
                <SignUp
                  {...props}
                  onSignUpSuccess={this.onLoginSuccess.bind(this)}
                />
              );
            }}
          />

          <Route
            path="/Admin"
            render={() => {
              return currentUser ? <Admin /> : <Redirect to="/login" />;
            }}
          />

          {/* <Route path="/" component={Home} /> */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;

//{/* <Route path="/contact/" component={Contact} /> */}
