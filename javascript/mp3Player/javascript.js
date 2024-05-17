const   play        = document.querySelector(".play"),
        previous    = document.querySelector(".prev"),
        next        = document.querySelector(".next"),

        trackImage  = document.querySelector(".track-image"),
        title       = document.querySelector(".title"),
        artist      = document.querySelector(".artist"),
         

        trackCurrentTime    = document.querySelector(".current-time"),
        trackDuration       = document.querySelector(".duration-time"),
        slider      = document.querySelector(".duration-slider"),

        currentVol  = document.querySelector("#volume"), 
        showVol     = document.querySelector("#show-volume"), 
        volIcon     = document.querySelector("#volume-icon"), 

        autoPlayBtn    = document.querySelector(".play-all"),

        hamburger    = document.querySelector(".fa-bars"),
        closeIcon    = document.querySelector(".fa-times"),

        musicPlaylist    = document.querySelector(".music-playlist"),
        playlist         = document.querySelector(".playlist"),
        pDiv             = document.querySelector(".playlist-div");

        let timer;
        let autoplay = 0;
        let indexTrack = 0;
        let songIsPlaying = false;
        let track = document.createElement('audio');


        //all event listeners

        play.addEventListener("click", justPlay);
        next.addEventListener("click", nextSong);
        previous.addEventListener("click", prevSong);
        autoPlayBtn.addEventListener("click", autoPlayToggle );
        volIcon.addEventListener("click", muteSound);
        currentVol.addEventListener("change", changeVolume);
        slider.addEventListener("change", changeDuration);
        track.addEventListener("timeupdate", songTimeUpdate);
        hamburger.addEventListener("click", showPlaylist);
        closeIcon.addEventListener("click", hidePlaylist);

        // loadtracks
        function loadTrack(indexTrack) {
            clearInterval(timer);
            resetSlider();


            track.src = trackList[indexTrack].path;
            trackImage.src = trackList[indexTrack].img;
            title.innerHTML = trackList[indexTrack].name;
            artist.innerHTML = trackList[indexTrack].singer;
    
             
            track.load();

            timer = setInterval(updateSlider, 1000);
        }

        loadTrack(indexTrack);

        //play song or pause song
        function justPlay(){
            if (songIsPlaying == false){
                playSong();
            } else {
                pauseSong();
            }
        }
        //play song

        function playSong(){
            track.play();
            songIsPlaying = true;
            play.innerHTML = '<i class="fas fa-pause"></i>';

        }


        function pauseSong(){
            track.pause();
            songIsPlaying = false;
            play.innerHTML = '<i class="fas fa-play"></i>';

        }

//next song

function nextSong(){
    if (indexTrack < trackList.length - 1){
        indexTrack++;
        loadTrack(indexTrack);
        playSong();
    } else {
        indexTrack = 0;
        loadTrack(indexTrack);
        playSong();
    }
}
 

function prevSong(){
    if (indexTrack > 0){
        indexTrack--;
        loadTrack(indexTrack);
        playSong();
    } else {
        indexTrack = trackList.length -1;
        loadTrack(indexTrack);
        playSong();
    }
}

//mute sound

function muteSound(){
    track.volume = 0;
    showVol.innerHTML = 0;
    currentVol.value = 0;
}

function changeVolume(){
    showVol.value = currentVol.value;
    track.volume = currentVol.value / 100;
}

function changeDuration(){
    let sliderPosition = track.duration * (slider.value / 100);
    track.currentTime = sliderPosition;
}

function autoPlayToggle(){

    if (autoplay == 0){
        autoplay = 1;
        autoPlayBtn.style.background = "#db6400";
    } else {
        autoplay = 0;
        autoPlayBtn.style.background = "#ccc";
    }
}

//reset slider

function resetSlider(){
    slider.value = 0;
}

//update slider

function updateSlider(){
    let position = 0;

    if (!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }

    if (track.ended){
        play.innerHTML = '<i class="fas fa-play"></i>';
        if(autoplay == 1 && indexTrack < trackList.length - 1){
            indexTrack++;
            loadTrack(indexTrack);
            playSong();
        } else if (autoplay == 1 && indexTrack == trackList.length - 1){
            indexTrack = 0;
            loadTrack(indexTrack);
            playSong();

        }
    }
}

//updated current song time 

function songTimeUpdate(){
    if(track.duration)
        {
            let curmins = Math.floor(track.currentTime / 60);
    let cursecs = Math.floor(track.currentTime - curmins * 60);

    let durmins = Math.floor(track.duration / 60);
    let dursecs = Math.floor(track.duration - durmins * 60);

    if (dursecs < 10){
        dursecs = "0" + dursecs;
    }
    
    if (durmins < 10){
        durmins = "0" + durmins;
    }
    if (curmins < 10){
        curmins = "0" + curmins;
    }

    if (cursecs < 10){
        cursecs = "0" + cursecs;
    }
    trackCurrentTime.innerHTML = curmins + ":" + cursecs;
    trackDuration.innerHTML = durmins + ":" + dursecs;
    } else {
                trackCurrentTime.innerHTML = "00" + ":" + "00";
                trackDuration.innerHTML = "00" + ":" + "00";
            }

}

function showPlaylist () {
        musicPlaylist.style.transform = "translateX(0)";
}

function hidePlaylist () {
    musicPlaylist.style.transform = "translateX(-100%)";
}

//display tracks in playlist

let counter = 1;

function displayTracks(){
    for (let i = 0; i < trackList.length; i++){
        console.log(trackList[i].name + " - " + trackList[i].singer);
    
    let div = document.createElement("div");
    div.classList.add("playlist");
    div.innerHTML = `
                     <span class="song-index">${counter++}</span>
                     <p class="single-song">${trackList[i].name}</p>
                    `;

        pDiv.appendChild(div);
    }
   playFromPlaylist();
}

displayTracks();

// Play song from playlist

function playFromPlaylist(){
    pDiv.addEventListener("click", (e) => {
        if (e.target.classList.contains("single-song")){
           // alert(e.target.innerHTML);
           const indexNum = trackList.findIndex((item, index) => {
            if (item.name === e.target.innerHTML) {
                return true;
            }
           });
           loadTrack(indexNum);
           playSong();
           hidePlaylist();
        }
    });
   
}