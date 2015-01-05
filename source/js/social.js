$(function() {
  $('#socialFacebook').on('click', function(event) {
    event.preventDefault();
    $.popupWindow('https://www.facebook.com/sharer/sharer.php?u=http://resolutionator.philosophie.is', {
      width: 700,
      center: 'parent'
    });
  });

  $('#socialTwitter').on('click', function(event) {
    event.preventDefault();
    $.popupWindow('http://twitter.com/home?status=What%20are%20your%20new%20year%20resolutions%3F%20%232015resolutionator%20http://resolutionator.philosophie.is', {
      width: 700,
      height: 305,
      center: 'parent'
    });
  });
});
