export {
  getBody_home, getTitle_pageTeam, getBody_login, getBody_pageContact, getBody_about, getBody_live,
  getBody_pageNews, getBody_pageProfile, loader, playerCard, teamCard, inlineNews, getBody_AdminPage, getBody_RegisterPage,
  tournament, tournament_bracket, quarterFinals, semiFinals, bronzeFinal, goldFinal
};

function getBody_home() {
  return `<div class="parallax">
    <img class="mlbtitle" src="../img/MLB_title.png">
    <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
</div>
<div class="newrow">Major League Baseball (MLB), organización de béisbol profesional de América del Norte que se formó en 1903 con la fusión de las dos ligas de béisbol profesional de Estados Unidos: la Liga Nacional (NL) y la Liga Americana (AL).</div>
<div class="parallax"></div>
<div class="newrow">La MLB está formada por 30 equipos: 29 en los Estados Unidos y uno en Canadá. Los equipos juegan 162 partidos cada temporada y cinco equipos de cada liga avanzan a un campeonato de postemporada entre cuatro equipos, el cual culmina con la Serie Mundial.</div>
<div class="parallax"></div>`;
}

function getTitle_pageTeam(teamName) {
  return `<svg>
    <filter id='money'>
      <feMorphology in='SourceGraphic' operator='dilate' radius='2' result='expand'/>
  
      <feOffset in='expand' dx='1' dy='1' result='shadow_1'/>
      <feOffset in='expand' dx='2' dy='2' result='shadow_2'/>
      <feOffset in='expand' dx='3' dy='3' result='shadow_3'/>
      <feOffset in='expand' dx='4' dy='4' result='shadow_4'/>
      <feOffset in='expand' dx='5' dy='5' result='shadow_5'/>
      <feOffset in='expand' dx='6' dy='6' result='shadow_6'/>
      <feOffset in='expand' dx='7' dy='7' result='shadow_7'/>
  
      <feMerge result='shadow'>
        <feMergeNode in='expand'/>
        <feMergeNode in='shadow_1'/>
        <feMergeNode in='shadow_2'/>
        <feMergeNode in='shadow_3'/>
        <feMergeNode in='shadow_4'/>
        <feMergeNode in='shadow_5'/>
        <feMergeNode in='shadow_6'/>
        <feMergeNode in='shadow_7'/>
      </feMerge>
  
      <feFlood flood-color='#ebe7e0'/>
      <feComposite in2='shadow' operator='in' result='shadow'/>
  
      <feMorphology in='shadow' operator='dilate' radius='1' result='border'/>
      <feFlood flood-color='#35322a' result='border_color'/>
      <feComposite in2='border' operator='in' result='border'/>
  
      <feOffset in='border' dx='1' dy='1' result='secondShadow_1'/>
      <feOffset in='border' dx='2' dy='2' result='secondShadow_2'/>
      <feOffset in='border' dx='3' dy='3' result='secondShadow_3'/>
      <feOffset in='border' dx='4' dy='4' result='secondShadow_4'/>
      <feOffset in='border' dx='5' dy='5' result='secondShadow_5'/>
      <feOffset in='border' dx='6' dy='6' result='secondShadow_6'/>
      <feOffset in='border' dx='7' dy='7' result='secondShadow_7'/>
      <feOffset in='border' dx='8' dy='8' result='secondShadow_8'/>
      <feOffset in='border' dx='9' dy='9' result='secondShadow_9'/>
      <feOffset in='border' dx='10' dy='10' result='secondShadow_10'/>
      <feOffset in='border' dx='11' dy='11' result='secondShadow_11'/>
  
      <feMerge result='secondShadow'>
        <feMergeNode in='border'/>
        <feMergeNode in='secondShadow_1'/>
        <feMergeNode in='secondShadow_2'/>
        <feMergeNode in='secondShadow_3'/>
        <feMergeNode in='secondShadow_4'/>
        <feMergeNode in='secondShadow_5'/>
        <feMergeNode in='secondShadow_6'/>
        <feMergeNode in='secondShadow_7'/>
        <feMergeNode in='secondShadow_8'/>
        <feMergeNode in='secondShadow_9'/>
        <feMergeNode in='secondShadow_10'/>
        <feMergeNode in='secondShadow_11'/>
      </feMerge>
  
      <feImage x='0' y='0' width='600' height='200' xlink:href='https://s3-us-west-2.amazonaws.com/s.cdpn.io/78779/stripes.svg'/>
      <feComposite in2='secondShadow' operator='in' result='secondShadow'/>
  
      <feMerge>
        <feMergeNode in='secondShadow'/>
        <feMergeNode in='border'/>
        <feMergeNode in='shadow'/>
        <feMergeNode in='SourceGraphic'/>
      </feMerge>
    </filter>
  
    <text dominant-baseline='middle' text-anchor='middle' x='50%' y='50%'>
      ` + teamName + `
    </text>
  </svg>`;
}

