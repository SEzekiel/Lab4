
// Checks to see if GPS is enabled AND if the app is authorized
function checkEnabled(){
    navigator.geolocation.getCurrentPosition(doNothing, onError);
    //cordova.plugins.diagnostic.isLocationAvailable(successCallback, errorCallback);
}


//We decide to create a function to handle the 3rd party functions (eg. navigator.geolocation.getCurrentPosition)
// which we earlier added to the native functions of the javascript
function onDeviceReady() {
    if (document.getElementById('bt').innerHTML=="Display location info") {
        document.getElementById('bt').innerHTML="Hide location";
        document.getElementById('mes').innerHTML="Hold on a bit, we are getting you location...";
        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    }
    else{
        document.getElementById('bt').innerHTML="Display location info";
        document.getElementById('mes').innerHTML="hiding your location....";
        document.getElementById('geolocation').innerHTML = "<iframe src = \"https:\/\/maps.google.com\/maps?q=,&hl=es;z=14&amp;output=embed\" frameborder=\"0\" style=\"height:-webkit-fill-available; width:100%\"><\/iframe>";
        document.getElementById('mes').innerHTML="You are now hidden";
    }
    
}

// onSuccess Geolocation
//
function onSuccess(position) {

    var element = document.getElementById('geolocation');
    element.innerHTML = "<iframe src = \"https:\/\/maps.google.com\/maps?q="+position.coords.latitude+","+position.coords.longitude+"&hl=es;z=14&amp;output=embed\" frameborder=\"0\" style=\"height:-webkit-fill-available; width:100%\"><\/iframe>";
    document.getElementById('mes').innerHTML="Here we are!";
}

// onError Callback receives a PositionError object
//
function onError(error) {
        openSettings();
}

//Opens phone gps settings to attept to manually turn on the gps
function openSettings(){
if (window.cordova && window.cordova.plugins.settings) {
    window.cordova.plugins.settings.open("wifi", function() {

        },
        function () {

        }
    );
} else {

}
}

function doNothing() {
    //Do nothing
}