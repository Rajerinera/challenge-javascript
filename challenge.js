//test avec un simple html pour learning linkedin
document.getElementById('html').innerHTML="Ceci est un \"Titre crée par html\"" // back slash pour mettre des vrais guillemets

let testType = "Jean"
console.log(typeof(testType))// Permet de reconnaitre le type de donnée c'est un string
let testType2 = 33
console.log(typeof(testType2))// Permet de reconnaitre le type de donnée c'est un number

let a = 2 
let b = 3
let c = 0
let result;
result = (a + b) * c;
console.log(result) // permet de faire des calculs qui seront attribué dans une variable result

let a2 = 2
let b2 = "3"
let result2;
result2 = a2 + b2
console.log(result2) // quand il y'a un string (chaine de caractère) le + concatène les données mais ne les additionne pas

let myName = "Adrien"
let firstname = "Baro"
let sentence;
sentence = `Mon nom est ${myName} et 
mon nom de famille est ${firstname}`
console.log(sentence) // template string permet de faire des phrases en javascript et concaténation mieux faîtes
let a3 = 2
a3++ // +=(valeur), permet d'additionner et a++ permet de rajouter un +1 
console.log(a3) // valeur après l'opération dans ce cas c'est un +1 de la variable a3

let colors = ["rouge", "noir", "vert", 0 , false] // c'est un array avec des strings un number et un boolean
//d'ailleurs elle se caractérise par new Array() qui se caractérise par  [];
console.log(colors)
console.log(colors[3])

let objet = {nom: "RAJ", prenom: "Adrien", age: 44} // c'est un tableau d'objet qui met en avant des variables au lien d'index
// et elle se carecterise par new Object et {}
console.log(objet)
console.log(objet.prenom) //prenom et une paire clé valeur

//challenge 
function age() {
    var anniversaire = prompt('Tu es née en quelle année?');
    var ages = (2020 - anniversaire) * 365;
    var h1 = document.createElement('h1');
    var texteReponse = document.createTextNode('Tu as' + ' ' + ages + ' ' + 'Jours');
    h1.setAttribute('id', 'age');
    h1.appendChild(texteReponse);
    document.getElementById('result').appendChild(h1);
}

function reset() {
    document.getElementById('age').remove();
}

//challenge 2

function genere() {
    let image = document.createElement('img');
    let div = document.getElementById('generator');
    image.src = "img/test.png"
    div.appendChild(image);
}

//challenge 3

function pfcGame(choix) {
    console.log(choix);

    let humainChoix, botChoix;
    humainChoix = choix.id;

    botChoix = choixNombre(botRandom());
    console.log('ordi choisi', botChoix);

    results = decideWinner(humainChoix, botChoix);
    console.log(results);

    message = finalMessage(results);
    console.log(message);
    //frontEnd(monChoix.id, botChoix, message);
}

function botRandom() {
    return Math.floor(Math.random() * 3);
}

function choixNombre(nombre) {
    return ['pierre', 'papier', 'ciseau'][nombre];
}

function decideWinner(monChoix, computerChoix) {
    let data = {
        'pierre': { 'ciseau': 1, 'pierre': 0.5, 'papier': 0 },
        'papier': { 'pierre': 1, 'papier': 0.5, 'ciseau': 0 },
        'ciseau': { 'papier': 1, 'ciseau': 0.5, 'pierre': 0 },
    }

    let tonScore = data[monChoix][computerChoix];
    let computerScore = data[computerChoix][monChoix];

    return [tonScore, computerScore];
}

function finalMessage([tonScore, computerChoix]) {
    if (tonScore === 0) {
        return { 'message': 'perdu!', 'color': 'red' };
    }
    else if (tonScore === 0.5) {
        return { 'message': 'égalité', 'color': 'yellow' };
    }
    else {
        return { 'message': 'gagné!', 'color': 'green' };
    }
}

function frontEnd() {

}

//challenge 4

let tous_Button = document.getElementsByTagName('button');

let copie_Button = [];
for (let i = 0; i < tous_Button.length; i++) { copie_Button.push(tous_Button[i].classList[1]); }


function ButtonColorChange(buttonChose) {
    if (buttonChose.value === 'red') {
        buttonRouge();
    } else if (buttonChose.value === 'green') {
        buttonVert();
    } else if (buttonChose.value === 'reset') {
        buttonReset();
    } else if (buttonChose.value === 'random') {
        buttonRandom();
    }
}

function buttonRouge() {
    for (let i = 0; i < tous_Button.length; i++) {
        tous_Button[i].classList.remove(tous_Button[i].classList[1]);
        tous_Button[i].classList.add('btn-danger');
    }
}

