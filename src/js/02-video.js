import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
    
checkingTheRepository();

const onPlay = function (time) {
    const storageData = JSON.stringify(time.seconds);
    console.log(time.seconds);
    localStorage.setItem(LOCALSTORAGE_KEY, storageData);
    };
    
player.on('timeupdate', throttle((onPlay), 2000));
    

function checkingTheRepository() {
    let savedData = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedData) {
        player.setCurrentTime(savedData);
    }
};

