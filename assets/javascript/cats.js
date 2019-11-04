$(window).ready(function() {
  var queryURL = "https://aws.random.cat/meow";
  var picWidth = 300;
  var picHeight = 200;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response.file);

    $("#shiba-pic")
      .attr("src", response.file)
      .width(picWidth)
      .height(picHeight);
  });
});

$("#shiba").on("click", function(event) {
  event.preventDefault();

  var picWidth = 300;
  var picHeight = 200;

  var queryURL = "https://aws.random.cat/meow";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response.file);
    $("#shiba-pic")
      .attr("src", response.file)
      .width(picWidth)
      .height(picHeight);
  });
});
