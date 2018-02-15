window.addEventListener('load', function () {
  // Setup an event listener to make an API call once auth is complete
  IN.Event.on(IN, 'auth', getProfileData);
  // Handle the successful return from the API call
  function onSuccess(data) {
    console.log(data);
    
  }
  // manejando los errores
  function onError(error) {
    console.log(error);
  }
  // Use the API call wrapper to request the member's basic profile data
  function getProfileData() {
    IN.API.Raw('/people/~').result(onSuccess).error(onError);
  }

});