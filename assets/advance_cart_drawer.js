
  var removeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"><path fill="currentColor" d="M4.886 0c-.572 0-1.043.471-1.043 1.043v.696H1.125a.348.348 0 0 0-.14 0h-.62a.348.348 0 1 0 0 .696h.347v12.522c0 .572.471 1.043 1.044 1.043h9.043c.573 0 1.044-.471 1.044-1.043V2.435h.348a.348.348 0 1 0 0-.696H8.712v-.696C8.712.471 8.242 0 7.67 0H4.886zm0 .696H7.67c.193 0 .348.155.348.347v.696h-3.48v-.696c0-.192.155-.347.348-.347zM1.408 2.435h9.74v12.522a.347.347 0 0 1-.349.347H1.756a.347.347 0 0 1-.348-.347V2.435zm2.75 1.728a.348.348 0 0 0-.043.01.348.348 0 0 0-.272.349v8.695a.348.348 0 1 0 .695 0V4.522a.348.348 0 0 0-.38-.359zm2.087 0a.348.348 0 0 0-.044.01.348.348 0 0 0-.271.349v8.695a.348.348 0 1 0 .695 0V4.522a.348.348 0 0 0-.38-.359zm2.087 0a.348.348 0 0 0-.044.01.348.348 0 0 0-.271.349v8.695a.348.348 0 1 0 .695 0V4.522a.348.348 0 0 0-.38-.359z"></path></svg>';
  var iconHtm = '<svg viewBox="0 0 352 242" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-3-Copy" fill="#DADADA"><path d="M104.575425,132.650894 L289.11969,132.650894 L309.366076,62.9732484 C312.674824,51.5862373 324.711285,45.0021865 336.250263,48.2673594 C347.789241,51.5325323 354.46116,63.4104744 351.152411,74.7974855 L326.538844,159.504724 C324.602633,170.023725 315.272538,178 304.054623,178 L90.1807417,178 C88.6984154,178 87.2490519,177.860728 85.845355,177.594721 C75.5215615,177.444041 66.24162,170.391127 63.8148971,160.018268 L37.8366932,48.976229 L18.2046556,44.8582673 C5.79202652,42.2546287 -2.13156323,30.2140593 0.506822519,17.9649028 C3.14520827,5.71574635 15.3464665,-2.10349085 27.7590956,0.500147738 L60.5605244,7.38048431 C64.7992638,8.26959051 68.5145241,10.2591628 71.4644714,12.9817136 C75.3865108,16.0611103 78.3196712,20.4224853 79.5347301,25.6161705 L104.575425,132.650894 Z" id="Combined-Shape-Copy"></path><circle id="Oval-3-Copy-3" cx="110.5" cy="217.5" r="24.5"></circle><circle id="Oval-3-Copy-2" cx="290.5" cy="217.5" r="24.5"></circle><path d="M150.568249,88.7724609 C173.178711,88.7724609 190.314112,61.8860684 179.936523,51.0869141 C169.558935,40.2877597 167.327059,62.6083984 150.367519,62.6083984 C133.407979,62.6083984 130.458984,43.0048828 120.90332,52.5 C111.347656,61.9951172 127.957788,88.7724609 150.568249,88.7724609 Z" id="Oval" fill-rule="nonzero"></path><path d="M251.420122,88.6359986 C274.030584,88.6359986 291.165985,61.7496061 280.788396,50.9504518 C270.410808,40.1512974 268.178932,62.4719361 251.219392,62.4719361 C234.259852,62.4719361 231.310857,42.8684205 221.755193,52.3635377 C212.199529,61.8586549 228.80966,88.6359986 251.420122,88.6359986 Z" id="Oval-Copy" fill-rule="nonzero"></path></g></g></svg>';
  var defaults = {
    cartModal: '.js-ajax-cart-modal', // classname
    cartModalContent: '.js-ajax-cart-modal-content', // classname
    cartModalClose: '.js-ajax-cart-modal-close', // classname
    cartDrawer: '.js-ajax-cart-drawer', // classname
    cartDrawerContent: '.js-ajax-cart-drawer-content', // classname
    cartDrawerClose: '.js-ajax-cart-drawer-close', // classname
    cartDrawerTrigger: '.js-ajax-cart-drawer-trigger', // classname
    cartOverlay: '.js-ajax-cart-overlay', // classname
    cartCounter: '.js-ajax-cart-counter', // classname
    addToCart: '.js-ajax-add-to-cart', // classname
    removeFromCart: '.js-ajax-remove-from-cart', //classname
    removeFromCartNoDot: 'js-ajax-remove-from-cart', //classname,
    checkoutButton: '.js-ajax-checkout-button',
};

