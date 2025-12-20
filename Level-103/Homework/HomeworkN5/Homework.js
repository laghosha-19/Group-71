
// 7) შექმენით ორი ცვლადი password და confirmPassword. შეამოწმეთ
// • ემთხვევა თუ არა ისინი ერთმანეთს
// • არის თუ არა პაროლი მინიმუმ 8 სიმბოლოსგან შემდგარი
// შედეგი დაბეჭდეთ კონსოლში.



let password = "GoaIsBest"

let confirmPassword = "Hello"


if (password.length <= 7){
    console.log("Password must be 8 characters");
}else{
    console.log("You are all set!");
}

let checked = password === confirmPassword

if(checked == true){
    console.log("You entered Password correect!");
}else{
    console.log("Entered passwords does not match each other!");
}



