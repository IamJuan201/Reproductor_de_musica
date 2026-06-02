import Login from "../Riwiflow-Kanban-main/src/pages/login";

const routes = {
    '/' : Login,
    'menu-principal': menuPrincipal
}

export function router() {
    let currentPath = window.location.pathname;

    const savedUser = localStorage.getItem('user');

    if (currentPath === '/' && savedUser) {
        currentPath = '/menu-principal';
        history.pushState(null, null, currentPath);
    }

    if (currentPath === '/menu-principal' && !savedUser) {
        currentPath = '/';
        history.pushState(null, null, currentPath);
    }

    const pageTitles = {
        '/': 'Riwiflow - Login',
        '/menu-principal': 'Menu principal - Riwiflow',
    };

    document.title = pageTitles[currentPath] || 'Riwiflow';

    const pageToShow = routes[currentPath] || Login;

    document.getElementById('app').innerHTML = pageToShow.render();

    pageToShow.mounted();
}

export function navigate(path) {
    history.pushState(null, null, path);
    router();
}