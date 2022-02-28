const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
//for creating generating different id
// const { v4: uuid } = require("uuid");

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));

console.log(format(new Date(2014, 1, 11), 'yyyy-MM-dd'));

console.log("First UUID");
console.log(uuid());

console.log("Second UUID");
console.log(uuid());
