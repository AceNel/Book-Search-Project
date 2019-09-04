//constants for the api key, the search button and the input field where the user types
const api_key = "AIzaSyDdkUJrGPPVWMRg-enDhs2Y_2xvkvQT6lI";
const search_button = document.getElementById("search-button");
const search_input = document.getElementById("search-input");
const displayArea = document.getElementById("result");

//event listeners for the search button and the enter press
search_button.addEventListener("click", search);
document.addEventListener("keypress", function (e) {
  if (event.keyCode == 13) {
    search(e);
  }
})

//saves the value of the search query, validates it and starts the fetch process
function search(e) {
  e.preventDefault();
  if (search_input.value != "") {
    const raw = search_input.value.toLowerCase();
    const query = raw.replace(/\s/,"+");
    asyncCall(query);
  } else {
    alert("Please type in your search request")
  }
}

//makes the api call to google
async function asyncCall(query) {
  try {
    //axios is a open source js file which makes get request very easy
    let data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}s&key=${api_key}`);
    display(data); //loads in the data as cards into the dom
  } catch (err) {
    alert("Something went wrong. Please try again"); // If something goes wrong with the call, this is displayed
  }
}
