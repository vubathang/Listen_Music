import { songs } from "./loadSong.js" 

const playlist = document.querySelector('.playlist')
const dashboard = document.querySelector('.dashboard')
const cd = document.querySelector('.cd')
let i = null

const btn_Play = document.querySelector('.btn_play')
const Play = document.querySelector('.play')
const Pause = document.querySelector('.pause')
const btn_Next = document.querySelector('.control_next')
const btn_Prev = document.querySelector('.control_prev')
const btn_Random = document.querySelector('.control_random')
const btn_Repeat = document.querySelector('.control_repeat')
const timeLine = document.getElementById('song_time')

const lightDark = document.querySelector('.switch')
let x = 1
let random = false
let repeat = false
let audio = null

// hiển thị bài hát
songs.map(song=> {
  playlist.innerHTML += `
    <div class="song ">
      <div class="song_inner stt${songs.indexOf(song)}">
        <div class="song_avt img_center" style="background-image: url(${song.img});"></div>
        <div class="song_content">
          <p class="song_name">${song.name}</p>
          <p class="song_author">${song.single}</p>
        </div>
      </div>
    </div>
  `
})

function getIndexCurrent() {
  let name = document.querySelector('.name_dashboard').innerHTML
  let songCurrent = songs.find(function(x) {
    return x.name == name
  })
  let indexCurrent = songs.indexOf(songCurrent)
  return indexCurrent
}

function getIndexNextSong(str) {
  const lastIndex = songs.length - 1
  let i = getIndexCurrent()
  if (str === 'next') {
    if (i == lastIndex) {
      i = 0
    }
    else {

      i = i + 1
    }
  }
  else if (str === 'prev') {
    if (i === 0) {
      i = lastIndex
    }
    else {
      i = i - 1
    }
  }
  return i
}

function reset(song) {
  document.querySelector('#song_time').value = 0
  x = 1
  let url = `url('${song.img}')`
  let name = song.name
  // addHold()
  Play.classList.remove('hidden')
  Pause.classList.add('hidden')
  document.querySelector('.cd').classList.remove('rotate')
  setTimeout(function() {
    document.querySelector('.cd').classList.add('rotate')
    document.querySelector(`.stt${getIndexCurrent()}`).classList.add('Hold')
  }, 50)

  document.querySelector('.cd').style.backgroundImage = url
  document.querySelector('.name_dashboard').innerHTML = name
  if (audio === null) {
    audio = new Audio(song.path)
    audio.play()
  }
  else {
    audio.pause()
    audio = new Audio(song.path)
    audio.play()
  }

  i = checkStatus(i, 'next')
  
  audio.ontimeupdate = function () {
    timeLine.value = 0
    let per = audio.currentTime / audio.duration
    timeLine.value = per*100
    if(per == 1) {
      document.querySelector(`.stt${getIndexCurrent()}`).classList.remove('Hold')
      reset(songs[i])
    }
  }
}

let song_list = document.querySelectorAll('.song')
song_list.forEach(song => {
  song.addEventListener('click', function() {
    let mp3 = song.querySelector('.song_name').innerHTML
    let songCurrent = songs.find(function(x) {
      return x.name == mp3
    })
    try{
      document.querySelector(`.Hold`).classList.remove('Hold')
      reset(songCurrent)
    }
    catch {
      reset(songCurrent)
    }
  })
})

timeLine.onchange = function(e) {
  const seekTime = e.target.value / 100 * audio.duration
  audio.currentTime = seekTime
}
// btn

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
  document.querySelector('.wrapper').classList.toggle('interface_wrapper_change')
})

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

btn_Next.addEventListener('click', function() {
  i = checkStatus(i, 'next')
  document.querySelector(`.stt${getIndexCurrent()}`).classList.remove('Hold')
  reset(songs[i])
})
btn_Prev.addEventListener('click', function() {
  i = checkStatus(i, 'prev')
  document.querySelector(`.stt${getIndexCurrent()}`).classList.remove('Hold')
  reset(songs[i])
})

function checkStatus(i, str) {
  if(random) {
    i = Math.trunc(Math.random()*songs.length)
    // reset(songs[nextSong])
  }
  else if (repeat) {
    i = getIndexCurrent()
    // reset(songs[nextSong])
  }
  else{
    i = getIndexNextSong(str)
  }
  return i
}

function addHold() {
  x = getIndexCurrent()
  document.querySelector(`.stt${x}`).classList.add('Hold')
}

