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
      let sub_cat = Object.keys(json[keys[i]][0]);
      for (y in sub_cat) {
        if (sub_cat[y] == product_id) {
          document.getElementById("breadcumbdata").innerHTML = sub_cat[y];
          console.log(json[keys[i]][0][sub_cat[y]])
          for (a in json[keys[i]][0][sub_cat[y]]) {
            data += `<div class="col-md-5 col-sm-12 col-lg-3 m-lg-4 m-md-2 m-sm-2 " role="button">
               <div class="card h-100 p-4 shadow" style="max-height:450px;min-height:100px;">
                        <img src="/Images/Products/${
                          json[keys[i]][0][sub_cat[y]][a].img
                        }" class="card-img-top w-100 h-100 border-1 border-black border" style="max-width:400px;max-height:200px;min-height:200px"  alt="${
              json[keys[i]][0][sub_cat[y]][a].name
            } image">
                        <div class="card-body">
                           <h5 class="card-title text-dark text-decoration-none">${
                             json[keys[i]][0][sub_cat[y]][a].name
                           }</h5>
                           <p>${
                             json[keys[i]][0][sub_cat[y]][a].s_description
                           }</p>
                           <a href="/Description_page/index.html?id=${
                             json[keys[i]][0][sub_cat[y]][a].id
                           }&img=${
              json[keys[i]][0][sub_cat[y]][a].img
            }&heading=${json[keys[i]][0][sub_cat[y]][a].name}&price=${
              json[keys[i]][0][sub_cat[y]][a].price
            }&description=${
              json[keys[i]][0][sub_cat[y]][a].m_descrip
            }" role="button" class="btn btn-outline-success"><i class="bi bi-bag-fill"></i> Buy Now</a>
                        </div>
                       </div>
                    </div>  `;
          }
        }
      }
    }
    document.getElementById("cat_data").innerHTML = data;
  });