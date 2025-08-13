
       
       
       //convert from a JSON score to an objects

       let score = JSON.parse(localStorage.getItem('score')) || {
        wins:0,
        losses:0,
        ties: 0 
      };



      updateScoreElement();
     /* if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };

      } 
        */
      
   
//computer moves
    function pickComputerMove(){
      const randomNumber = Math.random();

      let computerMove = '';


      if (randomNumber >=0 && randomNumber < 1/3){
        computerMove= 'Rock';

      } else if(randomNumber>=1/3 && randomNumber <2/3){
        computerMove ='Paper';
        
      }else if(randomNumber>=2/3 && randomNumber<1)
      {
        computerMove = 'Scissors';
      }
      return computerMove;
    }

    document.body.addEventListener('keydown', (event) => {
      if(event.key === 'r'){
    
        playGame('Rock')
      }
      else if(event.key === 'p'){
        playGame('Paper')
      }
      else if(event.key === 's'){
        playGame('Scissors')
      };
    });
    

    function playGame(playerMove) {

      const computerMove = pickComputerMove();
      let result = '';

      if (playerMove === 'Scissors') {

          if(computerMove === 'Rock'){
            result = 'lose'

          }
          else if (computerMove === 'Paper'){
            result = 'win'
          }
          else if(computerMove ==='Scissors'){
            result = 'tie'
          }
    } else if(playerMove === 'Paper') {
      if(computerMove === 'Rock'){
            result = 'win'

          }
          else if (computerMove === 'Paper'){
            result = 'tie'
          }
          else if(computerMove ==='Scissors'){
            result = 'lose'
          }

    } else if(playerMove === 'Rock') {
      if(computerMove === 'Rock'){
          result = 'tie'

        }
        else if (computerMove === 'Paper'){
          result = 'lose'
        }
        else if(computerMove ==='Scissors'){
          result = 'win'
        }



    }
    if (result === 'win'){
          score.wins+=1;
        } else if (result === 'lose') {
          score.losses+=1;
        } else if(result = 'tie'){
          score.ties+=1;
        }
      updateScoreElement();

      localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('.js-result')
    .innerHTML = `You ${result}`;

  document.querySelector('.js-moves')
    .innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> computer`;


//         alert(`You picked ${playerMove}. Computer picked ${computerMove}. You ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

 
  


    }
    function updateScoreElement(){
          document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses},Ties: ${score.ties}`;
        }

    let isAutoPlaying = false;
    let intervalId;
    
    function autoPlay(){
      if (!isAutoPlaying){
          intervalId = setInterval(function(){
          const playerMove = pickComputerMove();
          playGame(playerMove);
        },1000);
    
        isAutoPlaying = true;
    
        
    
      } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
      }
      
    }


    document.querySelector('.js-rock-button')
    .addEventListener('click',() => {
      playGame('Rock');
    });
    document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
      playGame('Paper');
    });
    
    document.querySelector('.js-scissor-button')
    .addEventListener('click', () => {
      playGame('Scissors');
    });
    
    
        
