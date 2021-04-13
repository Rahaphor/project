function linearSearch(numbers) {

    let data = 7;
    let datafound= false
    let index = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (data === numbers[i]) {
            index = i;
            datafound = true
            break;
        }
    }
    if (datafound == true) {
        return  'found in location '  + (index+1) + ' data is found '
    }else {
        return 'your data is not found'
    }
}