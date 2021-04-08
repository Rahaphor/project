for (let row = 5; row >= 1; row--){
    for (let col = 1; col <= row; col++){
        process.stdout.write(col.toString());
    }
    console.log()
}