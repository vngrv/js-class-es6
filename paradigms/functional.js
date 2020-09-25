/**
 * Функциональный подход
 */

const generate = (n, w) => (num) => num % n === 0 ? `${w} ${num} ` : ` ${num} `;
const devide = (w) => (num) => Math.sqrt(num) % 1 === 0 ? `${w} ${num} ` : ` ${num} `;

const even = generate(2, 'Число четное');
const buzz = generate(3, 'Число делится на 3');
const root = devide('Из числа можно получить целый корень');

// Любой класс или тип данных, который хранит значение и реализует метод map, называется функтором

// Монады — это подтип функторов, так как у них есть метод map, 
// но они также реализуют другие методы, например, ap, of, chain.

const modana = (array) => {
    return [...array.keys()] 
        .map(i => i+1)
        .forEach(i => {
            let number = array[i];

            console.log(even(number) + buzz(number) + root(number))
        })
};

module.exports = modana;