var cartModal = document.querySelector(defaults.cartModal);
var cartModalContent = document.querySelector(defaults.cartModalContent);
var cartModalClose = document.querySelector(defaults.cartModalClose);
var cartDrawer_v = document.querySelector(defaults.cartDrawer);
var cartDrawerContent = document.querySelector(defaults.cartDrawerContent);
var cartDrawerClose = document.querySelector(defaults.cartDrawerClose);
var cartDrawerTrigger = document.querySelector(defaults.cartDrawerTrigger);
var cartOverlay = document.querySelector(defaults.cartOverlay);
var cartCounter = document.querySelector(defaults.cartCounter);
var addToCart = document.querySelectorAll(defaults.addToCart);
var removeFromCart = document.querySelectorAll(defaults.removeFromCart);
var checkoutButton = document.querySelector(defaults.checkoutButton);
var htmlSelector = document.documentElement;
 
 
  $('body').on('click', '.js-ajax-add-to-cart', function(event){
    // if( $(this).parents('form').find('[required]').val() ){
      event.preventDefault();
      var formdata = $(this).parents('form').serialize();
      console.log(formdata);
      addProductToCart(formdata);
    // }
     $.ajax({
        type: 'GET',
        url: '/cart.js',
        dataType: 'json',
        success: function(cart) {
          //console.log(cart.item_count , 'hello');
        }
     });
  });


function Price__Update() {
  $('.totalCartItem span').text('');
     
  setTimeout(function(){

    $.ajax({
        type: 'GET',
        url: '/cart.js',
        dataType: 'json',
        success: function(cart) {
          
          var total_item1 = cart.item_count;
           // alert('hello');
          var _items = cart.items;
          $('.totalCartItem span').text(total_item1);
          $.each(_items , function(index, item) {
            var _originalPrice = item.original_price;
            //console.log(_originalPrice)
            var _originalQty = item.quantity;
             // console.log(_originalQty)
             var Item__ID = item.id;
            var total_Calc = ((_originalPrice*_originalQty)/100);
            $('.money.'+Item__ID).text('₹ '+total_Calc);

          });
          
       }
      
    });
  },1500);
}
  Price__Update();
$('body').on('click', '.js-ajax-add-to-cart,.js-qtyplus,.js-qtyminus,.ajax-cart-item__remove', function(){
  Price__Update();
  // alert('hello');
});




  var qty = '';
  $('body').on('click', '.ajax-change-quantity.js-qtyplus, .product-atc-btn', function(){
     qty = parseInt($(this).parent().find('.qty').val()) + 1;
   // var l = $(this).parents('.ajax-cart-item__single').data('line');
     var l = $(this).parents('.ajax-cart-item__quantity').attr('variant-id');
    if(window.theme.showMaxLimit){
    var max_limit = parseInt(window.theme.MaxLimit);
    if(qty <= max_limit){
       $(this).parent().find('input').val(qty);
      onCartUpdate(qty, l);
    }
      
      
  }
    else{
      $(this).parent().find('input').val(qty);
      onCartUpdate(qty, l);
    }

    
//     $('body').on('click', '.js-qtyplus,.js-qtyminus,.ajax-cart-item__remove', function(){
//  $.ajax({
//         type: 'GET',
//         url: '/cart.js',
//         dataType: 'json',
//         success: function(cart) {
//           // var total_item1 = cart.item_count;
//           // $('.totalCartItem span').text(total_item1);
//           //console.log(variant.original_price,'hello');
//          //alert(((cart.original_total_price)/100));
//           var Increse_price = ((cart.original_total_price)/100);
//           var increseTotal = ((Increse_price)*qty);
//           alert(increseTotal);
          
//         }
      
//      });

  
// });
  });

 // $('.totalCartItem span').text(qty);
  $('body').on('click', '.ajax-change-quantity.js-qtyminus', function(){
    var qty = parseInt($(this).parent().find('.qty').val()) - 1;
    if(qty >= 1){
      $(this).parent().find('input').val(qty);
      //var l = $(this).parents('.ajax-cart-item__single').data('line');
      var l = $(this).parents('.ajax-cart-item__quantity').attr('variant-id');
      onCartUpdate(qty, l);
      // $('.totalCartItem span').text(qty);
    }
  });
  
