import "./styles-info.css";

var body = document.body;
var title = document.getElementById("learn-more");

var oceanInfo = document.getElementById("ocean-info");
oceanInfo.style.display = "none";

var landInfo = document.getElementById("land-info");
landInfo.style.display = "none";

var airInfo = document.getElementById("air-info");
airInfo.style.display = "none";

var extraInfo = document.getElementById("extra-links");
extraInfo.style.display = "none";

var oceanButton = document.getElementById("ocean-button");
oceanButton.addEventListener("click", function () {
  oceanInfo.style.display = "initial";
  landInfo.style.display = "none";
  airInfo.style.display = "none";
  extraInfo.style.display = "none";

  body.style.backgroundColor = "#00161f";
  body.style.color = "white";
  title.style.color = "initial";

  title.style.backgroundImage =
    "url('https://images.pexels.com/photos/37403/bora-bora-french-polynesia-sunset-ocean.jpg')";
  // Source: Pixabay
  title.style.backgroundPosition = "center";
  title.style.backgroundSize = "cover";
});

var landButton = document.getElementById("land-button");
landButton.addEventListener("click", function () {
  oceanInfo.style.display = "none";
  landInfo.style.display = "initial";
  airInfo.style.display = "none";
  extraInfo.style.display = "none";

  body.style.backgroundColor = "#5c6e51";
  body.style.color = "white";
  title.style.color = "initial";

  title.style.backgroundImage =
    "url('https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg')";
  // Source: NULL NULL
  title.style.backgroundPosition = "center";
  title.style.backgroundSize = "cover";
});

var airButton = document.getElementById("air-button");
airButton.addEventListener("click", function () {
  oceanInfo.style.display = "none";
  landInfo.style.display = "none";
  airInfo.style.display = "initial";
  extraInfo.style.display = "none";

  body.style.backgroundColor = "#d4ecfa";
  body.style.color = "black";
  title.style.color = "initial";

  title.style.backgroundImage =
    "url('https://images.pexels.com/photos/7919/pexels-photo.jpg')";
  // Source: Life Of Pix
  title.style.backgroundPosition = "center";
  title.style.backgroundSize = "cover";
});

var extraButton = document.getElementById("extra-button");
extraButton.addEventListener("click", function () {
  oceanInfo.style.display = "none";
  landInfo.style.display = "none";
  airInfo.style.display = "none";
  extraInfo.style.display = "initial";

  body.style.backgroundColor = "#87b2c9";
  body.style.color = "initial";

  title.style.backgroundImage =
    "url('https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg')";
  title.style.backgroundSize = "initial";
});
