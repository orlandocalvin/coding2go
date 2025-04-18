const prices = [4, 8, 15, 16, 23, 42]
const discountPrices = prices.map(price => price * 0.5)

console.log(prices)
console.log(discountPrices)

const products = [
    { name: "Laptop", price: 499, color: "white" },
    { name: "Smartphone", price: 899, color: "black" },
    { name: "Headphone", price: 50, color: "white" },
    { name: "Tablet", price: 199, color: "grey" },
    { name: "Keyboard", price: 210, color: "blue" }
]

const discounts = products.map((product) => {
    /* only change the product price
        return {
            ...product,
            price: product.price * 0.5
        }
    */

    // list spesific property of the object
    return product.name
})

console.log(discounts)

// add new property of the object
const categorizedProducts = products.map(product => {
    let category
    if (product.price < 100) category = "Budget"
    else if (product.price < 500) category = "Mid-range"
    else category = "Premium"
    return { ...product, category }
})

console.log(categorizedProducts)