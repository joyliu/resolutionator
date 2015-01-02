//= require jquery/dist/jquery
//= require foundation/js/foundation.min
//= require jquery.slotmachine

$(document).ready(function(){
  var selection1 = $("#selection1").slotMachine({
    active  : 0,
    delay : 450
  });

  var selection2 = $("#selection2").slotMachine({
    active  : 1,
    delay : 450
  });

  var selection3 = $("#selection3").slotMachine({
    active  : 2,
    delay : 450
  });

  function onComplete(active){
    switch(this.element[0].id){
      case 'selection1':
        $("#selection1Result").text("Index: "+this.active);
        break;
      case 'selection2':
        $("#selection2Result").text("Index: "+this.active);
        break;
      case 'selection3':
        $("#selection3Result").text("Index: "+this.active);
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
