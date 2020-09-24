/**
 * Флаговый подход
 */

module.exports = (array) => {

    for(let i = 0; i < array.length; i++) {
        let number = array[i];

        switch(true) {
            case isEven(number):
                console.log(`Число четное ${number}`);
                break;
            case isDivisibleByThree(number):
                console.log(`Число делится на 3 ${number}`)
            case isWholeRoot(number):
                console.log(`Из числа можно получить целый корень ${number}`)
                break;
            default:
                console.log(number);
                break;
        }

        
    }
}

function isEven(n) {
    if(n % 2 == 0) {
        return true
    }

    return false
}

function isDivisibleByThree(n) {
    if (n % 3 == 0) {
        return true;
    }

    return false;
}

function isWholeRoot(n) {
    if (Math.sqrt(n) % 1 == 0) {
        return true;
    }

    return false;
}


