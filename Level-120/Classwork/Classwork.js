// // functions in JS

// function Greet() {
//     console.log("Hello World!");
// }

// Greet()


// function calcArea(width, height){
//     console.log(width * height);
// }

// calcArea(30 , 50)

// const w1 = 50
// const h1 = 30

// calcArea(w1 , h1)


// function sayThanks (name){
//     console.log(`Thank you for purchase ${name} we appreciate your buissness`);
// }


// sayThanks("Cole")


// // Default parameter 


// function sayHello(name = "stranger"){
//     console.log(`Welcome ${name}`);
// }   

// sayThanks()
// sayHello("Lika")
// sayHello("Luka")
// sayHello("Nika")



// // Returning a value using a return keyword
// function greet(){
//     return "Wello world"
// }

// console.log(greet())


// 1) შექმენით ფუნქცია Sum, რომელიც არგუმენტად მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს. ფუნქციას გაუწერეთ Default არგუმენტები. პასუხი დააბრუნეთ return-ით.

function sum(num1 = 10, num2 = 20){
    return num1 + num2 
}

console.log(sum(50 , 100));


// 2) შექმენით ფუნქცია Substract, რომელიც არგუმენტად მიიღებს ორ რიცხვს და დააბრუნებს მათ სხვაობას. ფუნქციას გაუწერეთ Default არგუმენტები. პასუხი დააბრუნეთ return-ით.

function Subtract(number1 = 10, number2 = 5){
    return number1 - number2 
}

console.log(Subtract(20, 50));


// 3) შექმენით ფუნქცია Multiply, რომელიც არგუმენტად მიიღებს ორ რიცხვს და დააბრუნებს მათ ნამრავლს. ფუნქციას გაუწერეთ Default არგუმენტები. პასუხი დააბრუნეთ return-ით.



function Multiply(Num1 = 10, Num2 = 2){
    return Num1 * Num2 
}


console.log(Multiply(60, 50));


// 4) შექმენით ფუნქცია Divide, რომელიც არგუმენტად მიიღებს ორ რიცხვს და დააბრუნებს მათ განაყოფს. ფუნქციას გაუწერეთ Default არგუმენტები. პასუხი დააბრუნეთ return-ით.\



function Devide(dev1 = 50, dev2 = 10){
    return dev1 / dev2 
}

console.log(Devide(100, 10))


// 5) შექმენით ფუნქცია, რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის კენტი თუ ლუწი,შედეგი დაბეჭდეთ ეკრანზე


let UserNumber = Number(prompt("Enter Number and check number is odd or even"))

function EvenOrOdd(UserNumber){
    if(UserNumber % 2 === 0){
        return "Number is Even"
    }else {
        return "Number is Odd"
    }
}

console.log(EvenOrOdd(UserNumber));
