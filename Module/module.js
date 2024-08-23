import {
  nav,
  loginbtn,
  shoppingcart,
  footer,
  spintimer,
  category_database,
} from "../Export file/export.js";
spintimer();
document.querySelector(".navimport").innerHTML = nav;
loginbtn();
shoppingcart();
document.querySelector("footer").innerHTML = footer;
category_database();
