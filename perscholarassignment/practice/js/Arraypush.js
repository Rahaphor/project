let num= []
num.push(0)
// initiating or populating num array
for(let i = 1; i <= 10; i++){
    num.push(5*i);

}
//acessing or displaying values of the num array
for(let i=0; i<num.length;i++){
    
    console.log(num[i])

}

num.push (100)

console.log(num[11])