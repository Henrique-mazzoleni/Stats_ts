import { MatchData } from '../MatchData';
import { Analyser } from '../Summary';

export class AverageGoalsAnalysis implements Analyser {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    const teamMatches = matches.filter(
      (match: MatchData): boolean => match[1] === this.team
    );

    const numGoals = teamMatches
      .map((match: MatchData): number => {
        if (this.team === match[1]) return match[3];
        return match[4];
      })
      .reduce(
        (accGoals: number, currGoals: number): number => accGoals + currGoals
      );

    const avgGoals = numGoals / teamMatches.length;

    return `${this.team} had an average of ${avgGoals.toFixed(
      2
    )} goals per match.`;
  }
}
