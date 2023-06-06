import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { Analyser } from '../Summary';

export class WinAnalyser implements Analyser {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    const numWins =
      matches.filter(
        (match: MatchData): boolean =>
          match[1] === this.team && match[5] === MatchResult.HomeWin
      ).length +
      matches.filter(
        (match: MatchData): boolean =>
          match[2] === this.team && match[5] === MatchResult.AwayWin
      ).length;

    return `${this.team} has won ${numWins} matches.`;
  }
}
