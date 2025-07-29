// Generated from client/src/grammars/SpiralScript.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import SpiralScriptListener from "./SpiralScriptListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class SpiralScriptParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly IMPORT = 7;
	public static readonly FROM = 8;
	public static readonly FUNCTION = 9;
	public static readonly CLASS = 10;
	public static readonly EXTENDS = 11;
	public static readonly CONST = 12;
	public static readonly LET = 13;
	public static readonly VAR = 14;
	public static readonly AWAIT = 15;
	public static readonly QUANTUM = 16;
	public static readonly PHI_CALC = 17;
	public static readonly HADAMARD = 18;
	public static readonly CNOT = 19;
	public static readonly PAULI_X = 20;
	public static readonly PAULI_Y = 21;
	public static readonly PAULI_Z = 22;
	public static readonly PHI_GATE = 23;
	public static readonly MEASURE = 24;
	public static readonly PHI_CONSTANT = 25;
	public static readonly SPIRAL_CONSTANT = 26;
	public static readonly RESONANCE = 27;
	public static readonly ENTROPY = 28;
	public static readonly HARMONIC = 29;
	public static readonly TIMES = 30;
	public static readonly DIVIDE = 31;
	public static readonly PLUS = 32;
	public static readonly MINUS = 33;
	public static readonly EQUALS = 34;
	public static readonly NOT_EQUALS = 35;
	public static readonly LESS_THAN = 36;
	public static readonly GREATER_THAN = 37;
	public static readonly AND = 38;
	public static readonly OR = 39;
	public static readonly NOT = 40;
	public static readonly NUMBER = 41;
	public static readonly STRING = 42;
	public static readonly BOOLEAN = 43;
	public static readonly IDENTIFIER = 44;
	public static readonly WS = 45;
	public static readonly LINE_COMMENT = 46;
	public static readonly BLOCK_COMMENT = 47;
	public static readonly LPAREN = 48;
	public static readonly RPAREN = 49;
	public static readonly LBRACE = 50;
	public static readonly RBRACE = 51;
	public static readonly LBRACKET = 52;
	public static readonly RBRACKET = 53;
	public static readonly SEMICOLON = 54;
	public static readonly COMMA = 55;
	public static readonly DOT = 56;
	public static readonly COLON = 57;
	public static readonly ASSIGN = 58;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_importDeclaration = 3;
	public static readonly RULE_functionDeclaration = 4;
	public static readonly RULE_classDeclaration = 5;
	public static readonly RULE_variableDeclaration = 6;
	public static readonly RULE_quantumBlock = 7;
	public static readonly RULE_quantumStatement = 8;
	public static readonly RULE_quantumGate = 9;
	public static readonly RULE_phiGate = 10;
	public static readonly RULE_quantumMeasurement = 11;
	public static readonly RULE_phiCalculation = 12;
	public static readonly RULE_phiExpression = 13;
	public static readonly RULE_blockStatement = 14;
	public static readonly RULE_expression = 15;
	public static readonly RULE_primary = 16;
	public static readonly RULE_parameterList = 17;
	public static readonly RULE_parameter = 18;
	public static readonly RULE_expressionList = 19;
	public static readonly RULE_identifierList = 20;
	public static readonly RULE_type = 21;
	public static readonly RULE_identifier = 22;
	public static readonly literalNames: (string | null)[] = [ null, "'number'",
                                                            "'string'",
                                                            "'boolean'",
                                                            "'PhiSeed'",
                                                            "'QuantumState'",
                                                            "'TrustUnit'",
                                                            "'import'",
                                                            "'from'", "'function'",
                                                            "'class'", "'extends'",
                                                            "'const'", "'let'",
                                                            "'var'", "'await'",
                                                            "'quantum'",
                                                            "'phi_calc'",
                                                            null, null,
                                                            null, null,
                                                            null, null,
                                                            "'measure'",
                                                            null, null,
                                                            null, "'entropy'",
                                                            "'harmonic'",
                                                            "'*'", "'/'",
                                                            "'+'", "'-'",
                                                            "'=='", "'!='",
                                                            "'<'", "'>'",
                                                            "'&&'", "'||'",
                                                            "'!'", null,
                                                            null, null,
                                                            null, null,
                                                            null, null,
                                                            "'('", "')'",
                                                            "'{'", "'}'",
                                                            "'['", "']'",
                                                            "';'", "','",
                                                            "'.'", "':'",
                                                            "'='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null,
                                                             null, null,
                                                             null, null,
                                                             null, "IMPORT",
                                                             "FROM", "FUNCTION",
                                                             "CLASS", "EXTENDS",
                                                             "CONST", "LET",
                                                             "VAR", "AWAIT",
                                                             "QUANTUM",
                                                             "PHI_CALC",
                                                             "HADAMARD",
                                                             "CNOT", "PAULI_X",
                                                             "PAULI_Y",
                                                             "PAULI_Z",
                                                             "PHI_GATE",
                                                             "MEASURE",
                                                             "PHI_CONSTANT",
                                                             "SPIRAL_CONSTANT",
                                                             "RESONANCE",
                                                             "ENTROPY",
                                                             "HARMONIC",
                                                             "TIMES", "DIVIDE",
                                                             "PLUS", "MINUS",
                                                             "EQUALS", "NOT_EQUALS",
                                                             "LESS_THAN",
                                                             "GREATER_THAN",
                                                             "AND", "OR",
                                                             "NOT", "NUMBER",
                                                             "STRING", "BOOLEAN",
                                                             "IDENTIFIER",
                                                             "WS", "LINE_COMMENT",
                                                             "BLOCK_COMMENT",
                                                             "LPAREN", "RPAREN",
                                                             "LBRACE", "RBRACE",
                                                             "LBRACKET",
                                                             "RBRACKET",
                                                             "SEMICOLON",
                                                             "COMMA", "DOT",
                                                             "COLON", "ASSIGN" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "declaration", "importDeclaration", "functionDeclaration",
		"classDeclaration", "variableDeclaration", "quantumBlock", "quantumStatement",
		"quantumGate", "phiGate", "quantumMeasurement", "phiCalculation", "phiExpression",
		"blockStatement", "expression", "primary", "parameterList", "parameter",
		"expressionList", "identifierList", "type", "identifier",
	];
	public get grammarFileName(): string { return "SpiralScript.g4"; }
	public get literalNames(): (string | null)[] { return SpiralScriptParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return SpiralScriptParser.symbolicNames; }
	public get ruleNames(): string[] { return SpiralScriptParser.ruleNames; }
	public get serializedATN(): number[] { return SpiralScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, SpiralScriptParser._ATN, SpiralScriptParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, SpiralScriptParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 100923008) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 287) !== 0)) {
				{
				{
				this.state = 46;
				this.statement();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 52;
			this.match(SpiralScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, SpiralScriptParser.RULE_statement);
		try {
			this.state = 60;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
			case 9:
			case 10:
			case 12:
			case 13:
			case 14:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 54;
				this.declaration();
				}
				break;
			case 15:
			case 25:
			case 26:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 48:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 55;
				this.expression(0);
				this.state = 56;
				this.match(SpiralScriptParser.SEMICOLON);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 58;
				this.quantumBlock();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 59;
				this.phiCalculation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, SpiralScriptParser.RULE_declaration);
		try {
			this.state = 66;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 62;
				this.importDeclaration();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 63;
				this.functionDeclaration();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 64;
				this.classDeclaration();
				}
				break;
			case 12:
			case 13:
			case 14:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 65;
				this.variableDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let localctx: ImportDeclarationContext = new ImportDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, SpiralScriptParser.RULE_importDeclaration);
		try {
			this.state = 82;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 68;
				this.match(SpiralScriptParser.IMPORT);
				this.state = 69;
				this.match(SpiralScriptParser.LBRACE);
				this.state = 70;
				this.identifierList();
				this.state = 71;
				this.match(SpiralScriptParser.RBRACE);
				this.state = 72;
				this.match(SpiralScriptParser.FROM);
				this.state = 73;
				this.match(SpiralScriptParser.STRING);
				this.state = 74;
				this.match(SpiralScriptParser.SEMICOLON);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 76;
				this.match(SpiralScriptParser.IMPORT);
				this.state = 77;
				this.identifier();
				this.state = 78;
				this.match(SpiralScriptParser.FROM);
				this.state = 79;
				this.match(SpiralScriptParser.STRING);
				this.state = 80;
				this.match(SpiralScriptParser.SEMICOLON);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, SpiralScriptParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 84;
			this.match(SpiralScriptParser.FUNCTION);
			this.state = 85;
			this.identifier();
			this.state = 86;
			this.match(SpiralScriptParser.LPAREN);
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===44) {
				{
				this.state = 87;
				this.parameterList();
				}
			}

			this.state = 90;
			this.match(SpiralScriptParser.RPAREN);
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 91;
				this.match(SpiralScriptParser.COLON);
				this.state = 92;
				this.type_();
				}
			}

			this.state = 95;
			this.blockStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let localctx: ClassDeclarationContext = new ClassDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, SpiralScriptParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 97;
			this.match(SpiralScriptParser.CLASS);
			this.state = 98;
			this.identifier();
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
				{
				this.state = 99;
				this.match(SpiralScriptParser.EXTENDS);
				this.state = 100;
				this.identifier();
				}
			}

			this.state = 103;
			this.blockStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, SpiralScriptParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 105;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 28672) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 106;
			this.identifier();
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 107;
				this.match(SpiralScriptParser.COLON);
				this.state = 108;
				this.type_();
				}
			}

			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===58) {
				{
				this.state = 111;
				this.match(SpiralScriptParser.ASSIGN);
				this.state = 112;
				this.expression(0);
				}
			}

			this.state = 115;
			this.match(SpiralScriptParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quantumBlock(): QuantumBlockContext {
		let localctx: QuantumBlockContext = new QuantumBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, SpiralScriptParser.RULE_quantumBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 117;
			this.match(SpiralScriptParser.QUANTUM);
			this.state = 118;
			this.match(SpiralScriptParser.LBRACE);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33292288) !== 0)) {
				{
				{
				this.state = 119;
				this.quantumStatement();
				}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 125;
			this.match(SpiralScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quantumStatement(): QuantumStatementContext {
		let localctx: QuantumStatementContext = new QuantumStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, SpiralScriptParser.RULE_quantumStatement);
		try {
			this.state = 130;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 127;
				this.quantumGate();
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 128;
				this.quantumMeasurement();
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 129;
				this.phiGate();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quantumGate(): QuantumGateContext {
		let localctx: QuantumGateContext = new QuantumGateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, SpiralScriptParser.RULE_quantumGate);
		try {
			this.state = 164;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 18:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 132;
				this.match(SpiralScriptParser.HADAMARD);
				this.state = 133;
				this.match(SpiralScriptParser.LPAREN);
				this.state = 134;
				this.expression(0);
				this.state = 135;
				this.match(SpiralScriptParser.RPAREN);
				this.state = 136;
				this.match(SpiralScriptParser.SEMICOLON);
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 138;
				this.match(SpiralScriptParser.CNOT);
				this.state = 139;
				this.match(SpiralScriptParser.LPAREN);
				this.state = 140;
				this.expression(0);
				this.state = 141;
				this.match(SpiralScriptParser.COMMA);
				this.state = 142;
				this.expression(0);
				this.state = 143;
				this.match(SpiralScriptParser.RPAREN);
				this.state = 144;
				this.match(SpiralScriptParser.SEMICOLON);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 146;
				this.match(SpiralScriptParser.PAULI_X);
				this.state = 147;
				this.match(SpiralScriptParser.LPAREN);
				this.state = 148;
				this.expression(0);
				this.state = 149;
				this.match(SpiralScriptParser.RPAREN);
				this.state = 150;
				this.match(SpiralScriptParser.SEMICOLON);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 152;
				this.match(SpiralScriptParser.PAULI_Y);
				this.state = 153;
				this.match(SpiralScriptParser.LPAREN);
				this.state = 154;
				this.expression(0);
				this.state = 155;
				this.match(SpiralScriptParser.RPAREN);
				this.state = 156;
				this.match(SpiralScriptParser.SEMICOLON);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 158;
				this.match(SpiralScriptParser.PAULI_Z);
				this.state = 159;
				this.match(SpiralScriptParser.LPAREN);
				this.state = 160;
				this.expression(0);
				this.state = 161;
				this.match(SpiralScriptParser.RPAREN);
				this.state = 162;
				this.match(SpiralScriptParser.SEMICOLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public phiGate(): PhiGateContext {
		let localctx: PhiGateContext = new PhiGateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, SpiralScriptParser.RULE_phiGate);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 166;
			this.match(SpiralScriptParser.PHI_GATE);
			this.state = 167;
			this.match(SpiralScriptParser.LPAREN);
			this.state = 168;
			this.expression(0);
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===55) {
				{
				this.state = 169;
				this.match(SpiralScriptParser.COMMA);
				this.state = 170;
				this.expression(0);
				}
			}

			this.state = 173;
			this.match(SpiralScriptParser.RPAREN);
			this.state = 174;
			this.match(SpiralScriptParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quantumMeasurement(): QuantumMeasurementContext {
		let localctx: QuantumMeasurementContext = new QuantumMeasurementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, SpiralScriptParser.RULE_quantumMeasurement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 176;
			this.match(SpiralScriptParser.MEASURE);
			this.state = 177;
			this.match(SpiralScriptParser.LPAREN);
			this.state = 178;
			this.expressionList();
			this.state = 179;
			this.match(SpiralScriptParser.RPAREN);
			this.state = 180;
			this.match(SpiralScriptParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public phiCalculation(): PhiCalculationContext {
		let localctx: PhiCalculationContext = new PhiCalculationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SpiralScriptParser.RULE_phiCalculation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 182;
			this.match(SpiralScriptParser.PHI_CALC);
			this.state = 183;
			this.match(SpiralScriptParser.LBRACE);
			this.state = 184;
			this.phiExpression();
			this.state = 185;
			this.match(SpiralScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public phiExpression(): PhiExpressionContext {
		let localctx: PhiExpressionContext = new PhiExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, SpiralScriptParser.RULE_phiExpression);
		try {
			this.state = 207;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 187;
				this.expression(0);
				this.state = 188;
				this.match(SpiralScriptParser.TIMES);
				this.state = 189;
				this.match(SpiralScriptParser.PHI_CONSTANT);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 191;
				this.expression(0);
				this.state = 192;
				this.match(SpiralScriptParser.RESONANCE);
				this.state = 193;
				this.expression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 195;
				this.match(SpiralScriptParser.ENTROPY);
				this.state = 196;
				this.match(SpiralScriptParser.LPAREN);
				this.state = 197;
				this.expression(0);
				this.state = 198;
				this.match(SpiralScriptParser.RPAREN);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 200;
				this.match(SpiralScriptParser.HARMONIC);
				this.state = 201;
				this.match(SpiralScriptParser.LPAREN);
				this.state = 202;
				this.expression(0);
				this.state = 203;
				this.match(SpiralScriptParser.COMMA);
				this.state = 204;
				this.expression(0);
				this.state = 205;
				this.match(SpiralScriptParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let localctx: BlockStatementContext = new BlockStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, SpiralScriptParser.RULE_blockStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 209;
			this.match(SpiralScriptParser.LBRACE);
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 100923008) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 287) !== 0)) {
				{
				{
				this.state = 210;
				this.statement();
				}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 216;
			this.match(SpiralScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 30;
		this.enterRecursionRule(localctx, 30, SpiralScriptParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 224;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
			case 26:
			case 41:
			case 42:
			case 43:
			case 44:
			case 48:
				{
				this.state = 219;
				this.primary();
				}
				break;
			case 40:
				{
				this.state = 220;
				this.match(SpiralScriptParser.NOT);
				this.state = 221;
				this.expression(2);
				}
				break;
			case 15:
				{
				this.state = 222;
				this.match(SpiralScriptParser.AWAIT);
				this.state = 223;
				this.expression(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 251;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 249;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SpiralScriptParser.RULE_expression);
						this.state = 226;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 227;
						_la = this._input.LA(1);
						if(!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 15) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 228;
						this.expression(6);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SpiralScriptParser.RULE_expression);
						this.state = 229;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 230;
						_la = this._input.LA(1);
						if(!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 15) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 231;
						this.expression(5);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SpiralScriptParser.RULE_expression);
						this.state = 232;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 233;
						_la = this._input.LA(1);
						if(!(_la===38 || _la===39)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 234;
						this.expression(4);
						}
						break;
					case 4:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SpiralScriptParser.RULE_expression);
						this.state = 235;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 236;
						this.match(SpiralScriptParser.DOT);
						this.state = 237;
						this.identifier();
						}
						break;
					case 5:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SpiralScriptParser.RULE_expression);
						this.state = 238;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 239;
						this.match(SpiralScriptParser.LBRACKET);
						this.state = 240;
						this.expression(0);
						this.state = 241;
						this.match(SpiralScriptParser.RBRACKET);
						}
						break;
					case 6:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SpiralScriptParser.RULE_expression);
						this.state = 243;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 244;
						this.match(SpiralScriptParser.LPAREN);
						this.state = 246;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 100696064) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 287) !== 0)) {
							{
							this.state = 245;
							this.expressionList();
							}
						}

						this.state = 248;
						this.match(SpiralScriptParser.RPAREN);
						}
						break;
					}
					}
				}
				this.state = 253;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let localctx: PrimaryContext = new PrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, SpiralScriptParser.RULE_primary);
		try {
			this.state = 264;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 44:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 254;
				this.identifier();
				}
				break;
			case 41:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 255;
				this.match(SpiralScriptParser.NUMBER);
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 256;
				this.match(SpiralScriptParser.STRING);
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 257;
				this.match(SpiralScriptParser.BOOLEAN);
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 258;
				this.match(SpiralScriptParser.PHI_CONSTANT);
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 259;
				this.match(SpiralScriptParser.SPIRAL_CONSTANT);
				}
				break;
			case 48:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 260;
				this.match(SpiralScriptParser.LPAREN);
				this.state = 261;
				this.expression(0);
				this.state = 262;
				this.match(SpiralScriptParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, SpiralScriptParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 266;
			this.parameter();
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===55) {
				{
				{
				this.state = 267;
				this.match(SpiralScriptParser.COMMA);
				this.state = 268;
				this.parameter();
				}
				}
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, SpiralScriptParser.RULE_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 274;
			this.identifier();
			this.state = 275;
			this.match(SpiralScriptParser.COLON);
			this.state = 276;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let localctx: ExpressionListContext = new ExpressionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, SpiralScriptParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 278;
			this.expression(0);
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===55) {
				{
				{
				this.state = 279;
				this.match(SpiralScriptParser.COMMA);
				this.state = 280;
				this.expression(0);
				}
				}
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let localctx: IdentifierListContext = new IdentifierListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, SpiralScriptParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 286;
			this.identifier();
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===55) {
				{
				{
				this.state = 287;
				this.match(SpiralScriptParser.COMMA);
				this.state = 288;
				this.identifier();
				}
				}
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, SpiralScriptParser.RULE_type);
		try {
			this.state = 301;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 294;
				this.match(SpiralScriptParser.T__0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 295;
				this.match(SpiralScriptParser.T__1);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 296;
				this.match(SpiralScriptParser.T__2);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 297;
				this.match(SpiralScriptParser.T__3);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 298;
				this.match(SpiralScriptParser.T__4);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 299;
				this.match(SpiralScriptParser.T__5);
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 300;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, SpiralScriptParser.RULE_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 303;
			this.match(SpiralScriptParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 15:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 8);
		case 4:
			return this.precpred(this._ctx, 7);
		case 5:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,58,306,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,1,0,5,0,48,8,0,10,
	0,12,0,51,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,61,8,1,1,2,1,2,1,2,1,
	2,3,2,67,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,
	3,83,8,3,1,4,1,4,1,4,1,4,3,4,89,8,4,1,4,1,4,1,4,3,4,94,8,4,1,4,1,4,1,5,
	1,5,1,5,1,5,3,5,102,8,5,1,5,1,5,1,6,1,6,1,6,1,6,3,6,110,8,6,1,6,1,6,3,6,
	114,8,6,1,6,1,6,1,7,1,7,1,7,5,7,121,8,7,10,7,12,7,124,9,7,1,7,1,7,1,8,1,
	8,1,8,3,8,131,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,3,9,165,8,9,1,10,1,10,1,10,1,10,1,10,3,10,172,8,10,1,10,1,10,1,10,1,11,
	1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,
	13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
	1,13,3,13,208,8,13,1,14,1,14,5,14,212,8,14,10,14,12,14,215,9,14,1,14,1,
	14,1,15,1,15,1,15,1,15,1,15,1,15,3,15,225,8,15,1,15,1,15,1,15,1,15,1,15,
	1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,3,15,247,8,15,1,15,5,15,250,8,15,10,15,12,15,253,9,15,1,16,1,16,1,16,
	1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,265,8,16,1,17,1,17,1,17,5,17,270,
	8,17,10,17,12,17,273,9,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,5,19,282,8,
	19,10,19,12,19,285,9,19,1,20,1,20,1,20,5,20,290,8,20,10,20,12,20,293,9,
	20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,302,8,21,1,22,1,22,1,22,0,1,
	30,23,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,0,
	4,1,0,12,14,1,0,30,33,1,0,34,37,1,0,38,39,331,0,49,1,0,0,0,2,60,1,0,0,0,
	4,66,1,0,0,0,6,82,1,0,0,0,8,84,1,0,0,0,10,97,1,0,0,0,12,105,1,0,0,0,14,
	117,1,0,0,0,16,130,1,0,0,0,18,164,1,0,0,0,20,166,1,0,0,0,22,176,1,0,0,0,
	24,182,1,0,0,0,26,207,1,0,0,0,28,209,1,0,0,0,30,224,1,0,0,0,32,264,1,0,
	0,0,34,266,1,0,0,0,36,274,1,0,0,0,38,278,1,0,0,0,40,286,1,0,0,0,42,301,
	1,0,0,0,44,303,1,0,0,0,46,48,3,2,1,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,
	1,0,0,0,49,50,1,0,0,0,50,52,1,0,0,0,51,49,1,0,0,0,52,53,5,0,0,1,53,1,1,
	0,0,0,54,61,3,4,2,0,55,56,3,30,15,0,56,57,5,54,0,0,57,61,1,0,0,0,58,61,
	3,14,7,0,59,61,3,24,12,0,60,54,1,0,0,0,60,55,1,0,0,0,60,58,1,0,0,0,60,59,
	1,0,0,0,61,3,1,0,0,0,62,67,3,6,3,0,63,67,3,8,4,0,64,67,3,10,5,0,65,67,3,
	12,6,0,66,62,1,0,0,0,66,63,1,0,0,0,66,64,1,0,0,0,66,65,1,0,0,0,67,5,1,0,
	0,0,68,69,5,7,0,0,69,70,5,50,0,0,70,71,3,40,20,0,71,72,5,51,0,0,72,73,5,
	8,0,0,73,74,5,42,0,0,74,75,5,54,0,0,75,83,1,0,0,0,76,77,5,7,0,0,77,78,3,
	44,22,0,78,79,5,8,0,0,79,80,5,42,0,0,80,81,5,54,0,0,81,83,1,0,0,0,82,68,
	1,0,0,0,82,76,1,0,0,0,83,7,1,0,0,0,84,85,5,9,0,0,85,86,3,44,22,0,86,88,
	5,48,0,0,87,89,3,34,17,0,88,87,1,0,0,0,88,89,1,0,0,0,89,90,1,0,0,0,90,93,
	5,49,0,0,91,92,5,57,0,0,92,94,3,42,21,0,93,91,1,0,0,0,93,94,1,0,0,0,94,
	95,1,0,0,0,95,96,3,28,14,0,96,9,1,0,0,0,97,98,5,10,0,0,98,101,3,44,22,0,
	99,100,5,11,0,0,100,102,3,44,22,0,101,99,1,0,0,0,101,102,1,0,0,0,102,103,
	1,0,0,0,103,104,3,28,14,0,104,11,1,0,0,0,105,106,7,0,0,0,106,109,3,44,22,
	0,107,108,5,57,0,0,108,110,3,42,21,0,109,107,1,0,0,0,109,110,1,0,0,0,110,
	113,1,0,0,0,111,112,5,58,0,0,112,114,3,30,15,0,113,111,1,0,0,0,113,114,
	1,0,0,0,114,115,1,0,0,0,115,116,5,54,0,0,116,13,1,0,0,0,117,118,5,16,0,
	0,118,122,5,50,0,0,119,121,3,16,8,0,120,119,1,0,0,0,121,124,1,0,0,0,122,
	120,1,0,0,0,122,123,1,0,0,0,123,125,1,0,0,0,124,122,1,0,0,0,125,126,5,51,
	0,0,126,15,1,0,0,0,127,131,3,18,9,0,128,131,3,22,11,0,129,131,3,20,10,0,
	130,127,1,0,0,0,130,128,1,0,0,0,130,129,1,0,0,0,131,17,1,0,0,0,132,133,
	5,18,0,0,133,134,5,48,0,0,134,135,3,30,15,0,135,136,5,49,0,0,136,137,5,
	54,0,0,137,165,1,0,0,0,138,139,5,19,0,0,139,140,5,48,0,0,140,141,3,30,15,
	0,141,142,5,55,0,0,142,143,3,30,15,0,143,144,5,49,0,0,144,145,5,54,0,0,
	145,165,1,0,0,0,146,147,5,20,0,0,147,148,5,48,0,0,148,149,3,30,15,0,149,
	150,5,49,0,0,150,151,5,54,0,0,151,165,1,0,0,0,152,153,5,21,0,0,153,154,
	5,48,0,0,154,155,3,30,15,0,155,156,5,49,0,0,156,157,5,54,0,0,157,165,1,
	0,0,0,158,159,5,22,0,0,159,160,5,48,0,0,160,161,3,30,15,0,161,162,5,49,
	0,0,162,163,5,54,0,0,163,165,1,0,0,0,164,132,1,0,0,0,164,138,1,0,0,0,164,
	146,1,0,0,0,164,152,1,0,0,0,164,158,1,0,0,0,165,19,1,0,0,0,166,167,5,23,
	0,0,167,168,5,48,0,0,168,171,3,30,15,0,169,170,5,55,0,0,170,172,3,30,15,
	0,171,169,1,0,0,0,171,172,1,0,0,0,172,173,1,0,0,0,173,174,5,49,0,0,174,
	175,5,54,0,0,175,21,1,0,0,0,176,177,5,24,0,0,177,178,5,48,0,0,178,179,3,
	38,19,0,179,180,5,49,0,0,180,181,5,54,0,0,181,23,1,0,0,0,182,183,5,17,0,
	0,183,184,5,50,0,0,184,185,3,26,13,0,185,186,5,51,0,0,186,25,1,0,0,0,187,
	188,3,30,15,0,188,189,5,30,0,0,189,190,5,25,0,0,190,208,1,0,0,0,191,192,
	3,30,15,0,192,193,5,27,0,0,193,194,3,30,15,0,194,208,1,0,0,0,195,196,5,
	28,0,0,196,197,5,48,0,0,197,198,3,30,15,0,198,199,5,49,0,0,199,208,1,0,
	0,0,200,201,5,29,0,0,201,202,5,48,0,0,202,203,3,30,15,0,203,204,5,55,0,
	0,204,205,3,30,15,0,205,206,5,49,0,0,206,208,1,0,0,0,207,187,1,0,0,0,207,
	191,1,0,0,0,207,195,1,0,0,0,207,200,1,0,0,0,208,27,1,0,0,0,209,213,5,50,
	0,0,210,212,3,2,1,0,211,210,1,0,0,0,212,215,1,0,0,0,213,211,1,0,0,0,213,
	214,1,0,0,0,214,216,1,0,0,0,215,213,1,0,0,0,216,217,5,51,0,0,217,29,1,0,
	0,0,218,219,6,15,-1,0,219,225,3,32,16,0,220,221,5,40,0,0,221,225,3,30,15,
	2,222,223,5,15,0,0,223,225,3,30,15,1,224,218,1,0,0,0,224,220,1,0,0,0,224,
	222,1,0,0,0,225,251,1,0,0,0,226,227,10,5,0,0,227,228,7,1,0,0,228,250,3,
	30,15,6,229,230,10,4,0,0,230,231,7,2,0,0,231,250,3,30,15,5,232,233,10,3,
	0,0,233,234,7,3,0,0,234,250,3,30,15,4,235,236,10,8,0,0,236,237,5,56,0,0,
	237,250,3,44,22,0,238,239,10,7,0,0,239,240,5,52,0,0,240,241,3,30,15,0,241,
	242,5,53,0,0,242,250,1,0,0,0,243,244,10,6,0,0,244,246,5,48,0,0,245,247,
	3,38,19,0,246,245,1,0,0,0,246,247,1,0,0,0,247,248,1,0,0,0,248,250,5,49,
	0,0,249,226,1,0,0,0,249,229,1,0,0,0,249,232,1,0,0,0,249,235,1,0,0,0,249,
	238,1,0,0,0,249,243,1,0,0,0,250,253,1,0,0,0,251,249,1,0,0,0,251,252,1,0,
	0,0,252,31,1,0,0,0,253,251,1,0,0,0,254,265,3,44,22,0,255,265,5,41,0,0,256,
	265,5,42,0,0,257,265,5,43,0,0,258,265,5,25,0,0,259,265,5,26,0,0,260,261,
	5,48,0,0,261,262,3,30,15,0,262,263,5,49,0,0,263,265,1,0,0,0,264,254,1,0,
	0,0,264,255,1,0,0,0,264,256,1,0,0,0,264,257,1,0,0,0,264,258,1,0,0,0,264,
	259,1,0,0,0,264,260,1,0,0,0,265,33,1,0,0,0,266,271,3,36,18,0,267,268,5,
	55,0,0,268,270,3,36,18,0,269,267,1,0,0,0,270,273,1,0,0,0,271,269,1,0,0,
	0,271,272,1,0,0,0,272,35,1,0,0,0,273,271,1,0,0,0,274,275,3,44,22,0,275,
	276,5,57,0,0,276,277,3,42,21,0,277,37,1,0,0,0,278,283,3,30,15,0,279,280,
	5,55,0,0,280,282,3,30,15,0,281,279,1,0,0,0,282,285,1,0,0,0,283,281,1,0,
	0,0,283,284,1,0,0,0,284,39,1,0,0,0,285,283,1,0,0,0,286,291,3,44,22,0,287,
	288,5,55,0,0,288,290,3,44,22,0,289,287,1,0,0,0,290,293,1,0,0,0,291,289,
	1,0,0,0,291,292,1,0,0,0,292,41,1,0,0,0,293,291,1,0,0,0,294,302,5,1,0,0,
	295,302,5,2,0,0,296,302,5,3,0,0,297,302,5,4,0,0,298,302,5,5,0,0,299,302,
	5,6,0,0,300,302,3,44,22,0,301,294,1,0,0,0,301,295,1,0,0,0,301,296,1,0,0,
	0,301,297,1,0,0,0,301,298,1,0,0,0,301,299,1,0,0,0,301,300,1,0,0,0,302,43,
	1,0,0,0,303,304,5,44,0,0,304,45,1,0,0,0,24,49,60,66,82,88,93,101,109,113,
	122,130,164,171,207,213,224,246,249,251,264,271,283,291,301];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SpiralScriptParser.__ATN) {
			SpiralScriptParser.__ATN = new ATNDeserializer().deserialize(SpiralScriptParser._serializedATN);
		}

		return SpiralScriptParser.__ATN;
	}


	static DecisionsToDFA = SpiralScriptParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(SpiralScriptParser.EOF, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_program;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralScriptParser.SEMICOLON, 0);
	}
	public quantumBlock(): QuantumBlockContext {
		return this.getTypedRuleContext(QuantumBlockContext, 0) as QuantumBlockContext;
	}
	public phiCalculation(): PhiCalculationContext {
		return this.getTypedRuleContext(PhiCalculationContext, 0) as PhiCalculationContext;
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_statement;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public importDeclaration(): ImportDeclarationContext {
		return this.getTypedRuleContext(ImportDeclarationContext, 0) as ImportDeclarationContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_declaration;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(SpiralScriptParser.IMPORT, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralScriptParser.LBRACE, 0);
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralScriptParser.RBRACE, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(SpiralScriptParser.FROM, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SpiralScriptParser.STRING, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralScriptParser.SEMICOLON, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_importDeclaration;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(SpiralScriptParser.FUNCTION, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralScriptParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralScriptParser.RPAREN, 0);
	}
	public blockStatement(): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, 0) as BlockStatementContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(SpiralScriptParser.COLON, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_functionDeclaration;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public CLASS(): TerminalNode {
		return this.getToken(SpiralScriptParser.CLASS, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public blockStatement(): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, 0) as BlockStatementContext;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(SpiralScriptParser.EXTENDS, 0);
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_classDeclaration;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralScriptParser.SEMICOLON, 0);
	}
	public CONST(): TerminalNode {
		return this.getToken(SpiralScriptParser.CONST, 0);
	}
	public LET(): TerminalNode {
		return this.getToken(SpiralScriptParser.LET, 0);
	}
	public VAR(): TerminalNode {
		return this.getToken(SpiralScriptParser.VAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(SpiralScriptParser.COLON, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(SpiralScriptParser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_variableDeclaration;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
}


export class QuantumBlockContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public QUANTUM(): TerminalNode {
		return this.getToken(SpiralScriptParser.QUANTUM, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralScriptParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralScriptParser.RBRACE, 0);
	}
	public quantumStatement_list(): QuantumStatementContext[] {
		return this.getTypedRuleContexts(QuantumStatementContext) as QuantumStatementContext[];
	}
	public quantumStatement(i: number): QuantumStatementContext {
		return this.getTypedRuleContext(QuantumStatementContext, i) as QuantumStatementContext;
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_quantumBlock;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterQuantumBlock) {
			listener.enterQuantumBlock(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitQuantumBlock) {
			listener.exitQuantumBlock(this);
		}
	}
}


export class QuantumStatementContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public quantumGate(): QuantumGateContext {
		return this.getTypedRuleContext(QuantumGateContext, 0) as QuantumGateContext;
	}
	public quantumMeasurement(): QuantumMeasurementContext {
		return this.getTypedRuleContext(QuantumMeasurementContext, 0) as QuantumMeasurementContext;
	}
	public phiGate(): PhiGateContext {
		return this.getTypedRuleContext(PhiGateContext, 0) as PhiGateContext;
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_quantumStatement;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterQuantumStatement) {
			listener.enterQuantumStatement(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitQuantumStatement) {
			listener.exitQuantumStatement(this);
		}
	}
}


export class QuantumGateContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public HADAMARD(): TerminalNode {
		return this.getToken(SpiralScriptParser.HADAMARD, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralScriptParser.LPAREN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralScriptParser.RPAREN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralScriptParser.SEMICOLON, 0);
	}
	public CNOT(): TerminalNode {
		return this.getToken(SpiralScriptParser.CNOT, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(SpiralScriptParser.COMMA, 0);
	}
	public PAULI_X(): TerminalNode {
		return this.getToken(SpiralScriptParser.PAULI_X, 0);
	}
	public PAULI_Y(): TerminalNode {
		return this.getToken(SpiralScriptParser.PAULI_Y, 0);
	}
	public PAULI_Z(): TerminalNode {
		return this.getToken(SpiralScriptParser.PAULI_Z, 0);
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_quantumGate;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterQuantumGate) {
			listener.enterQuantumGate(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitQuantumGate) {
			listener.exitQuantumGate(this);
		}
	}
}


export class PhiGateContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public PHI_GATE(): TerminalNode {
		return this.getToken(SpiralScriptParser.PHI_GATE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralScriptParser.LPAREN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralScriptParser.RPAREN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralScriptParser.SEMICOLON, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(SpiralScriptParser.COMMA, 0);
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_phiGate;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterPhiGate) {
			listener.enterPhiGate(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitPhiGate) {
			listener.exitPhiGate(this);
		}
	}
}


export class QuantumMeasurementContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public MEASURE(): TerminalNode {
		return this.getToken(SpiralScriptParser.MEASURE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralScriptParser.LPAREN, 0);
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralScriptParser.RPAREN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralScriptParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_quantumMeasurement;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterQuantumMeasurement) {
			listener.enterQuantumMeasurement(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitQuantumMeasurement) {
			listener.exitQuantumMeasurement(this);
		}
	}
}


export class PhiCalculationContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public PHI_CALC(): TerminalNode {
		return this.getToken(SpiralScriptParser.PHI_CALC, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralScriptParser.LBRACE, 0);
	}
	public phiExpression(): PhiExpressionContext {
		return this.getTypedRuleContext(PhiExpressionContext, 0) as PhiExpressionContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralScriptParser.RBRACE, 0);
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_phiCalculation;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterPhiCalculation) {
			listener.enterPhiCalculation(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitPhiCalculation) {
			listener.exitPhiCalculation(this);
		}
	}
}


