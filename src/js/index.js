import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.css'

import "./App.css";

import App from "./App";

console.log(process.env.NODE_ENV);
console.log(ENV);
console.log(ENVPROD);



const app = document.getElementById('app');

ReactDOM.render( <App> </App>,app);

module.hot.accept();