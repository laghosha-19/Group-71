// მომხმარებელს შემოატანინეთ prompt() ის საშუალებით პაროლი. დაწერეთ while loop პროგრამა: იქამდე გამოიტანოს 'wrong passsword, try again' სანამ პაროლი არ დაემთხვევა 'admin123'-ს. ამ შემთხვევაში გამოიტანეთ 'Access Granted' და გაწყვიტეთ ციკლი.

// const adminPass = "admin123"
// let userPass = prompt("Enter password")


// while (userPass.toLowerCase() !== adminPass){
//     console.log('Wrong passsword, Try again');
//     userPass = prompt("Enter password")
// }

// console.log('Access granted');



// /2) შექმენით 6-ელემენტიანი მასივი. გამოიყენეთ at() პირველი და ბოლო ელემენტების დასაბეჭდად. შემდეგ კი სიიდან ამოშალეთ ყველა ის ელემენტი, რომელთა სიგრძეც 5-ს აღემატება.

let favMovies = ["Gone Girl", "Whiplash" , "Suits", "Black swan", "The Last Samurai","Zodiac"]
let result = []


favMovies.at(0)
favMovies.at(-1)


for(x = 0; x < favMovies.length ; x++){
    if(favMovies[x].length < 5){
        result.push(favMovies[x])
    }
}

// 3) დაწერეთ while loop, რომელიც 1-დან 50-მდე დაბეჭდავს რიცხვებს. 3-ის ჯერად რიცხვებზე დაბეჭდოს 'Fizz', 5-ის ჯერად რიცხვებზე 'Buzz'. ორივეზე ერთად 'FizzBuzz'.

// როდესაც რიცხვების count მიაღწევს 45-ს => გაწყვიტეთ პროგრამა.

