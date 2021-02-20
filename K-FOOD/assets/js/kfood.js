const endpoint_url = 'http://k-food.lokal/api';

//  function getResep() {
  //  fetch(endpoint_url + "/reseps/resepdetail")
.then(status)
.then(json)
.then(function(data) {
  var tb_header = `
  <table id="tb_resep">
  <thead>
  <tr>
  <th>Nama Resep </th>
  <th>Sejarah Resep </th>
  <th>Jenis Masakan </th>
  <th>Bahan</th>
  <th>Cara Masak </th>
  <th>Waktu Masak </th>
  </tr>
  </thead>
  <tbody>
  </tbody>
  </table>
`;
  $("#dttable").html( tb_header );
  $('#tb_resep').DataTable({
  "data": data.resepdetail,
  "columns": [
  { "data": "nama_resep" },
  { "data": "sejarah_resep" },
  { "data": "jenis_masakan" },
  { "data": "bahan" },
  { "data": "cara_masak" },
  { "data": "waktu_masak" }
  ]
});
  $('select').formSelect();
})
.catch(error);



function getDetail(Nama_Resep) {
  fetch(endpoint_url + "/details/detailresep"+"?Nama_Resep =" +Nama_Resep)
.then(status)
.then(json)
.then(function(data) {
var detailHTML = "";
data.details.forEach(function(detail){
  detailHTML += `
  <div class = "col m3 s6">
  <div class = "card">
  <a href= "detail.html?nama_resep=${detailresep.nama_resep}">
    <div class="card-image waves-effect waves-block waves-light">
    <img src="assets/img/${detailresep.image}"/>
    </div>
    </a>
    <div class = "card-content text-center">
    <strong>${details.nama_resep}</strong>
  </div>
  </div>
  `;
$('#section_title').html("Detail");
});

document.getElementById('detail_resep').innerHTML = detailHTML;
document.getElementById('section_title').innerHTML = sectiontitle;
})
.catch(error);



//function postTambah() {
//  fetch(endpoint_url + "/tambahs/tambahdetail")
.then(status)
.then(json)
.then(function(data) {
var tb_header = `
<table id="tb_tambah">
<thead>
<tr>
<th>Nama Resep </th>
<th>Sejarah Resep </th>
<th>Jenis Masakan </th>
<th>Nama Pembuat </th>
<th>Umur </th>
<th>Pekerjaan </th>
<th>Tahun Buat </th>
<th>Bahan</th>
<th>Cara Masak </th>
</tr>
</thead>
<tbody>
</tbody>
</table>
`;
$("#dttable").html( tb_header );
$('#tb_tambah').DataTable({
"data": data.tambahdetail,
"columns": [
{ "data": "nama_resep" },
{ "data": "sejarah_resep" },
{ "data": "jenis_masakan" },
{ "data": "nama_pembuat" },
{ "data": "umur" },
{ "data": "pekerjaan" },
{ "data": "tahun_buat" },
{ "data": "bahan" },
{ "data": "cara_masak" }
]
});
$('select').formSelect();
})
.catch(error);
}
