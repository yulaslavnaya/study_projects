(()=>{

    function shuffle(arr){
        let j, temp;
        for(let i = arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
    
    array = []
    for (let j = 0; j<2;j++){
        for( let i =1; i<=8;i++){
        array.push(i);
        }
    }
    shuffle(array);

    document.addEventListener('DOMContentLoaded',function(){
        const container = document.createElement('div');
        container.classList.add('container');
        let button = document.createElement('button');
        button.classList.add('repeat');
        button.style.display='none'
        button.textContent = "Еще раз!"
        document.body.append(container);
        document.body.append(button)

        let card1 = -1;
        let card2 = -1;
        let openCards = 0;
        let currentTurn = 0;

        let count = 0;
        for(let i =0;i<4;i++){
            let line = document.createElement('div');
            line.classList.add('line');
            container.append(line);
            for (let j =0; j<4;j++){
                let card = document.createElement('div');
                card.classList.add('card');
                card.textContent= array[count];
                line.append(card);
                card.style.fontSize = '0px';
                card.addEventListener('click', function(){
                    if (currentTurn<2){
                        if (card.style.fontSize == '0px') {
                            card.classList.add('open-card');
                            card.style.fontSize = '40px';
                            currentTurn++;
                            if (card1 == -1){
                                card1 = card.textContent;
                            }else{
                                card2 = card.textContent;
                            }
                        } 
                    }else{
                        let pairs = document.querySelectorAll('.open-card');
                        if (card1 !== card2){
                            pairs[0].style.fontSize = '0px';
                            pairs[1].style.fontSize = '0px';
                            
                        }else{
                            pairs[0].classList.add('success-open-card');
                            pairs[1].classList.add('success-open-card');
                            openCards ++;
                            console.log(openCards)
                        }

                        pairs[0].classList.remove('open-card');
                        pairs[1].classList.remove('open-card');

                        currentTurn = 0;
                        card1 = -1
                        card2 = -1
                    }
                    if (openCards==8){
                        button.style.display='block'
                    }
                    console.log(card1, card2)
                })
                count++;
            }
        }
        button.addEventListener('click', function(){
            location.reload();
        })
    })
})();