function addProductToCart(formID) {
    $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        dataType: 'json',
        data: formID,
        success: addToCartOk,
        error: addToCartFail,
    });
}


function fetchCart() {
    $.ajax({
        type: 'GET',
        url: '/cart.js',
        dataType: 'json',
        success: function(cart) {
          // freegift(cart);
            //onCartUpdate(cart);
          if (cart.item_count === 0) {
            $('.car__top').hide();
            cartDrawerContent.innerHTML = '<div class="empty_icon_cart">'+iconHtm+'</div><div class="empty_text_cart">Your bag is currently empty</div><p class="align-center cart_continue_shopping"><a data-cc-animate-click="" href="/collections/all">Continue shopping</a><svg class="Icon Icon--arrow-right" role="presentation" viewBox="0 0 11 21"> <polyline fill="none" stroke="currentColor" points="0.5 0.5 10.5 10.5 0.5 20.5" stroke-width="1.25"></polyline></svg></p>';
            checkoutButton.classList.add('is-hidden');
            $('.header-bar__cart-count').text(cart.item_count);
            $('.header-bar__cart-count').addClass('hidden-count');
             $('.js-ajax-cart-drawer-trigger div').text(cart.item_count);
            $('#stickycartCount').text(cart.item_count);
             $('.loader-cart').hide();
          } else {
            $('.car__top').show();
            $('.header-bar__cart-count').text(cart.item_count);
            $('.header-bar__cart-count').removeClass('hidden-count');
            $('#stickycartCount').text(cart.item_count);
            renderCart(cart);
            checkoutButton.classList.remove('is-hidden');
          }
          //console.log(cart, 'hello');
          //console.log(cart.original_price,'hello');

        },
    });
}

function changeItem(line, callback) {
  
    const quantity = 0;
    $.ajax({
        type: 'POST',
        url: '/cart/change.js',
        data: 'quantity=' + quantity + '&line=' + line,
        dataType: 'json',
        success: function(cart) {
            if ((typeof callback) === 'function') {
                callback(cart);
            } else {
              
                fetchCart();
                removeProductFromCart(cart);
            }
        },
    });
}

  function onCartUpdate(quantity, line, callback) {
     $('.loader-cart').show();
    $.ajax({
      type: 'POST',
      url: '/cart/change.js',
        //data: 'quantity=' + quantity + '&line=' + line,
         data : {id : line, quantity: quantity},
         dataType: 'json',
      success: function(cart) {
        if ((typeof callback) === 'function') {
          callback(cart);
        } else {
          fetchCart();
        }
      },
      error:function (err) {
        console.warn(err)
      }
    });
   
  }

function addToCartOk(product) {
    //cartCounter.innerHTML = Number(cartCounter.innerHTML) + 1;
    openCartOverlay();
    openCartDrawer()
    fetchCart();
}

function removeProductFromCart(cart) {
    // cartCounter.innerHTML = Number(cartCounter.innerHTML) - 1;
  
}

function addToCartFail() {
    cartModalContent.innerHTML = 'The product you are trying to add is out of stock.';
    openAddModal();
    openCartOverlay();
}

