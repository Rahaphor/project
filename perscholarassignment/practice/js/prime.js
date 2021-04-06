let num = 8;
let r;
let isPrime = false;
for(r=2; r<num; r++){
    if( num % r == 0){
        isPrime=true;
        break;
    }
}
if(isPrime){
    console.log(num + ' is a prime ');
}
else{
    console.log(num + ' is not a prime!!! ')
}