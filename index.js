let name = document.getElementById("name");
let restaurant = document.getElementById("restaurant");
let imageurl = document.getElementById("image-url");
let rating = document.getElementById("rating");
let comment = document.getElementById("comment");
let imgsContainer = document.getElementById("imgs-container");
let selectedFood;
let form = document.getElementById("form")

const imageResult = document.getElementById("image-result");
const nameResult = document.getElementById("name-result");
const restaurantResult = document.getElementById("restaurant-result");
const ratingResult = document.getElementById("rating-result");
const commentResult = document.getElementById("comment-result");

const foods = [
  {
    id: 1,
    name: "Chicken Biryani",
    restaurant: "Swahili Dishes",
    image: "imgs/chicken-biryani.jpg",
    rating: 7,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Githeri",
    restaurant: "Kibandaski",
    image: "./imgs/githeri.jpg",
    rating: 5,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Pilau",
    restaurant: "Swahili Dishes",
    image: "./imgs/pilau.jpg",
    rating: 9,
    comment: "Extremely Tasty!",
  },
  {
    id: 4,
    name: "ugali",
    restaurant: "Kibandaski",
    image: "./imgs/ugali.jpg",
    rating: 4,
    comment: "Eat It Once In A While",
  },
  {
    id: 5,
    name: "Viazi Karai",
    restaurant: "Swahili Dishes",
    image: "./imgs/viazi-karai.jpg",
    rating: 8,
    comment: "Great Evening Snack!",
  },
];

function handleSpawn() {
  imgsContainer.innerHTML = ""
  foods.forEach((food) => {
    const img = document.createElement("img");
    img.src = food.image;
    img.alt = food.name;
    img.onclick = () => {
      selectedFood = food;
      handleSelectFood();
    };
    imgsContainer.append(img)
  });
}

handleSpawn()

function handleSelectFood() {
  imageResult.src = selectedFood.image
  nameResult.innerText = selectedFood.name
  restaurantResult.innerText = selectedFood.restaurant
  ratingResult.innerText = selectedFood.rating
  commentResult.innerText = selectedFood.comment
}

function handleCreate(e) {
  e.preventDefault()
  const name = e.target.elements.namedItem("name").value
  const restaurant = e.target.elements.namedItem("restaurant").value
  const imageUrl = e.target.elements.namedItem("image-url").value
  const rating = e.target.elements.namedItem("rating").value
  const comment = e.target.elements.namedItem("comment").value
  const newFood = {
    id: foods.length + 1,
    name,
    restaurant,
    image: imageUrl,
    rating,
    comment,
  };
  foods.push(newFood)
  handleSpawn()
}

form.addEventListener("submit", handleCreate)