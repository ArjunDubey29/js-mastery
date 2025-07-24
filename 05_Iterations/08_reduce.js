// 9.js (Reduce)
const mydigits = [1, 2, 3, 4]
// const myTotal = mydigits.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// }, 3)
// console.log(myTotal);

// Now with arrow function

// const myTotal = mydigits.reduce( (acc, curval) => acc + curval, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "de course",
        price: 3999
    },
    {
        itemName: "c++ course",
        price: 4999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);