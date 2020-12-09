const core = require('@actions/core');
const github = require('@actions/github');

console.log("Hello " + core.getInput("NAME") + " in " + core.getInput("YEAR") + " years, you will be " + core.getInput("AGE") + " ! Won't you feel old?");
