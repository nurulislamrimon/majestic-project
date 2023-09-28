const searchBox = document.getElementById("search-country-input");
const countriesContainer = document.getElementById("countries-container");

searchBox.addEventListener("keyup", function (event) {
  const searchKey = event.target.value;
  getFilteredData(searchKey);
});

const getFilteredData = (searchKey) => {
  if (!searchKey) {
    searchKey = "a";
  }
  fetch(`https://restcountries.com/v3.1/name/${searchKey}?fields=name,flags`)
    .then((response) => response.json())
    .then((data) => {
      renderCountries(data);
    })
    .catch((e) => console.log(e));
};
const renderCountries = (countries) => {
  countriesContainer.innerHTML = "";
  if (countries.length) {
    countries?.map((country) => {
      const newDiv = document.createElement("div");
      newDiv.classList.add("d-flex", "align-items-center");
      newDiv.innerHTML = `<img src=${country?.flags?.svg} alt="" height='18' width='24'/>
    <p style="font-size: 18px; margin-top: 12px; margin-left: 20px">${country?.name?.common}</p>`;
      countriesContainer.appendChild(newDiv);
    });
  } else {
    countriesContainer.innerHTML = `<p class="h-100 text-center mt-5 ">No countries found</p>`;
  }
};
getFilteredData("a");
