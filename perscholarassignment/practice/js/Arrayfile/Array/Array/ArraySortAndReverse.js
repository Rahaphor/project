/*num = [20,3,78,100,-1,0];

console.log(num.reverse());
console.log(num.sort());
num.pop()*/

var listItem =[10,1,0,90,-1]

for (var i=0; i <=listItem.length-2; i++){
    
    for (j=i+1; j < listItem.length; j++){
        
        if(listItem[i] > listItem[j]){

            var temp = listItem[i];
            listItem[i]=listItem[j];
            listItem[j]= temp;
        }
    }
}
console.log(listItem)