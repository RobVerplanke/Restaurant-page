export default function renderHeader() {
  const pageHeader = document.createElement('div');

  pageHeader.innerHTML = '<h2>The Rustic Garden</h2>';
  pageHeader.setAttribute('id', 'header');

  return pageHeader;
}
