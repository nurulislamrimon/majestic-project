// ======select dom========
// all container selection
const mainContainerPages =
  document.getElementsByClassName("payment-modal-body");
// Payment modal - country selection / p -1
const countrySearchInputBox = document.getElementById(
  "payment-modal-search-country-input"
);
const countriesContainer = document.getElementById(
  "payment-modal-countries-container"
);
const allCountries = document.getElementsByClassName("payment-modal-country");

const countryLetterInObserLetterContainer = window.getComputedStyle(
  countriesContainer,
  ":after"
);
// Payment modal - currency selection / p-2
const currenciesSelectContainer = document.getElementById(
  "currencies-container"
);
const showSelectedCurrency = document.getElementById("show-selected-currency");
// Payment modal - payment method selection / p-2
const paymentMethodsContainer = document.getElementById(
  "payment-method-cards-container"
);
const paymentAmountInput = document.getElementById("payment-amount-input");
// Payment modal - confirm payment / p-3
const confirmOrderCountryInfoContainer = document.getElementById(
  "confirm-order-country-info-container"
);
const confirmOrderPaymentMethodContainer = document.getElementById(
  "confirm-order-payment-method-container"
);
const confirmPaymentAmount = document.getElementById("confirm-payment-amount");
const paymentMethodStepNextBtn = document.getElementById(
  "payment-method-step-next-btn"
);
const spinnerContainer = document.getElementById(
  "payment-modal-spinner-container"
);
// --------==========variables=========---------
let activePage = 0;
let selectedCountry = {
  name: { common: "United States" },
  flags: { svg: "https://flagcdn.com/usa.svg" },
};
let selectedCurrency = "USD";
let selectedAmount = 0;
let selectedPaymentMethod = { label: "Visa" };

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
const paymentMethodsDescriptions = {
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
    description: paymentMethodsDescriptions.idPassportRequired,
  },
  {
    label: "Mastercard",
    value: "mastercard",
    description: paymentMethodsDescriptions.idPassportRequired,
  },
  {
    label: "Apple Pay",
    value: "applePay",
    description: paymentMethodsDescriptions.idPassportRequired,
  },
  {
    label: "Google Pay",
    value: "googlePay",
    description: paymentMethodsDescriptions.idPassportRequired,
  },
  {
    label: "Cash App",
    value: "cashApp",
    description: paymentMethodsDescriptions.socialSecurityNumberRequired,
  },
  {
    label: "Robinhood Connect",
    value: "robinhoodConnect",
    description: paymentMethodsDescriptions.robinhoodConnect,
  },
  {
    label: "SEPA",
    value: "sepa",
    description: paymentMethodsDescriptions.idPassportRequired,
  },
  {
    label: "REVOLUT",
    value: "revolut",
    description: paymentMethodsDescriptions.idPassportRequired,
  },
  {
    label: "PSE",
    value: "pse",
    description: paymentMethodsDescriptions.idPassportRequired,
  },
  {
    label: "Open Banking",
    value: "openBanking",
    description: paymentMethodsDescriptions.idPassportRequired,
  },
  {
    label: "Faster Payments",
    value: "fasterPayments",
    description: paymentMethodsDescriptions.idPassportRequired,
  },
];

