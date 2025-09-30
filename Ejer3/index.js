<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>projecy Kanban</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Tablero de tareas</h1>

  <div class="kanban">
    <div class="col" ondrop="drop(event)" ondragover="allow(event)">
      <h2>Pendientes</h2>
      <div id="tra1" class="tarea" draggable="true" ondragstart="drag(event)">Tarea 1</div>
      <div id="tra2" class="tarea" draggable="true" ondragstart="drag(event)">Tarea 2</div>
      <div id="tra3" class="tarea" draggable="true" ondragstart="drag(event)">Tarea 3</div>
      <div id="tra4" class="tarea" draggable="true" ondragstart="drag(event)">Tarea 4</div>
      <div id="tra5" class="tarea" draggable="true" ondragstart="drag(event)">Tarea 5</div>
    </div>

    <div class="col" ondrop="drop(event)" ondragover="allow(event)">
      <h2>En Progreso</h2>
    </div>

    <div class="col" ondrop="drop(event)" ondragover="allow(event)">
      <h2>Hechas</h2>
    </div>
  </div>

  <footer>
    Desarrollo de Anderson 
  </footer>

  <script src="Script.js"></script>
</body>
</html>
