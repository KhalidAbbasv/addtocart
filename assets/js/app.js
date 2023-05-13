$(document).ready(function () {
  $(".slideshow-container").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  var prev = $(".slick-prev");
  prev.html('<i class="fa-solid fa-arrow-left"></i>');

  var next = $(".slick-next");
  next.html('<i class="fa-solid fa-arrow-right"></i>');

  // Checkout Page accordion
  $("#create_pwd").on("change", function () {
    $(".account-create").slideToggle("100");
  });

  //about page client feedback
  $(".client-feedback-summary").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  //cart page slick
  $(".slick-arrow-style").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // product view mode change js
  $(".product-view-mode a").on("click", function (e) {
    e.preventDefault();
    var shopProductWrap = $(".shop-product-wrap");
    var viewMode = $(this).data("target");
    $(".product-view-mode a").removeClass("active");
    $(this).addClass("active");
    shopProductWrap.removeClass("grid-view list-view").addClass(viewMode);
  });

  // product details slider active
  $(".product-large-slider").slick({
    fade: true,
    arrows: false,
    asNavFor: ".pro-nav",
  });

  // product details slider nav active
  $(".pro-nav").slick({
    slidesToShow: 4,
    asNavFor: ".product-large-slider",
    arrows: false,
    focusOnSelect: true,
  });
});

let addToCardBtn = document.querySelectorAll(".addToCart");
let myBasketStorage = localStorage.getItem("basket");
let productWrapper = document.querySelector(".slick-arrow-style");
let basket = [];
// function basketCount() {
//   document.querySelector("#basketCount").innerHTML = JSON.parse(
//     localStorage.getItem("basket")
//   ).length;
// }
// basketCount();

//add to cart
let cartTable = document.querySelector(".cart-table tbody");

function addToCart() {
  [...addToCardBtn].forEach((btn) => {
    let productItem = btn.parentElement.parentElement.parentElement;
    btn.onclick = function () {
      let productImg = productItem
        .getElementsByTagName("img")[0]
        .getAttribute("src");
      let productName = productItem.querySelector(".product-name a").innerHTML;
      let productPrice =
        productItem.querySelector(".product-name span").innerHTML;
      let item = basket.find((b) => b.name === productName);
      if (basket.some((x) => x.name === productName)) {
        item.count++;
      } else {
        basket.push({
          image: productImg,
          name: productName,
          price: productPrice,
          count: 1,
        });
      }
      localStorage.setItem("basket", JSON.stringify(basket));
      console.log(basket);
    };
  });
}
addToCart();
let basketCart = JSON.parse(localStorage.getItem("basket"));

function renderCart() {
  cartTable.innerHTML = "";
  basketCart.map((data) => {
    cartTable.innerHTML += `     <tr>
    <td class="pro-thumbnail">
        <a href="#"><img class="img-fluid"
                src=${data.image} alt="Product" /></a>
    </td>
    <td class="pro-title">
        <a href="#">${data.name}</a>
    </td>
    <td class="pro-price"><span>${data.price}</span></td>
    <td class="pro-quantity">
        <div class="pro-qty" style="display:flex; gap:30px">
            <span id="quantity">${data.count}</span>
            <div class="increase-decrease">
                <div id="increase" style="padding:0 3px; border:1px solid black">+
                </div>
                <div id="decrease" style="padding:0 3px; border:1px solid black">-
                </div>
            </div>
        </div>
    </td>
    <td class="pro-subtotal"><span id="subtotal">$295.00</span></td>
    <td class="pro-remove">
        <a href="#"><i class="fa-solid fa-trash-can"></i></a>
    </td>
    </tr>`;
  });
}
renderCart();

//card  delete
let trashBin = document.querySelectorAll(".fa-trash-can");

function removeItem() {
  [...trashBin].forEach((btn) => {
    btn.onclick = function () {
      let cartItem = btn.parentElement.parentElement.parentElement;
      let name = cartItem.querySelector(".pro-title a").innerHTML;
      cartItem.remove();
      basketCart = basketCart.filter((x) => x.name != name);
      console.log(name);
      localStorage.setItem("basket", JSON.stringify(basketCart));
    };
  });
}
removeItem();

// addToCardBtn.array.forEach((btnCard) => {
//   btnCard.addEventListener("click", function (e) {
//     e.preventDefault();
//     let Id = this.parentElement.parentElement.parentElement;
//     let price =
//       this.parentElement.previousElementSibling.firstElementChild.children[1];
//     let name =
//       this.parentElement.previousElementSibling.firstElementChild.children[0];
//     let image =
//       this.parentElement.parentElement.previousElementSibling.firstElementChild
//         .firstElementChild;
//     createStorage();
//     let basket = getBasket(Id, price, name, image);
//     localStorage.setItem("basket", JSON.stringify(basket));
//     basketCount();
//   });
// });
// function getBasket(Id, price, name, image) {
//   let basket = JSON.parse(localStorage.getItem("basket"));
//   let existItem = basket.find((item) => item.id == Id);
//   if ((existItem = undefined)) {
//     basket.push({
//       id: Id,
//       price: price,
//       name: name,
//       image: image,
//       count:1
//     });
//   }
//   else{
//     existItem.count++;
//   }
//   return basket;
// }
