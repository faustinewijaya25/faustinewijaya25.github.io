const endpoint_url = 'https://51018006.p-web.click/backend/api';

function getGorengan() {
  fetch(endpoint_url + "/reseps/gorengandetail")
  .then(status)
  .then(json)
  .then(function(data){
    var gorenganHTML = "";
    data.reseps.forEach(function(gorengan){
      gorenganHTML += `
      <div class="row">
        <div class="col-lg-6 col-sm-6 portfolio-item">
          <div class="card h-100">
            <a href="detailgorengan.html?id_resep=${gorengan.id_resep}">
            <img class="card-img-top" src="assets/img/${gorengan.image}"/>
            <h1>${gorengan.nama_resep}</h1>
            </div>
          </div>
        </div>
`;
    });
        document.getElementById("gorengan").innerHTML = gorenganHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getKuah() {
  fetch(endpoint_url + "/reseps/kuahdetail")
  .then(status)
  .then(json)
  .then(function(data){
    var kuahHTML = "";
    data.reseps.forEach(function(kuah){
      kuahHTML += `
      <div class="row">
        <div class="col-lg-6 col-sm-6 portfolio-item">
          <div class="card h-100">
            <a href="detailkuah.html?nama_resep=${kuah.id_resep}">
            <img class="card-img-top" src="assets/img/${kuah.image}"/>
            <h1>${kuah.nama_resep}</h1>
            </div>
          </div>
        </div>
`;
    });
        document.getElementById("kuah").innerHTML = kuahHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })

  .catch(error);
}



function getGorenganDetail(id_resep) {
  fetch(endpoint_url+ "/details/detailresep"+"?id_resep="+ id_resep)
  .then(status)
  .then(json)
  .then(function(data){
    var gorengandetailHTML = "";
    data.details.forEach(function(gorengandetail){
      gorengandetailHTML += `
      <div id="content">
        <article  class="card">
        <a href="detailgorengan.html?id_resep=${gorengandetail.id_resep}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="assets/img/${gorengandetail.image}"/>
              </div>
            </a>
            </article>
            </div>


            <article class="card">
            <section class="text">
        <table class="data">
        <thead>
          <tr>
              <th>Nama Resep</th>
              <td class="grey-text text-darken-2">${gorengandetail.nama_resep}</td>
          </tr>
          <tr>
              <th></th>
              <td class="grey-text text-darken-2">${gorengandetail.video}</td>
          </tr>
          <tr>
          <th>Sejarah Resep</th>
            <td class="grey-text text-darken-2">${gorengandetail.sejarah_resep}</td>
          </tr>
          <tr>
            <th>Jenis Masakan</th>
            <td class="grey-text text-darken-2">${gorengandetail.jenis_masakan}</td>
          </tr>
          <th>Bahan</th>
          <td class="grey-text text-darken-2">${gorengandetail.bahan}</td>
        </tr>
        </section>
        <th>Cara Masak</th>
        <td class="grey-text text-darken-2">${gorengandetail.cara_masak}</td>
      </tr>
        </thead>
        <tbody>
        </tbody>
        </table>
        </article>

        `;

    });
        document.getElementById("gorengandetail").innerHTML = gorengandetailHTML;
        document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}


// function getDetail(nama_resep) {
//   fetch(endpoint_url + "/details/detailresep"+"?nama_resep=" + nama_resep)
//   .then(status)
//   .then(json)
//   .then(function(data){
//     var detailHTML = "";
//     data.details.forEach(function(detail){
//       detailHTML += `
//         <div class = "col m5 s6">
//           <div class = "card">
//             <a href="detailgorengan.html?nama_resep=${detail.nama_resep}">
//               <div class="card-image waves-effect waves-block waves-light">
//                 <img src="assets/img/${detail.image}"/>
//               </div>
//             </a>
//             <div class="card-content center">
//             <h5 class=""><strong>${detail.sejarah_resep}</strong></h5>
//             </div>
//           </div>
//         </div>
//
//         <div class="col m7 s6">
//         <table class="data">
//         <thead>
//           <tr>
//               <th>Nama Resep</th>
//               <td class="grey-text text-darken-2">${detail.nama_resep}</td>
//           </tr>
//           <tr>
//           <th>Sejarah Resep</th>
//             <td class="grey-text text-darken-2">${detail.sejarah_resep}</td>
//           </tr>
//           <tr>
//             <th>Jenis Masakan</th>
//             <td class="grey-text text-darken-2">${detail.jenis_masakan}</td>
//           </tr>
//           <th>Bahan</th>
//           <td class="grey-text text-darken-2">${detail.bahan}</td>
//         </tr>
//         <th>Cara Masak</th>
//         <td class="grey-text text-darken-2">${detail.cara_masak}</td>
//       </tr>
//         </thead>
//         <tbody>
//         </tbody>
//         </table>
//         </div>
//
//         `;
//
//     });
//         document.getElementById("detail").innerHTML = detailHTML;
//         document.getElementById("section_title").innerHTML = sectiontitle;
//   })
//   .catch(error);
// }


// function getGorenganDetail(nama_resep) {
//   fetch(endpoint_url + "/details/detailresep"+"?nama_resep=" + nama_resep)
//   .then(status)
//   .then(json)
//   .then(function(data){
//     var gorengandetailHTML = "";
//     data.details.forEach(function(gorengandetail){
//       gorengandetailHTML += `
//         <div class = "col m5 s6">
//           <div class = "card">
//             <a href="detailgorengan.html?nama_resep=${gorengandetail.nama_resep}">
//               <div class="card-image waves-effect waves-block waves-light">
//                 <img src="assets/img/${gorengandetail.image}"/>
//               </div>
//             </a>
//             <div class="card-content center">
//             <h5 class=""><strong>${gorengandetail.sejarah_resep}</strong></h5>
//             </div>
//           </div>
//         </div>
//
//         <div class="col m7 s6">
//         <table class="data">
//         <thead>
//           <tr>
//               <th>Nama Resep</th>
//               <td class="grey-text text-darken-2">${gorengandetail.nama_resep}</td>
//           </tr>
//           <tr>
//           <th>Sejarah Resep</th>
//             <td class="grey-text text-darken-2">${gorengandetail.sejarah_resep}</td>
//           </tr>
//           <tr>
//             <th>Jenis Masakan</th>
//             <td class="grey-text text-darken-2">${gorengandetail.jenis_masakan}</td>
//           </tr>
//           <th>Bahan</th>
//           <td class="grey-text text-darken-2">${gorengandetail.bahan}</td>
//         </tr>
//         <th>Cara Masak</th>
//         <td class="grey-text text-darken-2">${gorengandetail.cara_masak}</td>
//       </tr>
//         </thead>
//         <tbody>
//         </tbody>
//         </table>
//         </div>
//
//         `;
//
//     });
//         document.getElementById("gorengandetail").innerHTML = gorengandetailHTML;
//         document.getElementById("section_title").innerHTML = sectiontitle;
//   })
//   .catch(error);
// }
