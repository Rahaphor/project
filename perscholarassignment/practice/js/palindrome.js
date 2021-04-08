let originalword= 'level'
let backwardword= '';

for(let index =originalword.length-1; index >= 0; index--){
    backwardword += originalword.charAt(index)
    console.log(backwardword)
}
if(originalword===backwardword){
    console.log(originalword + ' Is a palindrome')
}else{
    console.log(originalword + ' Is not a palindrome')
}