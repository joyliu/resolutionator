//= require jquery/dist/jquery
//= require foundation/js/foundation.min
//= require jquery.slotmachine
//= require rrssb.min

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

  var result1;
  var result2;
  var result3;

  function onComplete(active){
    switch(this.element[0].id){
      case 'selection1':
        result1 = $(this)[this.active];
        $("#selection1Result").text(result1);
        break;
      case 'selection2':
        result2 = this.active;
        $("#selection2Result").text(this.active);
        break;
      case 'selection3':
        result3 = this.active;
        $("#selection3Result").text(this.active);
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
