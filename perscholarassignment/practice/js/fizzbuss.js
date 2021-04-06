let start = 1;
let end = 50;

for (let counter = start; counter <= end;counter ++){
    if ( counter % 5 == 0 && counter %  3 == 0){
        console.log( counter + 'fizzbuzz')
    }
    else if (counter % 3 == 0){console.log(counter + '= fizz');}

    else if ( counter % 5 == 0){console.log(counter + '= buzz')}
}

