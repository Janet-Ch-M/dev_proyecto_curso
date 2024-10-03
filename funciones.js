function cambia(){
    var i =Math.floor(Math.random()*10);
    var ximagen = "img/" + i + ".jpg";
          if (i <= 10) {
                 document.getElementById("fotocambia").src =ximagen;
              }
  }
  function inicio() {
              setInterval(cambia, 1000);
          }
  //evento que se ejecuta al mostrar la pagina
  window.onload = inicio;