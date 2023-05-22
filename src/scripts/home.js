export default function renderHomePage() {
  const homePageContent = document.createElement('div');

  homePageContent.innerHTML = `
  <p>
    <b>Welcome to The Rustic Garden</b>
    <br><br><br>
    An idyllic restaurant nestled in an enchanting garden.
    <br><br>
    Indulge in delightful seasonal dishes, prepared with fresh ingredients straight from the garden.
    <br><br>
    The rustic atmosphere and natural ambiance create an unforgettable culinary journey.
  </p>`;

  homePageContent.setAttribute('id', 'text-content');

  return homePageContent;
}
