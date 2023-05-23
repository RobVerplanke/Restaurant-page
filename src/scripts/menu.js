export default function renderMenu() {
  const pageMenu = document.createElement('div');

  pageMenu.innerHTML = `
    <p>Menukaart</p>
    `;

  pageMenu.setAttribute('id', 'text-content');

  return pageMenu;
}
