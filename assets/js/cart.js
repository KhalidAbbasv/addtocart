//cart
const quantityInput = document.getElementById("quantity");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const subtotal = document.getElementById("subtotal");
const subtotalAmount = document.getElementById("sub-total-amount");
const totalAmount = document.getElementById("total-amount");

let total = parseFloat(subtotal.innerText.slice(1));

increaseButton.addEventListener("click", () => {
  let quantity = parseInt(quantityInput.textContent);
  quantity += 1;
  quantityInput.textContent = quantity;
  total += 295;
  subtotal.innerText = `$${total.toFixed(2)}`;
  subtotalAmount.innerText = `$${total.toFixed(2)}`;
  totalAmount.innerText = `$${total.toFixed(2)}`;
});
if (subtotal.innerText == `$0`) {
  subtotal.innerText = `${total}`;
}
decreaseButton.addEventListener("click", () => {
  let quantity = parseInt(quantityInput.textContent);
  if (quantity > 1) {
    quantity -= 1;
    quantityInput.textContent = quantity;
    total -= 295;
    subtotal.innerText = `$${total.toFixed(2)}`;
    subtotalAmount.innerText = `$${total.toFixed(2)}`;
    totalAmount.innerText = `$${total.toFixed(2)}`;
  }
});