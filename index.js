// define an array of pets
const pets = [
  {
    id: 1,
    type: 'dog',
    breed: 'Labrador Retriever',
    name: 'Buddy',
    age: 2,
    image: 'https://via.placeholder.com/200x200?text=Buddy'
  },
  {
    id: 2,
    type: 'cat',
    breed: 'Siamese',
    name: 'Smokey',
    age: 4,
    image: 'https://via.placeholder.com/200x200?text=Smokey'
  },
  {
    id: 3,
    type: 'rabbit',
    breed: 'Lionhead Rabbit',
    name: 'Fluffy',
    age: 1,
    image: 'https://via.placeholder.com/200x200?text=Fluffy'
  }
];
// define a function to display the uploaded photo
function displayPhoto(photoUrl) {
    const photoContainer = document.getElementById('photo-container');
    // clear any existing photo
    photoContainer.innerHTML = '';
    // display the uploaded photo
    const img = document.createElement('img');
    img.src = photoUrl;
    photoContainer.appendChild(img);
  }
  
  // add an event listener to the photo input field
  const photoInput = document.getElementById('photo');
  photoInput.addEventListener('change', function() {
    const photoFile = photoInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      const photoUrl = reader.result;
      displayPhoto(photoUrl);
    });
    reader.readAsDataURL(photoFile);
  });
  

// define a function to display pets
function displayPets() {
  const petGrid = document.getElementById('pet-grid');
  // clear any existing pets
  petGrid.innerHTML = '';
  // filter pets by type and breed
  const type = document.getElementById('type').value;
  const breed = document.getElementById('breed').value;
  const filteredPets = pets.filter(pet => pet.type === type && pet.breed === breed);
  // display filtered pets
  filteredPets.forEach(pet => {
    const petDiv = document.createElement('div');
    petDiv.className = 'pet';
    petDiv.innerHTML = `
      <img src="${pet.image}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>${pet.breed}</p>
      <p>${pet.age} years old</p>
      <button onclick="adoptPet(${pet.id})">Adopt</button>
    `;
    petGrid.appendChild(petDiv);
  });
}

// define a function to handle pet adoption
function adoptPet(id) {
  const adoptedPet = pets.find(pet => pet.id === id);
  alert(`Congratulations! You adopted ${adoptedPet.name} the ${adoptedPet.breed}.`);
}


// add an event listener to the search bar
document.getElementById('search').addEventListener('input', displayPets);

// add event listeners to the filters
document.getElementById('type').addEventListener('change', displayPets);
document.getElementById('breed').addEventListener('change', displayPets);

// display pets on page load
displayPets();
