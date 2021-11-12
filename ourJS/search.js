const objects = [
    {name: 'Pinks Burger Place'},
    {name: 'Subway'},
    {name: 'Basilique'},
    {name: 'Burrito Bandidos'},
    {name: 'Sobeys'},
    {name: 'McDonalds'},
    {name: 'Burger King'},
    {name: 'Sobeys'},
];

const list = document.getElementById('list');

function setList(things){

    clearList();
    for (const object of things){
        const item = document.createElement('li');
        const text = document.createTextNode(object.name)
        item.appendChild(text);
        list.appendChild(item);
    }
    if (group.length === 0){
        setNoResults();
    }

}

function clearList() {

    while (list.firstChild) {

        list.removeChild(list.firstChild);

    }

}

function setNoResults() {
    const item = document.createElement('li');
    const text = document.createTextNode("No results found")
    item.appendChild(text);
    list.appendChild(item);

}

const searchInput = document.getElementById('search');

function getRelevancy(value, searchTerm){

    if (value === searchTerm){
        return 2;
    } else if (value.startsWtih(searchTerm)){
        return 1;
    } else{
        return 0;
    }

}

searchInput.addEventListener('input', (event) => {

    let value = event.target.value;

    if (value && value.trim().length > 0){
        value = value.trim().toLowerCase();
        setList(object.filter(object =>{
            return object.name.includes(value)
        }).sort((objectA, objectB) =>{
            return getRelevancy(objectB.name,value) - getRelevancy(objectA.name,value);
        }));
    } else {
        clearList();
    }
});








function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("search");
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