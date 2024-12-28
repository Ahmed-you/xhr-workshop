(function () {
  let i = 0;
  let xhr = new XMLHttpRequest();
  let gifDrop = document.querySelector(".search-results");

  const searchForm = document.querySelector(".search-form");
  searchForm.addEventListener("submit", (e) => {
    gifDrop.innerHTML = "";
    i = 0;
    e.preventDefault();
    searchInputWords = searchForm["search-query"].value.split(" ");
    let url = `http://api.giphy.com/v1/gifs/search?q=${searchInputWords.join(
      "+"
    )}&api_key=VmPVuxgXUBnI9xgOT5OChnh3ZII9V3Lu`;

    xhr.open("GET", url, true);
    xhr.send();
  });

  xhr.onreadystatechange = function () {
    console.log(xhr.readyState, +"  " + xhr.status);

    if (xhr.readyState == 4 && xhr.status == 200) {
      let giphyObj = JSON.parse(xhr.responseText);
      giphyObj.data.forEach((element) => {
        if (i == 10) return;
        console.log(element.images.downsized_medium.url);

        gifDrop.insertAdjacentHTML(
          "afterbegin",
          `<img style = 'width:300px; height:300px; margin :100px 41px 0 0;' src = "${element.images.downsized_medium.url}"/>`
        );

        i++;
      });
    }
  };
})();
