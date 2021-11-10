const searchList = document.getElementById('searchList');

const loadSearch = async () => {
    try{
        const res = await fetch('');
        let hpSearch = await res.json();
        displaySearch(hpSearch);
        console.log(hpSearch);
    } catch (err){
        console.error(err);
    }
};

const displaySearch = async () => {





};



const successCallback = (position) => {

    console.log(position);

};

const errorCallback = (error) => {

    console.error(error);

};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
    enableHighAccuracy: true,
    timeout: 5000
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}