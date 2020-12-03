import * as Utils from "./utils.js";
import {
  getKey,
  KEY_SPORTSIO
} from "./credentials.js";
import {
  VALID_USER,
  login,
  checkFormField,
  REGEX_REGISTER_NAME,
  REGEX_REGISTER_EMAIL,
  REGEX_REGISTER_PASSWORD,
  REGEX_REGISTER_NAME_ERROR,
  REGEX_REGISTER_PASSWORD_ERROR,
  REGEX_REGISTER_EMAIL_ERROR,
  REGEX_REGISTER_LNAME_ERROR,
  register
} from "./auth.js";
import {
  getBody_home,
  getTitle_pageTeam,
  getBody_login,
  getBody_pageContact,
  tournament,
  getBody_about,
  getBody_live,
  getBody_pageNews,
  getBody_pageProfile,
  loader,
  getBody_AdminPage,
  getBody_RegisterPage
} from "./htmlData.js";
import {
  getCookie
} from "./modules/cookies.js";
import {
  Router
} from "./router.js";

export async function pageHome() {
  Utils.clear();
  Utils.hideDefaultNavbar(false);
  var news = await Utils.loadJSON("../json/News.json");
  Utils.setBodyBackground("linear-gradient(#141e30, #243b55)");
  Utils.showHideSearchBar(false);
  Utils.changeNavbarRightButtons();
  var body = getBody_home();
  document.getElementById("page").innerHTML += body;
  document.getElementById("page").innerHTML += Utils.drawInlineNews(news);
  setTimeout(() => document.getElementsByClassName("ca3-scroll-down-arrow")[0].addEventListener("click", () => window.scrollTo(0, document.getElementById("page").scrollHeight)), 50);

  Utils.setCounter();
  Utils.scrollButton(document.getElementsByTagName("footer")[0]);
  Utils.checkHeightWindowBody();
}

export async function pageTeams() {
  $("#searchbar>input").off("input");
  $("#searchbar>input").val("");
  Utils.setBodyBackground("linear-gradient(#141e30, #243b55)");
  Utils.showHideSearchBar(true);
  Utils.changeNavbarRightButtons();
  var row = Utils.createElement("div", {
    class: "row justify-content-center",
  }, "");
  var teams = [];
  await Utils.loadJSON("../json/teams_players.json").then((response) => (teams = JSON.parse(response)));
  teams.forEach((team) => {
    var element = Utils.drawTeam(team);
    row.innerHTML += element;
  });
  document.getElementById("page").appendChild(row);
  setTimeout(() => {
    Array.from(document.getElementsByClassName("teampage")).forEach((link) =>
      link.addEventListener("click", (e) => {
        Utils.clear();
        pageTeam(teams.find((x) => x.TeamID == e.target.getAttribute("data-href")));
      })
    );
  }, 50);
  $("#searchbar>input").on("input", function () {
    row.innerHTML = "";
    teams.filter((team) => team.Name.toLowerCase().includes(this.value.toLowerCase())).forEach((team) => (row.innerHTML += Utils.drawTeam(team)));
    setTimeout(() => {
      Array.from(document.getElementsByClassName("teampage")).forEach((link) =>
        link.addEventListener("click", (e) => {
          Utils.clear();
          pageTeam(teams.find((x) => x.TeamID == e.target.getAttribute("data-href")));
        })
      );
    }, 200);
  });
  Utils.checkHeightWindowBody();
}

