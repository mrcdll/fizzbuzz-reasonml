// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var FizzBuzz$MyNewProject = require("./FizzBuzz.bs.js");

for(var index = 1; index <= 100; ++index){
  var result = FizzBuzz$MyNewProject.get(/* tuple */[
        index % 3,
        index % 5,
        index
      ]);
  console.log(result);
}

/*  Not a pure module */