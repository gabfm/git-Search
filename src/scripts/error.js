export function notFoundError (){
    const notFoundProfile = document.querySelector('.main__error')

    const errorContainer = document.createElement('section')
    errorContainer.classList.add('errorContainer')

    const asideDivError = document.createElement('div')
    asideDivError.classList.add('asideDivError')

    const tittleDivError = document.createElement('h1')
    tittleDivError.innerText = 'Ooops!'

    const descriptionError = document.createElement('p')
    descriptionError.innerText = 'Não encotramos o usuário que você procurou, vamos tentar novamente.'
    
    const errorButton = document.createElement('button')
    errorButton.classList.add('errorButton')
    errorButton.innerText = 'Nova Busca'
    
    const imgError = document.createElement('img')
    imgError.src = '../img/error.png'

    asideDivError.append(tittleDivError, descriptionError, errorButton)
    errorContainer.append(asideDivError, imgError)
   
    notFoundProfile.appendChild(errorContainer)
    switchUser()
 }

 notFoundError()


 function switchUser (){
   const searchButton = document.querySelector('.errorButton')

   searchButton.addEventListener('click',()=>{
       localStorage.clear()
       location.replace('../../')
   
   })
}
