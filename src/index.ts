import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

const reader = new MatchReader(new CsvFileReader('football.csv'));
reader.load();
const { matches } = reader;

const manWins =
  matches.filter(
    (match: MatchData): boolean =>
      match[1] === 'Man United' && match[5] === MatchResult.HomeWin
  ).length +
  matches.filter(
    (match: MatchData): boolean =>
      match[2] === 'Man United' && match[5] === MatchResult.AwayWin
  ).length;

console.log(manWins);

console.log(dateStringToDate('15/05/2023'));
