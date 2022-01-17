let order = [];
let clickedOrder = [];
let score = 0;

// Lógica de cores:
// 0 => green
// 1 => red
// 2 => yellow
// 3 => blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Cria ordem aleatória de cores.
let shuffleOrder = () => {
    console.log('Criando ordem aleatória de cores.');

    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;

    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Acende a próxima cor.
let lightColor = (element, number) => {
    console.log('Acendendo uma cor.');

    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number -250);

    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

// Checa se os botões clicados são os mesmos da ordem gerada no jogo.
let checkOrder = () => {
    console.log('Chencando se os botões clicados são os mesmos da ordem gerada.');

    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível...`);
        nextLevel();
    }
}

// click do usuário
let click = (color) => {
    console.log('Usuário clicou em uma cor.');

    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// Retornar a cor
let createColorElement = (color) => {
    console.log('Retornando uma cor.');

    if (color == 0) {
        return green;
    }
    else if (color == 1) {
        return red;
    }
    else if (color == 2) {
        return yellow;
    }
    else if (color == 3) {
        return blue;
    }
}

// Próximo nível do jogo
let nextLevel = () => {
    console.log('Próximo nível');

    score++;
    shuffleOrder();
}

// Game over
let gameOver = () => {
    console.log('Game over.');

    alert(`Pontuação: ${score}\nVocê perdeu o jogo.\nclick em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Início do jogo
let playGame = () => {
    console.log('Início do jogo.');

    alert('Bem vindo ao Gênesis! Iniciando um novo jogo.')
    score = 0;

    nextLevel();
}

// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// yellow.addEventListener('click', click(2));
// blue.addEventListener('click', click(3));

// Clique sobre as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


// Inicia o jogo.
playGame();