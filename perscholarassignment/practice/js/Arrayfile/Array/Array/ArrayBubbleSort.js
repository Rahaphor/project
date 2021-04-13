/*var listItem =[5,10,0,30,-1,20]

for (var i=0; i < listItem.length; i++){
    
    for (j=0; j < listItem.length-1; j++){
        
        if(listItem[j] > listItem[j+1]){

            var temp = listItem[j];
            listItem[j]=listItem[j+1];
            listItem[j+1]= temp;
        }
    }
}
console.log(listItem)*/

/*num=[400,3,0,-7,-1,1000]
n=num.length-1
for(i=n;i>=1;i--)
{
    for(j=0;j<i;j++)
    {
       if(num[j]> num[j+1])
       {
        temp=num[j];
        num[j]=num[j+1]
        num[j+1]=temp
       }
    }
}
console.log(num);*/

num =[400,30,0,10,20,100]
r = num.length-1

for (let r=0; r<num.length-1;r++){
    for(j=0;j<r; j++);{
        if(num[j]> num[j+1]){
            temp=num[j]
            num[j]=num[j+1]
            num[j=1]=temp
        }
    }
}console.log(num)