import { displayOfHeaderProfileOptions } from "./modules/templates/display.js";

// import variables from "../style/scss/variables.scss";
import { isAdminCheck, tokenExists, getToken } from "./modules/checkToken.js";

import { loadHeader } from "./modules/loadHeader.js";
import { setupUsername, clearStorage } from "./modules/User_dataGetters.js";

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
loadHeader().then(() => {
  const cartBtn = document.getElementById("cart-btn");
  cartBtn.onclick = function () {
    window.location.href = "http://localhost:3000/user/cart";
  };

  //  const isAdmin = isAdminCheck();
  if (getCookie("userToken") !== "") {
    //const token = getToken(isAdmin);
    const token = getCookie("userToken");
    let isAdmin = false;
    setupUsername(token, isAdmin);
  } else {
    //clearStorage(isAdmin);
    displayOfHeaderProfileOptions(false);
  }
});
