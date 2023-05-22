export default function renderNav() {
  const pageNav = document.createElement('div');

  pageNav.innerHTML = `
    <ul id="nav-list">
      <li>Home</li>
      <li>Menu</li>
      <li>Contact</li>
    </ul>`;

  pageNav.setAttribute('id', 'nav');

  return pageNav;
}
