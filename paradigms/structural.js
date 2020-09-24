/**
 * Структурный подход
 */

module.exports = (array) => {

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            console.log(`Число четное ${array[i]}`)
        } else if (array[i] % 3 == 0) {
            console.log(`Число делится на 3 ${array[i]}`)
        } else if (Math.sqrt(array[i]) % 1 == 0) {
            console.log(`Из числа можно получить целый корень ${array[i]}`)
        } else {
            console.log(array[i])
        }
    }
}