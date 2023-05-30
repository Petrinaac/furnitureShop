var addToBasketButtons = document.getElementsByClassName('btn-primary');
var cartAmountElement = document.getElementById('cartAmount');
var cartAmount = 0;

for (var i = 0; i < addToBasketButtons.length; i++) {
  addToBasketButtons[i].addEventListener('click', function() {
    cartAmount++;
    cartAmountElement.textContent = cartAmount;
  });
}