// function hasRepeats (str) {
//     return /(.).*\1/.test(str);
// }
// var text = "test".split("");
// text.some(function(v,i,a){
//   return a.lastIndexOf(v)!=i;
// });

function hasRepeats(str) {
    str = str.split("").sort().join(""); 
  for (var i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) == str.charAt(i + 1)) {
      return str.charAt(i);
    }
  }
}
console.log(hasRepeats("Dhairya"));
