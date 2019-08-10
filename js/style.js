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

// var buttons = document.querySelectorAll(".js-button");
// var buyModal = document.querySelector(".modal-cart");
// var mapModal = document.querySelector(".modal_map");
// var writeUsModal = document.querySelector(".modal_write-us");

// buttons.forEach(function (item, number, buttons) {
//   item.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     switch (item.dataset.modal) {
//         case "cart":
//             buyModal.classList.add("modal-display");
//             break;
//         case "map":
//             mapModal.classList.add("modal-display");
//             break;
//         case "write-us":
//             writeUsModal.classList.add("modal-display");
//             break;
//         case "close":
//             if (document.querySelector(".modal-cart")
//             && document.querySelector(".modal_map")
//             && document.querySelector(".modal_write-us")) {
//                 buyModal.classList.remove("modal-display");
//                 mapModal.classList.remove("modal-display");
//                 writeUsModal.classList.remove("modal-display");
//             } else {
//                 buyModal.classList.remove("modal-display");
//             }
//             break;
//         default:
//             break;
//     }
//   });
// });

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // MODAL ver. 2.0

// if (document.querySelectorAll(".js-button")) {
//     var buttons = document.querySelectorAll(".js-button");

//     buttons.forEach(function(item, number, buttons) {
//         item.addEventListener("click", function(evt) {
//             evt.preventDefault();
//             var data = item.dataset.button;
//             var modal = document.querySelector("[data-modal=" + data + "]");
//             modal.classList.toggle("modal-display");
//             modal.classList.remove("modal-error");
//         });
//     });
// } else {
//     alert("Отсутствует класс js-button у кнопок отвечающих за вызов модальных окон.");
// };

// if (document.querySelector(".modal_write-us")) {
//     var modal = document.querySelector(".modal_write-us");
//     var form = modal.querySelector("form");
//     var name = form.querySelector("[name=name]");
//     var email = form.querySelector("[name=email]");
//     var someText = form.querySelector("[name=text-of-the-letter]");
//     form.addEventListener("submit", function(evn) {
//         if (!name.value && !email.value && !someText.value) {
//             evn.preventDefault();
//             modal.classList.remove("modal-error");
//             modal.offsetWidth = modal.offsetWidth;
//             modal.classList.add("modal-error");
//         }
//     });
// };





// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // FILTER-PRICE

var minBtn = document.querySelector(".price-controls__button_min");
var minBtnWidth = parseInt(window.getComputedStyle(minBtn).width, 10);
var maxBtn = document.querySelector(".price-controls__button_max");
var maxBtnWidth = parseInt(window.getComputedStyle(maxBtn).width, 10);

var scale = document.querySelector(".price-controls__scale");
var scaleWidth = parseInt(window.getComputedStyle(scale).width, 10);

var scaleBar = document.querySelector(".price-controls__bar");

// var minPriceInput = document.querySelector("#price-min-value");
// var maxPriceInput = document.querySelector("#price-max-value");


minBtn.onmousedown = function(e) {
  var startOffset = e.pageX; /* Стартовые кординаты мыши */
  var startPosition = parseInt(window.getComputedStyle(minBtn).left, 10); /* Стартовые кординаты кнопки MIN */
  var stopMaxBtn = parseInt(window.getComputedStyle(maxBtn).left, 10); /* Кординаты кнопки MAX, они нам нужны что бы кнопка MIN упиралась в MAX */

  function moveAt(e) {
    var newOffset = startOffset - e.pageX; /* Получаем точку отсчета которая равна 0 */
    var btnLeft = parseInt(minBtn.style.left, 10); /* Текущие кординаты кнопки MIN */

    if (newOffset > 0) { /* Проверяем движение мыши */
      minBtn.style.left = startPosition - newOffset + "px"; /* Мыша движется влево, берем кординаты кнопки и минусуем то насколько двинулась мышь */
      scaleBar.style.left = btnLeft + "px"; /* Двигаю полоску влево вместе с кнопкой */
      if (btnLeft <= 0) { /* Проверяем не уходит ли наша кнопка за пределы блока */
        minBtn.style.left = 0; /* Если уходит возвращаем ее на место в начало блока */
      }
    }
    if (newOffset < 0) { /* Проверяем движение мыши */
      minBtn.style.left = startPosition + Math.abs(newOffset) + "px"; /* Мыша движется вправо, берем кординаты кнопки и добавляем то насколько двинулась мишь */
      scaleBar.style.left = btnLeft + "px"; /* Двигаю полоску вправо вместе с кнопкой */
      if (btnLeft >= stopMaxBtn - minBtnWidth) { /* Проверяем кординаты нашей кнопки MIN относительно кнопки MAX */
        minBtn.style.left = stopMaxBtn - minBtnWidth + "px"; /* Если кнопка MIN упирается в MAX то дальше она не едет */
      }
    }
  }

  document.onmousemove = function(e) {
    moveAt(e);
  }

  document.onmouseup = function() {
    document.onmousemove = null;
    minBtn.onmouseup = null;
  }
};




maxBtn.onmousedown = function(e) {
  var startOffset = e.pageX; /* Стартовые кординаты мыши */
  var startPosition = parseInt(window.getComputedStyle(maxBtn).left, 10); /* Стартовые кординаты кнопки */

  var stopMinBtn = parseInt(window.getComputedStyle(minBtn).left, 10);
  var stopMaxBtn = scaleWidth - maxBtnWidth;

  function moveAt(e) {
    var newOffset = startOffset - e.pageX; /* Получаем точку отсчета которая равна 0 */
    var btnLeft = parseInt(maxBtn.style.left, 10);

    if (newOffset > 0) { /* Проверяем движение мыши */
      maxBtn.style.left = startPosition - newOffset + "px";
      scaleBar.style.right = btnLeft + "px"; /* Проблема с полоской, нужно брать длину всей полоски и минусовать left кнопки MAX */
      if (btnLeft <= stopMinBtn + minBtnWidth) {
        maxBtn.style.left = stopMinBtn + minBtnWidth + "px";
      }
    }
    if (newOffset < 0) { /* Проверяем движение мыши */
      maxBtn.style.left = startPosition + Math.abs(newOffset) + "px";
      scaleBar.style.right = btnLeft + "px"; /* Проблема с полоской */
      console.log(stopMaxBtn);
      if (btnLeft >= stopMaxBtn) {
        maxBtn.style.left = stopMaxBtn + "px";
      }
    }
  }

  document.onmousemove = function(e) {
    moveAt(e);
  }

  document.onmouseup = function() {
    document.onmousemove = null;
    maxBtn.onmouseup = null;
  }
};
