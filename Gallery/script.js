let fetchurl = "/Json/category.json";
fetch(fetchurl)
  .then((res) => res.json())
  .then((data) => {
    let keys = Object.keys(data);
    var catego = ``;
    let counting = 1;
    for (i in keys) {
      catego += `<div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="Check${counting}">
                                                <label class="custom-control-label" for="Check${counting}">${keys[i]}</label>
                                            </div>`;
      counting++;
    }
    document.querySelector(".filter_cat").innerHTML = catego;
  });


fetch(fetchurl)
  .then((res) => res.json())
  .then((data) => {
    var gallery = "";
    for (i in data) {
      for (y in data[i]) {
        gallery += ` <div class="col-md-3 col-lg-3 col-sm-12 cardcolumn d-flex justify-content-center align-items-center">
                    <a href="/Description_page/index.html?id=${data[i][y].id}&img=${data[i][y].img}&heading=${data[i][y].heading}&price=${data[i][y].price}&description=${data[i][y].mdes}"><div class="card h-100 shadow" style="max-width:400px">
                            <img src="${data[i][y].img}" class="card-img-top" alt="...">
                          </div>
                        </a>
                </div>`;
      }
    }
    document.querySelector(".galleydata").innerHTML = gallery;
  });
let col3 = document.querySelector(".threecol");
let col5 = document.querySelector(".fivecol");
let col12 = document.querySelector(".twelvecol");

col12.addEventListener("click", () => {
  let column = document.querySelectorAll(".cardcolumn");
  for (i = 0; i < column.length; i++) {
    column[i].classList.remove("col-md-3");
    column[i].classList.remove("col-lg-3");
    column[i].classList.remove("col-md-5");
    column[i].classList.remove("col-lg-5");
    column[i].classList.add("col-md-12");
    column[i].classList.add("col-lg-12");
  }
});

col3.addEventListener("click", () => {
  let column = document.querySelectorAll(".cardcolumn");
  for (i = 0; i < column.length; i++) {
    column[i].classList.remove("col-md-12");
    column[i].classList.remove("col-lg-12");
    column[i].classList.remove("col-md-5");
    column[i].classList.remove("col-lg-5");
    column[i].classList.add("col-md-3");
    column[i].classList.add("col-lg-3");
  }
});

col5.addEventListener("click", () => {
  let column = document.querySelectorAll(".cardcolumn");
  for (i = 0; i < column.length; i++) {
    column[i].classList.remove("col-md-12");
    column[i].classList.remove("col-lg-12");
    column[i].classList.remove("col-md-3");
    column[i].classList.remove("col-lg-3");
    column[i].classList.add("col-md-5");
    column[i].classList.add("col-lg-5");
  }
});
