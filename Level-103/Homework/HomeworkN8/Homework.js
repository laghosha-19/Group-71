// 10) შექმენით ცვლადი username.
// თუ:
// ცარიელია → "Username is required"
// სიგრძე ნაკლებია 4-ზე → "Username is too short"
// სხვა შემთხვევაში → "Username accepted"


let username = "luka1234"

if (username === ""){
    console.log("Username is required");
}if(username.length <= 4){
    console.log("Username is too short");
}else{
    console.log("Username accepted");
}

