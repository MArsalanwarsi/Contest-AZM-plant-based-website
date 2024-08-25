let fetchurl = "/Json/category.json";
fetch(fetchurl)
  .then((res) => res.json())
  .then((data) => {
    let keys = Object.keys(data);
    var catego = `<div class="custom-control custom-checkbox">
                                                <input type="radio" class="custom-control-input" id="Check0" name="cat_check" value="ALL" onclick="filter_radio(this.value)" checked>
                                                <label class="custom-control-label" for="Check0">All Products</label>
                                            </div>`;
    let counting = 1;
    for (i in keys) {
      catego += `<div class="custom-control custom-checkbox">
                                                <input type="radio" class="custom-control-input" id="Check${counting}" name="cat_check" value="${keys[i]}" onclick="filter_radio(this.value)">
                                                <label class="custom-control-label" for="Check${counting}">${keys[i]}</label>
                                            </div>`;
      counting++;
    }
    document.querySelector(".filter_cat").innerHTML = catego;
  });

function filter_radio(value) {
  if (value == "ALL") {
    fetch(fetchurl)
      .then((res) => res.json())
      .then((data) => {
        var gallery = "";
        for (i in data) {
          for (y in data[i]) {
            for (x in data[i][y]) {
              for (w in data[i][y][x]) {
                gallery += ` <div class="col-md-3 col-lg-3 col-sm-12 cardcolumn d-flex justify-content-center align-items-center">
                    <a href="/Description_page/index.html?id=${data[i][y][x][w].id}&img=${data[i][y][x][w].img}&heading=${data[i][y][x][w].name}&price=${data[i][y][x][w].price}&description=${data[i][y][x][w].m_descrip}" class="text-decoration-none"><div class="card h-100 shadow" >
                            <img src="/Images/Products/${data[i][y][x][w].img}" class="card-img-top w-100 h-100" style="max-width:400px;max-height:200px;min-width:200px;min-height:200px" alt="${data[i][y][x][w].img}">
                             <div class="card-body">
                           <h5 class="card-title text-dark text-decoration-none">${data[i][y][x][w].name}</h5>
                        </div>
                          </div>
                          
                        </a>
                </div>`;
              }
            }
          }
        }
        document.querySelector(".galleydata").innerHTML = gallery;
      });
  } else {
    fetch(fetchurl)
      .then((res) => res.json())
      .then((data) => {
        let keys = Object.keys(data);
        let output = "";
        for (var i in keys) {
          if (keys[i] == value) {
            for (d in data[keys[i]]) {
              for (c in data[keys[i]][d]) {
                for (b in data[keys[i]][d][c]) {
                  output += `<div class="col-md-3 col-lg-3 col-sm-12 cardcolumn d-flex justify-content-center align-items-center">
                    <a href="/Description_page/index.html?id=${
                      data[keys[i]][d][c][b].id
                    }&img=${data[keys[i]][d][c][b].img}&heading=${
                    data[keys[i]][d][c][b].name
                  }&price=${data[keys[i]][d][c][b].price}&description=${
                    data[keys[i]][d][c][b].m_descrip
                  }" class="text-decoration-none"><div class="card h-100 shadow" >
                            <img src="/Images/Products/${
                              data[keys[i]][d][c][b].img
                            }" class="card-img-top w-100 h-100" style="max-width:400px;max-height:200px;min-width:200px;min-height:200px" alt="${
                    data[keys[i]][d][c][b].img
                  }">
                  <div class="card-body">
                           <h5 class="card-title text-dark text-decoration-none">${
                             data[keys[i]][d][c][b].name
                           }</h5>
                        </div>
                          </div>
                        </a>
                </div>`;
                }
              }
            }
          }
        }
        document.querySelector(".galleydata").innerHTML = output;
      });
  }
}

