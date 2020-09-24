
const MAX_NUM = 100;

class Tag {
    constructor(_value) {
        this.value = _value;
    }
}

class Printer {
    constructor(_context) {
        this.context = _context;
    }

    print() {
        console.log(this.context.value);
    }
}

class DivCondition {
    constructor(_divider) {
        this.divider = _divider;
    }

    isTruthy(num) {
        return num % this.divider === 0;
    }
}

class AndStrategy {
    constructor(_conditionsOrStrategies) {
        this.conditions = _conditionsOrStrategies;
    }

    isTruthy(num) {
        for (let i in this.conditions) {
            if (!this.conditions[i].isTruthy(num)) {
                return false;
            }
        }

        return true;
    }
}

class TagNumRule {
    constructor(_tag, _strategy) {
        this.strategy = _strategy;
        this.tag = _tag;
    }

    isSeccuess(num) {
        return this.strategy.isTruthy(num);
    }
}

class TagNumRulesCollection {
    constructor(_tags) {
        this.tags = _tags;
    }

    find(num, defaultValue) {
        for (let i in this.tags) {
            if (this.tags[i].isSeccuess(num)) {
                return this.tags[i].tag;
            }
        }

        return defaultValue;
    }
}

const numTags = new TagNumRulesCollection([
    new TagNumRule(new Tag('FizzBuzz', new AndStrategy([new DivCondition(3), new DivCondition(5)]))),
    new TagNumRule(new Tag('Fizz'), new AndStrategy([new DivCondition(3)])),
    new TagNumRule(new Tag('Buzz'), new AndStrategy([new DivCondition(5)]))
]);

for (let i = 1; i < MAX_NUM; i++) {
    new Printer(numTags.find(i, new Tag(i))).print();
}