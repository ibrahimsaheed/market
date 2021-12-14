$(document).ready(function () {







  $("#Submit1").click(function (event) {
    $("#sub1 ").toggle()
    event.preventDefault()
    const first = $("#first").val();
    const second = $("#second").val();
    const last = $("#last").val();
    const pass = $("#pass").val();
    const age = $("#age").val();
    const number = $("#number").val();
    const description = $("#description").val();

    $(".first").text(first)
    $(".second").text(second)
    $(".last").text(last)
    $(".pass").text(pass)
    $(".age").text(age)
    $(".number").text(number)
    $(".description").text(description)
  });
  $("#Submit2").click(function (event) {
    $("#sub2 ").toggle()
    event.preventDefault()
    const first = $("#first2").val();
    const second = $("#second2").val();
    const last = $("#last2").val();
    const pass = $("#pass2").val();
    const age = $("#age2").val();
    const number = $("#number2").val();
    const description = $("#description2").val();

    $(".first").text(first)
    $(".second").text(second)
    $(".last").text(last)
    $(".pass").text(pass)
    $(".age").text(age)
    $(".number").text(number)
    $(".description").text(description)
  });
  $("#Submit3").click(function (event) {
    $("#sub2 ").toggle()
    event.preventDefault()
    const first = $("#first1").val();
    const second = $("#second1").val();
    const last = $("#last1").val();
    const pass = $("#pass1").val();
    const age = $("#age1").val();
    const number = $("#number1").val();
    const description = $("#description1").val();

    $(".first").text(first)
    $(".second").text(second)
    $(".last").text(last)
    $(".pass").text(pass)
    $(".age").text(age)
    $(".number").text(number)
    $(".description").text(description)
  });
  $("button#green").click(function (event) {
    event.preventDefault()
    $("body").removeClass();
    $("body").addClass("green-background ");

  });

  $("button#yellow").click(function (event) {
    event.preventDefault()
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function (event) {
    event.preventDefault()
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#pink").click(function (event) {
    event.preventDefault()
    $("body").removeClass();
    $("body").addClass("pink-background");
  });
  $("button#sunnyred").click(function (event) {
    event.preventDefault()
    $("body").removeClass();
    $("body").addClass("sunnyred-background");
  });
  $("button#brown").click(function (event) {
    event.preventDefault()
    $("body").removeClass();
    $("body").addClass("brown-background");
  });
  $("button#black").click(function (event) {
    event.preventDefault()
    $("body").removeClass();
    $("body").addClass("black-background");
  });
  $("#color").click(function (event) {
    $(".change ").toggle()
  });  
}); 









