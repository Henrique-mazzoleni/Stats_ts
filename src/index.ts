import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((match: string): string[] => match.split(','));

const manWins =
  matches.filter(
    (match: string[]): boolean => match[1] === 'Man United' && match[5] === 'H'
  ).length +
  matches.filter(
    (match: string[]): boolean => match[2] === 'Man United' && match[5] === 'A'
  ).length;

console.log(manWins);
