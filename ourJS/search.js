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

