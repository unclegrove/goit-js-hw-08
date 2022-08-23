import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('iframe');

const CURRENT_TIME = 'videoplayer-current-time';

const player = new Player(iframeRef);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(CURRENT_TIME, data.seconds);
}

if (localStorage.getItem(CURRENT_TIME)) {
  player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
}
