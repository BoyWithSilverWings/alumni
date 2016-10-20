$(function(){

    var options = [{
        selector: '#secondHead', offset: 70, callback: function(el){
            $('#secondHead').addClass('animated zoomIn');
        }},
        {selector: '#image-test', offset: 60, callback: function(el) {
            Materialize.fadeInImage($(el));
        }
    }];

    Materialize.scrollFire(options);

    $('.button-collapse').sideNav();
    
    $('.carousel').vegas({
        slides: [
            { src: 'images/1.jpeg' },
            { src: 'images/2.jpg' },
            { src: 'images/3.jpg' },
            { src: 'images/4.jpg' }
        ],
        transition: 'fade',
        timer: 'false',
        firstTransition: 'zoomOut'
    });

    $(".dropdown-button").dropdown();

});