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
  let time = 100;
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
    moveBall();
    checkIfLost();
  };

  /*
   *
   *Función que controla el movimiento de la bola
   */

  function moveBall() {
    checkStateBall();
    switch (ball.state) {
      case 1:
        ball.style.left = ball.offsetLeft + movement + "px";
        ball.style.top = ball.offsetTop + movement + "px";
        break;
      case 2:
        ball.style.left = ball.offsetLeft + movement + "px";
        ball.style.top = ball.offsetTop - movement + "px";
        break;
      case 3:
        ball.style.left = ball.offsetLeft - movement + "px";
        ball.style.top = ball.offsetTop + movement + "px";
        break;
      case 4:
        ball.style.left = ball.offsetLeft - movement + "px";
        ball.style.top = ball.offsetTop - movement + "px";
        break;
    }
  }

  /*
   *
   *Función que detecta el estado de la bola
   */

  function checkStateBall() {
    if (collidePlayer2()) {
      ball.direction = 2;
      if (ball.state == 1) ball.state = 3;
      if (ball.state == 2) ball.state = 4;
    } else if (collidePlayer1()) {
      ball.direction = 1;
      if (ball.state == 3) ball.state = 1;
      if (ball.state == 4) ball.state = 2;
    }

    if (ball.direction === 1) {
      if (ball.offsetTop >= height) ball.state = 2;
      else if (ball.offsetTop <= 0) ball.state = 1;
    } else {
      if (ball.offsetTop >= height) ball.state = 4;
      else if (ball.offsetTop <= 0) ball.state = 3;
    }
  }

   /*
   *
   *Función que controla cuando el hay una anotación
   */

  function checkIfLost(){
    if(ball.offsetLeft >= width){
        stop();
        console.log("punto player 1");
    }
    if(ball.offsetLeft <= 0){
        stop();
        console.log("punto player 2");
    }
}

  /*
   *
   *Funciones que controlan el choque con las barras
   *
   */
  function collidePlayer1() {
    if (
      ball.offsetLeft <= bar1.clientWidth &&
      ball.offsetTop >= bar1.offsetTop &&
      ball.offsetTop <= bar1.offsetTop + bar1.clientHeight
    ) {
      return true;
    }

    return false;
  }
  function collidePlayer2() {
    if (
      ball.offsetLeft >= width - bar2.clientWidth &&
      ball.offsetTop >= bar2.offsetTop &&
      ball.offsetTop <= bar2.offsetTop + bar2.clientHeight
    ) {
      return true;
    }
    return false;
  }

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
