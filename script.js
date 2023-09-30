// Payment modal - country selection
const searchBox = document.getElementById("payment-modal-search-country-input");
const countriesContainer = document.getElementById(
  "payment-modal-countries-container"
);
// Payment modal - currency selection
const currenciesSelectContainer = document.getElementById(
  "currencies-container"
);
const showSelectedCurrency = document.getElementById("show-selected-currency");
// Payment modal - payment method selection
const paymentMethodsContainer = document.getElementById(
  "payment-methods-container"
);
// --------==========variables=========---------
let selectedCountry = { name: { common: "United State" } };
let selectedCurrency;

// currencies variable-------------------------->
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

// payment method selection variables---------------------->
const paymentMethodsDescription = {
  idPassportRequired: `<p
class="card-text payment-modal-text-dark-gray payment-modal-font-xs"
>
Verification required:
<strong class="text-black">ID card</strong> or
<strong class="text-black">passport.</strong>
</p>`,
  socialSecurityNumberRequired: `<p
class="card-text payment-modal-text-dark-gray payment-modal-font-xs"
>
Verification required:
<strong class="text-black">Social Security Number</strong>
</p>`,
  robinhoodConnect: `<p
class="card-text payment-modal-text-dark-gray payment-modal-font-xs"
>
Buy and transfer instantly using your debit card,
bank account, or Robinhood balance. USA only
</p>`,
};
const paymentMethods = [
  {
    label: "Visa",
    value: "visa",
    description: paymentMethodsDescription.idPassportRequired,
  },
  {
    label: "Mastercard",
    value: "mastercard",
    description: paymentMethodsDescription.idPassportRequired,
  },
  {
    label: "Apple Pay",
    value: "applePay",
    description: paymentMethodsDescription.idPassportRequired,
  },
  {
    label: "Google Pay",
    value: "googlePay",
    description: paymentMethodsDescription.idPassportRequired,
  },
  {
    label: "Cash App",
    value: "cashApp",
    description: paymentMethodsDescription.socialSecurityNumberRequired,
  },
  {
    label: "Robinhood Connect",
    value: "robinhoodConnect",
    description: paymentMethodsDescription.robinhoodConnect,
  },
  {
    label: "SEPA",
    value: "sepa",
    description: paymentMethodsDescription.idPassportRequired,
  },
  {
    label: "REVOLUT",
    value: "revolut",
    description: paymentMethodsDescription.idPassportRequired,
  },
  {
    label: "PSE",
    value: "pse",
    description: paymentMethodsDescription.idPassportRequired,
  },
  {
    label: "Open Banking",
    value: "openBanking",
    description: paymentMethodsDescription.idPassportRequired,
  },
  {
    label: "Faster Payments",
    value: "fasterPayments",
    description: paymentMethodsDescription.idPassportRequired,
  },
];

const paymentMethodSupportedCountries = [
  {
    country: "United State",
    USD: {
      paymentMethods: [
        "Visa",
        "Mastercard",
        "Apple Pay",
        "Google Pay",
        "Cash App",
        "Robinhood Connect",
      ],
    },
  },
  {
    country: "Argentina",
    USD: {
      paymentMethods: ["Visa", "Mastercard"],
    },
  },
  {
    country: "Australia",
    AUD: {
      paymentMethods: ["Visa", "Mastercard", "Apple Pay", "Google Pay"],
    },
    USD: {
      paymentMethods: ["Visa", "Mastercard", "Google Pay"],
    },
    EURO: {
      paymentMethods: [
        "Visa",
        "Mastercard",
        "Apple Pay",
        "Google Pay",
        "SEPA",
        "REVOLUT",
      ],
    },
  },
  {
    country: "Belgium",
    EURO: {
      paymentMethods: [
        "Visa",
        "Mastercard",
        "Apple Pay",
        "Google Pay",
        "SEPA",
        "REVOLUT",
      ],
    },
  },
  {
    country: "Belize",
    BZD: {
      paymentMethods: ["Visa", "Mastercard"],
    },
    USD: {
      paymentMethods: ["Visa", "Mastercard"],
    },
  },
  {
    country: "British Virgin Island",

    USD: {
      paymentMethods: ["Visa", "Mastercard", "Apple Pay", "Google Pay"],
    },
  },
  {
    country: "Canada",

    USD: {
      paymentMethods: ["Visa", "Mastercard", "Apple Pay", "Google Pay"],
    },
    CAD: {
      paymentMethods: ["Visa", "Mastercard", "Apple Pay", "Google Pay"],
    },
  },
  {
    country: "Chile",
    CLP: {
      paymentMethods: ["Visa"],
    },
    USD: {
      paymentMethods: ["Visa", "Mastercard"],
    },
  },
  {
    country: "Colombia",
    COP: {
      paymentMethods: ["PSE"],
    },
  },
  {
    country: "Costa Rica",
    CRC: {
      paymentMethods: ["Visa", "Mastercard"],
    },
    USD: {
      paymentMethods: ["Visa", "Mastercard"],
    },
  },
  {
    country: "Croatia",
    EURO: {
      paymentMethods: [
        "Visa",
        "Mastercard",
        "Apple Pay",
        "Google Pay",
        "SEPA",
        "REVOLUT",
      ],
    },
  },
  {
    country: "Cyprus",
    EURO: {
      paymentMethods: [
        "Visa",
        "Mastercard",
        "Apple Pay",
        "Google Pay",
        "SEPA",
        "REVOLUT",
      ],
    },
  },
  {
    country: "Denmark",
    DKK: {
      paymentMethods: ["Visa", "Mastercard", "Apple Pay", "Google Pay"],
    },
    EURO: {
      paymentMethods: ["Visa", "Mastercard", "Apple Pay", "Google Pay"],
    },
  },
  {
    country: "Dominican Republic",
    DOP: {
      paymentMethods: ["Visa", "Mastercard"],
    },
  },
  {
    country: "United Kingdom",
    GBP: {
      paymentMethods: [
        "Visa",
        "Mastercard",
        "Apple Pay",
        "Google Pay",
        "Faster Payments",
        "Open Banking",
      ],
    },
  },
];

