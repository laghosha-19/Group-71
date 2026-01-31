// // ვესალმებით user-ს მოცემული გვაქვს user arr. ყველა user-ს ვესალმებით წინადადებით "helo{user}"" იმ შემთხვევაში თუ user აღმოჩნდება "Deme"

// const users = ["Luka", "Nika", "Mariami", "Deme", "Nia", "Cotne"]

// for (let i = 0; i < users.length; i++){
    
//     if (users[i] === "Deme"){
//         console.log("Baro Deme");
        
//         break
//     }
//     console.log(`Hello ${users[i]}`)
// }





// let arr = [1,2,3,4,5]

// // push - მასივის ბოლს ამატტებს ელემენტს 
// // pop - მასივის ბოლოდან აგდებს ელემენტს 
// // toString - მასივი გადაწავს String მონაცემის ტიპად 
// // at - მასივიდან აბრუნებს კონკრეტუილ ინდექსზე მდგომ ელემენტს, თუ დავტოვებტ ცარიელს აბრუნებს მენულე ინდექსზე მდგომ ელემენტს  
// // shift - აშორებს მენულზე ინდექსზე მყოფ ელემენტს 
// // unshift - ამატებს ელემენტებს სიის დასაწყისში



// arr.push(40)
// arr.pop()
// arr.shift()
// arr.unshift("apple", "strawberry", "blueberry")


// let num1 = arr.at(3)




// console.log(num1);


let languages = ["Python", "JS", "Java", "C++"];
// მოცემულია სიტყვების მასივი. იპოვე სიტყვა “Java”. როგორც კი იპოვი, დაბეჭდე და გააჩერე ლუპი.

for(let i = 0; i < languages.length; i++){
    if(languages[i] === "Java")
        console.log(languages[i]);
        break
}




// 2) დაბეჭდე რიცხვები 1-დან 150-მდე. როგორც კი შეხვდები რიცხვს, რომელიც იყოფა 6-ზე, მაგრამ არ იყოფა 12-ზე, გააჩერე ლუპი.

for (let i = 1;i < 150; i++){
    console.log(i);
    if(i % 6 == 0)
        break
}




// 3)შექმენით მასივი პროგრამირების ენებზე,შემდეგ push
// ის საშუალებით დაამატეთ ორი ელემენტი და შემდეგ პირველი და ბოლო ელემენტი ამოიღეთ შესაბამისი მეთოდებით,გამოიტანეთ მიღებული მასივი


let Proglanguages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby",]


Proglanguages.push("Kotlin")
Proglanguages.pop()
Proglanguages.shift()

console.log(Proglanguages);



