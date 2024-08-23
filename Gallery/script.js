let fetchurl = "/Json/fetch.json";
fetch(fetchurl)
  .then((res) => res.json())
  .then((data) => {
    let keys = Object.keys(data);
    var catego = ` <option selected value="All Products">All Products</option>`;
    for (i in keys) {
      catego += `<option value="${keys[i]}">${keys[i]}</option>`;
    }
    document.getElementById("productcategory").innerHTML = catego;
  });
function categoryselect() {
  let category = document.getElementById("productcategory").value;
  if (category == "All Products") {
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
  } else {
    fetch(fetchurl)
      .then((res) => res.json())
      .then((data) => {
        var gallery = "";
        let keys = Object.keys(data);
        for (i in keys) {
          if (keys[i] == category) {
            for (y in data[keys[i]]) {
              gallery += ` <div class="col-md-3 col-lg-3 col-sm-12 cardcolumn d-flex justify-content-center align-items-center">
              <a href="/Description_page/index.html?id=${
                data[keys[i]][y].id
              }&img=${data[keys[i]][y].img}&heading=${
                data[keys[i]][y].heading
              }&price=${data[keys[i]][y].price}&description=${
                data[keys[i]][y].mdes
              }"><div class="card h-100 shadow" style="max-width:400px">
                          <img src="${
                            data[keys[i]][y].img
                          }" class="card-img-top" alt="...">
                        </div>
                      </a>
              </div>`;
            }
          }
        }
        document.querySelector(".galleydata").innerHTML = gallery;
      });
  }
}

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
