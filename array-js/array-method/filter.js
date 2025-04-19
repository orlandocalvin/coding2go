const products = [
    { name: "Laptop", price: 499, color: "white" },
    { name: "Smartphone", price: 899, color: "black" },
    { name: "Headphone", price: 50, color: "white" },
    { name: "Tablet", price: 199, color: "grey" },
    { name: "Keyboard", price: 210, color: "blue" }
]

const affordableProducts = products.filter(product => product.price < 200)
console.log(affordableProducts)

const newArr = products.filter(product => product.color == "white")
console.log(newArr)

const newArr2 = products.filter(product => product.name.includes("phone"))
console.log(newArr2)

const newArr3 = products.filter(product => {
    return product.color == "white" && product.price < 100
})

console.log(newArr3)