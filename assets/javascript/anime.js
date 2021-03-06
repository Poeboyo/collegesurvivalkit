//On Click Handler to make the API Call
$("#anime").on("click", function(event) {
  var userAnimeSearch = $("#animeSearch").val();
  var queryURL = `https://api.jikan.moe/v3/search/anime?q=${userAnimeSearch}&limit=4`;
  //Prevents The Submit Button From submitting the form via refrshing the page
  event.preventDefault();
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    //Loops through the 4 Items retrived by the API Call
    for (let i = 0; i < response.results.length; i++) {
      var animeResultsURL = response.results[i].url;
      var animeResultsImg = response.results[i].image_url;
      console.log(animeResultsImg);
      console.log(animeResultsURL);

      //First Image Search
      $("#anime-1")
        .attr("src", response.results[0].image_url)
        .attr("alt", response.results[0].title);
      $("#animeHref-1").attr("href", response.results[0].url);
      //Second Image Search
      $("#anime-2")
        .attr("src", response.results[1].image_url)
        .attr("alt", response.results[1].title);
      $("#animeHref-2").attr("href", response.results[1].url);
      //Third Image Search
      $("#anime-3")
        .attr("src", response.results[2].image_url)
        .attr("alt", response.results[2].title);
      $("#animeHref-3").attr("href", response.results[2].url);
      //Fourth Image Search
      $("#anime-4")
        .attr("src", response.results[3].image_url)
        .attr("alt", response.results[3].title);
      $("#animeHref-4").attr("href", response.results[3].url);
    }
  });
});