export function pageTeam(team) {
  $("#searchbar>input").off("input");
  $("#searchbar>input").val("");
  Utils.setBodyBackground("linear-gradient(180deg, #" + team.PrimaryColor + ", #" + team.SecondaryColor + ", #" + team.TertiaryColor + ")");
  Utils.showHideSearchBar(true);
  Utils.changeNavbarRightButtons();
  var container = Utils.createElement("div", {
    class: "container",
  }, "");
  var row = Utils.createElement("div", {
    class: "row",
  }, "");
  team.players.forEach((player) => (row.innerHTML += Utils.drawPlayerCard(player)));
  container.appendChild(row);
  document.getElementById("page").appendChild(container);
  Utils.setMap(container, [team.City, team.Name]);
  var elementTitle = document.createElement("div");
  elementTitle.setAttribute("class", "parentTitle");
  elementTitle.innerHTML = getTitle_pageTeam(team.Name);
  container.insertBefore(elementTitle, container.childNodes[0]);
  $("#searchbar>input").on("input", function () {
    row.innerHTML = "";
    team.players
      .filter((player) => (player.FantasyDraftName ? player.FantasyDraftName : player.FirstName + " " + player.LastName).toLowerCase().includes(this.value.toLowerCase()))
      .forEach((player) => (row.innerHTML += Utils.drawPlayerCard(player)));
    setTimeout(() => {
      $(() =>
        $(".lazy").lazy({
          effect: "show",
          effectTime: 500,
          threshold: 0,
          placeholder: "../img/user.png",
        })
      );
    }, 50);
  });

  $(() =>
    $(".lazy").lazy({
      effect: "show",
      effectTime: 500,
      threshold: 0,
      placeholder: "../img/user.png",
    })
  );

  let bbCards = document.getElementsByClassName("baseball-card");
  let flippers = document.getElementsByClassName("flipper");
  let isFlipped = /flipped/gi;

  function flip(el) {
    el.className = isFlipped.test(el.className) ? "" : "flipped";
  }
  Array.from(bbCards).forEach((x) => x.addEventListener("click", () => flip(x.firstElementChild)));
  Utils.checkHeightWindowBody();
}

export function pageLogin() {
  Utils.clear();
  Utils.setBodyBackground("linear-gradient(#141e30, #243b55)");
  Utils.showHideSearchBar(false);
  Utils.changeNavbarRightButtons();
  document.getElementById("page").innerHTML += getBody_login();
  document.getElementById("submit").addEventListener("click", async (e) => {
    let loginValues = Array.from(document.querySelectorAll(".classlogin")).map((x) => x.value);
    let result = await login({
      user: loginValues[0],
      password: loginValues[1]
    });
    if (result == VALID_USER) new Router().load(loginValues[0] == "admin" ? loginValues[0] : "home");
  });
  Utils.checkHeightWindowBody();
}

export function pageRules() {
  Utils.setBodyBackground("linear-gradient(#141e30, #243b55)");
  Utils.showHideSearchBar(false);
  Utils.changeNavbarRightButtons();
  document.getElementById("page").innerHTML += '<iframe class="responsive-iframe" src="./pdf.html" frameBorder="0"></iframe>';
  Utils.checkHeightWindowBody();
}

export function pageContact() {
  Utils.setBodyBackground("linear-gradient(#141e30, #243b55)");
  Utils.showHideSearchBar(false);
  Utils.changeNavbarRightButtons();
  document.getElementById("page").innerHTML += getBody_pageContact();
  Utils.checkHeightWindowBody();
}

export function pageAbout() {
  Utils.setBodyBackground("linear-gradient(#141e30, #243b55)");
  Utils.showHideSearchBar(false);
  Utils.changeNavbarRightButtons();
  document.getElementById("page").innerHTML += getBody_about();
  Utils.checkHeightWindowBody();
}

export async function pageNews() {
  var json_news = await Utils.loadJSON("../json/News.json");
  var url = "https://randomuser.me/api/?results=" + JSON.parse(json_news).length;
  var users = [];
  await fetch(url).then((response) => response.json()).then((data) => (users = data.results));
  document.getElementById("page").innerHTML += getBody_pageNews(json_news, users);
  $(".dropdown").dropdown();
  document.querySelectorAll("label.rating__star").forEach(element => element.addEventListener("click", function (e) {
    var clicked_node = this;
    var nodes = document.querySelectorAll("label[data-id='" + clicked_node.dataset.id + "']");
    var clicked_index = parseInt(clicked_node.classList[1].charAt(clicked_node.classList[1].length - 1));
    for (let index = 0; index < 5; index++) {
      if ((index + 1) <= clicked_index) nodes[index].classList.replace("rating__star", "rating__filled-stars");
      else nodes[index].classList.replace("rating__filled-stars", "rating__star");
    }
  }));
  Utils.checkHeightWindowBody();
}

