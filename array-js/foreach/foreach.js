/* Fundamental forEach Function */
const numbers = [1, 2, 3, 4, 5]

numbers.forEach(printDouble)

function printDouble(number) {
    console.log(number * 2)
}

/* Most Common Structure forEach Function */
const words = ["Apple", "Bank", "Cable"]

words.forEach((word) => {
    console.log(word.toUpperCase())
})

/* Important Note: forEach Function doesn't change the original array */
console.log(words)

/* All Parameter forEach Function */
const myName = ["Orlando", "Calvin", "Aditama"]

myName.forEach((word, index, array) => {
    console.log(word, array[index + 1])
})