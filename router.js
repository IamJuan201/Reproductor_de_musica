import Login from './src/pages/login.js';
import menuPrincipal from './src/pages/menuPrincipal.js';

const routes = {
  '/':          Login,
  '/login':     Login,
  '/dashboard': menuPrincipal,
};

export function router() {
  const path = window.location.pathname;
  const user = localStorage.getItem('user');

  if (!user && path !== '/' && path !== '/login') {
    history.replaceState(null, null, '/');
    renderPage(Login);
    return;
  }

  if (user && (path === '/' || path === '/login')) {
    history.replaceState(null, null, '/dashboard');
    renderPage(menuPrincipal);
    return;
  }

  const Page = routes[path] ?? Login;
  renderPage(Page);
}

function renderPage(Page) {
  const app = document.getElementById('app');
  app.innerHTML = Page.render();
  if (typeof Page.mounted === 'function') {
    Page.mounted();
  }
}

window.addEventListener('popstate', router);