let matchCards = 0;
let cards = [...document.querySelectorAll('.card')];
let card1 = null;
let card2 = null;
let noClicking = false;

const colors = [
    'purple',
    'orange',
    'yellow',
    'green',
    'red',
    'pink',
    'purple',
    'orange',
    'yellow',
    'green',
    'red',
    'pink'
]

for (let color of colors){
    const cardAtIndex = Math.floor(Math.random() * cards.length);
    let card = cards[cardAtIndex];
    card.classList.add(color);
    cards.splice(cardAtIndex, 1);
}

cards = document.querySelectorAll('.card');

for (let card of cards){
    card.addEventListener('click', function(e){
        if (noClicking === true) return;
        e.target.classList.remove('invisible');

        let currentCard = e.target;

        if (card1 === null || card2 === null){
            card1 = card1 || currentCard;
            card2 = currentCard === card1 ? null : currentCard;
            
        }


        if (card1 !== null && card2 !== null){
            noClicking = true;
            let gif1 = card1.className;
            let gif2 = card2.className;
            if (gif1 === gif2){
                matchCards += 2;
                card1 = null;
                card2 = null;
                noClicking = false;
            } else {
                setTimeout(function(){
                    card1.classList.add('invisible');
                    card2.classList.add('invisible');
                    card1 = null;
                    card2 = null;
                    noClicking = false;
                }, 1000);       
            }
            setTimeout (function(){
                if (cards.length === matchCards) alert('You Win!');
            }, 100);  
        } 
    })
}
