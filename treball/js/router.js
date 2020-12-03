import { logout } from "./auth.js";
import * as Pager from "./pages.js";
import { getCookie } from "./modules/cookies.js";

export { Router };
class Router {
  constructor() {
    this.paths = {
      home: {
        path: "/",
        template: `<div id="page"></div>`,
      },
      about: {
        path: "/about",
        template: `<div id="page"></div>`,
      },
      teams: {
        path: "/teams",
        template: `<div id="page"></div>`,
      },
      contact: {
        path: "/contact",
        template: `<div id="page"></div>`,
      },
      login: {
        path: "/login",
        template: `<div id="page"></div>`,
      },
      rules: {
        path: "/rules",
        template: `<div id="page"></div>`,
      },
      logout: {
        path: "/logout",
        template: `<div id="page"></div>`,
      },
      news: {
        path: "/news",
        template: `<div id="page"></div>`,
      },
      live: {
        path: "/live",
        template: `<div id="page"></div>`,
      },
      profile: {
        path: "/profile",
        template: `<div id="page"></div>`,
      },
      admin: {
        path: "/admin",
        template: `<div id="page"></div>`,
      }, register: {
        path: "/register",
        template: `<div id="page"></div>`,
      }, bets: {
        path: "/bets",
        template: `<div id="page"></div>`,
      },
    };
    this.initRouter();
  }

  initRouter() {
    const {
      location: { pathname = "/" },
    } = window;
    const URL = pathname == "/" || "/index.html" ? "home" : pathname.replace("/", "");
    this.load(URL);
  }
  load(page = "home") {
    let user = getCookie("user");
    if (page != "register" && !user) page = "login";
    if (page != "logout" && user == "admin") page = "admin";
    const { paths } = this;
    const { path, template } = paths[page] || paths.error;
    const $CONTAINER = document.querySelector("#content");
    $CONTAINER.innerHTML = template;

    if (page == "home") Pager.pageHome();
    else if (page == "teams") Pager.pageTeams();
    else if (page == "login") Pager.pageLogin();
    else if (page == "rules") Pager.pageRules();
    else if (page == "contact") Pager.pageContact();
    else if (page == "about") Pager.pageAbout();
    else if (page == "news") Pager.pageNews();
    else if (page == "live") Pager.pageLive();
    else if (page == "profile") Pager.pageProfile();
    else if (page == "admin") Pager.pageAdmin();
    else if (page == "register") Pager.pageRegister();
    else if (page == "bets") Pager.pageBets();
    else if (page == "logout") { logout(); Pager.pageLogin(); }
    window.history.pushState({}, "done", path);
  }

  setListeners() {
    document.querySelectorAll("[data-page]").forEach((x) => {
      x.addEventListener("click", (e) => this.load(e.target.getAttribute("data-page")));
    });
  }
}
