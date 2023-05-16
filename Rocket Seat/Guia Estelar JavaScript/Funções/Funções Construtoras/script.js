/*
    Function() constructor

    * Expressao new
    * Criar um novo objeto
    * This keyword
*/

function Person(name){
    this.name = name;
    this.walk = function(){
        return this.name + "andando";
    }
}

const matheus = new Person("Matheus");
const rafael = new Person("Rafael");

console.log(matheus.walk());
console.log(rafael.walk());