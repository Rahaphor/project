let count=0, count1=1
let range=1, sum=0



while(range<=10){
    if(count==0 && count1==1){
        process.stdout.write(count + ' ' + count1 + ' ')
    }
    sum=count+count1;
        console.log(sum);

        count=count1; 
        count1=sum;   
        range++;
}