function getBody_login() {
  return `<div class="login-box">
    <h2>Login</h2>
    <form>
      <div class="user-box">
        <input class="classlogin" type="text" name="user" required>
        <label>Username</label>
      </div>
      <div class="user-box">
        <input class="classlogin" type="password" name="password" required>
        <label>Password</label>
      </div>
      <a id="submit">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a>
    </form>
  </div>`;
}

function getBody_pageContact() {
  return `<div class="contact">
    <div class="row">
      <div class="col-md-3">
        <div class="contact-info">
          <h2>Contact Us</h2>
          <h4>We would love to hear from you !</h4>
        </div>
      </div>
      <div class="col-md-9">
        <div class="contact-form">
          <div class="form-group">
            <label class="control-label col-sm-2" for="fname">First Name:</label>
            <div class="col-sm-10">          
            <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="lname">Last Name:</label>
            <div class="col-sm-10">          
            <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Email:</label>
            <div class="col-sm-10">
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="comment">Comment:</label>
            <div class="col-sm-10">
            <textarea class="form-control" rows="5" id="comment"></textarea>
            </div>
          </div>
          <div class="form-group">        
            <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  `;
}

function getBody_about() {
  return `
    <div class="bg-light">
      <div class="container py-5">
        <div class="row h-100 align-items-center py-5">
          <div class="col-lg-6">
            <h1 class="display-4">About us page</h1>
            <p class="lead text-muted mb-0">Create a minimal about us page using Bootstrap 4.</p>
            <p class="lead text-muted">Snippet by <a href="https://bootstrapious.com/snippets" class="text-muted"> 
                        <u>Bootstrapious</u></a>
            </p>
          </div>
          <div class="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" class="img-fluid"></div>
        </div>
      </div>
    </div>
    
    <div class="bg-white py-5">
      <div class="container py-5">
        <div class="row align-items-center mb-5">
          <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x pmb-3 text-primary"></i>
            <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
            <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
          </div>
          <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" class="img-fluid mb-4 mb-lg-0"></div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-5 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg" alt="" class="img-fluid mb-4 mb-lg-0"></div>
          <div class="col-lg-6"><i class="fa fa-leaf fa-2x pmb-3 text-primary"></i>
            <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
            <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-light py-5">
      <div class="container py-5">
        <div class="row mb-4">
          <div class="col-lg-5">
            <h2 class="display-4 font-weight-light">Our team</h2>
            <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
    
        <div class="row text-center">
          <!-- Team item-->
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834132/avatar-4_ozhrib.png" alt="" width="100" class="img-fluid rounded-circle pmb-3 img-thumbnail shadow-sm">
              <h5 class="mb-0">Manuella Nevoresky</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <!-- End-->
    
          <!-- Team item-->
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle pmb-3 img-thumbnail shadow-sm">
              <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <!-- End-->
    
          <!-- Team item-->
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png" alt="" width="100" class="img-fluid rounded-circle pmb-3 img-thumbnail shadow-sm">
              <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <!-- End-->
    
          <!-- Team item-->
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png" alt="" width="100" class="img-fluid rounded-circle pmb-3 img-thumbnail shadow-sm">
              <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <!-- End-->
    
        </div>
      </div>
    </div>`;
}

function getBody_live() {
  return `<div class="root">
    <div class="ticker">
      <div class="tunnel" id="league-tunnel">
        <div id="league"></div>
        <div id="spinner"></div>
        <div id="empty">No Active Leagues Found</div>
      </div>
      <div id="stage"></div>
      <div class="tunnel" id="logo-tunnel">
        <div id="logo"></div>
      </div>
    </div>
    <div id="error-message">Service Connection Error: Hang tight and we'll keep trying to reconnect...</div>
    <div class="control" style="display:none;">
      <button id="stop-button">Pause</button>
      <button id="start-button" disabled>Play</button>
      <button id="reload-button">Reload</button>
    </div>
  </div>
  <template id="match">
    <div class="match">
      <div class="teams">
        <div class="home">
          <div class="favorite">&starf;</div>
          <div class="home_name"></div>
        </div>
        <div class="away">
          <div class="favorite">&starf;</div>
          <div class="away_name"></div>
        </div>
      </div>
      <div class="info">
        <div>
          <div class="title">moneyline</div>
          <div class="moneyline">
            <div class="home_ml"></div>
            <div class="away_ml"></div>
          </div>
        </div>
        <div>
          <div class="title">spread</div>
          <div class="spread"></div>
        </div>
        <div>
          <div class="title">total</div>
          <div class="total"></div>
        </div>
      </div>
      <div class="time">
        <span class="time-day"></span>
        <small>@</small>
        <span class="time-hour"></span>
      </div>
    </div>
  </template>
  <noscript>Please enable JavaScript to continue using this application.</noscript>
  <script src="app.js"></script>`;
}

