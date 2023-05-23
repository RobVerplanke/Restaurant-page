export default function renderNav() {
  const pageNav = document.createElement('div');
  const navList = document.createElement('ul');
  const navItemHome = document.createElement('li');
  const navItemMenu = document.createElement('li');
  const navItemHContact = document.createElement('li');

  navItemHome.innerHTML = 'Home';
  navItemMenu.innerHTML = 'Menu';
  navItemHContact.innerHTML = 'Contact';

  navList.setAttribute('id', 'nav-list');
  pageNav.setAttribute('id', 'nav');

  navList.append(navItemHome, navItemMenu, navItemHContact);
  pageNav.append(navList);

  return pageNav;
}
