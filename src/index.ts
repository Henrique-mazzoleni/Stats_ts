import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinAnalyser } from './analysers/WinAnalyser';
import { AverageGoalsAnalysis } from './analysers/AverageGoalsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';
import { HTMLReport } from './reportTargets/HTMLReport';

const reader = new MatchReader(new CsvFileReader('football.csv'));
reader.load();
const { matches } = reader;
const report = new HTMLReport();

const manWinsSummary = new Summary(new WinAnalyser('Man United'), report);
manWinsSummary.buildAndPrintReport(matches);

const manAvgGoalsSummary = new Summary(
  new AverageGoalsAnalysis('Man United'),
  new ConsoleReport()
);
manAvgGoalsSummary.buildAndPrintReport(matches);
