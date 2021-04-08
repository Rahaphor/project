/*let num= []
sum = 0;
num.push(0);
// initiating or populating num array
for(let i = 1; i <= 10; i++){
    num.push(5*i);

}



//acessing or displaying values of the num array
for(let i=0; i<num.length;i++){
    
   console.log(num[i])
    sum+=num[i];

}

num.push (100)
sum+= num[num.length-1]
num.pop();
console.log(sum)*/

let num = [1,2,3,4,5];
let num2 = [5,4,3,2,1]
let num3 = []



for(let index=0; index<num.length; index++){
   let sum = 0;
    console.log(num[index])
    sum+= num[index] + num2[index]
    num3.push(sum)
}

console.log(num3)
console.log(num.sort().reverse());
num.pop()