import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (match: string[]): MatchData => [
        dateStringToDate(match[0]),
        match[1],
        match[2],
        parseInt(match[3]),
        parseInt(match[4]),
        match[5] as MatchResult,
        match[6],
      ]
    );
  }
}
