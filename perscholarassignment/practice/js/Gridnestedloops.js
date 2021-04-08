let value =1 ;

for (let row = 1; row <= 4; row++){
    
    for (let column = 1; column <=4; column++){

        //console.log(value++);
        
        process.stdout.write(value.toString() + '  | ' );
        value++;

    }
    console.log();

}

let value = 1;
let manyRow = 6;
let manyColumn = 12;

for (let row = 1; row <= manyRow; row++){

    for (let column = 1; column <= manyColumn; column++){
        
        let value = row+ ','  +column

        //console.log(value++);
        process.stdout.write(value.toString() + '|');
    }
    value++;
    console.log();
}