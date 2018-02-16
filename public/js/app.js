// Setup an event listener to make an API call once auth is complete
function onLinkedInLoad() {
  IN.Event.on(IN, "auth", getProfileData);
}

// Handle the successful return from the API call
function onSuccess(data) {
  //Aqui nos retorna la data
  console.log(data);
  //Guardamos para utilizarlos en la siguiente vista
  localStorage.name = data.firstName;
  localStorage.lastname = data.lastName; 
  localStorage.description = data.headline;
 
 
}

// Handle an error response from the API call
function onError(error) {
  console.log(error);
}

function image(data){
  localStorage.photo = data.pictureUrl
  console.log(localStorage.photo);
  window.location.href = 'views/profile.html';

}

// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
  IN.API.Raw("/people/~").result(onSuccess).error(onError);
  IN.API.Raw('people/~:(id,num-connections,picture-url)').result(image).error(onError);
}
