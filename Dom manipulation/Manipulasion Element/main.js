// manipulasion element

// menerapkan InnerHtml
const judul = document.getElementById("judul");
judul.innerHTML = "Belajar Javascript";

// menerapkan style css pada javascript
judul.style.backgroundColor = "salmon";

// set attribute
// bisa mengganti class atau id di html,tanpa mengubah text htmlnya
const p3 = document.getElementsByTagName("p")[0];
p3.setAttribute("class", "paragraft");

// getattribute
const a = document.getElementsByTagName("p")[2];
a.getAttribute("class");

// removeattribute
// untuk menghapus attribute bisa class,href,id dll
const p5 = document.getElementsByTagName("p")[2];
p5.removeAttribute("class");

// element classlist
// classlist add menambahkan class pada  p2
const p2 = document.getElementById("p2");
p2.classList.add("label");

// classlist remove menghapus class pada javascript
p2.classList.remove("label");

// classlist toggle class pada javascript ,jika sudah ada tambahkan jika belum ada hapus;
const button = document.querySelector("button");
button.classList.toggle("button");

// classlist item untuk mengetahui nama kelas pada urutan kelas nya
button.classList.item(1);

// classlist replace mengganti nama kelas tekan menjadi tombol
button.classList.replace("tekan", "tombol");
