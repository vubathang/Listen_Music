const songs = [
  {
    songName: "I'l will be there",
    songAvt: 'https://i.ytimg.com/vi/d1JVYKP7S4A/maxresdefault.jpg',
    songAuthor: 'Gabriela Bee',
    song_mp3: 'https://tainhacmienphi.biz/get/song/api/74863'
  },
  {
    songName: "Chúng ta của hiện tại",
    songAvt: 'https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d',
    songAuthor: 'Sơn Tùng',
    song_mp3: 'https://tainhacmienphi.biz/get/song/api/248310',
  },
  {
    songName: "Bên Trên Tầng Lầu",
    songAvt: 'https://avatar-ex-swe.nixcdn.com/song/2022/06/09/d/4/5/e/1654766693061.jpg',
    songAuthor: 'Tăng Duy Tân',
    song_mp3: 'https://tainhacmienphi.biz/get/song/api/429602'
  },
  {
    songName: "Vì Mẹ Anh Bắt Chia Tay",
    songAvt: 'https://avatar-ex-swe.nixcdn.com/song/2022/06/16/d/c/9/2/1655371095601.jpg',
    songAuthor: 'Miu Lê',
    song_mp3: 'https://tainhacmienphi.biz/get/song/api/407020'
  },
  {
    songName: "Bắt cóc con tim",
    songAvt: 'https://avatar-ex-swe.nixcdn.com/song/2022/06/30/7/b/2/2/1656580453081.jpg',
    songAuthor: 'Lou Hoàng',
    song_mp3: 'https://tainhacmienphi.biz/get/song/api/417903'
  }
]

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

const sw = [1, 0]
let x = sw[0]

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
// resetRotate();
// function resetRotate() {
//   document.getElementsByClassName("img_center").style.transform = 'rotate(0deg)';
// }

function changeCD(song) {
  // resetRotate();
  let url = song.querySelector('.song_avt').style.backgroundImage
  let name = song.querySelector('.song_name').innerHTML
  document.querySelector('.cd').style.backgroundImage = url
  document.querySelector('.name_dashboard').innerHTML = name
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
}

function moveSong(index_Song) {
  let urlImage = `url(${songs[index_Song].songAvt})`
  document.querySelector('.cd').style.backgroundImage = urlImage
  document.querySelector('.name_dashboard').innerHTML = songs[index_Song].songName
  audio.pause()
  audio = new Audio(songs[index_Song].song_mp3)
  audio.play()
  resetBtnPlay()
}

let song_list = document.querySelectorAll('.song')
song_list.forEach(song => {
  song.addEventListener('click', function() {
    changeCD(song)
    resetBtnPlay()
  })
})

btn_Play.addEventListener('click', function() {
  if (x == 1) {
    audio.pause()
  }
  else {
    audio.play()
  }
  x = sw[x]
  Play.classList.toggle('hidden')
  Pause.classList.toggle('hidden')
})

btn_Next.addEventListener('click', function() {
  let nextSong = getIndexSong('+')
  moveSong(nextSong)
})

btn_Prev.addEventListener('click', function() {
  let prevSong = getIndexSong('-')
  moveSong(prevSong)
})