function getBody_pageNews(json_news, users) {
  var body = `<div id="wrapper">
    <div class="feed">`;
  Array.from(JSON.parse(json_news)).forEach((card, idx) => {
    body += `<div class="feed-item">
            <div class="icon-holder"><span>` + users[idx].name.first + " " + users[idx].name.last + `</span><div class="icon" style="  background-image: url(` +
      users[idx].picture.large +
      `);"></div>	<div class="rating">
          <div class="rating__bar">
            <label class="rating__star rating__star--1" data-id="` + card.NewsID + `" for="rating-star-1" role="button" aria-label="Uma estrela"></label>
            <input type="checkbox" id="rating-star-1" class="rating__checkbox" name="rating-star-1" hidden />
            <label class="rating__star rating__star--2" data-id="` + card.NewsID + `" for="rating-star-2" role="button" aria-label="Uma estrela"></label>
            <input type="checkbox" id="rating-star-2" class="rating__checkbox" name="rating-star-2" hidden />
            <label class="rating__star rating__star--3" data-id="` + card.NewsID + `" for="rating-star-3" role="button" aria-label="Uma estrela" ></label>
            <input type="checkbox" id="rating-star-3" class="rating__checkbox" name="rating-star-3" hidden/>
            <label class="rating__star rating__star--4" data-id="` + card.NewsID + `" for="rating-star-4" role="button" aria-label="Uma estrela"></label>
            <input type="checkbox" id="rating-star-4" class="rating__checkbox" name="rating-star-4" hidden />
            <label class="rating__star rating__star--5" data-id="` + card.NewsID + `" for="rating-star-5" role="button" aria-label="Uma estrela"></label>
            <input type="checkbox" id="rating-star-5" class="rating__checkbox" name="rating-star-5" hidden/>
          </div>
        </div></div>
            <div class="text-holder col-3-5">
              <div class="feed-title">` +
      card.Title +
      `</div>
              <div class="feed-description">` +
      card.Content +
      `</div>
            </div><!--End of Text Holder-->         
           <div class="post-options-holder">
           <div class='ui right pointing dropdown'>
           <div class= "tools"> 
           <i class="fa fa-ellipsis-v" id="postsettings"></i>
         </div><!--End Tools-->
            <div class='menu'>
              <div class='item'>C</div>
              <div class='item'>C++</div>
              <div class='item'>C#</div>
              <div class='item'>Java</div>
              <div class='item'>JavaScript</div>
            </div>
          </div>
            </div><!--End Post Options Holder --></div>`;
  });
  body += "</div>";
  return body;
}

function getBody_pageProfile(username) {
  return `<div class="container">
    <div class="main-body">
    
          <!-- Breadcrumb -->
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item"><a href="javascript:void(0)">` + (username ? username : "User") + `</a></li>
              <li class="breadcrumb-item active" aria-current="page">Profile</li>
            </ol>
          </nav>
          <!-- /Breadcrumb -->
    
          <div class="row gutters-sm">
            <div class="col-md-4 pmb-3">
              <div class="pcard">
                <div class="pcard-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">
                      <h4>John Doe</h4>
                      <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary">Message</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pcard mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <span class="text-secondary">https://bootdey.com</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span class="text-secondary">@bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="pcard pmb-3">
                <div class="pcard-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Kenneth Valdez
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      fip@jukmuh.al
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (239) 816-9029
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (320) 380-4539
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="pmb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Bay Area, San Francisco, CA
                    </div>
                  </div>
                </div>
              </div>
              <div class="row gutters-sm">
                <div class="col-sm-6 pmb-3">
                  <div class="pcard ph-100">
                    <div class="pcard-body">
                      <h6 class="d-flex align-items-center pmb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                      <small>Web Design</small>
                      <div class="progress pmb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Website Markup</small>
                      <div class="progress pmb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>One Page</small>
                      <div class="progress pmb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Mobile Template</small>
                      <div class="progress pmb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Backend API</small>
                      <div class="progress pmb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 pmb-3">
                  <div class="pcard h-100">
                    <div class="pcard-body">
                      <h6 class="d-flex align-items-center pmb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                      <small>Web Design</small>
                      <div class="progress pmb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Website Markup</small>
                      <div class="progress pmb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>One Page</small>
                      <div class="progress pmb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Mobile Template</small>
                      <div class="progress pmb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Backend API</small>
                      <div class="progress pmb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>`
}

