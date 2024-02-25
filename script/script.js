const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

let randomWords = () => {
    return words[Math.floor(Math.random() * words.length)]

}
let palabraAleatoria = randomWords();
let time = 10
let score = 0
let h1id = document.getElementById('randomWord')
let addToDOM = () => {
    h1id.innerText = palabraAleatoria

}
addToDOM()

let input = document.getElementById('text')
let sc = document.getElementById('score')
input.addEventListener('input', function(e){
    let palabraIngresada = input.value;
    if(palabraIngresada === palabraAleatoria) {
        time+=3;
        score++;
        sc.innerHTML = score;
        input.value = '';
        palabraAleatoria = randomWords();
        addToDOM()
        
    }
})
let actualizarTiempo = () => {
    document.getElementById('timeSpan').innerHTML = time
    if (time === 0) {
        clearInterval(timeInterval);
        gameOver()
        
    } else{
        time-=1;
    }
}


let timeInterval = setInterval(actualizarTiempo, 1000);
actualizarTiempo()
let cod = "<button class='btn' onclick='location.reload()'>Volvé  empezar</button>"
let titul = "<h1>El tiempo ha terminado!</h1>"
let game = document.getElementById('end-game-container')
let gameOver = () => {
    document.querySelector('.main').style.display = 'none';
    let puntaje = "<p class='punt'>Tu puntaje ha sido de " +score+ " puntos</p>";
    game.innerHTML = titul + puntaje + cod
}

