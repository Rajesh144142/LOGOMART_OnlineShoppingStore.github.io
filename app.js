/*SLIDESHOW*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);

}


/*Slide show ends*/
/**************************** cart add or remove   ***********************/

let cartIcon=document.querySelector('#cart-icon');
let cart=document.querySelector('.cartp');
let closeCart=document.querySelector('#close-cartp');
//open Cart
cartIcon.onclick=() =>{
  cart.classList.add("active");
};
//close Cart
closeCart.onclick=()=>{
  cart.classList.remove("active");
};
if(document.readyState=='loading'){
  document.addEventListener("DOMContentLoaded",ready);

}
else{
  ready();
}
function ready(){
  //removeItems from cart
  var removeCartButtons=document.getElementsByClassName('cart-remove');
  console.log( removeCartButtons);
  for (var i=0;i<removeCartButtons.length;i++){
    var button=removeCartButtons[i];
    button.addEventListener('click',removeCartItem);
  }
  //quantity change 
  var quantityInputs=document.getElementsByClassName('cart-quantityp');
  for (var i=0;i<quantityInputs.length;i++){
    var input= quantityInputs[i];
    input.addEventListener('change',quantityChanged);
  }
    //add to cart
    var addCart=document.getElementsByClassName('add-cart');
    for(var i=0;i<addCart.length;i++){
      var button=addCart[i];
      button.addEventListener("click",addCartClicked);
   
    }
    //Buy Button work
    document
    .getElementsByClassName('btn-buyp')[0]
    .addEventListener('click',buyButtonClicked);

}
function removeCartItem(event){
  var buttonClicked=event.target
  buttonClicked.parentElement.remove()
  updatetotel();
}
//quantity changes
function quantityChanged(event){
  var input =event.target
  if (isNaN(input.value)||input.value<=0){
    input.value=1;
  }
  updatetotel();
}


function updatetotel(){
  var cartContent=document.getElementsByClassName("cart-contentp")[0];
  var cartBoxes=cartContent.getElementsByClassName("cart-boxp");
  var total=0;
  for (var i=0;i<cartBoxes.length;i++){
    var cartBox=cartBoxes[i];
    var priceElement=cartBox.getElementsByClassName("cart-pricep")[0];
    var quantityElement=cartBox.getElementsByClassName("cart-quantityp")[0];
    var price=parseFloat(priceElement.innerText.replace("₹",""));
    var quantity= quantityElement.value;
    total=total+(price*quantity);
}  
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-pricep")[0].innerText="₹"+total;
}
function buyButtonClicked(){
  
  alert('Your Order is being placed......Please wait ');
  var  cartContent=document.getElementsByClassName('cart-contentp')[0];
   while(cartContent.hasChildNodes()){
      cartContent.removeChild(cartContent.firstChild);
     
      updatetotel();
   }

}
//add to cart
function addCartClicked(event){
  alert('Your item is added to Cart.........')
  var button = event.target;
  var shopItem = button.parentElement;
  var title = shopItem.getElementsByClassName('product-title')[0].innerText;
  var price = shopItem.getElementsByClassName('price')[0].innerText;
  var productImg = shopItem.getElementsByClassName('product-img')[0].src;
  addProductToCart(title, price, productImg);
  updatetotel();


}
function  addProductToCart(title,price,productImg){
  var cartShopBox=document.createElement("div");
    cartShopBox.classList.add('cart-boxp');
   var cartItems=document.getElementsByClassName('cart-contentp')[0];
   var cartItemsNames=document.getElementsByClassName('cart-product-titlep');
   
  for(var i=0;i<cartItemsNames.length;i++){
     if (cartItemsNames[i].innerText == title) {
    }
  }
  
 
   var cartBoxContent = `
          
                  <img src="${productImg}" alt="" class="cart-imgp">
                     <div class="detail-boxp">
                     <div class="cart-product-titlep">
                       ${title}
                     </div>
                    <div class="cart-pricep">
                        ${price}
                    </div>
                   <input type="number" value="1"class="cart-quantityp">
                     </div>
 
                      <i class="bx bxs-trash-alt cart-remove"></i> `;
 
 cartShopBox.innerHTML=cartBoxContent;
 cartItems.append(cartShopBox);
 cartShopBox
 .getElementsByClassName('cart-remove')[0]
 .addEventListener('click',removeCartItem);
 cartShopBox
 .getElementsByClassName('cart-quantityp')[0]
 .addEventListener('change',quantityChanged);
 
 }
 /*****************************************cart ends***********************/
/*NAV BOTTOM OPEN CLOSE*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/*ENDS*/
/*DROPDOWN OF CATAGORIES*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownfn() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/*ENDS*/
/*----------LOGIN SECTION---------*/
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}








var slidername1 = document.getElementById("shop-content1");
var product1 = slidername1.getElementsByClassName("product-box");
function next1() {
  slidername1.append(product1[0]);
}
function prev1() {
  slidername1.prepend(product1[product1.length - 1]);
}






var slidername2 = document.getElementById("shop-content2");
var product2 = slidername2.getElementsByClassName("product-box");
function next2() {
  slidername2.append(product2[0]);
}
function prev2() {
  slidername2.prepend(product2[product2.length - 1]);
}




var slidername3 = document.getElementById("shop-content3");
var product3 = slidername3.getElementsByClassName("product-box");
function next3() {
  slidername3.append(product3[0]);
}
function prev3() {
  slidername3.prepend(product3[product3.length - 1]);
}
var slidername4 = document.getElementById("shop-content4");
var product4 = slidername4.getElementsByClassName("product-box");
function next4() {
  slidername4.append(product4[0]);
}
function prev4() {
  slidername4.prepend(product4[product4.length - 1]);
}


var modal = document.getElementsById('about-container');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


