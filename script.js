let now_playing = document.getElementById("now-playing");
let art = document.getElementById("art");
let songName = document.getElementById("Name");
let artist = document.getElementById("arttist");
let music_list = document.querySelector(".musicList");
let playpause_btn = document.getElementById("playerpause-btn");
let next_btn = document.getElementById("next-btn");
let prev_btn = document.getElementById("prev-btn");
let fav_btn = document.getElementById("fav-btn");
let music_list_btn = document.getElementById("MusicList-btn");
let hideMusicList = document.getElementById("close");
let seek_slider = document.getElementById("seek_slider");
let volume_slider = document.getElementById("volume_slider");
let curr_time = document.querySelector(".current-time");
let total_time = document.querySelector(".total-time");
let randomIcon = document.querySelector(".fa-random");
let searchEl = document.querySelector(".search");
let curr_song = document.createElement("audio");
const optionsEl = document.querySelector(".options");
const ulTag = document.getElementById("ulSong");

let song_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimerSong;
let currlist;

function gotoHome() {
  curr_song.pause();
  document.querySelector(".empty").style.display = "none";
  document.querySelector(".body2").style.display = "none";
  document.querySelector(".body1").style.display = "block";
}
function showboxes() {
  document.querySelector(".empty").style.display = "none";
  document.querySelector(".body1").style.display = "none";
  document.querySelector(".body2").style.display = "block";
  document.querySelector(".box").style.display = "block";
  searchEl.value = "";
  document.querySelector(".options").style.display = "none";
}
function indianSongs() {
  showboxes();
  loadSong(indian_list);
}
function KoreanSongs() {
  showboxes();
  loadSong(korean_list);
}
function franceSongs() {
  showboxes();
  loadSong(France_list);
}
function EnglishSongs() {
  showboxes();
  loadSong(English_list);
}
function ArabicSongs() {
  showboxes();
  loadSong(Arabic_list);
}
function favSongs() {
  if (favourite_list.length === 0) {
    document.querySelector(".body1").style.display = "none";
    document.querySelector(".body2").style.display = "block";
    document.querySelector(".box").style.display = "none";
    document.querySelector(".empty").style.display = "block";
  } else {
    showboxes();
    loadSong(favourite_list);
  }
}
function loadSong(list) {
  currlist = list;
  clearInterval(updateTimerSong);
  curr_time.textContent = "00:00";
  total_time.textContent = "00:00";
  seek_slider.value = 0;
  curr_song.src = list[song_index].music;
  curr_song.load();
  art.style.backgroundImage = "url(" + list[song_index].img + ")";
  songName.textContent = list[song_index].name;
  artist.textContent = list[song_index].artist;
  now_playing.textContent =
    "Playing music " + (song_index + 1) + " of " + list.length;
  if (favourite_list.includes(currlist[song_index])) {
    fav_btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
  } else {
    fav_btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
  }
  updateTimerSong = setInterval(setUpdateTime, 1000);
  curr_song.addEventListener("ended", nextSong);
}
function randomSong() {
  if (isRandom) {
    isRandom = false;
    randomIcon.classList.remove("randomActive");
  } else {
    isRandom = true;
    randomIcon.classList.add("randomActive");
  }
}
function repeatSong() {
  loadSong(currlist);
  curr_song.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function playpauseSong() {
  if (isPlaying) {
    curr_song.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
  } else {
    curr_song.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
  }
}
function addfavSong() {
  if (!favourite_list.includes(currlist[song_index])) {
    favourite_list.push(currlist[song_index]);
    fav_btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
  } else if (favourite_list.includes(currlist[song_index])) {
    favourite_list.splice(song_index, 1);
    fav_btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    if (favourite_list.length === 0 && currlist === favourite_list) {
      curr_song.pause();
      document.querySelector(".box").style.display = "none";
      document.querySelector(".empty").style.display = "block";
    }
  }
}
music_list_btn.addEventListener("click", () => {
  SongList();
  music_list.classList.toggle("show");
});
hideMusicList.addEventListener("click", () => {
  music_list_btn.click();
});
function nextSong() {
  if (song_index < currlist.length - 1 && isRandom === false) {
    song_index += 1;
  } else if (song_index < currlist.length - 1 && isRandom === true) {
    let random_index = Number.parseInt(Math.random() * currlist.length);
    song_index = random_index;
  } else {
    song_index = 0;
  }
  loadSong(currlist);
  curr_song.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function prevSong() {
  if (song_index > 0) {
    song_index -= 1;
  } else {
    song_index = currlist.length - 1;
  }
  loadSong(currlist);
  curr_song.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function onSeek() {
  let seekto = curr_song.duration * (seek_slider.value / 100);
  curr_song.currentTime = seekto;
}
function setVolume() {
  document.querySelector(".slider-vol").style.display = "flex";
  setTimeout(() => {
    document.querySelector(".slider-vol").style.display = "none";
  }, 5000);
}
function onVolume() {
  curr_song.volume = volume_slider.value / 100;
}
function setUpdateTime() {
  if (!isNaN(curr_song.duration)) {
    seek_slider.value = curr_song.currentTime * (100 / curr_song.duration);
    let currMin = Math.floor(curr_song.currentTime / 60);
    let currentSec = Math.floor(curr_song.currentTime - currMin * 60);
    let durationMin = Math.floor(curr_song.duration / 60);
    let durationSec = Math.floor(curr_song.duration - durationMin * 60);
    if (currentSec < 10) {
      currentSec = "0" + currentSec;
    }
    if (durationSec < 10) {
      durationSec = "0" + durationSec;
    }
    if (currMin < 10) {
      currMin = "0" + currMin;
    }
    if (durationMin < 10) {
      durationMin = "0" + durationMin;
    }
    curr_time.textContent = currMin + ":" + currentSec;
    total_time.textContent = durationMin + ":" + durationSec;
  }
}
function SongList() {
  while (ulTag.firstChild) {
    ulTag.firstChild.remove();
  }
  for (let i = 0; i < currlist.length; i++) {
    let song = document.createElement("audio");
    song.src = currlist[i].music;
    song.load();
    song.addEventListener("loadeddata", () => {
      let durationMin = Math.floor(song.duration / 60);
      let durationSec = Math.floor(song.duration - durationMin * 60);
      if (durationSec < 10) {
        durationSec = "0" + durationSec;
      }
      if (durationMin < 10) {
        durationMin = "0" + durationMin;
      }
      let liTag = `<li li-index="${i}">
    <div class="row">
    <span style="font-weight: bold;color:black;font-size:20px;">${currlist[i].name}</span><br>
    <span>${currlist[i].artist}</span>
    </div>
    <audio src="${currlist[i].music}"></audio>
    <span class="time">${durationMin}:${durationSec}</span>
    </li>`;
      ulTag.insertAdjacentHTML("beforeend", liTag);
    });
  }
  playingNow();
}
function playingNow() {
  setTimeout(() => {
    const allLiTags = ulTag.querySelectorAll("li");
    for (let k = 0; k < allLiTags.length; k++) {
      if (allLiTags[k].getAttribute("li-index") == song_index) {
        allLiTags[k].querySelector(".time").textContent = "Playing";
        allLiTags[k].querySelector(".time").style.color = "rgb(194 126 55)";
      }
      allLiTags[k].setAttribute("onclick", "clickedMusicList(this)");
    }
  }, 100);
}
function clickedMusicList(e) {
  let getIndex = e.getAttribute("li-index");
  song_index = getIndex;
  loadSong(currlist);
  curr_song.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
  SongList();
}
function Search(val) {
  let isFound = false;
  if (val === "") {
    document.querySelector(".options").style.display = "none";
  } else {
    document.querySelector(".options").style.display = "block";
    while (optionsEl.firstChild) {
      optionsEl.firstChild.remove();
    }
    Search_music.forEach((i) => {
      if (i.name.toUpperCase().includes(val.toUpperCase())) {
        isFound = true;
        let option = document.createElement("a");
        option.classList.add("option");
        option.innerHTML = i.name;
        option.setAttribute("onclick", "clickMusicSearch(this)");
        option.setAttribute("index", `${i.index}`);
        option.setAttribute("category", `${i.category}`);
        optionsEl.appendChild(option);
      }
    });
  }
  if (isFound === false) {
    let option = document.createElement("a");
    option.classList.add("option");
    option.innerHTML = "&nbsp-- No Found --&nbsp";
    optionsEl.appendChild(option);
  }
}
function clickMusicSearch(i) {
  console.log(i);
  console.log(i.getAttribute("index"));
  console.log(i.getAttribute("category"));
  song_index = i.getAttribute("index") - 1;
  if (i.getAttribute("category") === "india") indianSongs();
  else if (i.getAttribute("category") === "korea") KoreanSongs();
  else if (i.getAttribute("category") === "france") franceSongs();
  else if (i.getAttribute("category") === "english") EnglishSongs();
  else if (i.getAttribute("category") === "arabic") ArabicSongs();
}
