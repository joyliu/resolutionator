//= require jquery/dist/jquery
//= require foundation/js/foundation.min
//= require jquery.slotmachine

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

  var result1, result2, result3;
  var resolutionResults;

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
        var customTweet = "http://twitter.com/home?status=" + resolutionResults + "%20by%20@gophilosophie%20http://resolutionator.philosophie.is"
        // THIS NEEDS WORK
        document.getElementById('shareTwitter').attr("href", customTweet);
        break;
    }
  }

  $("#goButton").click(function(){
    selection1.shuffle(5, onComplete);

    setTimeout(function(){
      selection2.shuffle(5, onComplete);
    }, 500);

    setTimeout(function(){
      selection3.shuffle(5, onComplete);
    }, 1000);
  });
});
