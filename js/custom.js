$(document).ready(function() {

// scroll to top

var btt = $('.back-to-top');


btt.on('click', function(e){
    $('html, body').animate({
        scrollTop:0
    },940);

    e.preventDefault();
});

$(window).on('scroll', function(){

// console.log('scrolled');


    var self = $(this),
        height = self.height(),
        top = self.scrollTop();

// console.log('height');

    if (top>height) {
        if (!btt.is(':visible')) {
            btt.show();
        }
    } else {
        btt.hide();
    }

});

//


$('.gallery').featherlightGallery();
    // previousIcon: '«',
    // nextIcon: '»',
    // galleryFadeIn: 300,

    // openSpeed: 300
// });


});
