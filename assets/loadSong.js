const songs = [
  {
    name: "Clap",
    img: 'https://i.ytimg.com/vi/d1JVYKP7S4A/maxresdefault.jpg',
    single: 'Me',
    path: 'https://cf-media.sndcdn.com/C85PcipWR2mI.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vQzg1UGNpcFdSMm1JLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODAxNzkwfX19XX0_&Signature=OISMl2H0UKxxU-WK7fg-jjwYgTDdZfD3QELXQtCl35BzvdT8W9JTneZ-8G7NjedMW7O8fUac7iCj2j-q6sN31TvFJHkIKg2qGHZH3kmnvlUNB3EXp0VCEJvz~U~yOyeAjXzfIp2K7U1~D2IXTE~UQsigWyvaq1uDYcpLnTsUBp0fuw1oyu4cmzn3gLTyvOjiyKH1NcVOgQm3cHLdYl421rLelpN96-U3cN7QykgKm6jpInvnVDeqHcRoO~gjtOxqcqF8F5MpAB-TVXEXFaI4ie2b54fdu5n-aMtCzc-NXW84H3RzUTeTAGX3NTyDwvxoiWtx7qh-1gL04DXKzU5uJQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  },
  {
    name: "Clap2",
    img: 'https://i.ytimg.com/vi/d1JVYKP7S4A/maxresdefault.jpg',
    single: 'Me',
    path: 'https://cf-media.sndcdn.com/C85PcipWR2mI.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vQzg1UGNpcFdSMm1JLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODAxNzkwfX19XX0_&Signature=OISMl2H0UKxxU-WK7fg-jjwYgTDdZfD3QELXQtCl35BzvdT8W9JTneZ-8G7NjedMW7O8fUac7iCj2j-q6sN31TvFJHkIKg2qGHZH3kmnvlUNB3EXp0VCEJvz~U~yOyeAjXzfIp2K7U1~D2IXTE~UQsigWyvaq1uDYcpLnTsUBp0fuw1oyu4cmzn3gLTyvOjiyKH1NcVOgQm3cHLdYl421rLelpN96-U3cN7QykgKm6jpInvnVDeqHcRoO~gjtOxqcqF8F5MpAB-TVXEXFaI4ie2b54fdu5n-aMtCzc-NXW84H3RzUTeTAGX3NTyDwvxoiWtx7qh-1gL04DXKzU5uJQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  },
  {
    name: "Clap3",
    img: 'https://i.ytimg.com/vi/d1JVYKP7S4A/maxresdefault.jpg',
    single: 'Me',
    path: 'https://cf-media.sndcdn.com/C85PcipWR2mI.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vQzg1UGNpcFdSMm1JLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODAxNzkwfX19XX0_&Signature=OISMl2H0UKxxU-WK7fg-jjwYgTDdZfD3QELXQtCl35BzvdT8W9JTneZ-8G7NjedMW7O8fUac7iCj2j-q6sN31TvFJHkIKg2qGHZH3kmnvlUNB3EXp0VCEJvz~U~yOyeAjXzfIp2K7U1~D2IXTE~UQsigWyvaq1uDYcpLnTsUBp0fuw1oyu4cmzn3gLTyvOjiyKH1NcVOgQm3cHLdYl421rLelpN96-U3cN7QykgKm6jpInvnVDeqHcRoO~gjtOxqcqF8F5MpAB-TVXEXFaI4ie2b54fdu5n-aMtCzc-NXW84H3RzUTeTAGX3NTyDwvxoiWtx7qh-1gL04DXKzU5uJQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  },
  {
    name: "I'l will be there",
    img: 'https://i.ytimg.com/vi/d1JVYKP7S4A/maxresdefault.jpg',
    single: 'Gabriela Bee',
    path: 'https://cf-media.sndcdn.com/kmiiAoacQFya.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20va21paUFvYWNRRnlhLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODAxMzYxfX19XX0_&Signature=ATfkgqpSAw8BsUwVNBbA--lvS96rdmcWJVBB2HyUz04ALEdvYq0CfwwHx0yzlFRUexufoZz5aIWx1MMrfBNAdt~QmZnvCy5HZN3nTlLQUnl4WZDGp~flziPsO1~d6KlJ-UH30dyCN6CKkbhFHPdttbcJ~G2BoAZyMMDHyjwj-DkhzrGzRW~NV~~IgfXKLaSDGDhIDHhgFnS6b7b8gP8NZpWDwZQ6QaOSNZtzgaNkfrslRmCJBMTGTkXkarCWtXYwkJG4~uhVysiK8MAPbjogvzu1MTIRF54uq0p47r-eGlaETwSRwCS7jjJZe1~O3YNf5-15C3s8WttdI8xQ22kzLg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  },
  {
    name: "Chúng ta của hiện tại",
    img: 'https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d',
    single: 'Sơn Tùng',
    path: 'https://cf-media.sndcdn.com/3Cc5JchX5jfD.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vM0NjNUpjaFg1amZELjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODA0MzExfX19XX0_&Signature=FCbHsGcsGbZYcNBCqD5XLKreSXIhsQC2wOTxy~w~GR1pUM3BVTU8bJ-s4jWk92gj0K1WFsCjSVbsLPu0~Nd5Ms4G1QVUzirqzq7KLTR8fmUMnEJiCmuOU~nFNufPgBgAXoHWY9GclyYvz44Chq0PCb2jGTDC8WVfUSa7XipZIG9tPDjpzt~EnMoFeV9ggnRqykp2vBhqA4vpk4y7GLBs0WZuBhpA-OyJpTJI6hfvzZPUzV3W-CXCtwcYcE8f8wzcGb794TuGYiTOxFly145B7uoiTQgkx7YaE7bjf47nsmRcGBxYHASbojizlhMp514o4te2X3Zu2vDMCcp2zhoxvA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ',
  },
  {
    name: "Vì Mẹ Anh Bắt Chia Tay",
    img: 'https://avatar-ex-swe.nixcdn.com/song/2022/06/16/d/c/9/2/1655371095601.jpg',
    single: 'Miu Lê',
    path: 'https://cf-media.sndcdn.com/EJBtq7LVX8eI.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vRUpCdHE3TFZYOGVJLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODIwMDAyfX19XX0_&Signature=YBlSqKCm2YmaIJL5NhXUDSgxHfBBoDNszVkuGfNal-QF8yRfSbhLtU-2uw4hZMY30nUREhaySZJzb5BkwsjLCD-2ecBekLItD2naVlPeI22Mmt4CbQqZqyS4DLHU9OHvLRneB9tugEuZSStJiqVMH-By4kBBEuPKOoMD1duB9dJgateMirn4qhbmcj3GS~-ZUuT~iGQXjnvTKC4zNeBfCbYLVXCHxMvhaQIXjoJmwmGJ677JymMYriS8B~27w0Lo6QNs8yZ5IO5C05VDjcX4KcA-uGS3-PrcHntxDNiHBCOhgXhqM3ddjl70Z1ecFlxcGN5prJTtw2GMpfzWLn4~uw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  },
  {
    name: "2 AM",
    img: 'https://i.ytimg.com/vi/XGrvLJG8tuM/maxresdefault.jpg',
    single: 'JustaTee ft BigDaddy',
    path: 'https://cf-media.sndcdn.com/HjkGLqPpuroj.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vSGprR0xxUHB1cm9qLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4ODIwMjQwfX19XX0_&Signature=DTK11RtQRdV9UtLBxEjKSIsWYnky-X0sFNdnCV5dxw~3oMZoU7FRvoqhpamnZzZM~UYApQYTGg4Wgg-uBDo72u1~W11rxe2HcdLdg~rBaOt~Ud7xihomaJNqZp2dzELc~qaWI02gWp5lEZR-3MXQNOMwqZ0K6Z1pNITUqzRC2dJ4nYSGGbNhIS7oU4Hrb9W2fefZBJp8Y8AIoVjQQOMctFzkXYv-HuM-ioc7~yJK0Fwv5F9VUkByMOAfMWMoeAySgGKZcvc5y3yovxlB2fWk8~xKAU-eyEXcbCYMUaPpJkE~Xi4zfBOu-~bQxHwkYOjUokFffUjD9hsDK1uCMrrsVQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  },
  {
    name: "Chuyện của mùa đông",
    img: 'https://i.scdn.co/image/ab67616d0000b273e5b060d5e00ca163019b1cf7',
    single: 'Hà Anh Tuấn',
    path: 'https://cf-media.sndcdn.com/6jxPHaH16X2m.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vNmp4UEhhSDE2WDJtLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjU4OTA2MTk0fX19XX0_&Signature=HQCrfWxUG2T9eJmoQXw6wrgJ5tbC1ogogFv4edUs1qPVaDEHOGrCkFL~sgc9KZ~Nt7Q1VXiI5V4hCdA-Gpu7K7pRB5IxYQMb8RQIbjocCf062Hz3KFiGjLvHNbfXEFD7y8iiLhDnWtGxq5iPM-pK5sXm3W-aUNggjI-7lijJADV6V0JBMPg0D6lMMHJI1zD7PjiHsSRc5v-F8~N3uw1woU5vMUMusU5RiFmNkpkT3trq52IW5h2SIMcPfasGNQtZQr1BijO67DxYNqSk691fcUgAbuGDTxf6ggU1eCGNEOpog75I24C1hTavd6J6znMPfulApo13cSGDaTyhiK3cpw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
  }
]

function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

songs.sort( compare );
export {songs}