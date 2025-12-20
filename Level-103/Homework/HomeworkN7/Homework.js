// 9) შექმენით ცვლადი dayNumber (1–დან 7-მდე).
// if / else გამოყენებით დააბრუნეთ კვირის შესაბამისი დღე
// (1 → ორშაბათი, 7 → კვირა).


const dayNumber = 5

if (dayNumber === 1){
    console.log("Today is Monday");
}if(dayNumber === 2){
    console.log("Today is Tuesday");
}if(dayNumber === 3){
    console.log("Today is Wednsday");
}if(dayNumber === 4){
    console.log("Today is Thursday");
}if(dayNumber === 5){
    console.log("Today is Friday");
}if(dayNumber === 6){
    console.log("Today is Saturday");
}if(dayNumber === 7){
    console.log("Today is Sunday");
}else{
    console.log("Please enter number from 1 to 7!");
}