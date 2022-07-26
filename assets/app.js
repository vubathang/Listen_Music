const songs = [
  {
    songName: "Clap",
    songAvt: 'https://i.ytimg.com/vi/d1JVYKP7S4A/maxresdefault.jpg',
    songAuthor: 'Me',
    song_mp3: 'https://cf-media.sndcdn.com/C85PcipWR2mI.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vQzg1UGNpcFdSMm1JLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODAxNzkwfX19XX0_&Signature=OISMl2H0UKxxU-WK7fg-jjwYgTDdZfD3QELXQtCl35BzvdT8W9JTneZ-8G7NjedMW7O8fUac7iCj2j-q6sN31TvFJHkIKg2qGHZH3kmnvlUNB3EXp0VCEJvz~U~yOyeAjXzfIp2K7U1~D2IXTE~UQsigWyvaq1uDYcpLnTsUBp0fuw1oyu4cmzn3gLTyvOjiyKH1NcVOgQm3cHLdYl421rLelpN96-U3cN7QykgKm6jpInvnVDeqHcRoO~gjtOxqcqF8F5MpAB-TVXEXFaI4ie2b54fdu5n-aMtCzc-NXW84H3RzUTeTAGX3NTyDwvxoiWtx7qh-1gL04DXKzU5uJQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  },
  {
    songName: "I'l will be there",
    songAvt: 'https://i.ytimg.com/vi/d1JVYKP7S4A/maxresdefault.jpg',
    songAuthor: 'Gabriela Bee',
    song_mp3: 'https://cf-media.sndcdn.com/kmiiAoacQFya.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20va21paUFvYWNRRnlhLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODAxMzYxfX19XX0_&Signature=ATfkgqpSAw8BsUwVNBbA--lvS96rdmcWJVBB2HyUz04ALEdvYq0CfwwHx0yzlFRUexufoZz5aIWx1MMrfBNAdt~QmZnvCy5HZN3nTlLQUnl4WZDGp~flziPsO1~d6KlJ-UH30dyCN6CKkbhFHPdttbcJ~G2BoAZyMMDHyjwj-DkhzrGzRW~NV~~IgfXKLaSDGDhIDHhgFnS6b7b8gP8NZpWDwZQ6QaOSNZtzgaNkfrslRmCJBMTGTkXkarCWtXYwkJG4~uhVysiK8MAPbjogvzu1MTIRF54uq0p47r-eGlaETwSRwCS7jjJZe1~O3YNf5-15C3s8WttdI8xQ22kzLg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  },
  {
    songName: "Chúng ta của hiện tại",
    songAvt: 'https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d',
    songAuthor: 'Sơn Tùng',
    song_mp3: 'https://cf-media.sndcdn.com/3Cc5JchX5jfD.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vM0NjNUpjaFg1amZELjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODA0MzExfX19XX0_&Signature=FCbHsGcsGbZYcNBCqD5XLKreSXIhsQC2wOTxy~w~GR1pUM3BVTU8bJ-s4jWk92gj0K1WFsCjSVbsLPu0~Nd5Ms4G1QVUzirqzq7KLTR8fmUMnEJiCmuOU~nFNufPgBgAXoHWY9GclyYvz44Chq0PCb2jGTDC8WVfUSa7XipZIG9tPDjpzt~EnMoFeV9ggnRqykp2vBhqA4vpk4y7GLBs0WZuBhpA-OyJpTJI6hfvzZPUzV3W-CXCtwcYcE8f8wzcGb794TuGYiTOxFly145B7uoiTQgkx7YaE7bjf47nsmRcGBxYHASbojizlhMp514o4te2X3Zu2vDMCcp2zhoxvA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ',
  },
  {
    songName: "Bên Trên Tầng Lầu",
    songAvt: 'https://avatar-ex-swe.nixcdn.com/song/2022/06/09/d/4/5/e/1654766693061.jpg',
    songAuthor: 'Tăng Duy Tân',
    song_mp3: 'https://cf-media.sndcdn.com/CvCx1dPZAuVw.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vQ3ZDeDFkUFpBdVZ3LjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODA0MTQ2fX19XX0_&Signature=Duhs0TfxAn~JfoOx3eu5pAFX1adl6jhNlmg4owEacvpUuLC4gVSgVsByxbkQBceglRTAebAsRMpKARt6BLSUMbzGYzcu6zfhILxlP7s-T5sIycEHRCSoVHJX~~llE6y0kwMOyvVehIggJFqqmD6slNAxiCK7m7yGg5aD9daygKuhiQl0Duri6mawcCqeou5lhfGQ9njsg~IrWCpTsQ4IJU33CEqLJUHY2COLeUr6SzQWrQV3IqGJ0yv~7k06LZWy4GBA~7rKKUap7ekFGWn~uEnq4fTI6kFpc5vkk6wJIG4p4UiRVCXTgKp-fZltG5Swt9ERpo8UBgqks74HEqKksA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  }
  // {
  //   songName: "Vì Mẹ Anh Bắt Chia Tay",
  //   songAvt: 'https://avatar-ex-swe.nixcdn.com/song/2022/06/16/d/c/9/2/1655371095601.jpg',
  //   songAuthor: 'Miu Lê',
  //   song_mp3: 'https://cf-media.sndcdn.com/EJBtq7LVX8eI.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vRUpCdHE3TFZYOGVJLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODAxNTE3fX19XX0_&Signature=WJhefXdMrPWXimWgv8lzpe9kqa292CvVluSm9RF8Kl60PV7vMUsDtNIEts3sFT4mMfTObVxF1jjMtzMCZhSLtehy8Pl9q~HU7stH3AemqmI-lTDKlCTQq8HMe1F1gpdjnDjMiBua1Se2cO2Zvx~yCC5iJP~IWXmZC8g8awYgoWjF~SAeZu4eT5wYU~0rH3tWVFuH7SoIFmtLob~qL-4K89qckC0GJnOLkx78VVfNs8XmFw0S0gqYUpKskpfShihBchzW8ivdjmRkijuh2R5hVF0P94sLuImWEjaYmfw4gwxEAkD8rRpVEDa1mgynW0ZeoeuAW06crzEr1EKva0k0aA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  // },
  // {
  //   songName: "Bắt cóc con tim",
  //   songAvt: 'https://avatar-ex-swe.nixcdn.com/song/2022/06/30/7/b/2/2/1656580453081.jpg',
  //   songAuthor: 'Lou Hoàng',
  //   song_mp3: 'https://cf-media.sndcdn.com/ZDf4syRXtaC5.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vWkRmNHN5Ulh0YUM1LjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODAxNTY5fX19XX0_&Signature=BYCCXyw0ZOyYHHfNv0xD8feaQJJ3dEM5Q3bVIgOMwXaZpj6OC87NNl3wPVO4Jb-uuQIp8025fxmi1biQsGvC3U2YjajGfs21QkmKkK0huFk70K4Y2SuU44yL3d53NeucXkuAVv8ORsturLw1JpXnVkurhK7~6qkXo1aZRQnFOMfKXTCkL3so8W7niTSHxt0EFuEfUjZbXwCaxpHq7bUVAfzdMxLTcgVv205i6NSWFa~N~eIa~xKhzb0za3c5gWm9~TVIB~06en91SXwp2ZxTJsy2eu1muvR05IXbiVCAxuxFw9tbO2z8rvRXNAWOU6izpOrXExAVLw7UCaso~QoHCw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  // }
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
const btn_Repeat = document.querySelector('.control_repeat')
const timeLine = document.getElementById('song_time')

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
  if (random === true) {
    let y = Math.trunc(Math.random()*songs.length)
    audio.ontimeupdate = function() {autoNextSong(audio, y)};
  }
  else if (repeat === true) {
    let y = getIndexSong()
    audio.ontimeupdate = function() {autoNextSong(audio, y)};
  }
  else {
    let y = getIndexSong('+')
    audio.ontimeupdate = function() {autoNextSong(audio, y)};
  }
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

