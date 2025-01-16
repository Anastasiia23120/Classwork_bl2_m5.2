const numbers = [5, 10, 15, 20, 25, 0];
const filteredNumbers = numbers.filter(el => el > 15);

console.log('numbers: ', numbers);
console.log('filteredNumbers: ', filteredNumbers);
//* ----------------------------------------------------------
const allCars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];

const filterByPrice = (cars, threshold) => cars.filter(el => el.price < threshold);
console.log(filterByPrice(allCars, 30000));
console.log(filterByPrice(allCars, 25000));
//* ----------------------------------------------------------
const getCarsWithDiscount = cars => cars.filter(el => el.onSale);

console.log(getCarsWithDiscount(allCars));
console.table(getCarsWithDiscount(allCars));
