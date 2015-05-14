$(function(){
    $("#content").hide();
    $(".button").on("click", function(){
        $(".replacement-div, #content").toggle();
    });
});

var initiate = 0;
var one = "";
var two = "";
var operator = null;
var operators = ["+", "-", "*", "/"];

var display = function(numInput) {
  numInput = numInput.toString()
  if (numInput.length > 10) {
    numInput = "Error";
  }
  $(".displayed-numbers").text(numInput);
}

var background = function() {
  return operator !== null;
}

$(function(){
  $(".operator-btn").click(function(e){
    var target = e.currentTarget;
    var elem = $(target);
    var opt = elem.text();
    if (opt && one && two) {
      var sum = eval(one + operator + two);
      display(sum);
      two = "";
      one = sum;
    }
    operator = opt
  })

  $(".number").click(function(e){
    var target = e.currentTarget;
    var elem = $(target);
    var text = elem.text();
    console.log("number" + text); 
    if (text == "=") {
      var sum = eval(one + operator + two);
      display(sum);
      one = sum;
      two = "";
      operator = null;
      return;
    }
    if (background()) {
      two += text;
      display(two);
    } else {
      one += text;
      display(one);
    }
  })

  $(".clear").click(function(e) {
    var clearTarget = e.currentTarget;
    one = "";
    two = "";
    operator = null;
    display(0);
  })

  // Make the operators red when clicked
  $(".divide").on("click", function(){
    $(".divide-action").css({"color": "red"});
    });
  $(".multiply").on("click", function(){
    $(".multiply-action").css({"color": "red"});
    });
  $(".subtract").on("click", function(){
    $(".subtract-action").css({"color": "red"});
    });
  $(".add").on("click", function(){
    $(".add-action").css({"color": "red"});
    });
  $(".equals").on("click", function(){
    $(".action").css({"color": "#999cb0"});
    });

});
