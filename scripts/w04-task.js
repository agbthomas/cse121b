/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Thomas Agbese',
    photo: "images/tom.jpg",
    favoriteFoods: [
        'Rice',
        'Beans',
        'Yam',
        'Tuwo',
        'Pasta',
        'Egusi'
    ],
    hobbies: [
        'Games',
        'Football',
        'Swimming'
    ],
    placesLived: []
};




/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Asaba',
        length: '20 years',
    },
    {
        place: 'Zaria',
        length: '6 years' 
    },
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name
/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo
document.getElementById('photo').alt = myProfile.name
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.favoriteFoods.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);

})