function loader() {
  return `<div class="showbox">
    <div class="loader">
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
      </svg>
    </div>
  </div>`;
}

function playerCard(player) {
  var url = "https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/10012020/" + player.YahooPlayerID + ".png";
  return `<div data-card-id='` + player.PlayerID + `' class='baseball-card'>
    <article data-flipper-id='` + player.PlayerID + `' class='flipper'>
      <section class='front'>
        <address class='player-name'>` + player.FantasyDraftName + `</address>
        <div class='player-photo lazy' data-src="` + url + `" role='image'></div>
        <p class="position">` + player.Position + `</p>
        <p class='team'>` + player.Team + `</p>
        <svg class="team-banner" width="37.157894mm" height="22.345482mm" viewBox="0 0 131.66183 79.176903" id="teambanner">
          <g transform="translate(20.245031,15.912448)" style="display:inline">
            <g id="g4219">
              <path id="path3352-3" d="m -20.0734,32.05221 8,17 6.00241,0.92417 -1.50241,13.07583 30.09262,-9.44365 41.06468,-9.69713 c 0,0 17.45114,-4.58631 26.85574,-7.11134 16.47986,-4.42466 20.25842,-13.83519 20.38342,-18.21019 1.0625,-2.71875 -0.11677,-30.783301 -0.11677,-30.783301 -0.003,-0.726468 0.0834,-2.6126 -1.41356,-3.46427 l -0.0715,3.2794 c -1.72517,7.64159 -8.32748,14.570481 -22.29466,21.680481 -8.10983,4.12832 -107,22.75 -107,22.75 z"
              style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.30000001;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
              <path id="path3352" d="m -19.51256,25.19052 8.25,16.75 -3.75,16 c 0,0 30.07129,-8.36569 41.84986,-10.51311 18.2677,-3.33049 50.61126,-9.23206 63.57692,-12.85301 10.37003,-3.51256 18.66941,-9.57106 18.71967,-18.22487 l 0.34283,-28.776968 c -0.75,3.9375 -9.14171,12.153808 -20.73928,14.617958 z"
              style="fill:#64b7e0;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            </g>
          </g>
        </svg>
        <svg class="position-banner" id="positionBanner" width="69.49556" height="65.326904">
          <g id="layer1" transform="translate(-185.6569,-223.70495)">
            <g id="g4232" transform="translate(50,38)">
              <g id="g4236" transform="translate(-81,-106)">
                <path id="path4151-9" d="m 216.76692,352.85095 c -0.82075,-7.07106 4.02479,-29.46399 4.02479,-29.46399 0,0 5.37298,-12.27344 14.04754,-13.81608 l 45.1359,-8.02677 c 0,0 2.09043,-2.89688 5.69975,-5.1466 l -2.93152,18.56621 2.42759,5.54867 -53.53502,14.48708 c -1.625,1.25 -9.91711,3.59208 -11.78959,11.9696 0,0 -0.10004,4.09271 0.3205,10.06278 l -1.93646,-2.1652"
                style="fill:#000000;fill-rule:evenodd" />
                <path id="path4151" d="m 216.9069,350.06389 0.0217,-26.79097 c 0,0 -0.94157,-12.16645 12.23214,-15.44643 l 43.75,-10.89286 c 0,0 6.78572,-1.87499 10.08929,-4.55357 l -3.75,14.28571 6.51786,10.71429 -54.92858,15.51786 c 0,0 -8.18445,3.31242 -11.57142,11.96428 l -1.44322,3.68664 -0.81888,2.47806"
                style="fill:#f15248;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
              </g>
            </g>
          </g>
        </svg>
           </section>
      <section class='back'>
        <header>
          <p class='card-number'>50
            <svg id='stitching' width="40" height="11" viewBox="0 0 87 22">
  
              <path style="fill:rgba(0,0,0,0.75)" d="m 72.939882,20.915961 c -0.395728,-1.03125 -0.17466,-1.875 0.491264,-1.875 0.665923,0 1.210769,-0.84375 1.210769,-1.875 0,-2.328779 -2.176226,-2.328779 -6.25,0 -4.073774,2.328779 -6.25,2.328779 -6.25,0 0,-1.03125 0.595697,-1.875 1.323771,-1.875 0.728074,0 0.976128,-0.5625 0.551229,-1.25 -1.409021,-2.279845 -6.065519,-1.295684 -9.517526,2.011549 -3.778707,3.620231 -6.93969,3.129108 -4.860854,-0.755233 1.73653,-3.244737 1.593136,-3.756316 -1.052885,-3.756316 -1.268446,0 -3.324378,1.125 -4.568735,2.5 -1.244358,1.375 -3.056944,2.5 -4.027969,2.5 -1.196656,0 -1.509845,-0.805499 -0.972031,-2.5 1.096892,-3.456003 -1.353984,-3.19412 -6.444511,0.688614 l -4.180489,3.188615 0,-3.188615 c 0,-2.00099 -0.698359,-3.188614 -1.875,-3.188614 -2.108854,0 -6.875,4.33286 -6.875,6.25 0,0.6875 -0.84375,1.25 -1.875,1.25 -1.03125,0 -1.875,-0.84375 -1.875,-1.875 0,-2.840046 -4.600359,-2.243176 -6.788451,0.880762 l -1.9302107,2.755763 -3.3743548,-2.51932 c -4.8602615,-3.628709 -5.0587242,-5.492205 -0.584921,-5.492205 4.5248465,0 6.5170405,-2.383866 2.8037074,-3.3549242 -2.967625,-0.776051 -3.6091191,-4.145076 -0.7892615,-4.145076 1.0100794,0 4.0215636,1.138915 6.6921866,2.530922 2.685809,1.399921 5.799374,2.16879 6.967456,1.720555 1.959579,-0.751961 1.96393,-0.973735 0.06036,-3.077154 -3.791251,-4.189287 -0.747381,-5.244738 5.329853,-1.848108 5.732682,3.204058 9.113636,4.010483 9.113636,2.173785 0,-0.55 -0.615251,-1.615251 -1.367225,-2.367225 -0.751974,-0.751974 -1.173849,-2.308333 -0.9375,-3.45857502 0.349919,-1.702953 1.377815,-1.278209 5.534782,2.28706602 4.728004,4.055031 7.970903,5.004441 10.036888,2.938456 0.461619,-0.461619 0.127775,-1.69665 -0.741875,-2.744514 -1.329179,-1.601562 -1.172806,-1.905208 0.981149,-1.905208 1.409282,0 3.627225,1.353793 4.928761,3.008429 1.301536,1.654636 3.732989,3.201511 5.403225,3.4375 2.626844,0.371149 3.005026,-0.03497 2.801465,-3.008429 -0.328224,-4.79442102 2.457546,-4.35967102 4.901284,0.764899 1.102191,2.311319 3.175122,4.5086572 4.606515,4.8829752 2.19585,0.574227 2.602531,0.112874 2.602531,-2.9523982 0,-5.003868 2.048758,-4.549522 4.679616,1.037782 2.721214,5.7791932 6.570384,7.0631892 6.570384,2.1917312 0,-4.0285462 2.929953,-3.6208072 3.533455,0.491723 0.516704,3.521049 -1.493545,5.941997 -7.462535,8.987148 -5.670665,2.892957 -5.619214,2.888747 -6.522953,0.53364 z"
              id="path4484" />
            </svg>
          </p>
          <div class='flex-grid header-grid'>
            <div class='flex-row'>
              <h2 class='flex-cell text-center width-12 header-player-name'>Mookie Betts</h2>
            </div>
            <div class='flex-row'>
              <span class='flex-cell width-04 header-player-position text-left'>Outfield</span>
              <span class='flex-cell width-08 header-player-team text-right'>Boston RedSox</span>
            </div>
            <div class='flex-row small-text'>
              <span class='flex-cell width-03'><strong>Height</strong> : 5'9"</span>
              <span class='flex-cell width-03'><strong>Weight</strong> : 180</span>
              <span class='flex-cell width-03 text-center'><strong>Bats</strong> : right</span>
              <span class='flex-cell width-03 text-right'><strong>Throws</strong> : right</span>
  
            </div>
            <div class='flex-row small-text'>
              <span class='flex-cell width-06 text-left'><strong>Born</strong> : October 7, 1992</span>
              <span class='flex-cell width-06 text-right'><strong>Home</strong> : Nashville, TN.</span>
            </div>
          </div>
        </header>
        <p class='bio'>
          Markus Lynn "Mookie" Betts is a relatively short natural second baseman with a high contact rate and a high level of production when pulling the ball, Betts has been compared to fellow Red Sox player Dustin Pedroia. Betts was drafted by the Red Sox in 2011, and made his MLB debut in the 2014 season, sharing time between second base and the outfield. He became the Red Sox starting center fielder in 2014, before moving to right field in 2016.
        </p>
        <h3 class='table-title text-center'>Major &amp; Minor League Batting Record</h3>
        <table class='player-stats'>
          <thead>
            <tr>
              <th>Year</th>
              <th>Team</th>
              <th>Lea.</th>
              <th>G</th>
              <th>AB</th>
              <th>R</th>
              <th>H</th>
              <th>2B</th>
              <th>3B</th>
              <th>HR</th>
              <th>RBI</th>
              <th>AVG.</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th colspan='3'>Maj. Tot. 5 Yrs</th>
              <th>644</th>
              <th>2606</th>
              <th>478</th>
              <th>789</th>
              <th>189</th>
              <th>21</th>
              <th>110</th>
              <th>390</th>
              <th>.303 </th>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>2011</td>
              <td>Bos-min</td>
              <td>RK</td>
              <td>1</td>
              <td>4</td>
              <td>0</td>
              <td>2</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>2</td>
              <td>.500</td>
            </tr>
            <tr>
              <td>2012</td>
              <td>Bos-min</td>
              <td>A-</td>
              <td>71</td>
              <td>251</td>
              <td>34</td>
              <td>67</td>
              <td>8</td>
              <td>1</td>
              <td>0</td>
              <td>31</td>
              <td>.267</td>
            </tr>
            <tr>
              <td>2013</td>
              <td>Bos-min</td>
              <td>A,A+,Fal.</td>
              <td>143</td>
              <td>251</td>
              <td>104</td>
              <td>161</td>
              <td>39</td>
              <td> 4</td>
              <td>16</td>
              <td>70</td>
              <td>.309</td>
            </tr>
            <tr>
              <td>2014</td>
              <td>Bos-min</td>
              <td>AA,AAA</td>
              <td>99</td>
              <td>399</td>
              <td>87</td>
              <td>138</td>
              <td>30</td>
              <td>5</td>
              <td>11</td>
              <td>65</td>
              <td>.346</td>
            </tr>
            <tr>
              <td>2014</td>
              <td>Boston</td>
              <td>AL</td>
              <td>52</td>
              <td>189</td>
              <td>34</td>
              <td>55</td>
              <td>12</td>
              <td>1</td>
              <td>5</td>
              <td>18</td>
              <td>.291</td>
            </tr>
            <tr>
              <td>2015</td>
              <td>Boston</td>
              <td>AL</td>
              <td>145</td>
              <td>597</td>
              <td>92</td>
              <td>174</td>
              <td>42</td>
              <td>8</td>
              <td>18</td>
              <td>77</td>
              <td>.291</td>
            </tr>
            <tr>
              <td>2016</td>
              <td>Boston</td>
              <td>AL</td>
              <td>158</td>
              <td>672</td>
              <td>122</td>
              <td>214</td>
              <td>42</td>
              <td>5</td>
              <td>31</td>
              <td>113</td>
              <td>.318</td>
            </tr>
            <tr>
              <td>2017</td>
              <td>Boston</td>
              <td>AL</td>
              <td>153</td>
              <td>628</td>
              <td>101</td>
              <td>166</td>
              <td>46</td>
              <td>2</td>
              <td>24</td>
              <td>102</td>
              <td>.264</td>
            </tr>
            <tr>
              <td>2018</td>
              <td>Boston</td>
              <td>AL</td>
              <td>136</td>
              <td>520</td>
              <td>129</td>
              <td>180</td>
              <td>47</td>
              <td>5</td>
              <td>32</td>
              <td>80</td>
              <td>.346</td>
            </tr>
        <p class='printed'>&copy; Matt Henley</p>
  
      </section>
    </article>
  </div>`
}