function renderCart(cart) {

    clearCartDrawer();
  $('.loader-cart').hide();
  $('.js-ajax-cart-drawer-trigger div').text(cart.item_count);
    $('.subtotal_price__subtotal').text ('₹'+' ' + parseInt((cart.total_price/ 100 ).toFixed(2)));
    cartAdditional(cart);
    cart.items.forEach(function(item, index) {

        var property = item.properties;
        var pHtm = '';
      if(property!=null){
      var arrProperty = Object.entries(property);
      if(arrProperty.length > 0){
        for(var i = 0; i < arrProperty.length; i++){
          if(arrProperty[i][1]){
            pHtm += '<div class="item__property">' +arrProperty[i][0]+ " : " +arrProperty[i][1] +'</div>';
          }
        }
      }
      }
      var itemid = item.id;
      var compare_price= 0;
        $.getJSON('/variants/'+itemid+'.json', function(prodresults){
      compare_price = prodresults.product_variant.compare_at_price;
          //console.log(items.original_price,'hello');
          // alert(compare_price);
          // if(compare_price == ''){
          // }else{
          //   compare_price = '₹ '+ parseInt(compare_price);
          // }
          //  if(compare_price == ''){
          // }else{
          //    compare_price = '₹ ' +  parseInt(compare_price);
          // }
          if (compare_price !=''){
              $(`.Cart_Compare_price.index-${index}`).text('₹' + ' ' + parseInt(compare_price));
            }else{
            
            }
      });
     
     
      // setTimeout(function(){
		var itemPrice = (item.price / 100).toFixed(0);
       // alert(itemPrice);
        var productImage = '<img class="ajax-cart-item__image" src="' + item.image + '" >';
        var productTitle = '<div class="ajax-cart-item__title">' + item.title + ' '+pHtm+'</div>';
        var productPrice = '<div class="ajax-cart-item__price"><span class="money total__pri ' + item.id +'">₹ '+ itemPrice +'</span><span class="Cart_Compare_price 11 index-'+ index + '"></span></div>';
        var productQuantity = '<div class="ajax-cart-item__quantity gift_wrap_'+itemPrice+'" variant-id="'+item.id+'"><span class="ajax-change-quantity js-qtyminus" field="quantity"> - </span><input type="text" name="quantity" readonly value="'+ item.quantity+'" min="1" class="product-form__input qty" pattern="[0-9]*"><span class="ajax-change-quantity js-qtyplus" field="quantity"> + </span></div>';
        var productRemove = '<div class="ajax-cart-item__remove ' + defaults.removeFromCartNoDot + '">'+removeIcon+'</div>';
        var additional__price = ((cart.original_total_price)/100);
       // alert(additional__price)*('js-qtyplus');
        var additional_store = ((additional__price)*5/100);
        $('#additional_discount_price').html('<span class="hello">' + '₹'+' ' + additional_store +'</span>');  
        var concatProductInfo = '<div class="ajax-cart-item__single"  data-line="' + Number(index + 1) + '">' +'<div class="js-image_info">'+productImage +'</div>'+ '<div class="title_qty">'+productTitle + productPrice + productQuantity+'</div>' + productRemove + '</div>';
        cartDrawerContent.innerHTML = cartDrawerContent.innerHTML + concatProductInfo;
      
      //console.log(itemPrice +"ankit");
        // }, 1000);
       //var Saving_price_plus = parseFloat($('.total_saving_val').text());
       //var Total__saving = (additional_store + Saving_price_plus);
      //  $('.saving__value').html('<div class="total_saving_val">' + '₹'+'- ' + Total__saving +'</div>'); 
      //var ComPrice = $('.theme-money').text();
     // alert(ComPrice);
     // var pluss = parseFloat($('.you_save__value').html());
      // alert(total_saving_cstm);
       // var eql=(qty);
       // alert(eql);
      
    });
  

    removeFromCart = document.querySelectorAll(defaults.removeFromCart);

    for (let i = 0; i < removeFromCart.length; i++) {
        removeFromCart[i].addEventListener('click', function() {
            const line = this.parentNode.getAttribute('data-line');
            $('.loader-cart').show();
            changeItem(line);
        });
    }

}

function comparePrice(itemid) {
return $.getJSON('/variants/'+itemid+'.json', function(prodresults){
       compare_price = prodresults.product_variant.compare_at_price;
 return compare_price;
  //console.log(compare_price+ 'hello');
});  
}
function cartAdditional(cart) {
  var charge = parseInt($('.shipping_txt_val').attr('data-charge'));
  var limut = parseInt($('.shipping_txt_val').attr('data-limit'))*100;
  var total = cart.total_price;
  var diffprice = total - limut;
    if(diffprice > 0){
      $('.shipping_txt_val').text('Rs.' + charge);
    }
    else{
      $('.shipping_txt_val').html('<span class="free_text" style="font-size:14px;">Free</span>' + ' ' + '<del>'+'<span>₹&nbsp</span>'+ 50 +'<del>');
    }
 var total_saving_cstm = 0; 
  let totldiscount = cart.total_discount/100;
  // let compPrice = cart.original_total_price;
  // console.log(compPrice / 100 +"ankit");
  $.each(cart.items, function(index, cartItem) {
    var itemid = cartItem.id;
    var item_saving = 0;
    var itemquantity = cartItem.quantity;
    $.getJSON('/variants/'+itemid+'.json', function(prodresults){
      var compare_price = prodresults.product_variant.compare_at_price;
       var sale_price = prodresults.product_variant.price;
      if(compare_price != ''){
      item_saving =(compare_price-sale_price)*itemquantity;
      total_saving_cstm =item_saving+total_saving_cstm;
        // alert(total_saving_cstm);
      $('[cart_saving]').text('₹'+' '+(total_saving_cstm + totldiscount) );
      }
    });
  });  
    setTimeout(function(){
      var tot__price = $('#all_saving_value').text();
      $('.total_saving_val').text('₹ ' + total_saving_cstm);
      //$('.cart_top_saving span').text('₹ ' + +total_saving_cstm);
       $('.cart_top_saving span').text( tot__price);
    }, 1000); 
  // var sav = ('₹ ' + total_saving_cstm);
  //alert(total_saving_cstm);
}