const paymentMethodSupportedCountries = [
  {
    country: "United States",
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
    country: "Austria",
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
    country: "British Virgin Islands",

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
// ======active and inactive pages========
// ====================================================
const handleSpinnerActivity = () => {
  spinnerContainer.classList.remove("d-none");
  spinnerContainer.classList.add("d-block");
  const spinnerTimeout = setTimeout(() => {
    spinnerContainer.classList.remove("d-block");
    spinnerContainer.classList.add("d-none");
    clearTimeout(spinnerTimeout);
  }, 500);
};
const activeNextPage = () => {
  handleSpinnerActivity();
  if (activePage <= mainContainerPages.length - 1) {
    activePage++;
    for (const page of mainContainerPages) {
      page.classList.add("d-none");
    }
    mainContainerPages[activePage - 1].classList.remove("d-none");
  }
};
const activePreviousPage = () => {
  handleSpinnerActivity();
  if (activePage > 0) {
    for (const page of mainContainerPages) {
      page.classList.add("d-none");
    }
    activePage -= 2;
    mainContainerPages[activePage].classList.remove("d-none");
    activePage++;
  }
};
// close and clear all state
const clearAllSession = () => {
  activePage = 0;
  selectedCountry = {
    name: { common: "United States" },
    flags: { svg: "https://flagcdn.com/usa.svg" },
  };
  selectedCurrency = "USD";
  selectedAmount = 0;
  selectedPaymentMethod = { label: "Visa" };
  paymentAmountInput.value = "";
  countrySearchInputBox.value = "";
};
const handleCloseAllPage = () => {
  activePage = 0;
  handleSelectedCurrency({ label: "USD", value: "usd" });
  activeNextPage();
  clearAllSession();
  getCountriesOnSearchAndRender();
  handleStepNextBtnState();
};
// ====================================================
// =========country selection section / p-1============
// ====================================================
// handle selected country
const handleSelectedCountry = (country) => {
  selectedCountry = country;
  // render only available payment methods
  handleRenderPaymentMethodCards(selectedCountry.name.common, selectedCurrency);
  handleRenderConfirmCountryWithFlag();
  activeNextPage();
};
const handleSearchCountryInput = (event) => {
  const searchKey = event.target.value;
  getCountriesOnSearchAndRender(searchKey);
};

const getCountriesOnSearchAndRender = (searchKey) => {
  if (!searchKey) {
    searchKey = "a";
  }
  fetch(
    `https://restcountries.com/v3.1/name/${searchKey}?sort=desc&fields=name,flags`
  )
    .then((response) => response.json())
    .then((data) => {
      renderCountries(
        data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
      );
    })
    .catch((e) => console.log(e));
  handleChangeCountryLetter("A");
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
      newDiv.innerHTML = `<img loading="lazy" src=${country?.flags?.svg} alt="" height='18' width='24'/>
    <p style="font-size: 18px; margin-top: 12px; margin-left: 20px">${country?.name?.common}</p>`;
      countriesContainer?.appendChild(newDiv);
      newDiv.addEventListener("click", () => handleSelectedCountry(country));
    });

    handleCountryObserver();
  } else {
    countriesContainer.innerHTML = `<p class="h-100 text-center mt-5 ">No countries found</p>`;
  }
};

// handle change letter
const countryObserver = new IntersectionObserver(
  (entries) => hadleIntersectedCountry(entries),
  {
    threshold: 0,
  }
);
const hadleIntersectedCountry = (entries) => {
  const letter = entries[1]?.target?.innerText[0];
  const existLetter =
    countryLetterInObserLetterContainer.getPropertyValue("content")[1];
  if (letter && letter !== existLetter) {
    handleChangeCountryLetter(entries[1]?.target?.innerText[0]);
  }
};
const handleCountryObserver = () => {
  for (const country of allCountries) {
    countryObserver.observe(country);
  }
};

const handleChangeCountryLetter = (newLetter) => {
  countriesContainer.style.setProperty("--letter", `"${newLetter}"`);
};
// ====================================================
// ======payment method selection section / p-2========
// ====================================================
// get payment input
const handleInputPaymentAmount = () => {
  selectedAmount = paymentAmountInput.value;
  handleRenderConfirmAmount();
  handleStepNextBtnState();
};
// handle selected currency
const handleSelectedCurrency = (currency) => {
  if (showSelectedCurrency) {
    showSelectedCurrency.innerHTML = `<img loading="lazy" src="../asset/flags/${currency.value}.svg" alt=${currency.label} /> <span>${currency.label}</span>`;
  }
  selectedCurrency = currency.label;
  // render only available payment methods
  handleRenderPaymentMethodCards(selectedCountry.name.common, currency.label);
};

// render currencies
const renderCurrencies = () => {
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
    const currencyWithFlag = `<img loading="lazy" src="../asset/flags/${currency.value}.svg" alt=${currency.label} /> <span>${currency.label}</span>`;
    newCurrencyOption.innerHTML = currencyWithFlag;
    newCurrencyOption.addEventListener("click", () =>
      handleSelectedCurrency(currency)
    );
    currenciesSelectContainer?.appendChild(newCurrencyOption);
  });
};

