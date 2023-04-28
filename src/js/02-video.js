import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player('vimeo-player');

player.on('timeupdate', function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  
});

window.addEventListener('load', function() {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime !== null) {
      player.setCurrentTime(currentTime);
    }
  });