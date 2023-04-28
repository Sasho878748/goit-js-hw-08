import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const throttle = require('lodash.throttle');

const player = new Player('vimeo-player');

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

window.addEventListener('load', function () {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime !== null) {
    player.setCurrentTime(currentTime);
  }
});
