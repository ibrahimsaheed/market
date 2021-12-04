$(document).ready(function () {
  function getQueryString() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
  }
  var first = getQueryString()["first"];
$(".first").append(first);

  $(".form").submit(function (event) {
    event.preventDefault()
    $("#Submit").click(function () {
      $("#sell").toggle()

      let first = $("#first").val();
      let second = $("#second").val();
      let last = $("#last").val();
      let pass = $("#pass").val();
      let age = $("#age").val();
      let number = $("#number").val();
      let description = $("#description").val();

      $(".first").text(first)
      $(".second").text(second)
      $(".last").text(last)
      $(".pass").text(pass)
      $(".age").text(age)
      $(".number").text(number)
      $(".description").text(description)

    });
   
     
 
  })

})

