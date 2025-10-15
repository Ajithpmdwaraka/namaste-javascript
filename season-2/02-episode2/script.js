const cart = ["shoes", "pants", "kurtas"];

createOrder(cart, function () {
    proceedToPayment(orderId);
})

const promise = createOrder(cart);

promise.then(function (orderId) {
    return proceedToPayment(orderId);
});


const api = ""
const user = fetch(api);
console.log(user);

user.then(function (data) {
    console.log(data);
});

createOrder(cart)
.then(function (orderId) {
    proceedToPayment(orderId);
})
.then(function (paymentInfo) {
    showOrderSummary(paymentInfo);
})
