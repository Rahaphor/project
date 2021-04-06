let r = 371
let quot;
let num1 = 0
let newNum = r

while(newNum > 0){
    let remainder = newNum % 10;
    
    quot = Math.floor(newNum/10);
    num1 = num1 + (remainder * remainder * remainder);
    newNum = quot;
}
if (num1== r){
    console.log(r + ' is a armstrong number ');
    
}else{
    console.log(r + ' Is not a armstrong number')
}