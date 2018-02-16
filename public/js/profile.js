

let name = document.getElementById('name');
name.innerText = localStorage.name;

let img = document.getElementById('image');
img.setAttribute('src', localStorage.photo );

let lastname = document.getElementById('lastname');
lastname.innerText = localStorage.lastname;

let description = document.getElementById('description');
description.innerText = localStorage.description;