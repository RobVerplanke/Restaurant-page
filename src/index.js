import renderHeader from './scripts/header';
import renderNav from './scripts/nav';
import renderHomePage from './scripts/home';
import renderFooter from './scripts/footer';
import renderContact from './scripts/contact';
import renderMenu from './scripts/menu';

const contentHolder = document.querySelector('#content');
const pageMain = document.createElement('div');

function clearContent() {
  pageMain.innerHTML = '';
}

function renderMain(mainContent) {
  pageMain.setAttribute('id', 'main');
  clearContent();
  pageMain.append(mainContent);

  return pageMain;
}

const defaultMainContent = renderHomePage();

contentHolder.append(renderHeader(), renderNav(), renderMain(defaultMainContent), renderFooter());

const navItemHome = document.querySelector('#nav-home');
const navItemMenu = document.querySelector('#nav-menu');
const navItemContact = document.querySelector('#nav-contact');

navItemHome.addEventListener('click', () => { renderMain(renderHomePage()); });
navItemMenu.addEventListener('click', () => { renderMain(renderMenu()); });
navItemContact.addEventListener('click', () => { renderMain(renderContact()); });
