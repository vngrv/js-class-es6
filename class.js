class Animal {
    static type = 'ANIMAL';

    constructor(options) {
        // this (context) указывает на текущий объект
        this._name = options.name;
        this._age = options.age;
        this._hasTail = options.hasTail;
    }

    voice() {
        console.log('Animal');
    }
};

class Cat extends Animal {
    static type = 'CAT';
    test = 'test';
    constructor(options) {
        super(options); // вызываем конструктор родительского класса
        this.color = options.color;
    };

    voiceCat() {
        console.log('cat');
    }

    get ageInfo() {
        return this._age*7;

    };

    set ageIngo(newAge) {
        this._age = newAge;
    }

};


const animal = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true
});

const cat = new Cat({
    name:'Barsik',
    age: 7,
    hasTail: true,
    color: 'black'
});

console.log(animal);
console.log(cat);
