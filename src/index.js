import renderHeader from './scripts/header';
import renderNav from './scripts/nav';
import renderHomePage from './scripts/home';
import renderFooter from './scripts/footer';

const contentHolder = document.querySelector('#content');

// create main content, homepage content by default
function renderMain(mainContent) {
  const pageMain = document.createElement('div');
  pageMain.setAttribute('id', 'main');
  pageMain.append(mainContent);

  return pageMain;
}

const selectedMainContent = renderHomePage();

contentHolder.append(renderHeader(), renderNav(), renderMain(selectedMainContent), renderFooter());
