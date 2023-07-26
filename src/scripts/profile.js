const user = JSON.parse(localStorage.getItem('username'))

export async function repoUsersSearch(login){
    try {
        const data = await fetch (`https://api.github.com/users/${login}/repos`,{
            method:"GET",
        })
        const response = await data.json()
        return response

    }catch(err){
        console.log(err)

    }
}

function renderProfileCard (user, repo){
    const containerProfile = document.querySelector('.main__profile')
    const profileSection = document.querySelector('.found__profile')
    
    const profileHeader = document.createElement('div')
    profileHeader.classList.add('profileHeader')

    const card = document.createElement('div')
    card.classList.add('profile')

    const image = document.createElement('img')
    image.classList.add('userImage')

    const title = document.createElement('h2')
    title.classList.add('titleUser')

    const switchUserButton = document.createElement('button')
    switchUserButton.classList.add('switchUserButton')
    
    containerProfile.innerHTML = ""

    const repoList = document.createElement('ul')
    repoList.classList.add('repoList')
    image.src = user.avatar_url
    title.innerText = user.login
    switchUserButton.innerText = "Trocar usuario"
    
    repo.forEach((element) =>{
        const cardRepo = document.createElement ('li')
        cardRepo.classList.add('cardRepo')

        const titleRepo = document.createElement ('h3')
        titleRepo.classList.add('titleRepo')
        titleRepo.innerText = element.name

        const repoDescription = document.createElement('p')
        repoDescription.classList.add('repoDescription')
        repoDescription.innerText = element.description

        const showRepoButton = document.createElement ('button')
        showRepoButton.classList.add('showRepoButton')
        showRepoButton.innerHTML = "Repositório"
        
        cardRepo.append(titleRepo,repoDescription, showRepoButton)
        repoList.appendChild(cardRepo)
    })

    card.append(image, title)
    profileHeader.append(card, switchUserButton)


    profileSection.append(profileHeader, repoList)
    containerProfile.appendChild(profileSection)

}


async function renderProfile (){
   const repos = await repoUsersSearch(user.login)

    renderProfileCard(user, repos)
    switchUser()
}

function switchUser (){
    const newUserButton = document.querySelector('.switchUserButton')

    newUserButton.addEventListener('click',()=>{
        localStorage.clear()
        location.replace('../../')
    
    })
}

renderProfile()