function teamCard(team) {
  return `<div class="col m-3"><div class="card mx-auto" style="width:300px">
    <img class="card-img-top" src="` +
    team.WikipediaLogoUrl +
    `" style="height:300px;" alt="Card image">
    <div class="card-body">
    <h4 class="card-title">` +
    team.Name +
    `</h4>
    <p class="card-text text-muted">` + team.City + `</p>
    <a class="teampage btn btn-primary btn-block text-white" data-href="` +
    team.TeamID +
    `">Team Page</a>
    </div>
    </div></div>`
}

function inlineNews(news) {
  var last_news = Array.from(JSON.parse(news)).slice(0, 10).map(x => `<li><a style="  width: 80%;
    margin: 5px auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #fff;
    text-decoration: none;
    font: 15px Raleway, Arial, sans-serif;
    vertical-align: -webkit-baseline-middle;
    vertical-align: -moz-middle-with-baseline;
    -webkit-font-smoothing: antialiased;
    -webkit-user-select: none;" data-id="` + x.NewsID + `">` + x.Title + `</a></li>`);
  return `<div class="news">
                <span>News</span>
                <ul>` + last_news.join("") + `
                </ul>
            </div>`
}

function getBody_AdminPage() {
  return `<aside class="side-nav" id="show-side-navigation1">
  <div class="heading">
    <img src="../img/user.png" alt="user">
    <div class="info">
      <h3><a>Loren Ipsum</a></h3>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  </div>
  <div class="search">
    <input type="text" placeholder="Type here"><i class="fa fa-search"></i>
  </div>
  <ul class="categories">
    <li><i class="fa fa-home fa-fw" aria-hidden="true"></i><a href="#"> About us</a>
    <i class="fas fa-chevron-left chevron-left"></i>
    </li>

    <li><i class="far fa-life-ring"></i><a href="#"> Subscribe us</a>
    <i class="fas fa-chevron-left chevron-left"></i>
    </li>
    <li><i class="fa fa-envelope fa-fw"></i><a href="#"> Contact us</a>
    <i class="fas fa-chevron-left chevron-left"></i>
    </li>
    <li><i class="fa fa-users fa-fw"></i><a href="#"> Our team</a>
    <i class="fas fa-chevron-left chevron-left"></i>
    </li>
    <li><i class="fa fa-bolt fa-fw"></i><a href="#"> Testimonials</a>
    <i class="fas fa-chevron-left chevron-left"></i>
    </li>
    <p>Example:</p>
    <li><i class="fas fa-envelope-open-text"></i><a href="#"> Messages <span class="num dang">56</span></a><i class="fas fa-chevron-left chevron-left"></i></li>
    <li><i class="fa fa-wrench fa-fw"></i><a href="#"> Settings <span class="num prim">6</span></a>
    <i class="fas fa-chevron-left chevron-left"></i>
    </li>
    <li><i class="fa fa-laptop fa-fw"></i><a href="#"> About UI &amp; UX <span class="num succ">43</span></a></li>
  </ul>
</aside>
<section id="contents">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">my<span class="main-color">Dashboard</span></a>
      </div>
      <ul class="navbar-nav not-collapse-ul">
        <li class="nav-item"><a class="nav-link"><i class="fa fa-comments"></i><span>23</span></a></li>
        <li class="nav-item"><a class="nav-link"><i class="far fa-bell"></i><span>98</span></a></li>
        <li class="nav-item"><a class="nav-link"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <i class="fa fa-bars"></i>
      </button></a></li>
      </ul>

      <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
              <li><a href="#"><i class="far fa-user"></i> My account</a></li>
              <li><a href="#"><i class="far fa-envelope"></i> My inbox</a></li>
              <li><a href="#"><i class="far fa-question-circle"></i> Help</a></li>
              <li role="separator" class="divider"></li>
              <li><a id="adminLogout" data-page="logout"><i class="fas fa-sign-out-alt"></i> Log out</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="welcome">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="content">
            <h2>Welcome to Dashboard</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="statistics">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <div class="box">
            <i class="fa fa-envelope fa-fw bg-primary"></i>
            <div class="info">
              <h3>1,245</h3> <span>Emails</span>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box">
            <i class="fa fa-file fa-fw danger"></i>
            <div class="info">
              <h3>34</h3> <span>Projects</span>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="box">
            <i class="fa fa-users fa-fw success"></i>
            <div class="info">
              <h3>5,245</h3> <span>Users</span>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="charts">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="chart-container">
            <h3>Chart</h3>
            <canvas id="myChart"></canvas>
          </div>
        </div>
        <div class="col-md-6">
          <div class="chart-container">
            <h3>Chart2</h3>
            <canvas id="myChart2"></canvas>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="admins">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="box">
            <h3>Admins:</h3>
            <div class="admin">
              <div class="img">
                <img class="img-responsive" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148906966/small/1501685402/enhance" alt="admin">
              </div>
              <div class="info">
                <h3>Joge Lucky</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="admin">
              <div class="img">
                <img class="img-responsive" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907137/small/1501685404/enhance" alt="admin">
              </div>
              <div class="info">
                <h3>Joge Lucky</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="admin">
              <div class="img">
                <img class="img-responsive" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907019/small/1501685403/enhance" alt="admin">
              </div>
              <div class="info">
                <h3>Joge Lucky</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box">
            <h3>Moderators:</h3>
            <div class="admin">
              <div class="img">
                <img class="img-responsive" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907114/small/1501685404/enhance" alt="admin">
              </div>
              <div class="info">
                <h3>Joge Lucky</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="admin">
              <div class="img">
                <img class="img-responsive" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907086/small/1501685404/enhance" alt="admin">
              </div>
              <div class="info">
                <h3>Joge Lucky</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="admin">
              <div class="img">
                <img class="img-responsive" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance" alt="admin">
              </div>
              <div class="info">
                <h3>Joge Lucky</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    <section class='statis text-center'>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <div class="box bg-primary">
              <i class="fa fa-eye"></i>
              <h3>5,154</h3>
              <p class="lead">Page views</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="box danger">
              <i class="fa fa-user-o"></i>
              <h3>245</h3>
              <p class="lead">User registered</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="box warning">
              <i class="fa fa-shopping-cart"></i>
              <h3>5,154</h3>
              <p class="lead">Product sales</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="box success">
              <i class="fa fa-handshake-o"></i>
              <h3>5,154</h3>
              <p class="lead">Transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="chrt3">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-9">
            <div class="chart-container">
              <canvas id="chart3" width="100%"></canvas>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
`;
}