fetch(fetchurl)
  .then((res) => res.json())
  .then((data) => {
    var gallery = "";
    for (i in data) {
      for (y in data[i]) {
        for (x in data[i][y]) {
          for (w in data[i][y][x]) {
            gallery += ` <div class="col-md-3 col-lg-3 col-sm-12 cardcolumn d-flex justify-content-center align-items-center">
                    <a href="/Description_page/index.html?id=${data[i][y][x][w].id}&img=${data[i][y][x][w].img}&heading=${data[i][y][x][w].name}&price=${data[i][y][x][w].price}&description=${data[i][y][x][w].m_descrip}" class="text-decoration-none"><div class="card h-100 shadow" >
                            <img src="/Images/Products/${data[i][y][x][w].img}" class="card-img-top w-100 h-100" style="max-width:400px;max-height:200px;min-width:200px;min-height:200px" alt="${data[i][y][x][w].img}">
                            <div class="card-body">
                           <h5 class="card-title text-dark text-decoration-none">${data[i][y][x][w].name}</h5>
                        </div>
                          </div>
                        </a>
                </div>`;
          }
        }
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

function price_filter() {
  let min = document.querySelector("#price_filter_min").value;
  let max = document.querySelector("#price_filter_max").value;
  let galery_data = document.querySelector(".galleydata");
  if (min == "" && max == "") {
    fetch(fetchurl)
      .then((res) => res.json())
      .then((data) => {
        var gallery = "";
        for (i in data) {
          for (y in data[i]) {
            for (x in data[i][y]) {
              for (w in data[i][y][x]) {
                gallery += ` <div class="col-md-3 col-lg-3 col-sm-12 cardcolumn d-flex justify-content-center align-items-center">
                    <a href="/Description_page/index.html?id=${data[i][y][x][w].id}&img=${data[i][y][x][w].img}&heading=${data[i][y][x][w].name}&price=${data[i][y][x][w].price}&description=${data[i][y][x][w].m_descrip}" class="text-decoration-none"><div class="card h-100 shadow" >
                            <img src="/Images/Products/${data[i][y][x][w].img}" class="card-img-top w-100 h-100" style="max-width:400px;max-height:200px;min-width:200px;min-height:200px" alt="${data[i][y][x][w].img}">
                            <div class="card-body">
                           <h5 class="card-title text-dark text-decoration-none">${data[i][y][x][w].name}</h5>
                        </div>
                          </div>
                        </a>
                </div>`;
              }
            }
          }
        }
        galery_data.innerHTML = gallery;
      });
  } else if (min == "") {
    fetch(fetchurl)
      .then((res) => res.json())
      .then((data) => {
        var gallery = "";
        for (i in data) {
          for (y in data[i]) {
            for (x in data[i][y]) {
              for (w in data[i][y][x]) {
                if (parseInt(data[i][y][x][w].price) <= parseInt(max)) {
                  gallery += ` <div class="col-md-3 col-lg-3 col-sm-12 cardcolumn d-flex justify-content-center align-items-center">
                    <a href="/Description_page/index.html?id=${data[i][y][x][w].id}&img=${data[i][y][x][w].img}&heading=${data[i][y][x][w].name}&price=${data[i][y][x][w].price}&description=${data[i][y][x][w].m_descrip}" class="text-decoration-none"><div class="card h-100 shadow" >
                            <img src="/Images/Products/${data[i][y][x][w].img}" class="card-img-top w-100 h-100" style="max-width:400px;max-height:200px;min-width:200px;min-height:200px" alt="${data[i][y][x][w].img}">
                            <div class="card-body">
                           <h5 class="card-title text-dark text-decoration-none">${data[i][y][x][w].name}</h5>
                        </div>
                          </div>
                        </a>
                </div>`;
                }
              }
            }
          }
        }
        galery_data.innerHTML = gallery;
      });
  } else if (max == "") {
    fetch(fetchurl)
      .then((res) => res.json())
      .then((data) => {
        var gallery = "";
        for (i in data) {
          for (y in data[i]) {
            for (x in data[i][y]) {
              for (w in data[i][y][x]) {
                if (parseInt(data[i][y][x][w].price) >= parseInt(min)) {
                  gallery += ` <div class="col-md-3 col-lg-3 col-sm-12 cardcolumn d-flex justify-content-center align-items-center">
                    <a href="/Description_page/index.html?id=${data[i][y][x][w].id}&img=${data[i][y][x][w].img}&heading=${data[i][y][x][w].name}&price=${data[i][y][x][w].price}&description=${data[i][y][x][w].m_descrip}" class="text-decoration-none"><div class="card h-100 shadow" >
                            <img src="/Images/Products/${data[i][y][x][w].img}" class="card-img-top w-100 h-100" style="max-width:400px;max-height:200px;min-width:200px;min-height:200px" alt="${data[i][y][x][w].img}">
                            <div class="card-body">
                           <h5 class="card-title text-dark text-decoration-none">${data[i][y][x][w].name}</h5>
                        </div>
                          </div>
                        </a>
                </div>`;
                }
              }
            }
          }
        }
        galery_data.innerHTML = gallery;
      });
  } else {
    fetch(fetchurl)
      .then((res) => res.json())
      .then((data) => {
        var gallery = "";
        for (i in data) {
          for (y in data[i]) {
            for (x in data[i][y]) {
              for (w in data[i][y][x]) {
                if (
                  parseInt(data[i][y][x][w].price) >= parseInt(min) &&
                  parseInt(data[i][y][x][w].price) <= parseInt(max)
                ) {
                  gallery += ` <div class="col-md-3 col-lg-3 col-sm-12 cardcolumn d-flex justify-content-center align-items-center">
                    <a href="/Description_page/index.html?id=${data[i][y][x][w].id}&img=${data[i][y][x][w].img}&heading=${data[i][y][x][w].name}&price=${data[i][y][x][w].price}&description=${data[i][y][x][w].m_descrip}" class="text-decoration-none"><div class="card h-100 shadow" >
                            <img src="/Images/Products/${data[i][y][x][w].img}" class="card-img-top w-100 h-100" style="max-width:400px;max-height:200px;min-height:200px" alt="${data[i][y][x][w].img}">
                            <div class="card-body">
                           <h5 class="card-title text-dark text-decoration-none">${data[i][y][x][w].name}</h5>
                        </div>
                          </div>
                        </a>
                </div>`;
                }
              }
            }
          }
        }
        galery_data.innerHTML = gallery;
      });
  }
}
$("#search_box").keyup(function () {
  var filter = $("#search_box").val();
  fetch(fetchurl)
    .then((res) => res.json())
    .then((data) => {
      var gallery = "";
      for (i in data) {
        for (y in data[i]) {
          for (x in data[i][y]) {
            for (w in data[i][y][x]) {
              if (
                data[i][y][x][w].name
                  .toLowerCase()
                  .includes(filter.toLowerCase())
              ) {
                gallery += ` <div class="col-md-3 col-lg-3 col-sm-12 cardcolumn d-flex justify-content-center align-items-center">
                    <a href="/Description_page/index.html?id=${data[i][y][x][w].id}&img=${data[i][y][x][w].img}&heading=${data[i][y][x][w].name}&price=${data[i][y][x][w].price}&description=${data[i][y][x][w].m_descrip}" class="text-decoration-none"><div class="card h-100 shadow" >
                            <img src="/Images/Products/${data[i][y][x][w].img}" class="card-img-top w-100 h-100" style="max-width:400px;max-height:200px;min-height:200px" alt="${data[i][y][x][w].img}">
                            <div class="card-body">
                           <h5 class="card-title text-dark text-decoration-none">${data[i][y][x][w].name}</h5>
                        </div>
                          </div>
                        </a>
                </div>`;
              }
            }
          }
        }
      }
      document.querySelector(".galleydata").innerHTML = gallery;
    });
  // $(".galleydata")
  //   .find(".card-title:not(:contains(" + filter + "))")
  //   .parent()
  //   .parent()
  //   .css("display", "none");
});
