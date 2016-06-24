"use strict";

const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher.js");

let _benches = {};

const BenchStore = new Store({AppDispatcher});

BenchStore.all = function () {
  return Object.assign({}, _benches);
};

function resetAllBenches (benches) {
  _benches = benches;
};

module.exports = BenchStore;
