if (document.querySelector(".modal_map") && document.querySelector(".modal-cart")) {
    var map = document.querySelector(".contacts__map");
    var mapModal = document.querySelector(".modal_map");
    var mapClose = mapModal.querySelector(".modal-button-close");

    map.addEventListener("click", function(evn) {
        evn.preventDefault(evn);
        mapModal.classList.add("modal-display");
    });

    mapClose.addEventListener("click", function(evn) {
        evn.preventDefault(evn);
        mapModal.classList.remove("modal-display");
    });


    var writeUs = document.querySelector(".contacts__button");
    var writeUsModal = document.querySelector(".modal_write-us");
    var writeUsClose = writeUsModal.querySelector(".modal-button-close");

    writeUs.addEventListener("click", function(evn) {
        evn.preventDefault(evn);
        writeUsModal.classList.add("modal-display");
    });

    writeUsClose.addEventListener("click", function(evn) {
        evn.preventDefault(evn);
        writeUsModal.classList.remove("modal-display");
    });

    var buy = document.querySelectorAll(".catalog-item__button_buy");
    var buyModal = document.querySelector(".modal-cart");
    var buyClose = buyModal.querySelector(".modal-button-close");
    var buyNext = buyModal.querySelector(".modal-cart__button");

    for(var i = 0; i < buy.length; i++) {
        buy[i].addEventListener("click", function(evn) {
            evn.preventDefault(evn);
            buyModal.classList.add("modal-display");
        });
    };

    buyClose.addEventListener("click", function(evn) {
        evn.preventDefault(evn);
        buyModal.classList.remove("modal-display");
    });

    buyNext.addEventListener("click", function(evn) {
        evn.preventDefault(evn);
        buyModal.classList.remove("modal-display");
    });
} else if (document.querySelector(".modal-cart")) {
    var buy = document.querySelectorAll(".catalog-item__button_buy");
    var buyModal = document.querySelector(".modal-cart");
    var buyClose = buyModal.querySelector(".modal-button-close");
    var buyNext = buyModal.querySelector(".modal-cart__button");

    for(var i = 0; i < buy.length; i++) {
        buy[i].addEventListener("click", function(evn) {
            evn.preventDefault(evn);
            buyModal.classList.add("modal-display");
        });
    };

    buyClose.addEventListener("click", function(evn) {
        evn.preventDefault(evn);
        buyModal.classList.remove("modal-display");
    });

    buyNext.addEventListener("click", function(evn) {
        evn.preventDefault(evn);
        buyModal.classList.remove("modal-display");
    });
};