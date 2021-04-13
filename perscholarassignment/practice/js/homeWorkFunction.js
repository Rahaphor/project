// Number 5 on homework
function findArg(...arg) {
    return arg.length;
}
console.log(findArg(2, 5, 6, 7, 4, 3, 2, 3))

// ---------------------------------------------------------
//Number 6 Decrementing
let output = "";
function reverseString(y) {
    for (let i = (y.length - 1); i >= 0; i--) {
        output += y[i]
    }
    return output;
}


//Number 7
function findLongestWordLength() {
    let words = ['Money', 'time', 'opportunity', 'stability'];
    let maxLength;
    let temp = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > temp) {
        
        temp = words[i].length;
        maxLength = words[i].length
      }
    }
    return maxLength
  }
  
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Number 8


function filterLongWord() {

    let word1= ['time', 'money', 'opportunity', 'stability']
    let num= 6;
    let word2=[]

    for(let i=0; i<word1.length; i++){
        if(word1[i].length > num){
            word2= word2 + ' ' + word1[i]
        }
    }
    return word2
    

}