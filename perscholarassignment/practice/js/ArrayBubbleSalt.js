var listItem =[5,10,0,30,-1,20]

for (var i=0; i < listItem.length; i++){
    
    for (j=0; j < listItem.length-1; j++){
        
        if(listItem[j] > listItem[j+1]){

            var temp = listItem[j];
            listItem[j]=listItem[j+1];
            listItem[j+1]= temp;
        }
    }
}
console.log(listItem)