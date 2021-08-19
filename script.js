const cards = document.querySelectorAll('.card');
let hasFlipped =false;
let firstCard, secondCard;
let lockboard=false;

function flipCard(){
    if(lockboard){return};
    if(this===firstCard){return};
    this.classList.add('flip');
    if(!hasFlipped){
        hasFlipped=true;
        firstCard=this;
        return;
    }
    secondCard=this;
    hasFlipped=false;
    checkForMatch();
}
cards.forEach((card) => {
    card.addEventListener('click',flipCard)
})

function checkForMatch(){
    if(firstCard.dataset.card=== secondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard()
}

function unflipCards(){
    lockboard=true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        resetBoard();
    },1500)
}

function resetBoard(){
    [hasFlipped, lockboard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
(function shuffle(){
    cards.forEach((card)=>{
        let randomPosition = Math.floor(Math.random()*12);
        card.style.order =randomPosition;
    })
})()


