//1) Select the correct option that contains the value of the javascript variable sum

let sum = 0
for (let counter = 0;counter < 5; counter++){
    sum += counter //this is the correct option
    if(counter == 3){
        break
    }
}

console.log(sum);

// გამოიტანს 6. counter-მა უნდა გააკეთოს loop იქამდე სანამ, იქნება 5 ზე ნაკლები counters ემატება 1 იქამდე სანამ იქნება 5 ზე ნაკლები როდესაც counter გაუტოლდება 3 უნდა შეჩერდეს loop 


// 2) ამ კოდში გვაქვს ორი ცვლადი ერთი მეორეს უნდა დაემატოს იქამდე სანამ i < 5 - ზე 


var x = 0
var i = 0
do{
    x = x + i 
    i++ 
    console.log(x);
}while (i < 5)





//3) In Proggraming, a loop is used for what purpose? 
// Correct answer is: To repeat a set of instrutions untill a stopping condition is met.



// 4) Create a for loop with an iterator variable x that beagins at 0,
//  stopts when it is greater that 100, and is reassigned to its current
//  value incremented by 2 in each iteration
for (let x = 0; x < 100; x = x + 2){
    console.log(x);
}



// 5) How would you arrange this while loop so that, when printed to the screen, the output of conlose.log is only 3?


var x = 0

while(x < 3 ){
    x++
}
console.log(x)




// 6) Select The code block that will allow the loop to exit after three complete iterations 

for (let i = 0; i < 10; i++){
    if(i >= 3){
        break
    }
    console.log(i);
}



// 7) Fill in the missing code to log ecen numbers between 1 and 100 to the console

let i = 0

do{
    i++ 
    if(i % 2 == 0){
        console.log(i);
    }
}while(i < 100)