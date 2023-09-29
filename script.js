// internal imports

// ====================================================
// ======country selection sectionsection / p-1========
// ====================================================
const searchBox = document.getElementById("payment-modal-search-country-input");
const countriesContainer = document.getElementById(
  "payment-modal-countries-container"
);

searchBox?.addEventListener("keyup", function (event) {
  const searchKey = event.target.value;
  getFilteredData(searchKey);
});

const getFilteredData = (searchKey) => {
  if (!searchKey) {
    searchKey = "a";
  }
  fetch(
    `https://restcountries.com/v3.1/name/${searchKey}?sort=desc&fields=name,flags`
  )
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
      newDiv.classList.add(
        "d-flex",
        "align-items-center",
        "px-3",
        "payment-modal-country"
      );
      newDiv.innerHTML = `<img src=${country?.flags?.svg} alt="" height='18' width='24'/>
    <p style="font-size: 18px; margin-top: 12px; margin-left: 20px">${country?.name?.common}</p>`;
      countriesContainer?.appendChild(newDiv);
    });
  } else {
    countriesContainer.innerHTML = `<p class="h-100 text-center mt-5 ">No countries found</p>`;
  }
};
getFilteredData();

// ====================================================
// ======payment method selection section / p-2========
// ====================================================
const currencies = [
  {
    label: "USD",
    value: "usd",
  },
  {
    label: "EURO",
    value: "euro",
  },
  {
    label: "AUD",
    value: "aud",
  },
  {
    label: "GBP",
    value: "gbp",
  },
  {
    label: "BZD",
    value: "bzd",
  },
  {
    label: "CAD",
    value: "cad",
  },
  {
    label: "CLP",
    value: "clp",
  },
  {
    label: "COP",
    value: "cop",
  },
  {
    label: "CRC",
    value: "crc",
  },
  {
    label: "DKK",
    value: "dkk",
  },
  {
    label: "DOP",
    value: "dop",
  },
];
const currenciesSelectContainer = document.getElementById(
  "currencies-container"
);

currencies.forEach((currency) => {
  const newCurrencyOption = document.createElement("button");
  newCurrencyOption.classList.add(
    "border-0",
    "bg-transparent",
    "d-flex",
    "align-items-center",
    "gap-2",
    "my-2"
  );
  newCurrencyOption.innerHTML = `<img src="../asset/flags/${currency.value}.svg" alt=${currency.label} /> <span>${currency.label}</span>`;
  currenciesSelectContainer.appendChild(newCurrencyOption);
});