// ====================================================
// ======country selection sectionsection / p-1========
// ====================================================
// handle selected country
const handleSelectedCountry = (country) => {
  console.log(country);
  selectedCountry = country;
};

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
      newDiv.addEventListener("click", () => handleSelectedCountry(country));
    });
  } else {
    countriesContainer.innerHTML = `<p class="h-100 text-center mt-5 ">No countries found</p>`;
  }
};
// call while rendering for the first time
getFilteredData();

// ====================================================
// ======payment method selection section / p-2========
// ====================================================

const handleSelectedCurrencies = (currency) => {
  showSelectedCurrency.innerHTML = `<img src="../asset/flags/${currency.value}.svg" alt=${currency.label} /> <span>${currency.label}</span>`;
  selectedCurrency = currency.label;
  // render only available payment methods
  handleRenderPaymentMethodCards(selectedCountry.name.common, selectedCurrency);
};

// render currencies
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
  const currencyWithFlag = `<img src="../asset/flags/${currency.value}.svg" alt=${currency.label} /> <span>${currency.label}</span>`;
  newCurrencyOption.innerHTML = currencyWithFlag;
  newCurrencyOption.addEventListener("click", () =>
    handleSelectedCurrencies(currency)
  );
  currenciesSelectContainer.appendChild(newCurrencyOption);
});

// get selected payment option
const handleSelectedPaymentMethod = (paymentMethod, card) => {
  console.log("clicked", paymentMethod);
  paymentMethodsContainer.childNodes.forEach((element) => {
    element?.classList?.remove("selected-payment-method");
  });
  card.classList.add("selected-payment-method");
};

// get only available payment methods based on country and currency
const handleRenderPaymentMethodCards = (selectedCountry, selectedCurrency) => {
  console.log(selectedCurrency);

  const isAvailablePaymentMethods = paymentMethodSupportedCountries.find(
    (method) => method.country === selectedCountry && method[selectedCurrency]
  );
  if (isAvailablePaymentMethods) {
    const availablePaymentMethods = isAvailablePaymentMethods[
      selectedCurrency
    ].paymentMethods.map((availablePaymentMethod) =>
      paymentMethods.find(
        (paymentMethod) => paymentMethod.label === availablePaymentMethod
      )
    );
    renderPaymentCards(availablePaymentMethods);
  } else {
    // no card found
    paymentMethodsContainer.innerHTML = `<p class="text-center">No Payment Method Available in <strong>${selectedCountry}</strong> and <strong>${selectedCurrency}</strong> currency!</p>`;
  }
};
// render payment method cards
const renderPaymentCards = (availablePaymentMethods) => {
  paymentMethodsContainer.innerHTML = "";
  // set all payment method card to DOM
  availablePaymentMethods?.forEach((paymentMethod) => {
    const newPaymentMethodCard = document.createElement("label");
    newPaymentMethodCard.classList.add("card", "p-2");
    newPaymentMethodCard.setAttribute("for", paymentMethod.value);
    const cardBody = `
  <div class="d-flex justify-content-between align-items-center my-auto   ">
      <div class="d-flex align-items-center gap-1 ">
      <div class="payment-logo-container">
        <img
        class="img-fluid d-block mx-auto"
          src="../asset/logos/${paymentMethod.value}.svg"
          alt="${paymentMethod.label} Image"
        />
        </div>
        <div>
          <h6 class="card-title fs-6">${paymentMethod.label}</h6>
          ${paymentMethod.description}
        </div>
      </div>
      <input
        type="radio"
        class="form-check-input"
        id="${paymentMethod.value}"
        name="payment-method-card"
      />
    </div>
  `;
    newPaymentMethodCard.innerHTML = cardBody;
    newPaymentMethodCard.addEventListener("click", () =>
      handleSelectedPaymentMethod(paymentMethod, newPaymentMethodCard)
    );
    paymentMethodsContainer.appendChild(newPaymentMethodCard);
  });
};

// for initial currency
handleSelectedCurrencies(currencies[0]);