export async function pageLive() {
  var body = getBody_live();
  document.getElementById("page").innerHTML += body;
  document.getElementsByClassName("root")[0].innerHTML += loader();
  (function () {
    let app = {
      data: [], // data currently displayed
      newData: [], // data queued for display

      fetchInterval: 300000, // fetch new data every 5 minutes
      totalDuration: 0, // full animation in seconds
      matchDuration: 4, // controls animation speed (3 is fast, 5 is slow)
      matchCounts: [], // used to calc animation durations
      leagueLabels: [],

      isIdle: true, // fetch + animation running?
      isLoading: true, // controls loaded?

      stage: document.getElementById("stage"),
      leagueTunnel: document.getElementById("league-tunnel"),
      league: document.getElementById("league"),
      spinner: document.getElementById("spinner"),
      error: document.getElementById("error-message"),
      stopButton: document.getElementById("stop-button"),
      startButton: document.getElementById("start-button"),
      reloadButton: document.getElementById("reload-button"),

      init: () => {
        if (app.isLoading) {
          app.initControls();
        }
        if (app.isRunning) {
          clearInterval(app.isRunning);
        }
        app.isRunning = setInterval(app.fetch, app.fetchInterval);
        app.start();
        app.fetch();
      },

      fetch: () => {
        if (app && !app.isIdle && !app.newData.length) {
          app.newData = [{
            id: 5,
            name: "MLB",
            provider_value: "sr:tournament:109",
            matches: [{
                id: 20599,
                name: "Pittsburgh Pirates VS Philadelphia Phillies",
                schedule: "2019-08-27T23:05:00+00:00",
                home_abbreviation: "PHI",
                away_abbreviation: "PIT",
                odds: {
                  home_ml: -147,
                  favourite_team: "PHI",
                  spread: "1.5",
                  total: "10",
                  away_ml: "+125",
                },
              },
              {
                id: 20610,
                name: "Baltimore Orioles VS Washington Nationals",
                schedule: "2019-08-27T23:05:00+00:00",
                home_abbreviation: "WSH",
                away_abbreviation: "BAL",
                odds: {
                  total: "9.5",
                  home_ml: -333,
                  favourite_team: "WSH",
                  spread: "1.5",
                  away_ml: "+265",
                },
              },
              {
                id: 20601,
                name: "Chicago Cubs VS New York Mets",
                schedule: "2019-08-27T23:10:00+00:00",
                home_abbreviation: "NYM",
                away_abbreviation: "CHC",
                odds: {
                  total: "8",
                  away_ml: -116,
                  favourite_team: "CHC",
                  spread: "1.5",
                  home_ml: -105,
                },
              },
              {
                id: 20604,
                name: "Cleveland Indians VS Detroit Tigers",
                schedule: "2019-08-27T23:10:00+00:00",
                home_abbreviation: "DET",
                away_abbreviation: "CLE",
                odds: {
                  favourite_team: "CLE",
                  spread: "1.5",
                  total: "9.5",
                  home_ml: "+145",
                  away_ml: -167,
                },
              },
              {
                id: 20600,
                name: "Cincinnati Reds VS Miami Marlins",
                schedule: "2019-08-27T23:10:00+00:00",
                home_abbreviation: "MIA",
                away_abbreviation: "CIN",
                odds: {
                  total: "7",
                  away_ml: -161,
                  favourite_team: "CIN",
                  spread: "1.5",
                  home_ml: "+140",
                },
              },
            ],
          }, ];
          if (!app.data.length && !app.newData.length) {
            app.leagueTunnel.classList.add("empty");
          } else if (!app.data.length) {
            app.update();
            app.spinner.classList.add("disabled");
          }
          app.error.classList.remove("active");
        }
      },

      update: () => {
        if (app && app.newData.length) {
          app.league.innerHTML = "";
          app.stage.innerHTML = '<div id="slider"></div>';
          app.slider = document.getElementById("slider");
          app.slider.addEventListener("animationiteration", app.update);
          app.data = app.newData;
          // inject labels + matches
          app.data.forEach((league, i) => {
            const label = document.createElement("div");
            const matches = document.createElement("div");
            const template = document.getElementById("match");
            label.id = league.name + "-label";
            label.innerHTML = league.name;
            app.league.appendChild(label);
            matches.id = league.name;
            app.slider.appendChild(matches);
            app.matchCounts[i] = league.matches.length > 3 ? league.matches.length : league.matches.length + 1;
            league.matches.forEach((item) => {
              const match = document.importNode(template.content, true);
              const date = item.schedule ? new Date(item.schedule) : null;
              const day = date ?
                date.toLocaleString("en-us", {
                  weekday: "long",
                }) :
                null;
              if (date) {
                match.querySelector(".time-day").textContent = day.substr(0, day.match(/^(Tuesday|Thursday)$/) ? 4 : 3) || "";
                match.querySelector(".time-hour").textContent =
                  date.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  }) || "";
              }
              if (item.odds && item.odds.favourite_team) {
                match.querySelector(item.odds.favourite_team == item.home_abbreviation ? ".home .favorite" : ".away .favorite").classList.add("active");
              }
              match.querySelector(".home_name").textContent = item.home_abbreviation || "-";
              match.querySelector(".away_name").textContent = item.away_abbreviation || "-";
              match.querySelector(".home_ml").textContent = (item.odds && item.odds.home_ml) || "-";
              match.querySelector(".away_ml").textContent = (item.odds && item.odds.away_ml) || "-";
              match.querySelector(".spread").textContent = (item.odds && item.odds.spread) || "-";
              match.querySelector(".total").textContent = (item.odds && item.odds.total) || "-";
              matches.appendChild(match);
            });
          });
          // update slider + label animations
          app.totalDuration = app.matchCounts.reduce((a, b) => a + b);
          app.slider.style.animationDuration = app.totalDuration * app.matchDuration + "s";
          if (!app.animStyle) {
            app.animStyle = document.createElement("style");
            app.animStyle.type = "text/css";
            document.getElementsByTagName("head")[0].appendChild(app.animStyle);
          }
          app.leagueLabels = [];
          app.data.forEach((league, i) => {
            let label = document.getElementById(league.name + "-label");
            let slice = 0, // used to calc keyframes
              start = 0, // start point percentage
              end = 0; // end point percentage
            app.leagueLabels.push(label);
            if (i === 0) {
              // first label
              if (app.data.length === 1) {
                app.animStyle.innerHTML = `
                @keyframes ${league.name} {
                  0% { height: 100%; width: 100%; opacity: 1; }
                  100% { height: 100%; width: 100%; opacity: 1; }
                }`;
              } else {
                slice = app.matchCounts[i] / app.totalDuration;
                end = Math.round(slice * 100) - app.matchDuration;
                app.animStyle.innerHTML = `
                @keyframes ${league.name} {
                  0% { height: 100%; width: 100%; opacity: 1; }
                  ${end}% { height: 100%; width: 100%; opacity: 1 }
                  ${end + 1}% { height: 0; width: 0; opacity: 0; }
                  100% { height: 0; width: 0; opacity: 0; }
                }`;
              }
            } else if (i !== app.data.length - 1) {
              // middle label(s)
              let start = Math.round((app.matchCounts.slice(0, i).reduce((a, b) => a + b) / app.totalDuration) * 100) - app.matchDuration;
              let end = Math.round(((app.matchCounts.slice(0, i).reduce((a, b) => a + b) + app.matchCounts[i]) / app.totalDuration) * 100) - app.matchDuration;
              app.animStyle.innerHTML =
                app.animStyle.innerHTML +
                `
              @keyframes ${league.name} {
                0% { height: 0; width: 0; opacity: 0; }
                ${start}% { height: 0; width: 0; opacity: 0; }
                ${start + 1}% { height: 100%; width: 100%; opacity: 1 }
                ${end}% { height: 100%; width: 100%; opacity: 1 }
                ${end + 1}% { height: 0; width: 0; opacity: 0; }
                100% { height: 0; width: 0; opacity: 0; }
              }`;
            } else {
              // last label
              app.matchCounts.pop();
              slice = app.matchCounts.reduce((a, b) => a + b) / app.totalDuration;
              start = Math.round(slice * 100) - app.matchDuration;
              app.animStyle.innerHTML =
                app.animStyle.innerHTML +
                `
              @keyframes ${league.name} {
                0% { height: 0; width: 0; opacity: 0; }
                ${start}% { height: 0; width: 0; opacity: 0; }
                ${start + 1}% { height: 100%; width: 100%; opacity: 1 }
                99% { height: 100%; width: 100%; opacity: 1 }
                100% { height: 0; width: 0; opacity: 0; }
              }`;
            }
            label.style.animationName = league.name;
            label.style.animationDuration = app.totalDuration * app.matchDuration + "s";
          });
          app.newData = [];
          app.matchCounts = [];
          app.leagueTunnel.classList.remove("empty");
        }
      },

      initControls: () => {
        app.stopButton.onclick = app.stop;
        app.startButton.onclick = app.start;
        app.reloadButton.onclick = app.reload;
        app.isLoading = false;
      },

      stop: () => {
        if (app) {
          app.isIdle = true;
          app.startButton.removeAttribute("disabled");
          app.stopButton.setAttribute("disabled", true);
          app.slider ? app.slider.classList.add("paused") : null;
          app.leagueLabels.forEach((label) => label.classList.add("paused"));
        }
      },

      start: () => {
        if (app) {
          app.isIdle = false;
          app.stopButton.removeAttribute("disabled");
          app.startButton.setAttribute("disabled", true);
          app.slider ? app.slider.classList.remove("paused") : null;
          app.leagueLabels.forEach((label) => label.classList.remove("paused"));
        }
      },

      reload: () => {
        if (app) {
          app.data = [];
          app.newData = [];
          app.stage.innerHTML = "";
          app.init();
        }
      },
    };

    app.init();
  })();
  var url = "https://api.sportsdata.io/v3/mlb/scores/json/AreAnyGamesInProgress?key=";
  await getKey(KEY_SPORTSIO).then((value) => (url += value));
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        if (data) console.log(data);
        else document.getElementsByClassName("root")[0].innerHTML += `<div><div id="noMatches">No matches in progress</div></div>`;
        Utils.remove_loader();
      }, 1500);
    });
  Utils.checkHeightWindowBody();
}


