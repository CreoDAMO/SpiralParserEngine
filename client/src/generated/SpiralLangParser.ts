// Generated stub parser for SpiralLang
import { Parser, CommonTokenStream } from 'antlr4';

export class SpiralLangParser extends Parser {
  constructor(input: CommonTokenStream) {
    super(input);
  }

  // Entry point for parsing
  program(): any {
    return {
      children: [],
      getText: () => 'stub',
      constructor: { name: 'ProgramContext' }
    };
  }
}
