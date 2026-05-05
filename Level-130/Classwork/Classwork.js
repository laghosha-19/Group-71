let person = {
    firstName : "Luka",
    lastName : "Laghoshvili",
    age : 17,
    height : 175
}

delete person.age

person.height = 200

console.log(person)


// 2) შექმენით phone ობიექტი, რომელსაც ექნება brand, model, price property-ები, შექმენით ობიექტის მეთოდი რომელსაც გადაეცემა რამე რიცხვი და ამ რიცხვს დაუმატებს price-ს, გამოიტანეთ განახლებული price კონსოლში
const Phone = {
    brand : "Iphone",
    model : "Iph 5s",
    price : 500,


    increasePrice : function(Prc){
        this.price = this.price + Prc
    }
}

Phone.increasePrice(50)
console.log(Phone);
