/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Thomas Oche Agbese";
var currentYear = new Date().getFullYear();
var profilePicture = "images/tom.jpg";
var altText = `Profile image of ${fullName}`;

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.getElementById('year');
const imageElement = document.querySelector('img[src="images/tom.jpg"]');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', altText);

// Favorite Foods Array
var favoriteFoods = ["Rice", "Beans", "Egusi", "Yam", "Awara", "Tuwo"];
var anotherFavoriteFood = "Pasta";
var additionalFavoriteFood = "Tacos";

// Adding new favorite foods
favoriteFoods.push(anotherFavoriteFood);
favoriteFoods.push(additionalFavoriteFood);

// Displaying favorite foods
foodElement.textContent = favoriteFoods.join(", ");


// Removing the first and last elements
var removedFirstFood = favoriteFoods.shift();
var removedLastFood = favoriteFoods.pop();

// Displaying the modified array
foodElement.innerHTML += `<br>${favoriteFoods}`;
foodElement.innerHTML += `<br>${favoriteFoods('<br>')}`;
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

