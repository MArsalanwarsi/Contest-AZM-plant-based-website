fetch("/Json/category.json")
  .then((res) => res.json())
  .then((json) => {
    var url = window.location.href;
     let url_obj = new URL(url);
     var product_id = url_obj.searchParams.get("id");
    var data = "";
    let keys = Object.keys(json);
    // console.log(keys);
    for (i in keys) {
      if (keys[i] == product_id) {
        document.getElementById("breadcumbdata").innerHTML = keys[i];
        for (y in json[keys[i]]) {
          data += `<div class="col-md-3 col-sm-12 col-lg-3" role="button">
               <a href="/Product_Page/index.html?id=${
                 json[keys[i]][y].id
               }" class="text-decoration-none w-100 h-100" id="cardmain"><div class="card h-100 border-0" style="max-height:250px;min-height:100px;">
                        <img src="${
                          json[keys[i]][y].img
                        }" class="card-img-top w-100 h-100" style="max-height:250px;min-height:100px;"  alt="${
            json[keys[i]][y].title
          } image">
                        <div class="card-body">
                           <h5 class="card-title text-dark text-decoration-none">${
                             json[keys[i]][y].title
                           }</h5>
                        </div>
                       </div></a>
                    </div> `;
        }
      }
    }
    document.getElementById("cat_data").innerHTML = data;
  });