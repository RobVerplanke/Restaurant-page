export default function renderContact() {
  const pageContact = document.createElement('div');

  pageContact.innerHTML = `
  <p>Menukaart</p>
  `;

  pageContact.setAttribute('id', 'text-content');

  return pageContact;
}
