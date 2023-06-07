import { MatchReader } from './MatchReader';
import { AverageGoalsAnalysis } from './analysers/AverageGoalsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';

const reader = MatchReader.fromCsv('football.csv');
reader.load();
const { matches } = reader;

const manWinsSummary = Summary.winsHTMLReport('Man United');
manWinsSummary.buildAndPrintReport(matches);

const manAvgGoalsSummary = new Summary(
  new AverageGoalsAnalysis('Man United'),
  new ConsoleReport()
);
manAvgGoalsSummary.buildAndPrintReport(matches);
