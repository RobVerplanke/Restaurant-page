export default function renderMenu() {
  const pageMenu = document.createElement('div');

  pageMenu.innerHTML = `
    <p><b>Starters:</b></p><br>
    <ol>
      <li>
        <p>Garden Fresh Salad - A refreshing mix of seasonal greens, cherry tomatoes, and crunchy vegetables, dressed with a tangy herb vinaigrette.</p>
      </li><br>
      <li>
        <p>Roasted Beet Crostini - Slices of toasted baguette topped with roasted beets, creamy goat cheese, and a drizzle of balsamic reduction.</p>
      </li><br>
      <li>
        <p>Herbed Mushroom Bruschetta - Grilled bread topped with sautéed herbed mushrooms, finished with a sprinkle of Parmesan cheese.</p>
      </li>
    </ol><br><br>
    <p><b>Main Courses:</b></p><br>
    <ol>
    <li>
      <p>Garden Vegetable Risotto - Creamy Arborio rice cooked with a medley of fresh garden vegetables, Parmesan cheese, and a hint of garlic.</p>
    </li><br>
    <li>
      <p>Grilled Herb-Marinated Chicken - Tender chicken breast marinated in fragrant herbs, grilled to perfection, and served with roasted potatoes and seasonal vegetables.</p>
    </li><br>
    <li>
      <p>Rustic Garden Pasta - Penne pasta tossed with sun-dried tomatoes, spinach, pine nuts, and a light garlic-infused olive oil sauce.</p>
    </li>
    </ol><br><br>
    <p><b>Desserts:</b></p><br>
    <ol>
      <li>
        <p>Berry Crumble - A warm medley of seasonal berries topped with a buttery crumble crust, served with a scoop of vanilla ice cream.</p>
      </li><br>
      <li>
        <p>Lemon Lavender Panna Cotta - Silky smooth panna cotta infused with delicate notes of lemon and lavender, garnished with fresh berries.</p>
      </li><br>
      <li>
        <p>Apple Cinnamon Galette - Thinly sliced apples layered over a buttery pastry crust, dusted with cinnamon sugar, and served with a dollop of whipped cream.</p>
      </li>
    </ol><br><br>
    <p><b>Beverages:</b></p><br>
    <ol>
      <li>
        <p>Garden Fresh Lemonade - A refreshing blend of freshly squeezed lemons, garden herbs, and a touch of sweetness.</p>
      </li><br>
      <li>
        <p>Sparkling Elderflower Mocktail - A sparkling mix of elderflower syrup, soda water, and a squeeze of lime, garnished with a sprig of fresh mint.</p>
      </li><br>
      <li>
        <p>Seasonal Fruit Smoothie - A delightful combination of fresh seasonal fruits blended to perfection, served chilled.</p>
      </li>
    </ol><br>
    <p><b><i>Note: The menu is subject to change based on seasonal availability of ingredients.</i></b></p>
    `;

  pageMenu.setAttribute('id', 'text-content');

  return pageMenu;
}
