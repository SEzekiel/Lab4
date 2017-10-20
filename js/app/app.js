
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
        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    }
    else{
        document.getElementById('bt').innerHTML="Display location info";
        document.getElementById('geolocation').innerHTML = "<iframe src = \"https:\/\/maps.google.com\/maps?q=,&hl=es;z=14&amp;output=embed\" frameborder=\"0\" style=\"height:-webkit-fill-available; height:100%; width:100%\"><\/iframe>";
    }
    
}

// onSuccess Geolocation
//
function onSuccess(position) {

    var element = document.getElementById('geolocation');
    element.innerHTML = "<iframe src = \"https:\/\/maps.google.com\/maps?q="+position.coords.latitude+","+position.coords.longitude+"&hl=es;z=14&amp;output=embed\" frameborder=\"0\" style=\"height:-webkit-fill-available; height:100%; width:100%\"><\/iframe>";
}

// onError Callback receives a PositionError object
//
function onError(error) {
        openSettings();
}

//Opens phone gps settings to attept to manually turn on the gps
function openSettings(){
if (window.cordova && window.cordova.plugins.settings) {
    alert('openNativeSettingsTest is active');
    window.cordova.plugins.settings.open("wifi", function() {
            alert('opened settings');
        },
        function () {
            alert('failed to open settings');
        }
    );
} else {
    alert('openNativeSettingsTest is not active!');
}
}

function doNothing() {
    //Do nothing
}
