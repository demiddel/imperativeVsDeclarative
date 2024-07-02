import { routes } from "./shared/routes.js";

const app = document.querySelector("#app");
const nav = document.querySelector("#nav");

const renderNavlinks = () => {
  const navFragment = document.createDocumentFragment();
  for (const [routePath, { linkLabel }] of Object.entries(routes)) {
    const linkElement = document.createElement("a");

    linkElement.href = routePath;
    linkElement.textContent = linkLabel;
    linkElement.className = "nav-link";
    navFragment.appendChild(linkElement);
  }

  nav.append(navFragment);
};

const registerNavLinks = () => {
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    const { href } = e.target;
    history.pushState({}, "", href);
    navigate(e);
  });
};

// biome-ignore lint/suspicious/noAssignInExpressions: ignore basic HTML example
const renderContent = (route) => (app.innerHTML = routes[route].content);

const navigate = (e) => {
  const route = e.target.pathname;
  history.pushState({}, "", route);
  renderContent(route);
};

const registerBrowserBackAndForth = () => {
  window.onpopstate = (e) => {
    const route = location.pathname;
    renderContent(route);
  };
};

const renderInitialPage = () => {
  const route = location.pathname;
  renderContent(route);
};

(function bootup() {
  renderNavlinks();
  registerNavLinks();
  registerBrowserBackAndForth();
  renderInitialPage();
})();
