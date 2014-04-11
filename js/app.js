$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// var speed = 'slow';

// $('html, body').hide();
// $(document).ready(function() {
//     $('html, body').fadeIn(speed, function() {
//         $('a[href], button[href]').click(function(event) {
//             var url = $(this).attr('href');
//             if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
//             event.preventDefault();
//             $('html, body').fadeOut(speed, function() {
//                 window.location = url;
//             });
//         });
//     });
// });