function getBody_RegisterPage() {
  return `<div class="form">
        
  <div class="tab-content">
    <div id="signup">   
      <h1>Sign Up for Free</h1>
      
      <form id="registerForm">
      
      <div class="top-row">
        <div class="field-wrap">
          <label>
            First Name<span class="req">*</span>
          </label>
          <input name="first_name" type="text" required autocomplete="off" />
        </div>
    
        <div class="field-wrap">
          <label>
            Last Name<span class="req">*</span>
          </label>
          <input name="last_name" type="text"required autocomplete="off"/>
        </div>
      </div>

      <div class="field-wrap">
        <label>
          Email Address<span class="req">*</span>
        </label>
        <input name="email" type="email"required autocomplete="off"/>
      </div>
      
      <div class="field-wrap">
        <label>
          Set A Password<span class="req">*</span>
        </label>
        <input name="password" type="password"required autocomplete="off"/>
      </div>
      
      <div class="field-error"></div>
      <button type="submit" class="button button-block"/>Sign Up</button>
      
      </form>

    </div>    
  </div><!-- tab-content -->
  
</div> <!-- /form -->`;
}

/**
 * 
 * @param {*} bracket ==> json with 2 teams info
 */
function tournament_bracket(bracket) {
  return `<li class="tournament-bracket__item">
  <div class="tournament-bracket__match" tabindex="0">
    <table class="tournament-bracket__table">
      <caption class="tournament-bracket__caption">
        <time datetime="1998-02-18">18 February 1998</time>
      </caption>
      <thead class="sr-only">
        <tr>
          <th>Country</th>
          <th>Score</th>
        </tr>
      </thead>  
      <tbody class="tournament-bracket__content">
        <tr class="tournament-bracket__team ${bracket.home == bracket.winner ? "tournament-bracket__winner" : ""}">
          <td class="tournament-bracket__country">
            <abbr class="tournament-bracket__code" title="${bracket.home.data.Name}">${bracket.home.data.Key}</abbr>
            <span class="tournament-bracket__flag flag-icon" style="background-image:url('${bracket.home.data.WikipediaLogoUrl}');"></span>
          </td>
          <td class="tournament-bracket__score">
            <span class="tournament-bracket__number">${bracket.score.score_home}</span>
          </td>
        </tr>
        <tr class="tournament-bracket__team ${bracket.away == bracket.winner ? "tournament-bracket__winner" : ""}">
          <td class="tournament-bracket__country">
          <abbr class="tournament-bracket__code" title="${bracket.away.data.Name}">${bracket.away.data.Key}</abbr>
          <span class="tournament-bracket__flag flag-icon" style="background-image:url('${bracket.away.data.WikipediaLogoUrl}');"></span>
          </td>
          <td class="tournament-bracket__score">
            <span class="tournament-bracket__number">${bracket.score.score_away}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</li>`;
}

