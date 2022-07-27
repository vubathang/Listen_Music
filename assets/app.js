import { songs } from "./loadSong.js" 

const playlist = document.querySelector('.playlist')
const dashboard = document.querySelector('.dashboard')
const cd = document.querySelector('.cd')

let audio = null

const btn_Play = document.querySelector('.btn_play')
const Play = document.querySelector('.play')
const Pause = document.querySelector('.pause')
const btn_Next = document.querySelector('.control_next')
const btn_Prev = document.querySelector('.control_prev')
const btn_Random = document.querySelector('.control_random')
const btn_Repeat = document.querySelector('.control_repeat')
const timeLine = document.getElementById('song_time')
timeLine.value = 0
const lightDark = document.querySelector('.switch')


let x = 1
let random = false
let repeat = false

// hiển thị bài hát
songs.map(song=> {
  playlist.innerHTML += `
    <div class="song">
      <div class="song_inner">
        <div class="song_avt img_center" style="background-image: url(${song.songAvt});"></div>
        <div class="song_content">
          <p class="song_name">${song.songName}</p>
          <p class="song_author">${song.songAuthor}</p>
        </div>
      </div>
    </div>
  `
})

function getIndexSong(str) {
  let name = document.querySelector('.name_dashboard').innerHTML
  let mp3 = songs.find(function(x) {
    return x.songName == name
  })
  let indexSong = songs.indexOf(mp3)

  if (str == '+') {
    if (indexSong == songs.length - 1) indexSong = 0
    else indexSong += 1
  }
  else if (str == '-') {
    if (indexSong == 0) indexSong = songs.length - 1
    else indexSong -= 1
  }
  return indexSong;
}

function resetBtnPlay() {
  x = 1
  Play.classList.remove('hidden')
  Pause.classList.add('hidden')
}

function resetRotate() {
  document.querySelector('.cd').classList.remove('rotate')
  setTimeout(function() {
    document.querySelector('.cd').classList.add('rotate')
  }, 50)
}

function changeCD(song) {
  let url = song.querySelector('.song_avt').style.backgroundImage
  let name = song.querySelector('.song_name').innerHTML
  document.querySelector('.cd').style.backgroundImage = url
  document.querySelector('.name_dashboard').innerHTML = name
  resetRotate()
  let mp3 = songs.find(function(song) {
    return song.songName == name
  })
  if (audio === null) {
    audio = new Audio(mp3.song_mp3)
    audio.play()
  }
  else {
    audio.pause()
    audio = new Audio(mp3.song_mp3)
    audio.play()
  }
  next()
}

let song_list = document.querySelectorAll('.song')
song_list.forEach(song => {
  song.addEventListener('click', function() {
    changeCD(song)
    resetBtnPlay()
  })
})

function autoNextSong(audio, indexSong) {
  if(audio.ended) {
    moveSong(indexSong)
  }
  tl()
}

function next() {
  let y = getIndexSong('+')
  if (random === true) {
    y = Math.trunc(Math.random()*songs.length)
  }
  else if (repeat === true) {
    y = getIndexSong()
  }
  audio.ontimeupdate = function() {autoNextSong(audio, y)};
}

function tl() {
  timeLine.value = audio.currentTime
  let per = audio.currentTime / audio.duration * 100
  timeLine.value = per
}

function moveSong(index_Song) {
  let urlImage = `url(${songs[index_Song].songAvt})`
  document.querySelector('.cd').style.backgroundImage = urlImage
  document.querySelector('.name_dashboard').innerHTML = songs[index_Song].songName
  audio.pause()
  audio = new Audio(songs[index_Song].song_mp3)
  resetBtnPlay()
  resetRotate()
  audio.play()
  audio.ontimeupdate = function () {
    timeLine.value = audio.currentTime
    let per = audio.currentTime / audio.duration * 100
    timeLine.value = per
  }
}

btn_Play.addEventListener('click', function() {
  if (x == 1) {
    audio.pause()
  }
  else {
    audio.play()
  }
  x = x == 1 ? 0 : 1
  Play.classList.toggle('hidden')
  Pause.classList.toggle('hidden')
})

timeLine.onchange = function(e) {
  const seekTime = e.target.value / 100 * audio.duration
  audio.currentTime = seekTime
}

btn_Next.addEventListener('click', function() {
  if(random) {
    let nextSong = Math.trunc(Math.random()*songs.length)
    moveSong(nextSong)
  }
  else if (repeat) {
    let nextSong = getIndexSong()
    moveSong(nextSong)
  }
  else {
    let nextSong = getIndexSong('+')
    moveSong(nextSong)
  }
})

btn_Prev.addEventListener('click', function() {
  let prevSong = getIndexSong('-')
  moveSong(prevSong)
})

btn_Random.addEventListener('click', function() {
  random = (random === false) ? true : false
  if(random) {
    btn_Random.classList.add('red')
    btn_Repeat.classList.remove('red')
    repeat = false
  }
  else {
    btn_Random.classList.remove('red')
  }
  return random
})

btn_Repeat.addEventListener('click', function() {
  repeat = (repeat === false) ? true : false
  if(repeat) {
    btn_Repeat.classList.add('red')
    btn_Random.classList.remove('red')
    random = false
  }
  else {
    btn_Repeat.classList.remove('red')
  }
  return repeat
})

lightDark.addEventListener('change', function() {
  document.querySelector('.dashboard').classList.toggle('interface_wrapper_change')
  document.querySelector('.playlist').classList.toggle('interface_wrapper_change')
  document.body.classList.toggle('interface_body_change')
  // console.log(document.querySelector(".wrapper::-webkit-scrollbar").style);
  document.querySelector(".wrapper").style.setProperty('-webkit-scrollbar-track', 'background: #212121');
})

// const wr = document.querySelector('.wrapper')
// wr.addEventListener('scroll', function() {
//   let per = wr.scrollTop
// })