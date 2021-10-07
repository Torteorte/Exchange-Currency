export function formatDate(date) {
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}

export const excludesKeysForInput = (e) => {
  const excludesKeys = ['-', '+'];

  if (excludesKeys.includes(e.key)) {
    e.preventDefault();
  }
};

export const neededCurrency = [
  { id: 1, name: 'UAH' },
  { id: 2, name: 'USD' },
  { id: 3, name: 'EUR' },
  { id: 4, name: 'PLN' },
  { id: 5, name: 'RUB' },
  { id: 6, name: 'BYN' },
  { id: 7, name: 'GBP' },
  { id: 8, name: 'ILS' },
  { id: 9, name: 'CNY' },
  { id: 10, name: 'JPY' }
];
