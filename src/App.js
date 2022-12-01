/**
 * Developed By: Bharat Jograna
 * Created on: 22 July 2022
 * Function Component: app to route project
 * Packages detail
	react-redux redux redux-saga axios
	react-bootstrap bootstrap
*/
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import AppWidget from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const App = () => (
  <Provider store={configureStore()}>
    <AppWidget />
  </Provider>
);

export default App;
