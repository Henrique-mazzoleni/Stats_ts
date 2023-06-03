import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((match: string): string[] => match.split(','));

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

const manWins =
  matches.filter(
    (match: string[]): boolean =>
      match[1] === 'Man United' && match[5] === MatchResult.HomeWin
  ).length +
  matches.filter(
    (match: string[]): boolean =>
      match[2] === 'Man United' && match[5] === MatchResult.AwayWin
  ).length;

console.log(manWins);