function buttonVert() {
    for (let i = 0; i < tous_Button.length; i++) {
        tous_Button[i].classList.remove(tous_Button[i].classList[1]);
        tous_Button[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for (let i = 0; i < tous_Button.length; i++) {
        tous_Button[i].classList.remove(tous_Button[i].classList[1]);
        tous_Button[i].classList.add(copie_Button[i]);
    }
}

function buttonRandom() {
    let choisir = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i = 0; i < tous_Button.length; i++) {
        let has = Math.floor(Math.random() * 4);
        tous_Button[i].classList.remove(tous_Button[i].classList[1]);
        tous_Button[i].classList.add(choisir[has]);
    }
}

//challenge 5:
let bjGame = {
    'Ton score': { spanScore: '#ton_score', div: '#ma_box', score: 0 },
    'Dealer score': { spanScore: '#son_score', div: '#dealer_box', score: 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardScore': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },
    'victoire': 0,
    'defaite': 0,
    'egalite': 0,
    'noStand': false,
    'noTurns': false,
};


const TON_SCORE = bjGame['Ton score']
const DEALER = bjGame['Dealer score']
const soundPioche = new Audio('sounds/swish.m4a');
const soundWin = new Audio('sounds/cash.mp3');
const soundLose = new Audio('sounds/aww.mp3');


document.querySelector('#bj_pioche').addEventListener('click', bjPioche)

document.querySelector('#bj_dealer').addEventListener('click', bjDeal)

document.querySelector('#bj_croupier').addEventListener('click', dealerLogic)

//la partie du joueur
function bjPioche() {
    if(bjGame['noStand']=== false){ 
    let card = randomCard();
    console.log(card);
    showCard(card, TON_SCORE);
    updateScore(card, TON_SCORE);
    showScore(TON_SCORE);
    console.log(TON_SCORE['score']);
    }
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let carteImg = document.createElement('img');
        carteImg.src = `img/carte/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(carteImg);
        soundPioche.play();
    }
}


function bjDeal() {
    
   if(bjGame['noTurns'] === true) {

    bjGame['noStand'] = false;
    let imageCarte = document.querySelector('#ma_box').querySelectorAll('img')
    for (i = 0; i < imageCarte.length; i++) {
        imageCarte[i].remove();
    }

    let dealerCarte = document.querySelector('#dealer_box').querySelectorAll('img')
    for (i = 0; i < dealerCarte.length; i++) {
        dealerCarte[i].remove();
    }

    TON_SCORE['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#ton_score').textContent = 0;
    document.querySelector('#son_score').textContent = 0;

    document.querySelector('#ton_score').style.color = '#ffffff'
    document.querySelector('#son_score').style.color = '#ffffff'

    document.querySelector('#bj_result').textContent = 'Let\'plays again!';
    document.querySelector('#bj_result').style.color = 'Black';

    bjGame['noTurns'] = true;
    }
}


function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return bjGame['cards'][randomIndex];
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        if (activePlayer['score'] + bjGame['cardScore'][card][1] <= 21) {
            activePlayer['score'] += bjGame['cardScore'][card][1];
        } else {
            activePlayer['score'] += bjGame['cardScore'][card][0];
        }
    }
    else {
        activePlayer['score'] += bjGame['cardScore'][card];
    }
}


function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['spanScore']).textContent = 'Tu dépasses!';
        document.querySelector(activePlayer['spanScore']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['spanScore']).textContent = activePlayer['score']
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// La partie du dealeur

 async  function dealerLogic() {
    bjGame['noStand'] = true;

    while (DEALER['score'] <16 && bjGame['noStand'] === true){
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER)
    await sleep(1000);
    }

        bjGame['noTurns'] = true;
        let jeu = game();
        showResult(jeu);
}

function game() {
    let winner
    if (TON_SCORE['score'] <= 21) {
        if (TON_SCORE['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            bjGame['victoire'] ++;
            winner = TON_SCORE;

        } else if (TON_SCORE['score'] < DEALER['score']) {
            bjGame['defaite'] ++;
            winner = DEALER
        } else if (TON_SCORE['score'] === DEALER['score']) {
           bjGame['egalite'] ++;
        }


    } else if (TON_SCORE['score'] > 21 && DEALER['score'] <= 21) {
        bjGame['defaite']++;
        winner = DEALER;
    } else if (TON_SCORE['score'] > 21 && DEALER['score'] > 21) {
        bjGame['egalite']++;
    }
    return winner
}
// la partie score
function showResult(winner){
    if(bjGame['noTurns'] === true){ 

    if(winner === DEALER){
        document.querySelector('#defaite').textContent = bjGame['defaite'];
        message = 'No luck';
        messageColor = 'red';
        soundLose.play();
    } else if(winner === TON_SCORE){
        document.querySelector('#victoire').textContent = bjGame['victoire'];
        message = 'GG!';
        messageColor = 'blue';
        soundWin.play();
    } else{
        document.querySelector('#egalite').textContent = bjGame['egalite'];
        message = 'Draw';
        messageColor = 'black';
    }
    document.querySelector('#bj_result').textContent = message;
    document.querySelector('#bj_result').style.color = messageColor;
  }
}