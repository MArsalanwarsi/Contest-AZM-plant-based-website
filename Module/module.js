import {
  nav,
  loginbtn,
  shoppingcart,
  footer,
  category_database,
} from "../Export file/export.js";
document.querySelector(".navimport").innerHTML = nav;
loginbtn();
shoppingcart();
document.querySelector("footer").innerHTML = footer;
category_database();
