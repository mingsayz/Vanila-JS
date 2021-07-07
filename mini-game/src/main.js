'use strict';

import Popup from './popup.js';
import GameBuilder from './game.js';

const gameFinishBanner = new Popup();
const game = new GameBuilder()
    .withGameDuration(5)
    .withCarrotCount(3)
    .withBugCount(3)
    .build();
game.setGameStopListner((reason)=>{
    console.log(reason);
    let message;
    switch(reason){
        case 'cancel':
            message = 'Replay ? 🤔'
            break;
        case 'win':
            message = 'YOU WON ! 🐶 '
            break;
        case 'lose':
            message = 'YOU LOST 💩'
            break;
        default: throw new Error('not vaild reason');
    }
    gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(()=>{
    game.start();
});
