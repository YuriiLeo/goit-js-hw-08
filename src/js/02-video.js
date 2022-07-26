import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
    
const onPlay = function (time) {
    const storageData = JSON.stringify(time.seconds);
    console.log(time.seconds);
    localStorage.setItem("LOCALSTORAGE_KEY", storageData);
    };
    
player.on('timeupdate', throttle((onPlay), 2000));
    
player.setCurrentTime(localStorage.getItem("LOCALSTORAGE_KEY"));
