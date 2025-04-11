const names = ["Orlando", 46, true, [19, 37], "Kelvin"]
names[1] = "Calvin" // change the value

names.push(46) // push at the end of array
console.log(names)

names.pop() // remove at the end of array
console.log(names)

console.log(names[3][1]) // call nested array
console.log(names.length) // count array length

const shoppingList = [
    "apples",
    "milk",
    "bread",
    "eggs",
    "cheese",
    "chicken"
]

shoppingList.forEach(item => {
    const listItem = document.createElement('li')
    listItem.innerText = item
    document.querySelector('ol').appendChild(listItem)
})