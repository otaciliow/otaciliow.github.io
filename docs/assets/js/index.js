function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/otaciliow`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        profilePic.src = data.avatar_url;
        profileUser.textContent = data.name;
        // profileBio.textContent = data.bio;        
    })
}

getGitHubProfileInfos()

// Exibir / Ocultar a descrição de cada projeto
const elements = document.querySelectorAll('li');

elements.forEach((elements) => {
    elements.addEventListener('click', function() {
        this.classList.toggle('active');
    })
})