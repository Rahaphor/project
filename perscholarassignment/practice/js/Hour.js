var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();

if (hour > 4 && hour < 12){
    console.log('good morning!');
}
else if (hour > 12 && hour < 16){
    console.log('good afternoon');
}
else{
    console.log('hello there');
}


