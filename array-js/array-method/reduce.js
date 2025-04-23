const prices = [4, 8, 15, 16, 23, 42]

const totalPrice = prices.reduce((total, currentPrice) => {
    console.log(`${total} + ${currentPrice} = ${total + currentPrice}`)
    return total + currentPrice
}, 0)

console.log(totalPrice)

/* =================================== */
const words = ['Hello', ' ', 'World!']
const sentence = words.reduce((result, word) => {
    return result + word
}, '')

console.log(sentence)

/* =================================== */
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

const count = fruits.reduce((tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1
    return tally
}, {})

console.log(count)