
class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    get greetUsername() {
        return `Hello ${this.username}`
    } 

    get displaynfo(){
        return `Email: ${this.email} Password: ${this.password}`
    }

    // get example
    get usern(){
        return this.username
    }  


    // set example
    set usern(newName){
        this.username = "Luka"
    } 


}


const user1 = new User("Lika" ," Lika@gmail.com" , 1234)



console.log(user1.username);   

console.log(user1.email);

console.log(user1.pass);

console.log(user1.greetUsername())

console.log(user1.displaynfo());

console.log(user1.username);//setter is changing value

// inheritance


class Animal{
    constructor(name){
        this.name
    }
}


class Dog extends Animal{
    constructor(name, Breed){
        super(name)
        this.breed = breed
    }

    get dname(){
        return `dog name is ${this.name}`
    }


    
    set dname(newName){
        this.name = newName
    }
}



const dog1 = new Dog("Kupata", "Doberman")


console.log(dog1.name)
console.log(dog1.breed);
console.log(dog1.dname())

dog1.name = "Max"

console.log(dog1.name)


// CLASSWORK 
//შექმენით მშობელი კლასი Mentor, რომელსაც ექნება კუთვნილებები: name, experience (experience-ში ჩაწერეთ begginner, intermediate ან advanced). ასევე შექმენით getter რომ გამოიტანოთ მენტორის experience.

// შექმენით შვილი კლასი Assistent, რომელიც inheritence-ის მეშვეობით იღებს Mentor-ის კუთვნილებებს (გამოიყენეთ super მეთოდი). ასევე დაუმატეთ mainLanguage კუთვნილება. საბოლოოდ გამოიძახეთ Assistent კლასის სამივე კუთვნილება და ასევე Mentor-ის მეთოდი. 


class Mentor{
    constructor(name, experience){
        this.name = name
        this.experience = experience
    }
    get Nexperience(){
        return `Mentor's experience is ${this.experience}`
    }

}


class Assistant extends Mentor{
    constructor(name,experience,mainLanguage){
        super(name, experience)
        this.mainLanguage = mainLanguage

    }
}

const Mentor1 = new Mentor("Luka" , "Begginer",)
const Mentor2 = new Assistant("Luka" , "Begginer", "Georgian")


console.log(Mentor1.Nexperience());
console.log(Mentor1.name);
console.log(Mentor1.experience);





