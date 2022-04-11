//super class:

function Person(age, weight) {
    this.age = age;
    this.weight = weight;
}

//hacerla compartir info:
Person.prototype.getInfo = function() {
    return (
        "I am " + this.age + " years old " + "and weighs " + this.weight + " kilo."
    );
};

//el empleado es una subclase:
function Employee(age, weight, salary) {
    this.age = age;
    this.weight = weight;
    this.salary = salary;
}
Employee.prototype = new Person();

//y vamos a hacer que si es un empleado cambie un poco el comportamiento:
Employee.prototype.getInfo = function() {
    return (
        "I am " +
        this.age +
        " years old " +
        "and weighs " +
        this.weight +
        " kilo " +
        "and earns " +
        this.salary +
        " dollar."
    );
};

//entonces:
var person = new Person(50, 90);
var employee = new Employee(43, 80, 50000);

console.log(person.getInfo());
console.log(employee.getInfo());