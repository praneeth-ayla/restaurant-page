export function navBar() {

    const navBar = document.createElement('div');
    navBar.id = 'navBar';

    const homeNavBar = document.createElement('div');
    homeNavBar.id = 'homeBtnNavBar';
    homeNavBar.textContent = 'Home';

    const menuNavBar = document.createElement('div');
    menuNavBar.id = 'menuBtnNavBar';
    menuNavBar.textContent = 'Menu';

    const reviewsNavBar = document.createElement('div');
    reviewsNavBar.id = 'reviewsBtnNavBar';
    reviewsNavBar.textContent = 'Reviews';

    const contactNavBar = document.createElement('div');
    contactNavBar.id = 'contactBtnNavBar';
    contactNavBar.textContent = 'Contact';

    homeNavBar.classList.add('navBarElements')
    menuNavBar.classList.add('navBarElements')
    reviewsNavBar.classList.add('navBarElements')
    contactNavBar.classList.add('navBarElements')


    navBar.appendChild(homeNavBar);
    navBar.appendChild(menuNavBar);
    navBar.appendChild(reviewsNavBar);
    navBar.appendChild(contactNavBar);

    container.appendChild(navBar);
}