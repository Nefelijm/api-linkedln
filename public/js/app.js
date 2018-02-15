// Setup an event listener to make an API call once auth is complete
function onLinkedInLoad() {
  IN.Event.on(IN, "auth", getProfileData);
}

// Handle the successful return from the API call
function onSuccess(data) {
  console.log(data);
  localStorage.name = data.firstName;
  console.log(localStorage.name)
}

// Handle an error response from the API call
function onError(error) {
  console.log(error);
}

function image(data){
  localStorage.photo = data.pictureUrl
  console.log(localStorage.photo);
  window.location.href = '../views/profile.html';

}

// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
  IN.API.Raw("/people/~").result(onSuccess).error(onError);
  IN.API.Raw('people/~:(id,num-connections,picture-url)').result(image).error(onError);
}