export function pageProfile() {
  Utils.clear();
  Utils.setBodyBackground("linear-gradient(#141e30, #243b55)");
  Utils.showHideSearchBar(false);
  Utils.changeNavbarRightButtons();
  document.getElementById("page").innerHTML = getBody_pageProfile(getCookie("user"));
  Utils.checkHeightWindowBody();
}



export function pageAdmin() { //llevar javascript que no val

  //https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.min.css
  // console.log(await User.fromJson(localStorage.getItem("user")));

  //console.log(parseJwt(JSON.parse(localStorage['user']).token));
  Utils.clear();
  Utils.hideDefaultNavbar(true);
  Utils.changeScrollBar(true)
  document.getElementById("page").innerHTML = getBody_AdminPage();
  document.getElementById('adminLogout').addEventListener("click", (e) => new Router().load(e.target.getAttribute("data-page")));
  Utils.checkHeightWindowBody();


  $(function () {

    'use strict';

    let contents = $('#contents');


    // Start chart
    var chart = document.getElementById('myChart');
    Chart.defaults.global.animation.duration = 2000; // Animation duration
    Chart.defaults.global.title.display = false; // Remove title
    Chart.defaults.global.title.text = "Chart"; // Title
    Chart.defaults.global.title.position = 'bottom'; // Title position
    Chart.defaults.global.defaultFontColor = '#999'; // Font color
    Chart.defaults.global.defaultFontSize = 10; // Font size for every label

    // Chart.defaults.global.tooltips.backgroundColor = '#FFF'; // Tooltips background color
    Chart.defaults.global.tooltips.borderColor = 'white'; // Tooltips border color
    Chart.defaults.global.legend.labels.padding = 0;
    Chart.defaults.scale.ticks.beginAtZero = true;
    Chart.defaults.scale.gridLines.zeroLineColor = 'rgba(255, 255, 255, 0.1)';
    Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0.02)';
    Chart.defaults.global.legend.display = false;

    var myChart = new Chart(chart, {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", 'Jul'],
        datasets: [{
          label: "Lost",
          fill: false,
          lineTension: 0,
          data: [45, 25, 40, 20, 45, 20],
          pointBorderColor: "#4bc0c0",
          borderColor: '#4bc0c0',
          borderWidth: 2,
          showLine: true,
        }, {
          label: "Succes",
          fill: false,
          lineTension: 0,
          startAngle: 2,
          data: [20, 40, 20, 45, 25, 60],
          // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
          backgroundColor: "transparent",
          pointBorderColor: "#ff6384",
          borderColor: '#ff6384',
          borderWidth: 2,
          showLine: true,
        }]
      },
    });

    //  Chart ( 2 )
    var Chart2 = document.getElementById('myChart2').getContext('2d');
    var chart = new Chart(Chart2, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", 'test', 'test', 'test', 'test'],
        datasets: [{
          label: "My First dataset",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 79, 116)',
          borderWidth: 2,
          pointBorderColor: false,
          data: [5, 10, 5, 8, 20, 30, 20, 10],
          fill: false,
          lineTension: .4,
        }, {
          label: "Month",
          fill: false,
          lineTension: .4,
          startAngle: 2,
          data: [20, 14, 20, 25, 10, 15, 25, 10],
          // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
          backgroundColor: "transparent",
          pointBorderColor: "#4bc0c0",
          borderColor: '#4bc0c0',
          borderWidth: 2,
          showLine: true,
        }, {
          label: "Month",
          fill: false,
          lineTension: .4,
          startAngle: 2,
          data: [40, 20, 5, 10, 30, 15, 15, 10],
          // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
          backgroundColor: "transparent",
          pointBorderColor: "#ffcd56",
          borderColor: '#ffcd56',
          borderWidth: 2,
          showLine: true,
        }]
      },

      // Configuration options
      options: {
        title: {
          display: false
        }
      }
    });

    var chart = document.getElementById('chart3');
    var myChart = new Chart(chart, {
      type: 'line',
      data: {
        labels: ["One", "Two", "Three", "Four", "Five", 'Six', "Seven", "Eight"],
        datasets: [{
            label: "Lost",
            fill: false,
            lineTension: .5,
            pointBorderColor: "transparent",
            pointColor: "white",
            borderColor: '#d9534f',
            borderWidth: 0,
            showLine: true,
            data: [0, 40, 10, 30, 10, 20, 15, 20],
            pointBackgroundColor: 'transparent',
          }, {
            label: "Lost",
            fill: false,
            lineTension: .5,
            pointColor: "white",
            borderColor: '#5cb85c',
            borderWidth: 0,
            showLine: true,
            data: [40, 0, 20, 10, 25, 15, 30, 0],
            pointBackgroundColor: 'transparent',
          },
          {
            label: "Lost",
            fill: false,
            lineTension: .5,
            pointColor: "white",
            borderColor: '#f0ad4e',
            borderWidth: 0,
            showLine: true,
            data: [10, 40, 20, 5, 35, 15, 35, 0],
            pointBackgroundColor: 'transparent',
          },
          {
            label: "Lost",
            fill: false,
            lineTension: .5,
            pointColor: "white",
            borderColor: '#337ab7',
            borderWidth: 0,
            showLine: true,
            data: [0, 30, 10, 25, 10, 40, 20, 0],
            pointBackgroundColor: 'transparent',
          }
        ]
      },
    });

  });
}

