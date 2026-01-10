// 2) შექმენით მასივი, სადაც ჩვენს მიერ ნასწავლ პროგრამირების ენებს შეინახავთ.
// პირველ რიგში ცალ-ცალკე ხაზებზე გამოიტანეთ სიის თითოეული ელემენტი.
// შემდეგ კი სცადეთ უფრო მარტივი გზით: for loop-ის საშუალებით გამოიტანეთ სიის თითოეული ელემენტი.


const langs = ["python", "javaScript", "c++"]


console.log(langs[0]);
console.log(langs[1]);
console.log(langs[2]);


// 4) შექმენით ორი რიცხვეის სია, შეამოწმეთ შეიცავს თუ არა ერთიდაიმავე წევრებს.
// თუ რიცხვები ერთმანეთს ემთხვევა - mutualNums სიაში დაამატეთ საერთო ელემენტები.


const name1 = ["Deme", "Luka", "Gvanca" , "MARI"]
const name2 = ["Barbare", "Lika" , "Salome"]
const mutualNames = []

for (let i = 0 ; i<name1.length; i++){
    for (let x = 0; x < name2.length; x++){
        if (name1[i] === name2[x]){
            mutualNames.push(name2[x])
        }
    }
}
console.log(mutualNames);