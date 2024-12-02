const songs = [
    { title: 'Song 1', src: 'assets/song1.mp3', cover: 'assets/cover1.jpg' },
    { title: 'Song 2', src: 'assets/song2.mp3', cover: 'assets/cover2.jpg' }
];

let currentSongIndex = 0;

const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const songTitle = document.getElementById('song-title');
const cover = document.getElementById('cover');

function loadSong(index) {
    currentSongIndex = index;
    songTitle.textContent = songs[index].title;
    audio.src = songs[index].src;
    cover.src = songs[index].cover;
    playSong();
}

function playSong() {
    audio.play();
    playButton.textContent = '⏸️';
}

function pauseSong() {
    audio.pause();
    playButton.textContent = '⏯️';
}

playButton.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

// Load the first song by default
loadSong(0);
