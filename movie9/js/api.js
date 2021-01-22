// script untuk menangani proses response dari proses request API
function status(response) {
  if(response.status !== 200) {
    console.log("Error : " + response.status);
    //method reject() akan membuat blok catch terpanggil
    return Promise.reject(new Error(response.statusText));
  }else{
    //mengubah suatu objek menjadi promise agar bisa "di-tehn-kan"
    return Promise.resolve(response);
  }
}
//blok kode untuk mem-parsing json menjadi array javascript
function json(response) {
  return response.json();
}
//blok kode untuk mng-handle kesalahan di blok catch
function error(error){
  //parameter error berasal dari promise.reject()
  console.log("Error : " + error);
}
