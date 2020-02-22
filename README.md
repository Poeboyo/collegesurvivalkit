# College Survival Kit

This is the Number One Money Saver, Time Waster for the Average College Student

## How it's made

- The front end is created with the materialize UI, and each component of the website is used by calling to a multitude of API's as well as Local Storage to implement a sort of "To-Do List" so that a Student will be able to create a list that is unique to each person who uses the webiste.

- The API calls are made and based on a button click or user input, an API will bring back the desired results, like that of a cute kitten.

```javascript
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
```

- Or just a simple shopping serach with the Google API with their ready to implement API calls

```javascript
<!--Uses a Personal Google API search to find low price grocery items-->
    <script async src="https://cse.google.com/********************"></script>
```

- The app also saves small lists of information in the form of an "edit-able"

```javascript
$("#add-to-do").on("click", function(event) {
  event.preventDefault();

  var toDoTask = $("#to-do")
    .val()
    .trim();

  list.push(toDoTask);

  renderTodos(list);

  localStorage.setItem("todolist", JSON.stringify(list));

  $("#to-do").val("");
});
```

## Technologies Used

- HTML
- CSS
- Materialize UI
- JavaScript
- jQuery
- Google Shopping API
- Cat Images API
- Anime Listing API
- Local Storage

## Difficultes and Learning

- The only real task of this project was finding and implementing the API's shown above, besides that styling was the only task at hand. It was interesting to see how easily the Google API was implemented.
