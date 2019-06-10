// if (document.querySelector(".modal_map") && document.querySelector(".modal-cart")) {
//     var map = document.querySelector(".contacts__map");
//     var mapModal = document.querySelector(".modal_map");
//     var mapClose = mapModal.querySelector(".modal-button-close");

//     map.addEventListener("click", function(evn) {
//         evn.preventDefault(evn);
//         mapModal.classList.add("modal-display");
//     });

//     mapClose.addEventListener("click", function(evn) {
//         evn.preventDefault(evn);
//         mapModal.classList.remove("modal-display");
//     });

//     var writeUs = document.querySelector(".contacts__button");
//     var writeUsModal = document.querySelector(".modal_write-us");
//     var writeUsClose = writeUsModal.querySelector(".modal-button-close");

//     writeUs.addEventListener("click", function(evn) {
//         evn.preventDefault(evn);
//         writeUsModal.classList.add("modal-display");
//     });

//     writeUsClose.addEventListener("click", function(evn) {
//         evn.preventDefault(evn);
//         writeUsModal.classList.remove("modal-display");
//     });

//     var buy = document.querySelectorAll(".catalog-item__button_buy");
//     var buyModal = document.querySelector(".modal-cart");
//     var buyClose = buyModal.querySelector(".modal-button-close");
//     var buyNext = buyModal.querySelector(".modal-cart__button");

//     for(var i = 0; i < buy.length; i++) {
//         buy[i].addEventListener("click", function(evn) {
//             evn.preventDefault(evn);
//             buyModal.classList.add("modal-display");
//         });
//     };

//     buyClose.addEventListener("click", function(evn) {
//         evn.preventDefault(evn);
//         buyModal.classList.remove("modal-display");
//     });

//     buyNext.addEventListener("click", function(evn) {
//         evn.preventDefault(evn);
//         buyModal.classList.remove("modal-display");
//     });
// } else if (document.querySelector(".modal-cart")) {
//     var buy = document.querySelectorAll(".catalog-item__button_buy");
//     var buyModal = document.querySelector(".modal-cart");
//     var buyClose = buyModal.querySelector(".modal-button-close");
//     var buyNext = buyModal.querySelector(".modal-cart__button");

//     for(var i = 0; i < buy.length; i++) {
//         buy[i].addEventListener("click", function(evn) {
//             evn.preventDefault(evn);
//             buyModal.classList.add("modal-display");
//         });
//     };

//     buyClose.addEventListener("click", function(evn) {
//         evn.preventDefault(evn);
//         buyModal.classList.remove("modal-display");
//     });

//     buyNext.addEventListener("click", function(evn) {
//         evn.preventDefault(evn);
//         buyModal.classList.remove("modal-display");
//     });
// };



// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // MODAL

var buttons = document.querySelectorAll(".js-button");
var buyModal = document.querySelector(".modal-cart");
var mapModal = document.querySelector(".modal_map");
var writeUsModal = document.querySelector(".modal_write-us");

buttons.forEach(function (item, number, buttons) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    switch (item.dataset.modal) {
        case "cart":
            buyModal.classList.add("modal-display");
            break;
        case "map":
            mapModal.classList.add("modal-display");
            break;
        case "write-us":
            writeUsModal.classList.add("modal-display");
            break;
        case "close":
            if (document.querySelector(".modal-cart")
            && document.querySelector(".modal_map")
            && document.querySelector(".modal_write-us")) {
                buyModal.classList.remove("modal-display");
                mapModal.classList.remove("modal-display");
                writeUsModal.classList.remove("modal-display");
            } else {
                buyModal.classList.remove("modal-display");
            }
            break;
        default:
            break;
    }
  });
});

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // FILTER-PRICE

var minPriceButton = document.querySelector(".price-controls__button_min");
var maxPriceButton = document.querySelector(".price-controls__button_max");

var minPriceInput = document.querySelector("#price-min-value");
var maxPriceInput = document.querySelector("#price-max-value");

minPriceButton.addEventListener("mousedown", function (evn) {
    // evn.preventDefault(evn);
    document.addEventListener('mousemove', function (evn) {
        // console.log(evn.offsetX);
        minPriceButton.style.left = evn.offsetX + "px";
        minPriceInput.value = (minPriceButton.style.left.replace(/[^0-9]/g, '') - 20) * 218;

        if (minPriceInput.value < 0) {
            minPriceInput.value = 0;
            minPriceButton.style.left = 20 + "px";
        }
    });
});

minPriceButton.addEventListener("mouseup", function (evn) {
    document.removeEventListener('mousemove', function (evn) {
    
    });
});


// minPriceButton.style.left = (minPriceInput.value / 218 + 20) + "px";
// maxPriceButton.style.left = (maxPriceInput.value / 218 + 20) + "px";


// minPriceInput.value = (minPriceButton.style.left.replace(/[^0-9]/g, '') - 20) * 218;
// maxPriceInput.value = (maxPriceButton.style.left.replace(/[^0-9]/g, '') - 20) * 218;