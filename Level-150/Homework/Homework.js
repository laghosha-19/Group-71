// 4) შექმენით ორი მასივი: fruits1, fruits2. შექმენით მესამე მასივი allFruits, რომელიც შეიცავს ორივე მასივის ელემენტებს Spread ოპერატორის გამოყენებით.


const fruits1 = ["blueberry"," Mango" , "Pineapple"]
const fruits2 = ["Strawberry"," Apple" ]

let allFruits =  [...fruits1, ...fruits2]

console.log(allFruits);




// 5) შექმენით ობიექტი updatedStudent, რომელიც იქნება student ობიექტის ასლი, მაგრამ მასში grade იქნება შეცვლილი (მაგალითად: "A") და დამატებული ექნება ახალი თვისება isGraduated: true.
const student = {
    name: "Deme",
    grade: "F",    
}

const updatedStudent = {
    ...student,
    grade: 'A',
    isGraduated: true
}

console.log(updatedStudent);

