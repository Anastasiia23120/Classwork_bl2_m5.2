const numbers = [1, 9, 6, 2, 3, 10, 20, 100];
const sortedNumbers = numbers.toSorted();

console.log('numbers: ', numbers);
console.log('sortedNumbers: ', sortedNumbers);
//* ----------------------------------------------------------
const letters = ['b', 'd', 'a', 'c', 'S'];
const sortedLetters = letters.toSorted();

console.log('letters: ', letters);
console.log('sortedLetters: ', sortedLetters);
//* ----------------------------------------------------------
// const numbers = [1, 6, 2, 3, 9, 10, 22, 34];
// const sortedNumbers = numbers.toSorted((a, b) => {
//   return a - b;
// });

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);
//* ----------------------------------------------------------
// const letters = ['b', 'd', 'a', 'c', 'X', 'S', 'A'];
// const sortedLetters = letters.toSorted((a, b) => a.localeCompare(b));

// console.log('letters: ', letters);
// console.log('sortedLetters: ', sortedLetters);

// console.log('a'.localeCompare('A', 'en', { caseFirst: 'upper' }));
// console.log('a'.localeCompare('A', 'en', { caseFirst: 'lower' }));
//* ----------------------------------------------------------
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

console.table(players);

const sortedByBestPlayers = players.toSorted((a, b) => {
  return a.timePlayed - b.timePlayed;
});

console.table(sortedByBestPlayers);
//* ----------------------------------------------------------
const sortedByName = players.toSorted((a, b) => {
  return a.name.localeCompare(b.name);
});

console.table(sortedByName);
