const getTitle = () => {
  var textholder = document.getElementById("place");
  textholder.innerHTML = "";
  var title = document.getElementById("titleInput").value;
  title = title.toLowerCase();
  title = title.replace(/\s/g, "+");
  if (title == "") {
    alert("An input is empty");
  } else {
    let url = "https://www.googleapis.com/books/v1/volumes?q=" + title;
    fetch(url)
      .then(response => response.json())
      .then(response => {   
    
        var arrayLength = response.items.length;        
          for (var i = 0; i < arrayLength; i++) {
            textholder.innerHTML =
              textholder.innerHTML +
              "<br/><h3>" +
              (i+1) + ") " + 
              response.items[i].volumeInfo.title +
              "</h3>" +
              '<img src="' +
              response.items[i].volumeInfo.imageLinks.thumbnail +
              '"/>' +
              "<br/>" +
              response.items[i].volumeInfo.description.slice(0, 50) +
              "<span>...</span><br/>";
          }
        
      });
  }
};
