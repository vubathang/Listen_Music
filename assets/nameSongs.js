const songs = [
  // {
  //   songName: "Clap",
  //   songAvt: 'https://i.ytimg.com/vi/d1JVYKP7S4A/maxresdefault.jpg',
  //   songAuthor: 'Me',
  //   song_mp3: 'https://cf-media.sndcdn.com/C85PcipWR2mI.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vQzg1UGNpcFdSMm1JLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODAxNzkwfX19XX0_&Signature=OISMl2H0UKxxU-WK7fg-jjwYgTDdZfD3QELXQtCl35BzvdT8W9JTneZ-8G7NjedMW7O8fUac7iCj2j-q6sN31TvFJHkIKg2qGHZH3kmnvlUNB3EXp0VCEJvz~U~yOyeAjXzfIp2K7U1~D2IXTE~UQsigWyvaq1uDYcpLnTsUBp0fuw1oyu4cmzn3gLTyvOjiyKH1NcVOgQm3cHLdYl421rLelpN96-U3cN7QykgKm6jpInvnVDeqHcRoO~gjtOxqcqF8F5MpAB-TVXEXFaI4ie2b54fdu5n-aMtCzc-NXW84H3RzUTeTAGX3NTyDwvxoiWtx7qh-1gL04DXKzU5uJQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  // },
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
  },
  {
    songName: "Vì Mẹ Anh Bắt Chia Tay",
    songAvt: 'https://avatar-ex-swe.nixcdn.com/song/2022/06/16/d/c/9/2/1655371095601.jpg',
    songAuthor: 'Miu Lê',
    song_mp3: 'https://cf-media.sndcdn.com/EJBtq7LVX8eI.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vRUpCdHE3TFZYOGVJLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODIwMDAyfX19XX0_&Signature=YBlSqKCm2YmaIJL5NhXUDSgxHfBBoDNszVkuGfNal-QF8yRfSbhLtU-2uw4hZMY30nUREhaySZJzb5BkwsjLCD-2ecBekLItD2naVlPeI22Mmt4CbQqZqyS4DLHU9OHvLRneB9tugEuZSStJiqVMH-By4kBBEuPKOoMD1duB9dJgateMirn4qhbmcj3GS~-ZUuT~iGQXjnvTKC4zNeBfCbYLVXCHxMvhaQIXjoJmwmGJ677JymMYriS8B~27w0Lo6QNs8yZ5IO5C05VDjcX4KcA-uGS3-PrcHntxDNiHBCOhgXhqM3ddjl70Z1ecFlxcGN5prJTtw2GMpfzWLn4~uw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  },
  {
    songName: "Bắt cóc con tim",
    songAvt: 'https://avatar-ex-swe.nixcdn.com/song/2022/06/30/7/b/2/2/1656580453081.jpg',
    songAuthor: 'Lou Hoàng',
    song_mp3: 'https://cf-media.sndcdn.com/6j4JqFP4YYfE.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vNmo0SnFGUDRZWWZFLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODIwMDIxfX19XX0_&Signature=f5sMx8HrScm6FS1iEtioWYPzIex3buxc0ga9V9c9vPGwg0qobORYRnGsVp3b7flkBn3Pf04EO3lvfCGyt7Eg82VqPC5aKuCUCoXVLwPsjsHb0vz9TDMK6CLv1QLsr4TJhDlgtAk9v054PwiWf7UuLGir8zQ14bLVemDcZkZ0Lkkuegz37Xx9f3Sln79UhhVaSfSUdpny4WzUJkKGNxnf-DHK5mr~acijWT3Xr-IEGcK0TyN-K3c-3IttSGfy-8v40gMjonDlI~jlbhXeEoM2b1VZupb8~j~qT5TWvynZ~tYlUER0jDDyiA9tdRXe4a5pJ6PewqQHCT8oobxITDekTQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  },
  {
    songName: "2 AM",
    songAvt: 'https://i.ytimg.com/vi/XGrvLJG8tuM/maxresdefault.jpg',
    songAuthor: 'JustaTee ft BigDaddy',
    song_mp3: 'https://cf-media.sndcdn.com/HjkGLqPpuroj.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vSGprR0xxUHB1cm9qLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODIwMjQwfX19XX0_&Signature=DTK11RtQRdV9UtLBxEjKSIsWYnky-X0sFNdnCV5dxw~3oMZoU7FRvoqhpamnZzZM~UYApQYTGg4Wgg-uBDo72u1~W11rxe2HcdLdg~rBaOt~Ud7xihomaJNqZp2dzELc~qaWI02gWp5lEZR-3MXQNOMwqZ0K6Z1pNITUqzRC2dJ4nYSGGbNhIS7oU4Hrb9W2fefZBJp8Y8AIoVjQQOMctFzkXYv-HuM-ioc7~yJK0Fwv5F9VUkByMOAfMWMoeAySgGKZcvc5y3yovxlB2fWk8~xKAU-eyEXcbCYMUaPpJkE~Xi4zfBOu-~bQxHwkYOjUokFffUjD9hsDK1uCMrrsVQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  }
]

export {songs}