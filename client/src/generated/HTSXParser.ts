// Generated stub parser for HTSX
import { Parser, CommonTokenStream } from 'antlr4';

export class HTSXParser extends Parser {
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
