import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Contact from "./components/ContactUs/Contact";
import Admin from "./components/Admin/Admin";
import Start from "./components/Start/Start";
//import Contact from "./components/Cart/Cart";
import PageNotFound from "./components/PageNotFound/PageNotFound";


function App() {
  return (
    <div className="App">

        <Router>
          <Header />
          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/Contact" component={Contact}></Route>
            <Route path="/Admin" component={Admin}></Route>
{/*             <Route exact path={'/'} render={() => {return <Redirect to="/admin" />}}/> */}
            <Route path="/" exact={true} component={Start} ></Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>

    </div>
  );
}

export default App;
