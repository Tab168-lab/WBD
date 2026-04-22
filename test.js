// const values =[45,56,45,"hello",true];
// Using for loop

// for(let i=0; i<values.length; i++){
//     console.log(values[i]);
// }


// Using ForEach

// values.forEach( (item)=>{
//     console.log("using forEach",item);
// })

// Using For Of


// for(let v of values){
//     console.log("Using For OF",v);
// }

//Using For In

// values.push("False")
// for(let v of values){
//     console.log(v);
// }


// Regular Expession\

// let newValues = values.filter((item)=>{
//     return /[0-9]+(\.[0-9]+)?/.test(item);
// })

// newValues.forEach((item)=>{
//     console.log(item);
// })

// class Calculator{
//     constructor(v1,v2){ 
//         this.num1 = v1;
//         this.num2 = v2;
//     }
//     sum(){
//         return this.num1 + this.num2;
//     }
//     minus(){
//         return this.num1 - this.num2;
//     }}

    // let calc = new Calculator(10,5);
    // console.log(calc.sum());
    // console.log(calc.minus());  


    // class Person{
    //     constructor(name){
    //         this.name = name;
    //     }
    //     getDetails(){
    //         return `My name is ${this.name}`;
    //     }
    // }

//     class Person {
//     getDetails() {
//         console.log("This is Person");  this.value = 15;
//     }
// }

// class Employee extends Person {
//     getDetails() { 
//         console.log("This is Employee"); 
//         super.getDetails();
//     }
// }
// const emp1 = new Employee();
// emp1.getDetails();
// console.log(emp1.value);

// class MyClass{
//     static result = 90;
//     setResult(value) { MyClass.result = value;  }
//     getResult() { return MyClass.result; }
// }
// let obj1 = new MyClass();
// let obj2 = new MyClass();

// obj1.setResult(100);
// obj2.setResult(200);

// console.log( obj2.getResult() );
// console.log( obj1.getResult() );


//object literal

const books ={
    id: 1,
    title: "Avenger",
    price: 30,
    author: "Tab"
};

console.log("ID:",books.id)
console.log("Title",books.title)
console.log("Price",books.price)
console.log("Author",books.author)

const fs = require('fs');
fs.writeFileSync('Test.txt', 'សួស្ដី Node.js!');

