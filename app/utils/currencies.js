const currencies = {
  EUR: {
    name: 'Euro',
    shortcut: 'EUR',
    sign: '€',
  },
  GBP: {
    name: 'British Pound',
    shortcut: 'GBP',
    sign: '£',
  },
  USD: {
    name: 'American Dollar',
    shortcut: 'USD',
    sign: '$',
  },
};

const currencyTypeToSelect = {
  from: 'from',
  to: 'to',
};

const forceTwoDigitsAfterDot = number => +number.toFixed(2);

export { currencyTypeToSelect, forceTwoDigitsAfterDot };
export default currencies;
