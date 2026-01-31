// 3) დაწერეთ ციკლი, რომელიც მასივში ეძებს პირველ ლუწ რიცხვს. დაბეჭდეთ, შემდეგ ამოაგდეთ ეს რიცხვი სიიდან და გაწყვიტეთ პოვნის შემდეგ loop-ი.


const nums = [1,3,13,5,6,7,8,]

for (let i = 0; i < nums.lenght ; i++){
    if (nums[i] % 2 === 0){
        console.log(nums[i]);
        nums.splice(i, 1,)
        break
    }
}


// 4) მომხმარებელს შემოატანინეთ prompt() ის საშუალებით პაროლი. დაწერეთ while loop პროგრამა: იქამდე გამოიტანოს 'wrong passsword, try again' სანამ პაროლი არ დაემთხვევა 'admin123'-ს. ამ შემთხვევაში გამოიტანეთ 'Access Granted' და გაწყვიტეთ ციკლი.


const adminPass = "admin123"
let userPass = prompt("Enter password")


while (userPass !== adminPass){
    console.log('Wrong passsword, Try again');
    userPass = prompt("Enter password")
}

console.log('Access granted');




// 5) შექმენით მასივი, სადაც ჩაწერთ 5 საყვარელი ფილმის/სერიალის სახელწოდებას. დაბეჭდეთ სიიდან პირველი და ბოლო ელემენტები at() მეთოდის გამოყენებით.  შემდეგ კი ამოშალეთ მასივიდან მეორე და მეოთხე ინდექსზე მდგომი ელემენტები.


let favMovies = ["Gone Girl", "Whiplash" , "Suits", "Black swan", "The Last Samurai"]


console.log(favMovies.at(0));
console.log(favMovies.at(-1));


favMovies.splice(2,1)
favMovies.splice(4,1)


console.log(`Final result: ${favMovies}.`);




// 6) მოცემულია მასივი:
// ['one', 'two']

// გამოიყენეთ shift/unshift იმისთვის რომ:
// • მასივის დასაწყისში დაამატოთ 'one'
// • ამოშალოთ პირველი ელემენტი

// საბოლოო შედეგი კონსოლში გამოიტანეთ.


let lst = ['one', 'two']

lst.ushinft("One")

lst.shift()

console.log(lst)

