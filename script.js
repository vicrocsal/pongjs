/*
 *
 *
 *
 */

/*
 * Función que contiene todas las propiedades y métodos de la aplicación
 *
 *
 */
let game = () => {
  let time = 30;
  let movement = 20;
  let movementBar = 20;
  let width = document.documentElement.clientWidth - movement;
  let height = document.documentElement.clientHeight - movement;
  let controlGame;
  let player1;
  let player2;

  /*
   *
   *Función que inicia el juego
   *
   */

  let start = () => {
    init();
    controlGame = setInterval(play, time);
  };

  /*
   *
   *Función que establece los estados iniciales del juego
   *
   */

  let init = () => {
    ball.style.left = 0;
    ball.state = 1;
    ball.direction = 1;
    player1 = new Object();
    player2 = new Object();
    player1.keyPress = false;
    player1.keyCode = null;
    player2.keyPress = false;
    player2.keyCode = null;
  };

  /*
   *
   * Función que termina el juego
   *
   */
  let stop = () => {
    clearInterval(controlGame);
    document.body.style.background = "#f00";
  };

  /*
   *
   *Función que controla el juego
   *
   */

  let play = () => {
    moveBar();
  };

   /*
   *
   *Función que detecta el movimiento de la barras y las controla
   *
   */

  let moveBar = () => {
    if (player1.keyPress) {
      if (player1.keyCode == 81 && bar1.offsetTop >= 0)
        bar1.style.top = bar1.offsetTop - movementBar + "px";
      if (player1.keyCode == 65 && bar1.offsetTop + bar1.clientHeight <= height)
        bar1.style.top = bar1.offsetTop + movementBar + "px";
    }
    if (player2.keyPress) {
      if (player2.keyCode == 79 && bar2.offsetTop >= 0)
        bar2.style.top = bar2.offsetTop - movementBar + "px";
      if (player2.keyCode == 76 && bar2.offsetTop + bar2.clientHeight <= height)
        bar2.style.top = bar2.offsetTop + movementBar + "px";
    }
  };

  /*
   *
   *Función que controla el movimiento de las barras hacia abajo
   *
   */

  document.onkeydown = function (e) {
    e = e || window.event;
    switch (e.keyCode) {
      case 81:
      case 65:
        player1.keyCode = e.keyCode;
        player1.keyPress = true;
        break;
      case 79:
      case 76:
        player2.keyCode = e.keyCode;
        player2.keyPress = true;
        break;
    }
  };

  /*
   *
   *Función que controla el movimiento de las barras hacia arriba
   *
   */

  document.onkeyup = function (e) {
    if (e.keyCode == 81 || e.keyCode == 65) player1.keyPress = false;
    if (e.keyCode == 79 || e.keyCode == 76) player2.keyPress = false;
  };

  start();
};

game();
