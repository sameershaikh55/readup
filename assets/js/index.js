// ADDING PRESSED ATTRIBUTE
var clickedBtn = document.getElementsByTagName("button");
var index,
  l = clickedBtn.length;

const falseToEveryTag = () => {
  for (index = 0; index < l; ++index) {
    clickedBtn[index].setAttribute("aria-pressed", "false");
  }
};
falseToEveryTag();

for (index = 0; index < l; ++index) {
  clickedBtn[index].onclick = function () {
    falseToEveryTag();
    this.setAttribute("aria-pressed", "true");
  };
}
// ADDING PRESSED ATTRIBUTE

// ADDING ROLE TO ANCHOR ATTRIBUTE
var anchors = document.getElementsByTagName("a");
var index,
  l = anchors.length;

for (index = 0; index < l; ++index) {
  anchors[index].setAttribute("role", "link");
}
// ADDING ROLE TO ANCHOR ATTRIBUTE

// ADDING ALT TO IMAGE TAG
var images = document.getElementsByTagName("img");
var index,
  l = images.length;

for (index = 0; index < l; ++index) {
  const altAttribute = images[index]
    .getAttribute("src")
    .split("/")
    .pop()
    .split(".")
    .shift();

  images[index].setAttribute("alt", altAttribute);
}
// ADDING ALT TO IMAGE TAG
