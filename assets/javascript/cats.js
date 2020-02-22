//ajax call on window ready to display cat image
$(window).ready(function() {
  var queryURL = "https://aws.random.cat/meow";
  //Sizing (Pixels) to be attributed to each image
  var picWidth = 300;
  var picHeight = 200;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response.file);
    //attributes width, height, and src to image
    $("#shiba-pic")
      .attr("src", response.file)
      .width(picWidth)
      .height(picHeight);
  });
});
//Swaps out "src" attribute on each click of the Anti-Anxiety button :3
$("#shiba").on("click", function(event) {
  event.preventDefault();
  //Sizing (Pixels) to be attributed to each image
  var picWidth = 300;
  var picHeight = 200;

  var queryURL = "https://aws.random.cat/meow";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    //attributes width, height, and src to image
    console.log(response.file);
    $("#shiba-pic")
      .attr("src", response.file)
      .width(picWidth)
      .height(picHeight);
  });
});
