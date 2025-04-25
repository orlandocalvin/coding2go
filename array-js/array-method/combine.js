const products = [
    { name: "Laptop", price: 499, color: "white", isShoppingCart: true },
    { name: "Smartphone", price: 899, color: "black", isShoppingCart: false },
    { name: "Headphone", price: 50, color: "white", isShoppingCart: false },
    { name: "Tablet", price: 199, color: "grey", isShoppingCart: true },
    { name: "Keyboard", price: 210, color: "blue", isShoppingCart: false }
]

const cartTotal = products.filter(p => p.isShoppingCart)
    .map(p => p.price * 0.5)
    .reduce((total, price) => {
        return total + price
    }, 0)

console.log(cartTotal)