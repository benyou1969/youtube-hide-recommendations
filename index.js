let secondary = document.getElementById("secondary");
let comments = document.getElementById("comments");
let metaInfo = document.getElementById("meta");
secondary.style.opacity = 0.1;
comments.style.opacity = 0.1;
metaInfo.style.opacity = 0.1;
secondary.style.transition = "opacity .5s ease-out";
comments.style.transition = "opacity .5s ease-out";
metaInfo.style.transition = "opacity .5s ease-out";

secondary.addEventListener("mouseover", function (event) {
  metaInfo.style.opacity = 1;
  comments.style.opacity = 1;
  secondary.style.opacity = 1;
});

secondary.addEventListener("mouseleave", function (event) {
  metaInfo.style.opacity = 0.1;
  comments.style.opacity = 0.1;
  secondary.style.opacity = 0.1;
});
comments.addEventListener("mouseover", function (event) {
  metaInfo.style.opacity = 1;
  comments.style.opacity = 1;
  secondary.style.opacity = 1;
});

comments.addEventListener("mouseleave", function (event) {
  metaInfo.style.opacity = 0.1;
  comments.style.opacity = 0.1;
  secondary.style.opacity = 0.1;
});
metaInfo.addEventListener("mouseover", function (event) {
  metaInfo.style.opacity = 1;
  comments.style.opacity = 1;
  secondary.style.opacity = 1;
});

metaInfo.addEventListener("mouseleave", function (event) {
  metaInfo.style.opacity = 0.1;
  comments.style.opacity = 0.1;
  secondary.style.opacity = 0.1;
});
