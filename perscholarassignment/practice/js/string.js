/*let fname= 'John'
let lname= 'Smith'

//properties ==== lenght
//methods ===== touppercase()

fname.toLowerCase()
fname.concat(lname)
fname.indexOf('o')
fname.lastIndexOf()*/

/*let fname = 'Rasheed'
let lname = 'Afolabi'

for(let R=0; R<fname.length; R++){
    console.log(fname[R])
    
}*/

/*let fname = 'Rasheed'
let lname = 'Afolabi'


console.log(fname.toLowerCase() )
console.log(lname.toUpperCase() )
console.log(fname.concat(' ',lname))
console.log(fname.indexOf('R'))
console.log(fname.lastIndexOf('a'))
console.log(fname.charAt(4))*/



/*let streetAddress = '87 sumner ave'
 let buildingNum = streetAddress.slice(2,6).trim()

 console.log(buildingNum)*/

 

 let sentence = 'he is trying his best'
 let vowelCapture = 'aeiou'
 let numOfVowel = 0
 let newSent = sentence.toLowerCase();


 for(let R=0; R<sentence.length; R++){
     for(let vowel = 0; vowel < vowelCapture.length; vowel++){
         if(sentence[R] === vowelCapture[vowel]){
             numOfVowel++
             console.log(sentence[R]);
             break;
         }
     }

 }
 console.log(' vowelCapture ' + numOfVowel)






 