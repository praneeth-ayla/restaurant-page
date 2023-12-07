
export function homePage() {
    const homeDiv = document.createElement('div')
    homeDiv.id = 'home'

    const leftHome = document.createElement('div')
    leftHome.id = 'leftHome'


    const lightTextHome = document.createElement('div')
    lightTextHome.id = 'lightTextHome'
    lightTextHome.textContent = "Discover your Taste"

    const textHome = document.createElement('div')
    textHome.id = 'textHome'
    textHome.innerHTML = "Eat Healthy, Eat Natural, <br />Eat Indian"

    const menuBtnHome = document.createElement('button')
    menuBtnHome.id = 'menuBtnHome'
    menuBtnHome.textContent = 'Discover Menu >'


    const rightHome = document.createElement('div')
    rightHome.id = 'rightHome'
    rightHome.style.backgroundImage = 'url("imgs/main-image---indian-breakfast.jpg")'

    container.appendChild(homeDiv)
    homeDiv.appendChild(leftHome)
    leftHome.appendChild(lightTextHome)
    leftHome.appendChild(textHome)
    leftHome.appendChild(menuBtnHome)

    homeDiv.appendChild(rightHome)
}

