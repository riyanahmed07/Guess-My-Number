const randomNumberGenerater = () =>{
    return Math.ceil(Math.random()*20);
};

let correctNumber = randomNumberGenerater();

const paigham = document.querySelector('#paigham');
const score = document.querySelector('#score');
const highScore = document.querySelector('#high-score');
const body = document.querySelector('body')
const questionMark = document.querySelector ('#questionMark');


const checkHandler=() => {
    const inputValue = document.querySelector('#userAnswer');
    console.log(inputValue.value);
    if(inputValue.value == correctNumber){
        paigham.innerHTML = '🎉 You Win 🎉';
        body.style.backgroundColor = 'green';
        score.innerHTML = +score.innerHTML + 1;
        highScore.innerHTML = score.innerHTML;
        setTimeout( () => {
            body.style.backgroundColor = 'black';
            paigham.innerHTML = 'Start Guessing 🤦‍♂️';
            inputValue.value= 0;
            highScore.innerHTML = score.innerHTML =0;
            score.innerHTML = score.innerHTML =20;
        },5000 );
        
    } else if (inputValue.value < correctNumber){
        paigham.innerHTML = '😢 You lost, opps very low 😢';
        body.style.backgroundColor = 'red';
        score.innerHTML = +score.innerHTML -1;
        setTimeout( () => {
            body.style.backgroundColor = 'black';
            paigham.innerHTML = 'Start Guessing 🤦‍♂️';
            inputValue.value= 0;
        },3000 );
    }else {
        paigham.innerHTML = '😢 You lost, opps very high 😢';
        body.style.backgroundColor = 'red';
        score.innerHTML = +score.innerHTML +2;
        setTimeout( () => {
            body.style.backgroundColor = 'black';
            paigham.innerHTML = 'Start Guessing 🤦‍♂️';
            inputValue.value= 0;
        },3000 );
    }


};

// const gameRestart= () => {
//     inputValue.style.backgroundColor = 'black';
//     paigham.innerHTML = 'Start Guessing 🤦‍♂️';
//     score.innerHTML = 20;
//     questionMark.innerHTML = '?';
//     correctNumber = randomNumberGenerater ();
//     const inputValue = document.querySelector('#userAnswer')
//     inputValue.value
    
// }
// const keyHandler = () => {
// inputValue.value = inputValue.value .slice(0,2 );
// }