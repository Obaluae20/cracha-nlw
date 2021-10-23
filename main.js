const publicProfiles = {
  github: 'obaluae20',
  youtube: '',
  facebook: '',
  instagram: 'obaluae20',
  twitter: ''
  //undefined
}
function addPublicUser() {
  for (let li of mediasUndefined.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${publicProfiles[social]}`
  }
}
addPublicUser()
function getGithubProfilesInfo() {
  const url = `https://api.github.com/users/${publicProfiles.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userSelfie.src = data.avatar_url
      userProfile.textContent = data.login
    })
}
getGithubProfilesInfo()