function openCartDrawer() {
    cartDrawer_v.classList.add('is-open');
  $('body').addClass('body-js-ajax-cart-overlay');
  cartRecSlider();
}

function closeCartDrawer() {
    cartDrawer_v.classList.remove('is-open');
  $('body').removeClass('body-js-ajax-cart-overlay');
}

function clearCartDrawer() {
    cartDrawerContent.innerHTML = '';
}

function openAddModal() {
    cartModal.classList.add('is-open');
}

function closeAddModal() {
    cartModal.classList.remove('is-open');
}

function openCartOverlay() {
    cartOverlay.classList.add('is-open');
    htmlSelector.classList.add('is-locked');
}

function closeCartOverlay() {
    cartOverlay.classList.remove('is-open');
    htmlSelector.classList.remove('is-locked');
}

cartDrawerClose.addEventListener('click', function() {
    closeCartDrawer();
    closeCartOverlay();
});
// cart is empty stanje
cartOverlay.addEventListener('click', function() {
    closeAddModal();
    closeCartDrawer();
    closeCartOverlay();
});

$('body').on('click','.js-ajax-cart-drawer-trigger', function(event) {
    event.preventDefault();
    openCartDrawer();
    openCartOverlay();
});

document.addEventListener('DOMContentLoaded', function() {
    fetchCart();
});

// free gift code here
function freegift(cart) {
  if(enable_gwp_offer == true){
    var first_range = parseInt(gwp_first_range);
    var second_range = parseInt(gwp_second_range);
    var totalcartprice = parseInt(cart.total_price / 100);
     let res = JSON.stringify(cart);
     let gwp_first_variant_idExist = res.includes(gwp_first_variant_id); 
     let gwp_second_variant_idExist = res.includes(gwp_second_variant_id); 
     console.log("gwp_first_variant_idExist ",gwp_first_variant_idExist);
    console.log("gwp_second_variant_idExist ",gwp_second_variant_idExist);
    if (window.theme.select_type == 'Range'){
       if(totalcartprice > first_range && totalcartprice < second_range){
         if(gwp_second_variant_idExist == true){
          onCartUpdate(0, gwp_second_variant_id);
         }
        if(gwp_first_variant_idExist == false){
         AddFreeGiftItem(1, gwp_first_variant_id);
        }
       }else if(totalcartprice > second_range){
         if(gwp_first_variant_idExist == true){
          onCartUpdate(0, gwp_first_variant_id);
         }
         if(gwp_second_variant_idExist == false){
         AddFreeGiftItem(1, gwp_second_variant_id);
        }
       }else{
         if(gwp_first_variant_idExist == true){
          onCartUpdate(0, gwp_first_variant_id);
         }
         if(gwp_second_variant_idExist == true){
          onCartUpdate(0, gwp_second_variant_id);
         }
       }
      
    } else{
    
    }
  }   
}

  function AddFreeGiftItem(quantity, id, callback) {
    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
         data : {id : id, quantity: quantity},
         dataType: 'json',
        success: function(cart) {
        if ((typeof callback) === 'function') {
          callback(cart);
        } else {
          fetchCart();
        }
      },
      error:function (err) {
        console.warn(err)
      }
    });
  }

 function cartRecSlider(){
   if($('.CDR_sliderr').hasClass('slick-initialized')){
    $('.CDR_sliderr').slick('unslick');
   }
  setTimeout(function(){
  $('.CDR_sliderr').slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow:false,
    infinite: true,
    autoplaySpeed: 2000,
    dots:true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode:false,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
});
},700);
}