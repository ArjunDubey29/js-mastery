// const tinderUser = new Object() Ye ek single object hai 
const tinderUser = {} // yeh ek non singleton object hai

console.log(tinderUser)
tinderUser.id = "1233cb"
tinderUser.name = "Arjun"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "aniketh007@onlyfans.com",
    fullname: {
        userFullName: {
            firstName: "Arjun",
            lastName: "Dubey"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName);

// Object Combine
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = Object.assign({}, obj1, obj2, obj3) par isse hum kam hi use karenge
const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);

const users = [
    {
        naam: "Arjun Dubey",
        age: 21
    },
    {
        naam: "Arjun Dubey",
        age: 21
    },
    {
        naam: "Arjun Dubey",
        age: 21
    },
    {
        naam: "Arjun Dubey",
        age: 21
    }
]
console.log(users[1].naam);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// +++++++++++++++++ Object Destructuring ++++++++++++

// DeStructuring
const course = {
    coursename: "JS in Hindi",
    price: 999,
    courseTeacher: "Arjun"
}
// console.log(course.courseTeacher);
const {courseTeacher: instructor} = course //Baar baar bada likhne se bache
console.log(instructor);

// {
//     "naam": "Arjun Dubey",
//     "course": "Cloud Essentials",
//     "fees": 5000
// }
// Json mein key value both are strings in Objects

// [
//     {},
//     {},
//     {},
//     {}
// ]
// Aise array mein bhi data aata api se