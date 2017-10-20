// Since we will be making use of 3rd party functions (eg. navigator.geolocation.getCurrentPosition) which are not native javascript functions we will need
// to add this function to the list of native javascript functions to allow javascript identify and execute it each time its called.
// This is done by using the addEventListener() function.
//
//document.addEventListener("deviceready", checkEnabled, false);


// Checks to see if GPS is enabled AND if the app is authorized
function checkEnabled(){
    navigator.geolocation.getCurrentPosition(doNothing, onError);
    //cordova.plugins.diagnostic.isLocationAvailable(successCallback, errorCallback);
}

/*function successCallback(available) {
  if(available) {
    //Do nothing
  }
  else goToSettings(available);
}

// Output error to console
// Prompt user to enable GPS, on OK switch to phone settings
function errorCallback(error) {
  if(window.confirm("You need to enable location settings to use the geolocation feature.")) {
    cordova.plugins.diagnostic.switchToSettings();
  }
}*/



//We decide to create a function to handle the 3rd party functions (eg. navigator.geolocation.getCurrentPosition)
// which we earlier added to the native functions of the javascript
function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
//
function onSuccess(position) {

    var element = document.getElementById('geolocation');
    element.innerHTML = "<iframe src = \"https:\/\/maps.google.com\/maps?q="+position.coords.latitude+","+position.coords.longitude+"&hl=es;z=14&amp;output=embed\" frameborder=\"0\" style=\"height:100%; width:100%\"><\/iframe>";
}

// onError Callback receives a PositionError object
//
function onError(error) {
    //alert('code: '    + error.code    + '\n' +
        //'message: ' + error.message + '\n');
        openSettings();
}


function openSettings(){
if (window.cordova && window.cordova.plugins.settings) {
    console.log('openNativeSettingsTest is active');
    window.cordova.plugins.settings.open("wifi", function() {
            console.log('opened settings');
        },
        function () {
            console.log('failed to open settings');
        }
    );
} else {
    console.log('openNativeSettingsTest is not active!');
}
}

function doNothing() {
    //Do nothing
}
