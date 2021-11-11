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



$('#location-button').click(function(){
        
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          console.log(position);
          $.get( "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude + "," + position.coords.longitude +"&sensor=false", function(data) {
            console.log(data);
          })
          var img = new Image();
          img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=800x400&sensor=false";
          $('#output').html(img);
        });
        
    }
});