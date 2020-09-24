class IsEven  {
    constructor(_number, _rule, _mess) {
        this.number = _number;
        this.rule = _rule;
        this.mess = _mess;
    }

    resolve() {
        if(this.number % this.rule == 0) {
            console.log(`${this.mess} ${this.number}` );
        }
    }
}

class IsDivideByThree extends IsEven {
    constructor(_number, _rule, _mess) {
        super(_number, _rule, _mess);
    }
}

class IsWholeRoot extends IsEven {
    constructor(_number,_rule, _mess) {
        super(_number, _rule, _mess);
    }

    resolve() {
        if(Math.sqrt(this.number) % 1 == 0) {
            console.log(`${this.mess} ${this.number}` );
        } 
    }
}

class RuleFactory {
    solveByRule(array) {
        let tempArr = [];
        array.forEach(element => {
           tempArr.push(new IsEven(element, 2, 'Число четное'));
           tempArr.push(new IsDivideByThree(element, 3, 'Число делится на три'));
           tempArr.push(new IsWholeRoot(element, 2, 'Из числа можно получить целый корень'));
        });

        tempArr.forEach(element => {
            element.resolve();
        })
    }
}

class Solver {
    constructor(_array) {
        this.array = _array;
    }

    get getResult() {
        let ruleFactory = new RuleFactory();
        
        return ruleFactory.solveByRule(this.array);
    }

}

let array = [];

for(let i = 0; i < 64; i++) {
    array.push( Math.round( Math.random() * 100 ));
}

let oop = new Solver(array);
oop.getResult