require("./hello");
//require("./goodbye");
const goodbye=require("./goodbye");
goodbye();
const question=require("./talk/question");
const answer=question.ask("what is meaning of life?");
console.log(answer)