import React from 'react';
import './App.css';
import  Products  from "./products/products";
import  Details  from "./products/details";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { history } from "./helpers/history";
import { Provider } from "react-redux";
import { store } from "./helpers/store";


function App() {
  localStorage.setItem("credit", 300);
  history.push('/products');

  return (
    <Provider store={store}>

    <Router history={history}>
      <div>
        <Switch>
          <Route path = "/products" component = {Products} />
          <Route path = "/details" component = {Details} />
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
