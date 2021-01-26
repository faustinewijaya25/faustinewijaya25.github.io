const endpoint_url = 'http://127.0.0.1:8887/api';
document.addEventListener("DOMContentLoaded", function() {
getRoomRate();
});

  function getRoomRate() {
    fetch(endpoint_url + "/rooms/jumlahkamar")
.then(status)
.then(json)
.then(function(data) {
  var tb_header = `
  <table id="tb_roomrate">
  <thead>
  <tr>
  <th>Room Type</th>
  <th>Room Rate</th>
  <th>Available</th>
  </tr>
  </thead>
  <tbody>
  </tbody>
  </table>
`;
  $("#dttable").html( tb_header );
  $("#tb_title").html( "Room Rate" );
  $('#tb_roomrate').DataTable({
  "data": data.rooms,
  "columns": [
  { "data": "rtype" },
  { "data": "rate" },
  { "data": "jumlah_kamar" }
  ]
});
  $('select').formSelect();
})
.catch(error);
}
