import React from "react";
import { Switch,Route, Redirect } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import Body from "../src/components/Body";
import Header from "../src/components/Header";
import AddCloth from "./components/AddCloth";

const App = () => {
  return (
    <React.Fragment>
      <Header  />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/add-cloth" component={AddCloth} />
        <Redirect to="/" component={Body}/>
      </Switch>
    </React.Fragment>
  )
}

export default App;