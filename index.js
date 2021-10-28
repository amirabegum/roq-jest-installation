class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
}

const amira = new Person('amira', 22)

module.exports = {
    Person,
    amira 
}