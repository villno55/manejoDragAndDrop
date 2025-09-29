function valTel() {
  let t = document.getElementById("tel").value;
  let r = /^\d{10}$/;
  document.getElementById("resTel").textContent = r.test(t) ? "✔ válido" : "✘ inválido";
}

function valUrl() {
  let u = document.getElementById("url").value;
  let r = /^(https?:\/\/)[\w.-]+\.[a-z]{2,}$/i;
  document.getElementById("resUrl").textContent = r.test(u) ? "✔ válida" : "✘ inválida";
}

function valPass() {
  let p = document.getElementById("pass").value;
  let r = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  document.getElementById("resPass").textContent = r.test(p) ? "✔ válida" : "✘ insegura";
}
