
const moneyBox = () => {
    var saveCoins = 0;

    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}$`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

function makeCounter(n) {
    let count = n;
    return {
      increase: () => count = count + 1,
      decrease: () => count = count - 1,
      getCount: () => count
    };
}

let counter = makeCounter(7);

console.log('The count is:', counter.getCount());
counter.increase();
console.log('The count is:', counter.getCount());
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
console.log('The count is:', counter.getCount());
counter.count = 0;
counter.increase();
console.log('The count is:', counter.getCount());

//bind
const person = {
    name: 'José Luis',
    lastname: 'Del Canto',
    fullname: function() {
        return `${this.name} ${this.lastname}`;
    }
}

const print = function(greet, adj) {
    console.log(greet, this.fullname(), 'you are', adj);
}

const printBinded = print.bind(person);
printBinded('Hello', 'special');

const printBind = function(greet, adj) {
    console.log(greet, this.fullname(), 'you are', adj);
}.bind(person)

printBind('Hello', 'special');

//call
const printCall = function(greet, adj) {
    console.log(greet, this.fullname(), 'you are', adj);
}

printCall.call(person, 'Hello', 'special');

//apply
const printApply = function(greet, adj) {
    console.log(greet, this.fullname(), 'you are', adj);
}
printApply.apply(person, ['Hello', 'special']);

//Function borrowing
const person = {
    name: 'Bruce',
    lastname: 'Wayne',
    fullname: function() {
        return this.name + ' ' + this.lastname;
    }
}

const actor = {
    name: 'Clint',
    lastname: 'Eastwood'
}

const result = person.fullname.apply(actor);
console.log(result);

//Function curryng
function sum(a, b) {
    return a + b;
}

const sumCopy = sum.bind(this, 2);

console.log(sumCopy(6));

// new es un atajo (azucar sintactica) para llevar Hero.prototype al objeto que estamos creando
function Hero(name) {
    this.name = name;
}

Hero.prototype.saludar = function() {
    console.log(`New : ${this.name}`);
};

const zelda = new Hero('Zelda');
zelda.saludar();

const link = new Hero('Link');
link.saludar();


//Herencia prototipal
function Hero(name) {
    this.name = name;
}

Hero.prototype.saludar = function() {
    console.log(`Hola, soy ${this.name}.`);
};

const zelda = new Hero('Zelda');

// propiedades de la instancia
console.log('Name:', zelda.name);
// propiedades de la "clase"
console.log('Saludar:', zelda.saludar);

// propiedades heredadas ej: toString
console.log('toString:', zelda.toString);

// hasOwnProperty (de dónde sale toString o esto?)
console.log('zelda.hasOwnProperty("saludar"):',zelda.hasOwnProperty('saludar')
);