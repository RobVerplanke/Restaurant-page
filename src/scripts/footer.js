export default function renderFooter() {
  const pageFooter = document.createElement('div');

  pageFooter.innerHTML = `
    <ul id="footer-list">
      <li>App created by RobusV</li>
      <li>Image by Maddi Bazzocco - Unsplash.com</li>
    </ul>`;

  pageFooter.setAttribute('id', 'footer');

  return pageFooter;
}
