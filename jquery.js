jQuery(document).ready(function(){

    $('.menu').on('click', function(){
        $('.links').toggle();
        $('.mini_nav').toggleClass('inactive');
    })

});