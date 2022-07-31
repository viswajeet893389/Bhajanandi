const music = new Audio('audio/Madhavas/GOVIND BOLO.mp3');
    // music.play();
    

const songs = [
    {
        id: 1,
        poster: 'img/Madhavas.jpg',
        songName: 'Govind Bolo<br> <div class="subtitle">Madhavas</div>',
        songSrc:   'audio/Madhavas/GOVIND BOLO.mp3',
    },
    {
        id: 2,
        poster: 'img/Agnideva_Pr.jpg',  
        songName: 'Bol Hari Bol<br> <div class="subtitle">Agnideva Das</div></div>',
        songSrc: 'audio/Agnideva/Bol Hari Bol.mp3',
    },
    {
        id: 3,
        poster: "img/Agnideva_Pr.jpg",  
        songName: 'Mahamantra_Beautiful Chant<br> <div class="subtitle">Agnideva Das</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',
        
    },
    {
        id: 4,
        poster: "img/Madhavas.jpg",  
        songName: 'Hare Krishna Mantra-Kuruksetra<br> <div class="subtitle">Agnideva Das</div>',
        songSrc: 'audio/Madhavas/HEART TOUCHING _ MAHA MANTRA _ BEAUTIFUL VRINDAVAN DARSHAN _ HARE KRISHNA KIRTAN - Madhavas Band.mp3',
 
    },
    {
        id: 5,
        poster: "img/Agnideva_Pr.jpg",  
        songName: 'Hari Hari biphale janama goainu<br> <div class="subtitle">Agnideva Das</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',

    },
    {
        id: 6,
        poster: "img/Agnideva_Pr.jpg", 
        songName: 'Kirtans From The Sacred Forest <br> <div class="subtitle">Agnideva Das</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',
  
    },
    {
        id: 7,
        poster: "img/Agnideva_Pr.jpg",
        songName: 'Parama Karuna<br> <div class="subtitle">Agnideva Das</div></h5>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',
 
    },
    {
        id: 8,
        poster: "img/Madhavas.jpg",
        songName: 'तेरा राम जी करेंगे<br> <div class="subtitle">Madhavas</div></h5>',
        songSrc: 'audio/Madhavas/तेरा राम जी करेंगे - इस भजन में छिपा है जीने का रहस्य - Madhavas Rock Band.mp3',
  
    },
];

if(document.getElementById('masterPlay').clicked == true){
    document.getElementsByClassName('playListPlay').click();
}

var index  = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
let download_music =  document.getElementById('download_music');
download_music.href = songs[0].songSrc;   //initial source of download

var buttonSatus = [0];
var n= 0;

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        index--;
        buttonSatus.push(index);
        n++;
        if(buttonSatus[n] != buttonSatus[n-1]){
            songChange();
        }

        playPause();

    });
});


function songChange(){
    poster_master_play.src = songs[index].poster;
    music.src = songs[index].songSrc;   
    title.innerHTML = songs[index].songName;
    makeAllBackground();
    makeAllPlays();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background = "rgb(105, 105, 105, 0.2)";
    download_music.href = songs[index].songSrc;  // to change the source of download


}

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

    masterPlay.addEventListener('click', playPause);
    
    function playPause(){
        if(music.paused || music.currentTime <= 0){
            music.play();
            wave.classList.add('active1');
            masterPlay.classList.add('bi-pause-fill');
            masterPlay.classList.remove('bi-play-fill');
            Array.from(document.getElementsByClassName('playListPlay'))[index].classList.remove('bi-play-circle-fill');
            Array.from(document.getElementsByClassName('playListPlay'))[index].classList.add('bi-pause-circle-fill');
    
        } else{
            music.pause();
            wave.classList.remove('active1');
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            makeAllPlays();

        }
    }
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    });

    
};

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
    el.classList.remove('bi-pause-circle-fill');
    el.classList.add('bi-play-circle-fill');
    });
};


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=> {
    if(index>0){
        index--;
    } else{
        index = songs.length - 1; //Array.from(document.getElementsByClassName('songItem')).length - 1;
    }
    songChange();
    playPause();

});

next.addEventListener('click', ()=> {
    if(index > (songs.length - 1)){
        index = 0;
    } else{
        index++;
    }

    songChange();
    playPause();

});




//Slide bar

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    if(min1<10)
        min1 = `0${min1}`;

    if(sec1<10)
        sec1 = `0${sec1}`;

    currentEnd.innerText = `${min1}:${sec1}`;


    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);

    if(min2<10)
        min2 = `0${min2}`;

    if(sec2<10)
        sec2 = `0${sec2}`;

    currentStart.innerText = `${min2}:${sec2}`;


    //for seek bar
    let progressBar = (music_curr/music_dur)*100;
    seek.value = progressBar;
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;
    
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value*music.duration/100;          //actual time = (%time*total_duration)/100
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementById('vol_bar');
let vol_dot = document.getElementById('vol_dot');
                
vol.addEventListener('change', () => {
    
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
        }

        if(vol.value > 0 && vol.value <= 50){
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.add('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
        }

        if(vol.value > 50){
            vol_icon.classList.add('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
        }

        let vol_a = vol.value;
        vol_bar.style.width = `${vol_a}%`;
        vol_dot.style.left = `${vol_a}%`;

        music.volume = vol_a/100;
});

let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', ()=> {
        let a = shuffle.innerHTML;

        switch(a){
            case "next" : 
                shuffle.classList.add('bi-arrow-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML = 'repeat';
                break;
            
            case "repeat":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.add('bi-shuffle');
                shuffle.innerHTML = 'random';
                break;

            case "random":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.add('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML = 'next';
                break;

        }
});

const next_music = () => {
    if(index > (songs.length - 1)){
        index = 0;
    } else{
        index++;
    }

    songChange();
    playPause();
}

const repeat_music = () => {
    playPause();
}

const random_music = () => {
    index = Math.floor(Math.random() * songs.length);

    songChange();
    playPause();

}

//What will happen when the music will end - next, repeat, shuffle

music.addEventListener('ended', ()=> {
    let b = shuffle.innerHTML;

    switch(b) {
        case 'next':
            next_music();
            break;

        case 'repeat':
            repeat_music();
            break;
        
        case 'random':
            random_music();
            break;
    }
});




let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let pop_item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', ()=>{
    pop_item.scrollLeft += 330;
});

pop_art_left.addEventListener('click', ()=>{
    pop_item.scrollLeft -= 330;
});

Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});
