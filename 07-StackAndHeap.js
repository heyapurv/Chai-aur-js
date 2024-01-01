// Stack memory, Heap memory

// stack (primitive), Heap (Non primitive)

let myYoutubeName = "ABCDE"
let anotherName = myYoutubeName
console.log(anotherName);
anotherName = "XYZ"
console.log(anotherName);

let user = {
    email: "User@google.com",
    upi: "abcd@icicibank"
}

let user2 = user
user2.email = "abc@google.com"
console.log(user.email);
console.log(user2.email);
