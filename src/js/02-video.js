import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe, { id: 'vimeo-player', width: 640 });

player.on('timeupdate', throttle(onPlayInterrupt, 1000));

getCurrenTime();

function onPlayInterrupt(event) {
  event.duration - 0.59 < event.seconds
    ? localStorage.removeItem('videoplayer-current-time')
    : localStorage.setItem('videoplayer-current-time', event.seconds);
}

function getCurrenTime() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
