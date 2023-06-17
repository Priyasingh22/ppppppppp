import './App.css';
import React from "react";
// import Pikachu from './Pikachu';
import { Route, Switch,Redirect } from "react-router-dom";
import About from './About';
import Contact from './Contact';
//  import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Service from './Service';
import User from './User';
import Search from './Search';
// import Error from './Error';

const App = () => {
  return (
    <>

      {/* <Pikachu/> */}
      <Navbar />

      <Switch>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/User/:name/:lname" component={User} />

        {/* <Route exact path="/adminlogin"><Adminlogin /></Route> */}
        {/* <Route component={Error} /> */}
        <Redirect to ="/" />
      </Switch>

    </>
  )
}

export default App;