/**
 * 
 * @param {*} brackets ==> array de tournament_bracket
 */
function quarterFinals(brackets) {
  return `<div class="tournament-bracket__round tournament-bracket__round--quarterfinals">
  <h3 class="tournament-bracket__round-title">Quarterfinals</h3>
  <ul class="tournament-bracket__list">`+ brackets.join("") + `</ul>
  </div>`;
}

/**
 * 
 * @param {*} brackets ==> array de tournament_bracket
 */
function semiFinals(brackets) {
  return `<div class="tournament-bracket__round tournament-bracket__round--semifinals">
  <h3 class="tournament-bracket__round-title">Semifinals</h3>
  <ul class="tournament-bracket__list">`+ brackets.join("") + `</ul></div>`;
}

/**
 * 
 * @param {*} brackets ==> array de tournament_bracket
 */
function bronzeFinal(brackets) {
  return `<div class="tournament-bracket__round tournament-bracket__round--bronze">
  <h3 class="tournament-bracket__round-title">Bronze medal game</h3>
  <ul class="tournament-bracket__list">`+ brackets.join("") + `</ul></div>`;
}

/**
 * 
 * @param {*} brackets ==> array de tournament_bracket
 */
function goldFinal(brackets) {
  return `<div class="tournament-bracket__round tournament-bracket__round--gold">
  <h3 class="tournament-bracket__round-title">Gold medal game</h3>
  <ul class="tournament-bracket__list">`+ brackets.join("") + `</ul></div>`;
}


function tournament() {
  return `<div class="container">
  <div class="tournament-bracket tournament-bracket--rounded">                                                     
  </div>
</div>`;
}