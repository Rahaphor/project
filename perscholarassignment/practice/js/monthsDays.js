var nameOfMonth= 10;
var nameOfday = 4;

 
if (nameOfMonth >= 1 && nameOfMonth <= 12){
    if (nameOfMonth == 1){
        nameOfMonth = 'January';
    }
    else if ( nameOfMonth == 2){
        nameOfMonth = 'febuary';
    }
    else if ( nameOfMonth == 3){
        nameOfMonth = 'March';
    }
    else if ( nameOfMonth == 4){
        nameOfMonth= 'April';
    }
    else if ( nameOfMonth == 5){
        nameOfMonth = 'May';
    }
    else if ( nameOfMonth == 6){
        nameOfMonth = 'June';
    }
    else if ( nameOfMonth == 7){
        nameOfMonth = 'July';
    }
    else if ( nameOfMonth == 8){
        nameOfMonth= 'August';
    }
    else if ( nameOfMonth == 9){
        nameOfMonth = 'september';
    }
    else if ( nameOfMonth == 10){
        nameOfMonth = 'october';
    }
    else if ( nameOfMonth == 11){
        nameOfMonth= 'November';
    }
    else if ( nameOfMonth == 12){
        nameOfMonth = 'December';
    }    
}
else{
    console.log('select a valuable month')
}
   

if(nameOfday >=1 && nameOfday <=7){
    if (nameOfday == 1){
        nameOfday = 'Sunday';
    }
    else if (nameOfday == 2){
        nameOfday = 'Monday';
    }
    else if (nameOfday == 3){
        nameOfday = "Tuesday";
    }
    else if (nameOfday == 4){
        nameOfday = 'Wednesday';
    }
    else if (nameOfday == 5){
        nameOfday = 'Thursday';
    
    }else if (nameOfday == 6){
        nameOfday= 'Friday';
    }
    else if (nameOfday == 7){
        nameOfday = 'Saturday';
    }

}
else{
    console.log( 'select a valuable day')
}

console.log(nameOfMonth)
console.log(nameOfday)