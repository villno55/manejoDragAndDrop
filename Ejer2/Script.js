let hoy = new Date();

let halween = new Date(hoy.getFullYear(), 9, 31); 

if (hoy > halween) {
  halween.setFullYear(halween.getFullYear() + 1);
}

let dif = halween - hoy;
let d = Math.ceil(dif / (1000 * 60 * 60 * 24));

document.getElementById("res").textContent =
  "Ya casi.Menos " + d + " días para Halloween 👻";
