const products = [
    '123', '456'
]

function totalSum() {
    var totalPrice = document.querySelectorAll('.genarate-total-price');
    var totalSum = 0;

    totalPrice.forEach((totalPrice) => {
        totalSum += parseInt(totalPrice.textContent) || 0;
    });
    document.querySelector('.cart-tortal').innerHTML = "Rs : " + totalSum + ".00";
}
function increment(inputid) {
    var qtyTotal = document.getElementById('total' + inputid);
    var input = document.getElementById('qtyInput' + inputid);
    input.value++;
    const total = parseFloat(qtyTotal.textContent);
    qtyTotal.textContent = parseFloat(qtyTotal.getAttribute('mainPrice')) + total + ".00";
    totalSum();
};
function decrement(inputid) {
    var qtyTotal = document.getElementById('total' + inputid);
    var input = document.getElementById('qtyInput' + inputid);
    if (input.value >= 2) {
        input.value--;
        const total = parseFloat(qtyTotal.textContent);
        qtyTotal.textContent = total - parseFloat(qtyTotal.getAttribute('mainPrice')) + ".00";
        totalSum();
    }

};