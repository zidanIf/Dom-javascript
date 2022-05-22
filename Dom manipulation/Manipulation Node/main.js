// Manipulation Node
// membuat elemnt baru

// buat tag p
const pBaru = document.createElement("p");
// isi tag p dengan ini paragraft baru
const TeksPBaru = document.createTextNode("ini paragraft baru");

// simpan tulisan ke dalam paragraft baru
pBaru.appendChild(TeksPBaru);

// simpan Pbaru di akhir sectionA
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// buat tag h1
const h1Baru = document.createElement("h1");
const textH1 = document.createTextNode("ini halaman h1 yang baru dibuat");

h1Baru.appendChild(textH1);
// const sectionB = document.getElementById("b");
// sectionB.appendChild(h1Baru);

// mengubah background pada tag h1 baru
h1Baru.style.backgroundColor = "lightblue";

// buat li baru
const Libaru = document.createElement("li");
const textLibaru = document.createTextNode("ini li");
// simpan
Libaru.appendChild(textLibaru);

const sectionBc = document.querySelector("section#b ul ");
const li2 = document.querySelector("li:nth-child(2)");

sectionBc.insertBefore(Libaru, li2);

// mengubah background li baru
Libaru.style.backgroundColor = "lightblue";

// remove node elements,menghapus element
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// replace node

// const c = document.getElementsById("c");
// const p1 = c.querySelector("p");

// const h2baru = document.createElement("h2");
// const texth2 = document.createTextNode("ini baru cok");

// h2baru.appendChild(texth2);
// c.replaceChild(h2baru, p1);

// replace
const sectionB = document.getElementById("b");
const paragraft = sectionB.querySelector("p");

// sectionB.appendChild(paragraft);

const h3baru = document.createElement("h3");
const texth3 = document.createTextNode("ini adalah h3 yang baru");

h3baru.appendChild(texth3);
sectionB.replaceChild(h3baru, paragraft);
