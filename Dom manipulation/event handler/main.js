// event handler
const p3 = document.querySelector(".p3");

p3.addEventListener("click", function () {
  p3.style.backgroundColor = "lightblue";
});

const button = document.getElementsByClassName("tekan")[0];
button.addEventListener("click", function () {
  const sectionA = document.getElementById("a");

  const tagp = document.createElement("p");
  const namep = document.createTextNode("ini baru");

  tagp.appendChild(namep);
  sectionA.appendChild(tagp);
});
