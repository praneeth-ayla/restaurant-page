export function navBar() {
    const navBar = document.createElement('div');
    navBar.id = 'navBar';

    const reviewsNavBar = document.createElement('div');
    const homeNavBar = document.createElement('div');
    const menuNavBar = document.createElement('div');
    const contactNavBar = document.createElement('div');


    const homeNav = document.createElement('div');
    homeNavBar.id = 'homeBtnNavBar';


    const menuNav = document.createElement('div');
    menuNavBar.id = 'menuBtnNavBar';

    // const reviewsNav = document.createElement('div');
    // reviewsNavBar.id = 'reviewsBtnNavBar';

    const contactNav = document.createElement('div');
    contactNavBar.id = 'contactBtnNavBar';




    homeNav.innerHTML = '<svg  class = "svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>'
    menuNav.innerHTML = '<svg class = "svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>silverware</title><path d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M14.88,11.53L13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.47,10.12C12.76,8.59 13.26,6.44 14.85,4.85C16.76,2.93 19.5,2.57 20.96,4.03C22.43,5.5 22.07,8.24 20.15,10.15C18.56,11.74 16.41,12.24 14.88,11.53Z" /></svg>'
    // reviewsNav.innerHTML = '<svg  class = "svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>message</title><path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" /></svg>'
    contactNav.innerHTML = '<svg  class = "svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-box</title><path d="M6,17C6,15 10,13.9 12,13.9C14,13.9 18,15 18,17V18H6M15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6A3,3 0 0,1 15,9M3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5C3.89,3 3,3.9 3,5Z" /></svg>'




    homeNavBar.textContent += 'Home'
    menuNavBar.textContent += 'Menu';
    contactNavBar.textContent += 'Contact'
    // reviewsNavBar.textContent += 'Reviews';

    homeNavBar.appendChild(homeNav)
    menuNavBar.appendChild(menuNav)
    // reviewsNavBar.appendChild(reviewsNav)
    contactNavBar.appendChild(contactNav)


    homeNavBar.classList.add('navBarElements')
    menuNavBar.classList.add('navBarElements')
    // reviewsNavBar.classList.add('navBarElements')
    contactNavBar.classList.add('navBarElements')


    navBar.appendChild(homeNavBar);
    navBar.appendChild(menuNavBar);
    // navBar.appendChild(reviewsNavBar);
    navBar.appendChild(contactNavBar);

    container.appendChild(navBar);
}