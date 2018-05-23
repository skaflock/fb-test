(function(){
    'use strict';

    var productCards = document.querySelectorAll('.product-card .product-info');

    function toggleCardState(card){
        if (!card.classList.contains('is-disabled')) {
            card.classList.toggle('is-selected');
            if (card.classList.contains('is-selected')) {
                card.classList.remove('is-hover');
            }
        }
    }

    productCards.forEach(function(el){
        var card = el.parentElement;
        el.addEventListener('click', function(event){
            toggleCardState(card);
        });
        el.addEventListener('mouseenter', function(event){
            card.classList.add('is-hover');
        });
        el.addEventListener('mouseleave', function(event){
            card.classList.remove('is-hover');
        });
        card.querySelector('.product-action .dashed').addEventListener('click', function(event){
            toggleCardState(card);
        });
    });
})();