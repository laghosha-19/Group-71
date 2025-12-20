// 1) შექმენით სამი სხვადასხვა ცვლადი let-ის გამოყენებით: word1, word2, word3.
// სამივეში შეინახეთ სხვადასხვა სტრინგი და გამოიტანეთ კონსოლში. გამოიყენეთ toUpperCase მეთოდი რომ გადაიყვანოთ ეს სტრინგები დიდ ასოებად და შეინახოთ ახალ ცვლადებში (შემდეგ ისევ გამოიტანეთ კონსოლში).


let word1 = "Hello"
let word2 = "World"
let word3 = "Goal Oriented Academy!"

console.log(word1.toUpperCase());
console.log(word2.toUpperCase());
console.log(word3.toUpperCase());

word1 = "Hello again"
word2 = "World in my eyes "
word3 = "📻H"


console.log(word1.toUpperCase());
console.log(word2.toUpperCase());
console.log(word3.toUpperCase());




// 2) გამოიყენეთ დღეს ნასწავლი მეთოდი, რომ ამ სტრინგს მოაშოროთ ცარიელი სფეისები:


const variable = '     Group 71      '
console.log(variable.trim());


// 3) კომენტარის სახით ახსენით რას აკეთებს - Math.random() და Math.floor()

// Math.random გვაძლევს 1 დან 0 მდე რანდომულად დაგენერირებულ ციფრს სჰეიძლება შეიცავდეს 0 საც
// Math.floor ამრგვალებს ციფრებს მაგალითად 4.4 დამრგვალდება და იქნება 4 



// 4) დააგენერირეთ რენდომ რიცხვი 0-დან 71-მდე და გამოიტანეთ კონსოლში. ეს რიცხვი აუცილებლად უნდა იყოს მთელი, ამიტომ დაამრგვალეთ.

console.log(Math.floor(Math.random() * 71));
