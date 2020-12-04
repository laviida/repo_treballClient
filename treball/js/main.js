import { Router } from "./controller/router.js";

window.addEventListener("load", async () => {
  var ROUTER = new Router();
  ROUTER.setListeners();
  //localStorage.removeItem("sessions")

});