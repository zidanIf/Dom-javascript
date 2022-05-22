// Dom Selection
// getElementById
const judul = document.getElementById("judul");

judul.style.color = "#fff";
judul.style.backgroundColor = "#000";
judul.innerHTML = "zidan ishan fauzi";

// getElementsByTagName
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "30px";

// getElementByClassName
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "header";

//querySelector
const p2 = document.querySelector("#b p");
p2.style.color = "green";

// memilih 1 element di queryselector
const ul = document.querySelector("section#b ul li:nth-child(2)");
ul.style.backgroundColor = "orange";

// queryselectorAll
const paragraft2 = document.querySelectorAll("p");
paragraft2[2].style.color = "white";

// memilih sebuah element pada DOM
const sectionA = document.querySelector("section#a");
const href = sectionA.getElementsByTagName("a")[0];
href.style.color = "#000";
href.style.textDecoration = "none";
