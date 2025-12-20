// 5) შექმენით ორი Boolean ცვლადი:
// isStudent და hasAccess. ლოგიკური ოპერატორების გამოყენებით დაადგინეთ შეუძლია თუ არა მოსწავლეს სისტემაში შესვლა. (განიხილეთ ყველა შესაძლო შემთხვევა)


let isStudent = true

let hasAccess = false

if (isStudent && hasAccess){
    console.log("succses!");
}else{
    console.log("You dont have an access");
}

if (isStudent || hasAccess){
    console.log("succses!");
}else{
    console.log("You dont have an access");
}
