import { MatchData } from './MatchData';
import { WinAnalyser } from './analysers/WinAnalyser';
import { HTMLReport } from './reportTargets/HTMLReport';

export interface Analyser {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsHTMLReport(team: string): Summary {
    return new Summary(new WinAnalyser(team), new HTMLReport());
  }

  constructor(public analyser: Analyser, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyser.run(matches);
    this.outputTarget.print(output);
  }
}
