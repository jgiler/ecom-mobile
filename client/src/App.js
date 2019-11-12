import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from './pages/Contact'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products/:type?" component={Products} />
          <Route path="/contact/" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