// get selected payment option
const handleSelectedPaymentMethod = (paymentMethod, selectedCard) => {
  paymentMethodsContainer.childNodes.forEach((element) => {
    element?.classList?.remove("selected-payment-method");
  });
  selectedCard.classList.add("selected-payment-method");
  selectedPaymentMethod = paymentMethod;
  handleRenderConfirmPaymentMethod();
  handleStepNextBtnState();
};

// get only available payment methods based on country and currency
const handleRenderPaymentMethodCards = (selectedCountry, selectedCurrency) => {
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
    if (paymentMethodsContainer) {
      paymentMethodsContainer.innerHTML = `<p class="position-absolute start-0 end-0 text-center top-50 ">No Payment Method Available in <strong> ${selectedCountry} </strong> and <strong> ${selectedCurrency} </strong> currency!</p>`;
    }
  }
};
// render payment method cards
const renderPaymentCards = (availablePaymentMethods) => {
  if (paymentMethodsContainer) {
    paymentMethodsContainer.innerHTML = "";
    // set all payment method card to DOM
    availablePaymentMethods?.forEach((paymentMethod) => {
      const newPaymentMethodCard = document.createElement("label");
      newPaymentMethodCard.classList.add("card", "p-2");
      newPaymentMethodCard.setAttribute("for", paymentMethod.value);
      const cardBody = `
  <div class="d-flex justify-content-between align-items-center my-auto">
      <div class="d-flex align-items-center gap-1 w-75">
        <div class="w-25 d-flex justify-content-center ">
          <img
            src="../asset/logos/${paymentMethod.value}.svg"
            alt="${paymentMethod.label} Image"
            height="40"
            width="70"
          />
        </div>
        <div class="w-75 ">
            <h6 class="card-title fs-6">${paymentMethod.label}</h6>
            <small>${paymentMethod.description}</small>
        </div>
      </div>
      <div class="w-25">
      <input
        type="radio"
        class="form-check-input ms-auto d-block"
        id="${paymentMethod.value}"
        name="payment-method-card"
      />
      </div>
    </div>
  `;
      newPaymentMethodCard.innerHTML = cardBody;
      newPaymentMethodCard.addEventListener("click", () =>
        handleSelectedPaymentMethod(paymentMethod, newPaymentMethodCard)
      );
      paymentMethodsContainer.appendChild(newPaymentMethodCard);
    });
  }
};

const handleStepNextBtnState = () => {
  if (selectedAmount > 0 && selectedPaymentMethod.value) {
    paymentMethodStepNextBtn.removeAttribute("disabled");
  } else {
    paymentMethodStepNextBtn.setAttribute("disabled", true);
  }
};

// ====================================================
// ======Review & confirm payment section / p-3========
// ====================================================
// selected country render

const handleRenderConfirmCountryWithFlag = () => {
  if (confirmOrderCountryInfoContainer) {
    confirmOrderCountryInfoContainer.innerHTML = `
  <img loading="lazy" src="${selectedCountry?.flags?.svg}" width="30"/>
      <p class="my-auto ">${selectedCountry?.name?.common}</p>`;
  }
};
const handleRenderConfirmPaymentMethod = () => {
  //  payment method render
  if (confirmOrderPaymentMethodContainer) {
    confirmOrderPaymentMethodContainer.innerHTML = `
      <img loading="lazy" src="../asset/logos/${selectedPaymentMethod.value.toLowerCase()}.svg" alt="${
      selectedPaymentMethod.label
    } image" /> &nbsp; <span>${selectedPaymentMethod.label}</span>`;
  }
};
const handleRenderConfirmAmount = () => {
  if (confirmPaymentAmount) {
    confirmPaymentAmount.innerHTML = `
    ${selectedAmount}<span class="h6 ms-2 ">${selectedCurrency}</span>`;
  }
};

// ==================================================
// get datas====================================
// ==================================================
const paymentAllInfo = () => {
  const paymentInfo = {
    country: selectedCountry,
    amount: selectedAmount,
    paymentMethod: selectedPaymentMethod,
    currency: selectedCurrency,
  };
  console.log(paymentInfo);
};

// ==================================================
// initial render====================================
// ==================================================
renderCurrencies();
getCountriesOnSearchAndRender();
handleSelectedCurrency(currencies[0]);
