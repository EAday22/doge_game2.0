$(document).ready(function () {
  //click on an image, receive a message

  $("#dogeOne").click(function () {
    $("#outputDiv").hide();

    console.log("user clicked dogeOne 2");
    $("#outputMsg").text("You LOSE :'-( ... IS NOT WOW.");
    $("#outputDiv").toggle();

    // click for dogeOne closing
  });

  $("#dogeTwo").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked dogeTwo 2");
    $("#outputMsg").text("You WIN IS VERY WOWWW!!! 0_0");
    $("#outputDiv").toggle();

    //click for dogeTwo closing
  });
  //document ready function closing
});