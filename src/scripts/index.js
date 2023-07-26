export async function findUserProfile(name){
    const username = await fetch (`https://api.github.com/users/${name}`,{
        method:"GET",
    })
    .then(async(res) =>{
        if(res.ok){
      localStorage.setItem('username', JSON.stringify(await res.json()))
      location.replace('./src/pages/profile.html')
      return await res.json()
        }
            return location.replace('./src/pages/error.html')
    })
   
    return username
}
  
 function searchProfilesMetod (){
    const searchInput = document.querySelector('.searchInput')
    const searchButton = document.querySelector('.showProfileButton') 

    searchButton.addEventListener('click', async () =>{
       const searchLogin = searchInput.value

       localStorage.setItem('searchLogin', searchLogin)
       const searchUsername = await findUserProfile(searchLogin)
       console.log(searchLogin)
       return searchUsername
    })
   
}

export function searchPage(){
    const mainPage = document.querySelector('.main__container')

    const asideSectionLeft = document.createElement('section')
    asideSectionLeft.classList.add('asideSectionLeft')

    const leftDiv = document.createElement('div')
    leftDiv.classList.add('leftDiv')

    const leftTitle = document.createElement('h1')
    leftTitle.classList.add('leftTitle')
    leftTitle.innerText = "Git Search"

    const leftDescription = document.createElement("p")
    leftDescription.classList.add('leftDescription')
    leftDescription.innerText = 'Encontre e se conecte com profissionais de forma rápida e fácil'
    
    const asideSectionRigth = document.createElement ('section')
    asideSectionRigth.classList.add('asideSectionRigth')

    const rigthDiv = document.createElement ('div')
    rigthDiv.classList.add('rigthDiv')

    const rightTitle = document.createElement('h1')
    rightTitle.classList.add('rightTitle')
    rightTitle.innerText = 'Procurar por um usuário'

    const rightDescription = document.createElement("p")
    rightDescription.classList.add('rightDescription')
    rightDescription.innerText = 'Usuário github'

    const searchInput = document.createElement('input')
    searchInput.classList.add('searchInput')
    searchInput.placeholder = "Digite um usuário do github aqui..."

    const showProfileButton = document.createElement('button')
    showProfileButton.classList.add('showProfileButton')
    showProfileButton.innerText = 'Ver perfil do github'

    leftDiv.append(leftTitle, leftDescription)
    asideSectionLeft.appendChild(leftDiv)
    rigthDiv.append(rightTitle, rightDescription, searchInput, showProfileButton)
    asideSectionRigth.appendChild(rigthDiv)

    
    mainPage.append(asideSectionLeft, asideSectionRigth)
    
}

searchPage()
searchProfilesMetod()

