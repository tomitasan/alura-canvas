var tela = document.getElementById('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var cores = ['blue', 'red', 'green']
var indiceCorAtual = 0; // começa com blue

// funcao desenhaCirculo chama os metodos do objeto pincel, para desenhar e preencher as formas
function desenhaCirculo(evento) {

  // tela.offsetXX - se refere ao espaçamento automático criado pelo HTML  

  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;

  // fillStyle -> metodo que define a cor de preenchimeto
  pincel.fillStyle = cores[indiceCorAtual];

  // beginPath -> metodo que inicia desenho da forma
  pincel.beginPath();

  // arc -> metodo para desenhar círculos (origem X, origem y, raio, angulo inicial, angulo final)
  pincel.arc(x, y, 10, 0, 2 * 3.14);

  // fill -> metodo que faz o preenchimento com a cor especificada em fillStyle
  pincel.fill();

  // exibe no log as coordenadas clicadas com botao esquerdo do mouse
  console.log(x + ',' + y);
}
tela.onclick = desenhaCirculo;

// função mudaCor incrementa o indice do array cores, mudando a cor do circulo
function mudaCor() {
  indiceCorAtual++;
  if (indiceCorAtual >= cores.length) {
    indiceCorAtual = 0; // volta para a primeira cor, azul
  }
  return false; // para não exibir o menu padrão do canvas
}

// ao clicar com botão direito do mouse, chama função mudaCor
tela.oncontextmenu = mudaCor;