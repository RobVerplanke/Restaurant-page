export default function renderHomePage() {
  const homePageContent = document.createElement('div');

  homePageContent.innerHTML = `
  <p>
    <b>Welcome to The Rustic Garden</b><br><br>
    Nestled in a serene garden, "The Rustic Garden" is an idyllic restaurant that offers a peaceful escape.<br><br>
    With its rustic charm and enchanting ambiance, this hidden gem invites you to indulge in a <b>culinary journey</b> surrounded by nature's beauty.<br><br>
    Fresh, seasonal ingredients harvested from the <b>on-site garden</b> take center stage, ensuring a vibrant and flavorful dining experience.<br><br>
    Whether you seek a <b>romantic dinner</b> or a moment of <b>tranquility</b>, The Rustic Garden provides a delightful haven where delicious cuisine and natural serenity intertwine.
  </p>`;

  homePageContent.setAttribute('id', 'text-content');

  return homePageContent;
}
