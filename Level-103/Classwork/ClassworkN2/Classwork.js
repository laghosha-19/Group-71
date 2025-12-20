// 2) გამოიყენეთ Math.random() რათა დააგენერიროთ რენდომ რიცხვი 0-დან 100-მდე. თუ რიცხვი 50-ზე ნაკლები აღმოჩნდება გამოიტანეთ False, ხოლო თუ 50-ზე მეტი იქნება გამოიტანეთ True


let ranNumber = Math.floor(Math.random() * 100)

if(ranNumber < 50 ){
    console.log(false);
}else{
    console.log(true);
}