export class PhiExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public TIMES(): TerminalNode {
		return this.getToken(SpiralScriptParser.TIMES, 0);
	}
	public PHI_CONSTANT(): TerminalNode {
		return this.getToken(SpiralScriptParser.PHI_CONSTANT, 0);
	}
	public RESONANCE(): TerminalNode {
		return this.getToken(SpiralScriptParser.RESONANCE, 0);
	}
	public ENTROPY(): TerminalNode {
		return this.getToken(SpiralScriptParser.ENTROPY, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralScriptParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralScriptParser.RPAREN, 0);
	}
	public HARMONIC(): TerminalNode {
		return this.getToken(SpiralScriptParser.HARMONIC, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(SpiralScriptParser.COMMA, 0);
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_phiExpression;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterPhiExpression) {
			listener.enterPhiExpression(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitPhiExpression) {
			listener.exitPhiExpression(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralScriptParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralScriptParser.RBRACE, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_blockStatement;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(SpiralScriptParser.NOT, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public AWAIT(): TerminalNode {
		return this.getToken(SpiralScriptParser.AWAIT, 0);
	}
	public TIMES(): TerminalNode {
		return this.getToken(SpiralScriptParser.TIMES, 0);
	}
	public DIVIDE(): TerminalNode {
		return this.getToken(SpiralScriptParser.DIVIDE, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(SpiralScriptParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SpiralScriptParser.MINUS, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(SpiralScriptParser.EQUALS, 0);
	}
	public NOT_EQUALS(): TerminalNode {
		return this.getToken(SpiralScriptParser.NOT_EQUALS, 0);
	}
	public LESS_THAN(): TerminalNode {
		return this.getToken(SpiralScriptParser.LESS_THAN, 0);
	}
	public GREATER_THAN(): TerminalNode {
		return this.getToken(SpiralScriptParser.GREATER_THAN, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(SpiralScriptParser.AND, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(SpiralScriptParser.OR, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(SpiralScriptParser.DOT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(SpiralScriptParser.LBRACKET, 0);
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(SpiralScriptParser.RBRACKET, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralScriptParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralScriptParser.RPAREN, 0);
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_expression;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(SpiralScriptParser.NUMBER, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SpiralScriptParser.STRING, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(SpiralScriptParser.BOOLEAN, 0);
	}
	public PHI_CONSTANT(): TerminalNode {
		return this.getToken(SpiralScriptParser.PHI_CONSTANT, 0);
	}
	public SPIRAL_CONSTANT(): TerminalNode {
		return this.getToken(SpiralScriptParser.SPIRAL_CONSTANT, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralScriptParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralScriptParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_primary;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(SpiralScriptParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SpiralScriptParser.COMMA, i);
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_parameterList;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(SpiralScriptParser.COLON, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_parameter;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(SpiralScriptParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SpiralScriptParser.COMMA, i);
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_expressionList;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(SpiralScriptParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SpiralScriptParser.COMMA, i);
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_identifierList;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_type;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterType) {
			listener.enterType(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: SpiralScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(SpiralScriptParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
	return SpiralScriptParser.RULE_identifier;
	}
	public enterRule(listener: SpiralScriptListener): void {
	    if(listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: SpiralScriptListener): void {
	    if(listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}
