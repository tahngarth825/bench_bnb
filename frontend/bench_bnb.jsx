"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const reactRouter = require('react-router');
const Router = reactRouter.Router;
const Route = reactRouter.Route;
const hashHistory = reactRouter.hashHistory;
const BenchStore = require("./stores/bench_store.js");

// const routes = (
//   <Route path="/" component=
// );

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render( <div> TESTING </div> , document.getElementById('content'));
});

window.BenchStore = BenchStore;
