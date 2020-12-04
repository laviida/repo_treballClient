import {
  logout
} from "../services/auth/auth.js";
import * as Pager from "./pages.js";
import {
  getCookie
} from "../utils/cookies.js";

export {
  Router
};
class Router {
  constructor() {
    this.paths = {
      home: { path: "/" },
      about: { path: "/about" },
      teams: { path: "/teams" },
      contact: { path: "/contact" },
      login: { path: "/login" },
      rules: { path: "/rules" },
      logout: { path: "/logout" },
      news: { path: "/news" },
      live: { path: "/live" },
      profile: { path: "/profile" },
      admin: { path: "/admin" },
      register: { path: "/register" },
      bets: { path: "/bets" },
    };
    this.initRouter();
  }

  initRouter() {
    const {
      location: {
        pathname = "/"
      },
    } = window;
    const URL = pathname == "/" || "/index.html" ? "home" : pathname.replace("/", "");
    this.load(URL);
  }
  load(page = "home") {
    let user = getCookie("user");
    if (page != "register" && !user) page = "login";
    if (page != "logout" && user == "admin") page = "admin";
    const { paths } = this;
    const { path } = paths[page] || paths.error;
    const $CONTAINER = document.querySelector("#content");
    $CONTAINER.innerHTML = `<div id="page"></div>`;

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
    else if (page == "logout") {
      logout();
      Pager.pageLogin();
    }
    window.history.pushState({}, "done", path);
  }

  setListeners() {
    document.querySelectorAll("[data-page]").forEach((x) => {
      x.addEventListener("click", (e) => this.load(e.target.getAttribute("data-page")));
    });
  }
}