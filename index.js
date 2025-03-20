const text= "extravaganza";
console.log(text.slice(-4, ));


const food = "The quick fox jumped over the lazy dog.";
console.log(food.slice(0,4) + "eat" + food.slice(4, ));




const story ="The quick brown fox jumps over the lazy dog";
const count= (str, word) => str.split(word).length - 1;

console.log(count(story, "the"));
console.log(count(story, "brown"));



 const string1 = "The pupils are reading in the library";
 const string2 = "The child was sitting on the table before it fell";

console.log(string1.includes("are"));
console.log(string2.includes("sitting"));


const word = "wonderful";
console.log(word.toUpperCase()) ;

const lowercasewords = ["amazing", "UndERneath"].map((word) =>
    word.toLowerCase());
  console.log(lowercasewords)

  const title= "A wonderful world";
const titleCaseStr = "A wonderful world".toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
console.log(titleCaseStr);