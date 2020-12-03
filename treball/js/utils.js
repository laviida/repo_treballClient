import { getCookie } from "./modules/cookies.js";
import { playerCard, teamCard, inlineNews } from "./htmlData.js";
import { isLogged } from "./auth.js";

export function loadJSON(name) {
  return new Promise((resolve, reject) => {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", name, true);
    xobj.onreadystatechange = () => {
      if (xobj.readyState == 4 && xobj.status == "200") resolve(xobj.responseText);
    };
    xobj.send(null);
  });
}

export function createElement(name, props, children) {
  const element = document.createElement(name);
  if (children instanceof HTMLElement) element.appendChild(children);
  else if (Array.isArray(children)) children.forEach(child => element.appendChild(child));
  else element.appendChild(document.createTextNode(children));
  if (typeof props === 'object' && props) Object.entries(props).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

export function clear() {
  var page = document.getElementById("page");
  !page ? page = document.getElementById("pagelogin") : page;
  page.innerHTML = "";
}

export function showHideSearchBar(show) {
  document.getElementById('searchbar').classList.toggle("d-none", !show);
}

export function changeNavbarRightButtons() {
  var pL = document.getElementById('parentLogin');
  var pR = document.getElementById('parentRegister');
  pL.innerHTML = "";
  pR.innerHTML = "";
  if (isLogged()) {
    pL.innerHTML = '<a class="nav-link" disabled data-page="profile"><i class="fas fa-user"></i>&nbsp;&nbsp;Hola, <span class="nav-username">' + getCookie("user") + '</span></a>';
    pR.innerHTML = '<a class="nav-link" data-page="logout"><i class="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Log out</a>';
  } else {
    pL.innerHTML = '<a class="nav-link" data-page="login"><i class="fas fa-sign-in-alt"></i>&nbsp;&nbsp;Login</a>';
    pR.innerHTML = '<a class="nav-link" data-page="register"><i class="fas fa-user-plus"></i>&nbsp;&nbsp;Register</a>';
  }
}

export function drawTeam(team) {
  return teamCard(team);
}

export function drawPlayerCard(player) {
  return playerCard(player);
}

export function setCounter() {
  var countDown1 = new CountDownObject();
  countDown1.TIME_ZONE = +4, // your time zone (-12 ... +14)
    // Your date and time
    countDown1.SET_YOUR_SEC = 0,
    countDown1.SET_YOUR_MIN = 0,
    countDown1.SET_YOUR_HOUR = 0,
    countDown1.SET_YOUR_DAY = 1,
    countDown1.SET_YOUR_MONTH = 4,
    countDown1.SET_YOUR_YEAR = 2021,
    countDown1.NUM_OF_ELEMENTS = 8, // number of flip-elements(from 1 to 9)
    countDown1.TIME_ANIMATION = 950, // time of flip animation in milliseconds(from 50 to 950)
    countDown1.BACK_COLOR = "#f07000", // flip-element back color
    countDown1.DIGITS_COLOR = "#f0d070", // digits color on flip-elements
    countDown1.TEXT_COLOR = "#e0e0e0", // text color under flip elements(seconds, minutes and etc.)
    countDown1.IS_DYNAMIC_COLOR = true, // back color will vary(true or false)
    countDown1.CANVAS_NAME = "CountDownCanvas"; //canvas name in html-code
  countDown1.Start(document.getElementById("page")); //start countdown
}

export function setMap(container, keywords) {
  var mapElement = document.createElement("div");
  mapElement.setAttribute("id", "mapid");
  container.insertBefore(mapElement, container.childNodes[0]);

  var mymap = L.map('mapid').setView([0, 0], 2);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2VyZ2ljbiIsImEiOiJja2hjMnRsbWkwNXJ0MnNta25nYjV0M3Y2In0.0PgDzmHjsMxpo_JKaxrZOg'
  }).addTo(mymap);

  var query_addr = "United States, " + keywords.join(", ");
  // Get the provider, in this case the OpenStreetMap (OSM) provider.
  const provider = new window.GeoSearch.OpenStreetMapProvider()
  // Query for the address
  var query_promise = provider.search({
    query: query_addr
  });
  // Wait until we have an answer on the Promise
  query_promise.then(value => {
    for (var i = 0; i < value.length; i++) {
      // Success!
      var x_coor = value[i].x;
      var y_coor = value[i].y;
      var label = value[i].label;
      // Create a marker for the found coordinates
      var marker = L.marker([y_coor, x_coor]).addTo(mymap) // CAREFULL!!! The first position corresponds to the lat (y) and the second to the lon (x)
      // Add a popup to said marker with the address found by geosearch (not the one from the user)
      marker.bindPopup("<b>Found location</b><br>" + label).openPopup();
    };
  }, reason => {
    console.log(reason); // Error!
  });
}

export function setBodyBackground(background) {
  document.body.style.backgroundImage = background;
}

export function scrollButton(container) {
  var html = `<div id="round" class="round">
                      <div id="cta">
                          <span class="arrow primera next "></span>
                          <span class="arrow segunda next "></span>
                      </div>
                  </div>`;
  container.innerHTML += html;
  setTimeout(() => {
    $(window).scroll((e) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) $('.round').toggleClass('fadeIn');
      if ($('.round').hasClass("fadeIn") && (window.innerHeight + window.scrollY) <= document.body.offsetHeight - 200) $('.round').toggleClass('fadeIn');
    });
    $('.round').click(
      function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.arrow').toggleClass('bounceAlpha');
        window.scrollTo(0, 0);
      });
  }, 50);
}

export function drawInlineNews(news) {
  return inlineNews(news);
}

export function remove_loader() {
  document.getElementsByClassName('showbox')[0].remove();
}

export function hideDefaultNavbar(show) {
  document.getElementById('navbar').classList.toggle("d-none", show);
}

export function checkHeightWindowBody(relative = null) {
  console.table(screen.height, window.innerHeight, document.getElementById('content').offsetHeight);
  let func = () => document.getElementsByTagName('footer')[0].classList.toggle("footerToBottom", screen.height > (150 + document.getElementById('content').offsetHeight));
  relative ? func = () => document.getElementsByTagName('footer')[0].classList.toggle("footerToBottom", !relative, 50) : "";
  setTimeout(func, 50);
}

export function changeScrollBar(show) {
  show ?
    document.body.innerHTML += `<style id="changedScrollBar">::-webkit-scrollbar {
    background: transparent;
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }</style>`: document.getElementById("changedScrollBar").remove();
}