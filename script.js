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
};
