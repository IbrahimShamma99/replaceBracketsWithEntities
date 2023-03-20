const { replaceBracketsWithEntity } = require("../dist/index.js");

console.log(replaceBracketsWithEntity("{heaven}", { heaven: "true" }));
