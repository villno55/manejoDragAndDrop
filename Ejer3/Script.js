function allow(ev) {
  ev.preventDefault(); 
}


function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id); 
}

function drop(ev) {
  ev.preventDefault();
  let d = ev.dataTransfer.getData("text");
  let t = document.getElementById(d);

  if (ev.target.classList.contains("col")) {
    ev.target.appendChild(t); 
  }
}
