//= require jquery/dist/jquery
//= require foundation/js/foundation.min
//= require jquery.slotmachine
//= require jquery.popupwindow

$(document).foundation();

$(document).ready(function(){
  var selection1 = $("#selection1").slotMachine({
    active : 0,
    delay : 450
  });

  var selection2 = $("#selection2").slotMachine({
    active : 1,
    delay : 450
  });

  var selection3 = $("#selection3").slotMachine({
    active : 2,
    delay : 450
  });

  var result1,
  result2,
  result3,
  resolutionResults,
  customTweet = "https://twitter.com/intent/tweet?url=http%3A%2F%2Fresolutionator.philosophie.is&via=gophilosophie&text=Create%20your%20new%20year%20resolutions%20using%20The%20Resolutionator.&hashtags=resolutionator%2CNewYearsResolution&";

  function onComplete(active){
    switch(this.element[0].id){
      case 'selection1':
        var index1 = this.active + 2;
        result1 = $('#selection1 div').eq(index1).text();
        $("#selection1Result").text(result1);
        break;
      case 'selection2':
        var index2 = this.active + 2;
        result2 = $('#selection2 div').eq(index2).text();
        $("#selection2Result").text(result2);
        break;
      case 'selection3':
        var index3 = this.active + 2;
        result3 = $('#selection3 div').eq(index3).text();
        $("#selection3Result").text(result3);
        resolutionResults = result1 + "%20" + result2 + "%20" + result3;
        customTweet = "https://twitter.com/intent/tweet?url=http%3A%2F%2Fresolutionator.philosophie.is&via=gophilosophie&text=In%202015%2C%20I%20will%20" + resolutionResults + "&hashtags=resolutionator%2CNewYearsResolution&";
        break;
    }
  }

  $('#goButton').click(function(){
    selection1.shuffle(5, onComplete);

    setTimeout(function(){
      selection2.shuffle(5, onComplete);
    }, 500);

    setTimeout(function(){
      selection3.shuffle(5, onComplete);
    }, 1000);
  });

  $('#socialFacebook').on('click', function(event) {
    event.preventDefault();
    $.popupWindow('https://www.facebook.com/sharer/sharer.php?u=http://resolutionator.philosophie.is', {
      width: 600,
      center: 'parent'
    });
  });

  $('#socialTwitter').on('click', function(event) {
    event.preventDefault();
    $.popupWindow(customTweet, {
      width: 550,
      height: 420,
      center: 'parent'
    });
  });
});