export function pageRegister() {
  Utils.clear();
  Utils.setBodyBackground("linear-gradient(#141e30, #243b55)");
  Utils.showHideSearchBar(false);
  Utils.changeNavbarRightButtons();
  document.getElementById('page').innerHTML = getBody_RegisterPage();
  Utils.checkHeightWindowBody();

  $('.form').find('input').on('keyup blur focus', function (e) {
    let $this = $(this),
      label = $this.prev('label');
    if (e.type === 'keyup') {
      if ($this.val() === '') label.removeClass('active highlight');
      else label.addClass('active highlight');
    } else if (e.type === 'blur') {
      if ($this.val() === '') label.removeClass('active highlight');
      else label.removeClass('highlight');
    } else if (e.type === 'focus') {
      if ($this.val() === '') label.removeClass('highlight');
      else if ($this.val() !== '') label.addClass('highlight');
    }
  });

  $('.tab a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    let target = $(this).attr('href');
    $('.tab-content > div').not(target).hide();
    $(target).fadeIn(600);
  });

  document.querySelector("#registerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    let form = event.target;
    let field_fname = form.first_name;
    let field_l_name = form.last_name;
    let field_email = form.email;
    let field_password = form.password;
    let field_error = document.getElementsByClassName('field-error')[0];
    field_error.innerHTML = "";

    let data = new FormData(event.target);
    let data_error = [];

    let f_name = data.get("first_name");
    let l_name = data.get("last_name");
    let email = data.get("email").toLowerCase();
    let password = data.get("password");

    let valid_f_name = checkFormField(REGEX_REGISTER_NAME, f_name);
    field_fname.classList.toggle("valid", valid_f_name);
    field_fname.classList.toggle("error", !valid_f_name);
    let valid_l_name = checkFormField(REGEX_REGISTER_NAME, l_name);
    field_l_name.classList.toggle("valid", valid_l_name);
    field_l_name.classList.toggle("error", !valid_l_name);
    let valid_email = checkFormField(REGEX_REGISTER_EMAIL, email);
    field_email.classList.toggle("valid", valid_email);
    field_email.classList.toggle("error", !valid_email);
    let valid_password = checkFormField(REGEX_REGISTER_PASSWORD, password);
    field_password.classList.toggle("valid", valid_password);
    field_password.classList.toggle("error", !valid_password);

    !valid_f_name ? data_error.push(REGEX_REGISTER_NAME_ERROR) : "";
    !valid_l_name ? data_error.push(REGEX_REGISTER_LNAME_ERROR) : "";
    !valid_email ? data_error.push(REGEX_REGISTER_EMAIL_ERROR) : "";
    !valid_password ? data_error.push(REGEX_REGISTER_PASSWORD_ERROR) : "";

    data_error.forEach(element => {
      let newElement = document.createElement("label");
      newElement.appendChild(document.createTextNode(element));
      field_error.appendChild(newElement);
    });
    data_error.length == 0 ? (() => {
      register(f_name, password);
      new Router().load("home");
    })() : "";
    Utils.checkHeightWindowBody();
  });
}


export async function pageBets() {
  Utils.clear();
  Utils.setBodyBackground("linear-gradient(#141e30, #243b55)");
  Utils.showHideSearchBar(false);
  Utils.changeNavbarRightButtons();
  document.getElementById('content').classList.add("wh100");
  document.getElementById('page').classList.add("wh100");
  document.getElementById('page').innerHTML = tournament();;
  var teams = [];
  await Utils.loadJSON("../json/teams_players.json").then((response) => (teams = JSON.parse(response)));


  Utils.checkHeightWindowBody();
}