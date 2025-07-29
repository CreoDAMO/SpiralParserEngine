// Generated from client/src/grammars/SpiralLang.g4 by ANTLR 4.13.2
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
import SpiralLangListener from "./SpiralLangListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class SpiralLangParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly MODULE = 48;
	public static readonly IMPORT = 49;
	public static readonly FROM = 50;
	public static readonly FUNCTION = 51;
	public static readonly CLASS = 52;
	public static readonly INTERFACE = 53;
	public static readonly EXTENDS = 54;
	public static readonly IMPLEMENTS = 55;
	public static readonly CONST = 56;
	public static readonly LET = 57;
	public static readonly VAR = 58;
	public static readonly IF = 59;
	public static readonly ELSE = 60;
	public static readonly WHILE = 61;
	public static readonly FOR = 62;
	public static readonly SWITCH = 63;
	public static readonly CASE = 64;
	public static readonly DEFAULT = 65;
	public static readonly TRY = 66;
	public static readonly CATCH = 67;
	public static readonly FINALLY = 68;
	public static readonly RETURN = 69;
	public static readonly BREAK = 70;
	public static readonly CONTINUE = 71;
	public static readonly NEW = 72;
	public static readonly THIS = 73;
	public static readonly SUPER = 74;
	public static readonly ASYNC = 75;
	public static readonly AWAIT = 76;
	public static readonly THEOREM = 77;
	public static readonly PROOF = 78;
	public static readonly REQUIRE = 79;
	public static readonly ASSERT = 80;
	public static readonly YIELD = 81;
	public static readonly VIA = 82;
	public static readonly QED = 83;
	public static readonly PHI = 84;
	public static readonly QUANTUM = 85;
	public static readonly RESONANCE = 86;
	public static readonly ENTROPY = 87;
	public static readonly HARMONIC = 88;
	public static readonly CONSCIOUSNESS = 89;
	public static readonly MEMORY = 90;
	public static readonly LEARN = 91;
	public static readonly EMOTION = 92;
	public static readonly DECIDE = 93;
	public static readonly HADAMARD = 94;
	public static readonly PAULI_X = 95;
	public static readonly PAULI_Y = 96;
	public static readonly PAULI_Z = 97;
	public static readonly CNOT_GATE = 98;
	public static readonly MEASURE = 99;
	public static readonly ENTANGLE = 100;
	public static readonly COLLAPSE = 101;
	public static readonly PHI_CONSTANT = 102;
	public static readonly SPIRAL_CONSTANT = 103;
	public static readonly NUMBER = 104;
	public static readonly STRING = 105;
	public static readonly BOOLEAN = 106;
	public static readonly IDENTIFIER = 107;
	public static readonly ASSIGN = 108;
	public static readonly PLUS_ASSIGN = 109;
	public static readonly MINUS_ASSIGN = 110;
	public static readonly MULT_ASSIGN = 111;
	public static readonly DIV_ASSIGN = 112;
	public static readonly MOD_ASSIGN = 113;
	public static readonly AND_ASSIGN = 114;
	public static readonly OR_ASSIGN = 115;
	public static readonly XOR_ASSIGN = 116;
	public static readonly LSHIFT_ASSIGN = 117;
	public static readonly RSHIFT_ASSIGN = 118;
	public static readonly URSHIFT_ASSIGN = 119;
	public static readonly QUESTION = 120;
	public static readonly COLON = 121;
	public static readonly SEMICOLON = 122;
	public static readonly COMMA = 123;
	public static readonly DOT = 124;
	public static readonly ARROW = 125;
	public static readonly LPAREN = 126;
	public static readonly RPAREN = 127;
	public static readonly LBRACE = 128;
	public static readonly RBRACE = 129;
	public static readonly LBRACKET = 130;
	public static readonly RBRACKET = 131;
	public static readonly PLUS = 132;
	public static readonly MINUS = 133;
	public static readonly MULT = 134;
	public static readonly DIV = 135;
	public static readonly MOD = 136;
	public static readonly POWER = 137;
	public static readonly EQ = 138;
	public static readonly NE = 139;
	public static readonly STRICT_EQ = 140;
	public static readonly STRICT_NE = 141;
	public static readonly LT = 142;
	public static readonly LE = 143;
	public static readonly GT = 144;
	public static readonly GE = 145;
	public static readonly AND = 146;
	public static readonly OR = 147;
	public static readonly NOT = 148;
	public static readonly BIT_AND = 149;
	public static readonly BIT_OR = 150;
	public static readonly BIT_XOR = 151;
	public static readonly BIT_NOT = 152;
	public static readonly LSHIFT = 153;
	public static readonly RSHIFT = 154;
	public static readonly URSHIFT = 155;
	public static readonly INCREMENT = 156;
	public static readonly DECREMENT = 157;
	public static readonly ELLIPSIS = 158;
	public static readonly WS = 159;
	public static readonly LINE_COMMENT = 160;
	public static readonly BLOCK_COMMENT = 161;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_module = 1;
	public static readonly RULE_moduleDeclaration = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_declaration = 4;
	public static readonly RULE_importDeclaration = 5;
	public static readonly RULE_functionDeclaration = 6;
	public static readonly RULE_classDeclaration = 7;
	public static readonly RULE_interfaceDeclaration = 8;
	public static readonly RULE_variableDeclaration = 9;
	public static readonly RULE_theoremDeclaration = 10;
	public static readonly RULE_proofDeclaration = 11;
	public static readonly RULE_controlFlow = 12;
	public static readonly RULE_ifStatement = 13;
	public static readonly RULE_whileStatement = 14;
	public static readonly RULE_forStatement = 15;
	public static readonly RULE_switchStatement = 16;
	public static readonly RULE_tryStatement = 17;
	public static readonly RULE_spiralConstruct = 18;
	public static readonly RULE_phiCalculation = 19;
	public static readonly RULE_resonanceField = 20;
	public static readonly RULE_entropyAnalysis = 21;
	public static readonly RULE_harmonicSequence = 22;
	public static readonly RULE_quantumBlock = 23;
	public static readonly RULE_quantumStatement = 24;
	public static readonly RULE_quantumGate = 25;
	public static readonly RULE_quantumMeasurement = 26;
	public static readonly RULE_quantumEntanglement = 27;
	public static readonly RULE_quantumCollapse = 28;
	public static readonly RULE_consciousnessBlock = 29;
	public static readonly RULE_consciousnessStatement = 30;
	public static readonly RULE_blockStatement = 31;
	public static readonly RULE_expression = 32;
	public static readonly RULE_assignmentExpression = 33;
	public static readonly RULE_conditionalExpression = 34;
	public static readonly RULE_logicalOrExpression = 35;
	public static readonly RULE_logicalAndExpression = 36;
	public static readonly RULE_equalityExpression = 37;
	public static readonly RULE_relationalExpression = 38;
	public static readonly RULE_additiveExpression = 39;
	public static readonly RULE_multiplicativeExpression = 40;
	public static readonly RULE_unaryExpression = 41;
	public static readonly RULE_postfixExpression = 42;
	public static readonly RULE_leftHandSideExpression = 43;
	public static readonly RULE_newExpression = 44;
	public static readonly RULE_callExpression = 45;
	public static readonly RULE_memberExpression = 46;
	public static readonly RULE_primaryExpression = 47;
	public static readonly RULE_phiExpression = 48;
	public static readonly RULE_quantumExpression = 49;
	public static readonly RULE_entropyExpression = 50;
	public static readonly RULE_proofStatement = 51;
	public static readonly RULE_memoryAccess = 52;
	public static readonly RULE_learningPattern = 53;
	public static readonly RULE_emotionalState = 54;
	public static readonly RULE_decisionTree = 55;
	public static readonly RULE_caseClause = 56;
	public static readonly RULE_defaultClause = 57;
	public static readonly RULE_classMember = 58;
	public static readonly RULE_interfaceMember = 59;
	public static readonly RULE_propertyDeclaration = 60;
	public static readonly RULE_methodDeclaration = 61;
	public static readonly RULE_constructorDeclaration = 62;
	public static readonly RULE_propertySignature = 63;
	public static readonly RULE_methodSignature = 64;
	public static readonly RULE_type = 65;
	public static readonly RULE_primaryType = 66;
	public static readonly RULE_functionType = 67;
	public static readonly RULE_genericType = 68;
	public static readonly RULE_returnType = 69;
	public static readonly RULE_typeList = 70;
	public static readonly RULE_typeParameters = 71;
	public static readonly RULE_typeParameter = 72;
	public static readonly RULE_parameterList = 73;
	public static readonly RULE_parameter = 74;
	public static readonly RULE_arguments = 75;
	public static readonly RULE_expressionList = 76;
	public static readonly RULE_identifierList = 77;
	public static readonly RULE_literal = 78;
	public static readonly RULE_arrayLiteral = 79;
	public static readonly RULE_objectLiteral = 80;
	public static readonly RULE_propertyAssignment = 81;
	public static readonly RULE_qualifiedName = 82;
	public static readonly RULE_assignmentOperator = 83;
	public static readonly RULE_gateType = 84;
	public static readonly RULE_identifier = 85;
	public static readonly literalNames: (string | null)[] = [ null, "'require('",
                                                            "'of'", "'in'",
                                                            "'phi('", "'golden('",
                                                            "'qubit('",
                                                            "'superposition('",
                                                            "'measurement('",
                                                            "'entropy('",
                                                            "'chaos('",
                                                            "'order('",
                                                            "'memory.'",
                                                            "'emotion.'",
                                                            "'public'",
                                                            "'private'",
                                                            "'protected'",
                                                            "'static'",
                                                            "'constructor'",
                                                            "'[]'", "'number'",
                                                            "'string'",
                                                            "'boolean'",
                                                            "'void'", "'any'",
                                                            "'unknown'",
                                                            "'PhiSeed'",
                                                            "'QuantumState'",
                                                            "'TrustUnit'",
                                                            "'ConsciousnessLevel'",
                                                            "'Promise'",
                                                            "'null'", "'undefined'",
                                                            "'H'", "'X'",
                                                            "'Y'", "'Z'",
                                                            "'CNOT'", "'CZ'",
                                                            "'SWAP'", "'Toffoli'",
                                                            "'Fredkin'",
                                                            "'RX'", "'RY'",
                                                            "'RZ'", "'Phase'",
                                                            "'T'", "'S'",
                                                            "'module'",
                                                            "'import'",
                                                            "'from'", "'function'",
                                                            "'class'", "'interface'",
                                                            "'extends'",
                                                            "'implements'",
                                                            "'const'", "'let'",
                                                            "'var'", "'if'",
                                                            "'else'", "'while'",
                                                            "'for'", "'switch'",
                                                            "'case'", "'default'",
                                                            "'try'", "'catch'",
                                                            "'finally'",
                                                            "'return'",
                                                            "'break'", "'continue'",
                                                            "'new'", "'this'",
                                                            "'super'", "'async'",
                                                            "'await'", "'theorem'",
                                                            "'proof'", "'require'",
                                                            "'assert'",
                                                            "'yield'", "'via'",
                                                            "'qed'", "'phi'",
                                                            "'quantum'",
                                                            "'resonance'",
                                                            "'entropy'",
                                                            "'harmonic'",
                                                            "'consciousness'",
                                                            "'memory'",
                                                            "'learn'", "'emotion'",
                                                            "'decide'",
                                                            null, null,
                                                            null, null,
                                                            null, "'measure'",
                                                            "'entangle'",
                                                            "'collapse'",
                                                            null, null,
                                                            null, null,
                                                            null, null,
                                                            "'='", "'+='",
                                                            "'-='", "'*='",
                                                            "'/='", "'%='",
                                                            "'&='", "'|='",
                                                            "'^='", "'<<='",
                                                            "'>>='", "'>>>='",
                                                            "'?'", "':'",
                                                            "';'", "','",
                                                            "'.'", "'=>'",
                                                            "'('", "')'",
                                                            "'{'", "'}'",
                                                            "'['", "']'",
                                                            "'+'", "'-'",
                                                            "'*'", "'/'",
                                                            "'%'", "'**'",
                                                            "'=='", "'!='",
                                                            "'==='", "'!=='",
                                                            "'<'", "'<='",
                                                            "'>'", "'>='",
                                                            "'&&'", "'||'",
                                                            "'!'", "'&'",
                                                            "'|'", "'^'",
                                                            "'~'", "'<<'",
                                                            "'>>'", "'>>>'",
                                                            "'++'", "'--'",
                                                            "'...'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             "MODULE", "IMPORT",
                                                             "FROM", "FUNCTION",
                                                             "CLASS", "INTERFACE",
                                                             "EXTENDS",
                                                             "IMPLEMENTS",
                                                             "CONST", "LET",
                                                             "VAR", "IF",
                                                             "ELSE", "WHILE",
                                                             "FOR", "SWITCH",
                                                             "CASE", "DEFAULT",
                                                             "TRY", "CATCH",
                                                             "FINALLY",
                                                             "RETURN", "BREAK",
                                                             "CONTINUE",
                                                             "NEW", "THIS",
                                                             "SUPER", "ASYNC",
                                                             "AWAIT", "THEOREM",
                                                             "PROOF", "REQUIRE",
                                                             "ASSERT", "YIELD",
                                                             "VIA", "QED",
                                                             "PHI", "QUANTUM",
                                                             "RESONANCE",
                                                             "ENTROPY",
                                                             "HARMONIC",
                                                             "CONSCIOUSNESS",
                                                             "MEMORY", "LEARN",
                                                             "EMOTION",
                                                             "DECIDE", "HADAMARD",
                                                             "PAULI_X",
                                                             "PAULI_Y",
                                                             "PAULI_Z",
                                                             "CNOT_GATE",
                                                             "MEASURE",
                                                             "ENTANGLE",
                                                             "COLLAPSE",
                                                             "PHI_CONSTANT",
                                                             "SPIRAL_CONSTANT",
                                                             "NUMBER", "STRING",
                                                             "BOOLEAN",
                                                             "IDENTIFIER",
                                                             "ASSIGN", "PLUS_ASSIGN",
                                                             "MINUS_ASSIGN",
                                                             "MULT_ASSIGN",
                                                             "DIV_ASSIGN",
                                                             "MOD_ASSIGN",
                                                             "AND_ASSIGN",
                                                             "OR_ASSIGN",
                                                             "XOR_ASSIGN",
                                                             "LSHIFT_ASSIGN",
                                                             "RSHIFT_ASSIGN",
                                                             "URSHIFT_ASSIGN",
                                                             "QUESTION",
                                                             "COLON", "SEMICOLON",
                                                             "COMMA", "DOT",
                                                             "ARROW", "LPAREN",
                                                             "RPAREN", "LBRACE",
                                                             "RBRACE", "LBRACKET",
                                                             "RBRACKET",
                                                             "PLUS", "MINUS",
                                                             "MULT", "DIV",
                                                             "MOD", "POWER",
                                                             "EQ", "NE",
                                                             "STRICT_EQ",
                                                             "STRICT_NE",
                                                             "LT", "LE",
                                                             "GT", "GE",
                                                             "AND", "OR",
                                                             "NOT", "BIT_AND",
                                                             "BIT_OR", "BIT_XOR",
                                                             "BIT_NOT",
                                                             "LSHIFT", "RSHIFT",
                                                             "URSHIFT",
                                                             "INCREMENT",
                                                             "DECREMENT",
                                                             "ELLIPSIS",
                                                             "WS", "LINE_COMMENT",
                                                             "BLOCK_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "module", "moduleDeclaration", "statement", "declaration",
		"importDeclaration", "functionDeclaration", "classDeclaration", "interfaceDeclaration",
		"variableDeclaration", "theoremDeclaration", "proofDeclaration", "controlFlow",
		"ifStatement", "whileStatement", "forStatement", "switchStatement", "tryStatement",
		"spiralConstruct", "phiCalculation", "resonanceField", "entropyAnalysis",
		"harmonicSequence", "quantumBlock", "quantumStatement", "quantumGate",
		"quantumMeasurement", "quantumEntanglement", "quantumCollapse", "consciousnessBlock",
		"consciousnessStatement", "blockStatement", "expression", "assignmentExpression",
		"conditionalExpression", "logicalOrExpression", "logicalAndExpression",
		"equalityExpression", "relationalExpression", "additiveExpression", "multiplicativeExpression",
		"unaryExpression", "postfixExpression", "leftHandSideExpression", "newExpression",
		"callExpression", "memberExpression", "primaryExpression", "phiExpression",
		"quantumExpression", "entropyExpression", "proofStatement", "memoryAccess",
		"learningPattern", "emotionalState", "decisionTree", "caseClause", "defaultClause",
		"classMember", "interfaceMember", "propertyDeclaration", "methodDeclaration",
		"constructorDeclaration", "propertySignature", "methodSignature", "type",
		"primaryType", "functionType", "genericType", "returnType", "typeList",
		"typeParameters", "typeParameter", "parameterList", "parameter", "arguments",
		"expressionList", "identifierList", "literal", "arrayLiteral", "objectLiteral",
		"propertyAssignment", "qualifiedName", "assignmentOperator", "gateType",
		"identifier",
	];
	public get grammarFileName(): string { return "SpiralLang.g4"; }
	public get literalNames(): (string | null)[] { return SpiralLangParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return SpiralLangParser.symbolicNames; }
	public get ruleNames(): string[] { return SpiralLangParser.ruleNames; }
	public get serializedATN(): number[] { return SpiralLangParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, SpiralLangParser._ATN, SpiralLangParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, SpiralLangParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 172;
				this.module_();
				}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 402653215) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 1862594363) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 16515135) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & 3292528853) !== 0));
			this.state = 177;
			this.match(SpiralLangParser.EOF);
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
	public module_(): ModuleContext {
		let localctx: ModuleContext = new ModuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, SpiralLangParser.RULE_module);
		try {
			let _alt: number;
			this.state = 191;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 179;
				this.moduleDeclaration();
				this.state = 183;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 180;
						this.statement();
						}
						}
					}
					this.state = 185;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				break;
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 31:
			case 32:
			case 49:
			case 51:
			case 52:
			case 53:
			case 56:
			case 57:
			case 58:
			case 59:
			case 61:
			case 62:
			case 63:
			case 66:
			case 72:
			case 73:
			case 74:
			case 75:
			case 77:
			case 78:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 126:
			case 128:
			case 130:
			case 132:
			case 133:
			case 148:
			case 152:
			case 156:
			case 157:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 187;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 186;
						this.statement();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 189;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public moduleDeclaration(): ModuleDeclarationContext {
		let localctx: ModuleDeclarationContext = new ModuleDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, SpiralLangParser.RULE_moduleDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 193;
			this.match(SpiralLangParser.MODULE);
			this.state = 194;
			this.qualifiedName();
			this.state = 195;
			this.match(SpiralLangParser.SEMICOLON);
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
		this.enterRule(localctx, 6, SpiralLangParser.RULE_statement);
		try {
			this.state = 205;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 197;
				this.declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 198;
				this.expression();
				this.state = 199;
				this.match(SpiralLangParser.SEMICOLON);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 201;
				this.controlFlow();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 202;
				this.spiralConstruct();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 203;
				this.quantumBlock();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 204;
				this.consciousnessBlock();
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
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, SpiralLangParser.RULE_declaration);
		try {
			this.state = 214;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 207;
				this.importDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 208;
				this.functionDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 209;
				this.classDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 210;
				this.interfaceDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 211;
				this.variableDeclaration();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 212;
				this.theoremDeclaration();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 213;
				this.proofDeclaration();
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
	public importDeclaration(): ImportDeclarationContext {
		let localctx: ImportDeclarationContext = new ImportDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, SpiralLangParser.RULE_importDeclaration);
		try {
			this.state = 238;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 216;
				this.match(SpiralLangParser.IMPORT);
				this.state = 217;
				this.match(SpiralLangParser.LBRACE);
				this.state = 218;
				this.identifierList();
				this.state = 219;
				this.match(SpiralLangParser.RBRACE);
				this.state = 220;
				this.match(SpiralLangParser.FROM);
				this.state = 221;
				this.match(SpiralLangParser.STRING);
				this.state = 222;
				this.match(SpiralLangParser.SEMICOLON);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 224;
				this.match(SpiralLangParser.IMPORT);
				this.state = 225;
				this.identifier();
				this.state = 226;
				this.match(SpiralLangParser.FROM);
				this.state = 227;
				this.match(SpiralLangParser.STRING);
				this.state = 228;
				this.match(SpiralLangParser.SEMICOLON);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 230;
				this.match(SpiralLangParser.IMPORT);
				this.state = 231;
				this.identifier();
				this.state = 232;
				this.match(SpiralLangParser.ASSIGN);
				this.state = 233;
				this.match(SpiralLangParser.T__0);
				this.state = 234;
				this.match(SpiralLangParser.STRING);
				this.state = 235;
				this.match(SpiralLangParser.RPAREN);
				this.state = 236;
				this.match(SpiralLangParser.SEMICOLON);
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
		this.enterRule(localctx, 12, SpiralLangParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75 || _la===85) {
				{
				this.state = 240;
				_la = this._input.LA(1);
				if(!(_la===75 || _la===85)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 243;
			this.match(SpiralLangParser.FUNCTION);
			this.state = 244;
			this.identifier();
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===142) {
				{
				this.state = 245;
				this.typeParameters();
				}
			}

			this.state = 248;
			this.match(SpiralLangParser.LPAREN);
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===107 || _la===158) {
				{
				this.state = 249;
				this.parameterList();
				}
			}

			this.state = 252;
			this.match(SpiralLangParser.RPAREN);
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===121) {
				{
				this.state = 253;
				this.match(SpiralLangParser.COLON);
				this.state = 254;
				this.returnType();
				}
			}

			this.state = 257;
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
		this.enterRule(localctx, 14, SpiralLangParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 259;
			this.match(SpiralLangParser.CLASS);
			this.state = 260;
			this.identifier();
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===142) {
				{
				this.state = 261;
				this.typeParameters();
				}
			}

			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===54) {
				{
				this.state = 264;
				this.match(SpiralLangParser.EXTENDS);
				this.state = 265;
				this.type_();
				}
			}

			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===55) {
				{
				this.state = 268;
				this.match(SpiralLangParser.IMPLEMENTS);
				this.state = 269;
				this.typeList();
				}
			}

			this.state = 272;
			this.match(SpiralLangParser.LBRACE);
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 507904) !== 0) || _la===75 || _la===85 || _la===107) {
				{
				{
				this.state = 273;
				this.classMember();
				}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 279;
			this.match(SpiralLangParser.RBRACE);
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
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, SpiralLangParser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 281;
			this.match(SpiralLangParser.INTERFACE);
			this.state = 282;
			this.identifier();
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===142) {
				{
				this.state = 283;
				this.typeParameters();
				}
			}

			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===54) {
				{
				this.state = 286;
				this.match(SpiralLangParser.EXTENDS);
				this.state = 287;
				this.typeList();
				}
			}

			this.state = 290;
			this.match(SpiralLangParser.LBRACE);
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===107) {
				{
				{
				this.state = 291;
				this.interfaceMember();
				}
				}
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 297;
			this.match(SpiralLangParser.RBRACE);
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
		this.enterRule(localctx, 18, SpiralLangParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 299;
			_la = this._input.LA(1);
			if(!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 805306375) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 300;
			this.identifier();
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===121) {
				{
				this.state = 301;
				this.match(SpiralLangParser.COLON);
				this.state = 302;
				this.type_();
				}
			}

			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===108) {
				{
				this.state = 305;
				this.match(SpiralLangParser.ASSIGN);
				this.state = 306;
				this.expression();
				}
			}

			this.state = 309;
			this.match(SpiralLangParser.SEMICOLON);
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
	public theoremDeclaration(): TheoremDeclarationContext {
		let localctx: TheoremDeclarationContext = new TheoremDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, SpiralLangParser.RULE_theoremDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 311;
			this.match(SpiralLangParser.THEOREM);
			this.state = 312;
			this.identifier();
			this.state = 313;
			this.match(SpiralLangParser.LPAREN);
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===107 || _la===158) {
				{
				this.state = 314;
				this.parameterList();
				}
			}

			this.state = 317;
			this.match(SpiralLangParser.RPAREN);
			this.state = 318;
			this.match(SpiralLangParser.COLON);
			this.state = 319;
			this.type_();
			this.state = 320;
			this.match(SpiralLangParser.LBRACE);
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 31) !== 0)) {
				{
				{
				this.state = 321;
				this.proofStatement();
				}
				}
				this.state = 326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 327;
			this.match(SpiralLangParser.RBRACE);
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
	public proofDeclaration(): ProofDeclarationContext {
		let localctx: ProofDeclarationContext = new ProofDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, SpiralLangParser.RULE_proofDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 329;
			this.match(SpiralLangParser.PROOF);
			this.state = 330;
			this.identifier();
			this.state = 331;
			this.match(SpiralLangParser.T__1);
			this.state = 332;
			this.identifier();
			this.state = 333;
			this.match(SpiralLangParser.LBRACE);
			this.state = 337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 31) !== 0)) {
				{
				{
				this.state = 334;
				this.proofStatement();
				}
				}
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 340;
			this.match(SpiralLangParser.RBRACE);
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
	public controlFlow(): ControlFlowContext {
		let localctx: ControlFlowContext = new ControlFlowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SpiralLangParser.RULE_controlFlow);
		try {
			this.state = 347;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 342;
				this.ifStatement();
				}
				break;
			case 61:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 343;
				this.whileStatement();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 344;
				this.forStatement();
				}
				break;
			case 63:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 345;
				this.switchStatement();
				}
				break;
			case 66:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 346;
				this.tryStatement();
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
	public ifStatement(): IfStatementContext {
		let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, SpiralLangParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 349;
			this.match(SpiralLangParser.IF);
			this.state = 350;
			this.match(SpiralLangParser.LPAREN);
			this.state = 351;
			this.expression();
			this.state = 352;
			this.match(SpiralLangParser.RPAREN);
			this.state = 353;
			this.statement();
			this.state = 356;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 354;
				this.match(SpiralLangParser.ELSE);
				this.state = 355;
				this.statement();
				}
				break;
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
	public whileStatement(): WhileStatementContext {
		let localctx: WhileStatementContext = new WhileStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, SpiralLangParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 358;
			this.match(SpiralLangParser.WHILE);
			this.state = 359;
			this.match(SpiralLangParser.LPAREN);
			this.state = 360;
			this.expression();
			this.state = 361;
			this.match(SpiralLangParser.RPAREN);
			this.state = 362;
			this.statement();
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
	public forStatement(): ForStatementContext {
		let localctx: ForStatementContext = new ForStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, SpiralLangParser.RULE_forStatement);
		try {
			this.state = 385;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 364;
				this.match(SpiralLangParser.FOR);
				this.state = 365;
				this.match(SpiralLangParser.LPAREN);
				this.state = 366;
				this.variableDeclaration();
				this.state = 367;
				this.expression();
				this.state = 368;
				this.match(SpiralLangParser.SEMICOLON);
				this.state = 369;
				this.expression();
				this.state = 370;
				this.match(SpiralLangParser.RPAREN);
				this.state = 371;
				this.statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 373;
				this.match(SpiralLangParser.FOR);
				this.state = 374;
				this.identifier();
				this.state = 375;
				this.match(SpiralLangParser.T__2);
				this.state = 376;
				this.expression();
				this.state = 377;
				this.statement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 379;
				this.match(SpiralLangParser.FOR);
				this.state = 380;
				this.identifier();
				this.state = 381;
				this.match(SpiralLangParser.T__1);
				this.state = 382;
				this.expression();
				this.state = 383;
				this.statement();
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
	public switchStatement(): SwitchStatementContext {
		let localctx: SwitchStatementContext = new SwitchStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, SpiralLangParser.RULE_switchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 387;
			this.match(SpiralLangParser.SWITCH);
			this.state = 388;
			this.match(SpiralLangParser.LPAREN);
			this.state = 389;
			this.expression();
			this.state = 390;
			this.match(SpiralLangParser.RPAREN);
			this.state = 391;
			this.match(SpiralLangParser.LBRACE);
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 392;
				this.caseClause();
				}
				}
				this.state = 397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===65) {
				{
				this.state = 398;
				this.defaultClause();
				}
			}

			this.state = 401;
			this.match(SpiralLangParser.RBRACE);
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
	public tryStatement(): TryStatementContext {
		let localctx: TryStatementContext = new TryStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, SpiralLangParser.RULE_tryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 403;
			this.match(SpiralLangParser.TRY);
			this.state = 404;
			this.blockStatement();
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===67) {
				{
				this.state = 405;
				this.match(SpiralLangParser.CATCH);
				this.state = 406;
				this.match(SpiralLangParser.LPAREN);
				this.state = 407;
				this.identifier();
				this.state = 408;
				this.match(SpiralLangParser.RPAREN);
				this.state = 409;
				this.blockStatement();
				}
			}

			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68) {
				{
				this.state = 413;
				this.match(SpiralLangParser.FINALLY);
				this.state = 414;
				this.blockStatement();
				}
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
	public spiralConstruct(): SpiralConstructContext {
		let localctx: SpiralConstructContext = new SpiralConstructContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, SpiralLangParser.RULE_spiralConstruct);
		try {
			this.state = 421;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 84:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 417;
				this.phiCalculation();
				}
				break;
			case 86:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 418;
				this.resonanceField();
				}
				break;
			case 87:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 419;
				this.entropyAnalysis();
				}
				break;
			case 88:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 420;
				this.harmonicSequence();
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
	public phiCalculation(): PhiCalculationContext {
		let localctx: PhiCalculationContext = new PhiCalculationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, SpiralLangParser.RULE_phiCalculation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 423;
			this.match(SpiralLangParser.PHI);
			this.state = 424;
			this.match(SpiralLangParser.LBRACE);
			this.state = 425;
			this.phiExpression();
			this.state = 426;
			this.match(SpiralLangParser.RBRACE);
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
	public resonanceField(): ResonanceFieldContext {
		let localctx: ResonanceFieldContext = new ResonanceFieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, SpiralLangParser.RULE_resonanceField);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 428;
			this.match(SpiralLangParser.RESONANCE);
			this.state = 429;
			this.match(SpiralLangParser.LPAREN);
			this.state = 430;
			this.expression();
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===123) {
				{
				{
				this.state = 431;
				this.match(SpiralLangParser.COMMA);
				this.state = 432;
				this.expression();
				}
				}
				this.state = 437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 438;
			this.match(SpiralLangParser.RPAREN);
			this.state = 439;
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
	public entropyAnalysis(): EntropyAnalysisContext {
		let localctx: EntropyAnalysisContext = new EntropyAnalysisContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, SpiralLangParser.RULE_entropyAnalysis);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 441;
			this.match(SpiralLangParser.ENTROPY);
			this.state = 442;
			this.match(SpiralLangParser.LBRACE);
			this.state = 443;
			this.entropyExpression();
			this.state = 444;
			this.match(SpiralLangParser.RBRACE);
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
	public harmonicSequence(): HarmonicSequenceContext {
		let localctx: HarmonicSequenceContext = new HarmonicSequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, SpiralLangParser.RULE_harmonicSequence);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 446;
			this.match(SpiralLangParser.HARMONIC);
			this.state = 447;
			this.match(SpiralLangParser.LPAREN);
			this.state = 448;
			this.expression();
			this.state = 449;
			this.match(SpiralLangParser.COMMA);
			this.state = 450;
			this.expression();
			this.state = 451;
			this.match(SpiralLangParser.RPAREN);
			this.state = 452;
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
	public quantumBlock(): QuantumBlockContext {
		let localctx: QuantumBlockContext = new QuantumBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, SpiralLangParser.RULE_quantumBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 454;
			this.match(SpiralLangParser.QUANTUM);
			this.state = 455;
			this.match(SpiralLangParser.LBRACE);
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 32767) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 7) !== 0)) {
				{
				{
				this.state = 456;
				this.quantumStatement();
				}
				}
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 462;
			this.match(SpiralLangParser.RBRACE);
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
		this.enterRule(localctx, 48, SpiralLangParser.RULE_quantumStatement);
		try {
			this.state = 468;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 464;
				this.quantumGate();
				}
				break;
			case 99:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 465;
				this.quantumMeasurement();
				}
				break;
			case 100:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 466;
				this.quantumEntanglement();
				}
				break;
			case 101:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 467;
				this.quantumCollapse();
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
		this.enterRule(localctx, 50, SpiralLangParser.RULE_quantumGate);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 470;
			this.gateType();
			this.state = 471;
			this.match(SpiralLangParser.LPAREN);
			this.state = 472;
			this.expressionList();
			this.state = 473;
			this.match(SpiralLangParser.RPAREN);
			this.state = 474;
			this.match(SpiralLangParser.SEMICOLON);
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
		this.enterRule(localctx, 52, SpiralLangParser.RULE_quantumMeasurement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 476;
			this.match(SpiralLangParser.MEASURE);
			this.state = 477;
			this.match(SpiralLangParser.LPAREN);
			this.state = 478;
			this.expressionList();
			this.state = 479;
			this.match(SpiralLangParser.RPAREN);
			this.state = 480;
			this.match(SpiralLangParser.SEMICOLON);
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
	public quantumEntanglement(): QuantumEntanglementContext {
		let localctx: QuantumEntanglementContext = new QuantumEntanglementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, SpiralLangParser.RULE_quantumEntanglement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 482;
			this.match(SpiralLangParser.ENTANGLE);
			this.state = 483;
			this.match(SpiralLangParser.LPAREN);
			this.state = 484;
			this.expression();
			this.state = 485;
			this.match(SpiralLangParser.COMMA);
			this.state = 486;
			this.expression();
			this.state = 487;
			this.match(SpiralLangParser.RPAREN);
			this.state = 488;
			this.match(SpiralLangParser.SEMICOLON);
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
	public quantumCollapse(): QuantumCollapseContext {
		let localctx: QuantumCollapseContext = new QuantumCollapseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, SpiralLangParser.RULE_quantumCollapse);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 490;
			this.match(SpiralLangParser.COLLAPSE);
			this.state = 491;
			this.match(SpiralLangParser.LPAREN);
			this.state = 492;
			this.expression();
			this.state = 493;
			this.match(SpiralLangParser.RPAREN);
			this.state = 494;
			this.match(SpiralLangParser.SEMICOLON);
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
	public consciousnessBlock(): ConsciousnessBlockContext {
		let localctx: ConsciousnessBlockContext = new ConsciousnessBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, SpiralLangParser.RULE_consciousnessBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 496;
			this.match(SpiralLangParser.CONSCIOUSNESS);
			this.state = 497;
			this.match(SpiralLangParser.LBRACE);
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12 || _la===13 || _la===91 || _la===93) {
				{
				{
				this.state = 498;
				this.consciousnessStatement();
				}
				}
				this.state = 503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 504;
			this.match(SpiralLangParser.RBRACE);
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
	public consciousnessStatement(): ConsciousnessStatementContext {
		let localctx: ConsciousnessStatementContext = new ConsciousnessStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, SpiralLangParser.RULE_consciousnessStatement);
		try {
			this.state = 510;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 506;
				this.memoryAccess();
				}
				break;
			case 91:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 507;
				this.learningPattern();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 508;
				this.emotionalState();
				}
				break;
			case 93:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 509;
				this.decisionTree();
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
	public blockStatement(): BlockStatementContext {
		let localctx: BlockStatementContext = new BlockStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, SpiralLangParser.RULE_blockStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 512;
			this.match(SpiralLangParser.LBRACE);
			this.state = 516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 402653215) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 931297181) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 16515135) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & 3292528853) !== 0)) {
				{
				{
				this.state = 513;
				this.statement();
				}
				}
				this.state = 518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 519;
			this.match(SpiralLangParser.RBRACE);
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
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, SpiralLangParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 521;
			this.assignmentExpression();
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
	public assignmentExpression(): AssignmentExpressionContext {
		let localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, SpiralLangParser.RULE_assignmentExpression);
		try {
			this.state = 528;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 523;
				this.conditionalExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 524;
				this.leftHandSideExpression();
				this.state = 525;
				this.assignmentOperator();
				this.state = 526;
				this.assignmentExpression();
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
	public conditionalExpression(): ConditionalExpressionContext {
		let localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, SpiralLangParser.RULE_conditionalExpression);
		try {
			this.state = 537;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 530;
				this.logicalOrExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 531;
				this.logicalOrExpression(0);
				this.state = 532;
				this.match(SpiralLangParser.QUESTION);
				this.state = 533;
				this.assignmentExpression();
				this.state = 534;
				this.match(SpiralLangParser.COLON);
				this.state = 535;
				this.assignmentExpression();
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

	public logicalOrExpression(): LogicalOrExpressionContext;
	public logicalOrExpression(_p: number): LogicalOrExpressionContext;
	// @RuleVersion(0)
	public logicalOrExpression(_p?: number): LogicalOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this, this._ctx, _parentState);
		let _prevctx: LogicalOrExpressionContext = localctx;
		let _startState: number = 70;
		this.enterRecursionRule(localctx, 70, SpiralLangParser.RULE_logicalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 540;
			this.logicalAndExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 547;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new LogicalOrExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, SpiralLangParser.RULE_logicalOrExpression);
					this.state = 542;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 543;
					this.match(SpiralLangParser.OR);
					this.state = 544;
					this.logicalAndExpression(0);
					}
					}
				}
				this.state = 549;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
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

	public logicalAndExpression(): LogicalAndExpressionContext;
	public logicalAndExpression(_p: number): LogicalAndExpressionContext;
	// @RuleVersion(0)
	public logicalAndExpression(_p?: number): LogicalAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this, this._ctx, _parentState);
		let _prevctx: LogicalAndExpressionContext = localctx;
		let _startState: number = 72;
		this.enterRecursionRule(localctx, 72, SpiralLangParser.RULE_logicalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 551;
			this.equalityExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 558;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new LogicalAndExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, SpiralLangParser.RULE_logicalAndExpression);
					this.state = 553;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 554;
					this.match(SpiralLangParser.AND);
					this.state = 555;
					this.equalityExpression(0);
					}
					}
				}
				this.state = 560;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
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

	public equalityExpression(): EqualityExpressionContext;
	public equalityExpression(_p: number): EqualityExpressionContext;
	// @RuleVersion(0)
	public equalityExpression(_p?: number): EqualityExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: EqualityExpressionContext = new EqualityExpressionContext(this, this._ctx, _parentState);
		let _prevctx: EqualityExpressionContext = localctx;
		let _startState: number = 74;
		this.enterRecursionRule(localctx, 74, SpiralLangParser.RULE_equalityExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 562;
			this.relationalExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 569;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, SpiralLangParser.RULE_equalityExpression);
					this.state = 564;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 565;
					_la = this._input.LA(1);
					if(!(((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & 15) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 566;
					this.relationalExpression(0);
					}
					}
				}
				this.state = 571;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
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

	public relationalExpression(): RelationalExpressionContext;
	public relationalExpression(_p: number): RelationalExpressionContext;
	// @RuleVersion(0)
	public relationalExpression(_p?: number): RelationalExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: RelationalExpressionContext = new RelationalExpressionContext(this, this._ctx, _parentState);
		let _prevctx: RelationalExpressionContext = localctx;
		let _startState: number = 76;
		this.enterRecursionRule(localctx, 76, SpiralLangParser.RULE_relationalExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 573;
			this.additiveExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 580;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, SpiralLangParser.RULE_relationalExpression);
					this.state = 575;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 576;
					_la = this._input.LA(1);
					if(!(((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & 15) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 577;
					this.additiveExpression(0);
					}
					}
				}
				this.state = 582;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
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

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	// @RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this, this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = localctx;
		let _startState: number = 78;
		this.enterRecursionRule(localctx, 78, SpiralLangParser.RULE_additiveExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 584;
			this.multiplicativeExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 591;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, SpiralLangParser.RULE_additiveExpression);
					this.state = 586;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 587;
					_la = this._input.LA(1);
					if(!(_la===132 || _la===133)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 588;
					this.multiplicativeExpression(0);
					}
					}
				}
				this.state = 593;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
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

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	// @RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this, this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = localctx;
		let _startState: number = 80;
		this.enterRecursionRule(localctx, 80, SpiralLangParser.RULE_multiplicativeExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 595;
			this.unaryExpression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 602;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, SpiralLangParser.RULE_multiplicativeExpression);
					this.state = 597;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 598;
					_la = this._input.LA(1);
					if(!(((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & 7) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 599;
					this.unaryExpression();
					}
					}
				}
				this.state = 604;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 44, this._ctx);
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
	public unaryExpression(): UnaryExpressionContext {
		let localctx: UnaryExpressionContext = new UnaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, SpiralLangParser.RULE_unaryExpression);
		let _la: number;
		try {
			this.state = 608;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 31:
			case 32:
			case 72:
			case 73:
			case 74:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 126:
			case 128:
			case 130:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 605;
				this.postfixExpression();
				}
				break;
			case 132:
			case 133:
			case 148:
			case 152:
			case 156:
			case 157:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 606;
				_la = this._input.LA(1);
				if(!(((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & 51445763) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 607;
				this.unaryExpression();
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
	public postfixExpression(): PostfixExpressionContext {
		let localctx: PostfixExpressionContext = new PostfixExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, SpiralLangParser.RULE_postfixExpression);
		let _la: number;
		try {
			this.state = 614;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 610;
				this.leftHandSideExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 611;
				this.leftHandSideExpression();
				this.state = 612;
				_la = this._input.LA(1);
				if(!(_la===156 || _la===157)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
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
	public leftHandSideExpression(): LeftHandSideExpressionContext {
		let localctx: LeftHandSideExpressionContext = new LeftHandSideExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, SpiralLangParser.RULE_leftHandSideExpression);
		try {
			this.state = 618;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 616;
				this.newExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 617;
				this.callExpression(0);
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
	public newExpression(): NewExpressionContext {
		let localctx: NewExpressionContext = new NewExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, SpiralLangParser.RULE_newExpression);
		try {
			this.state = 623;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 620;
				this.memberExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 621;
				this.match(SpiralLangParser.NEW);
				this.state = 622;
				this.newExpression();
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

	public callExpression(): CallExpressionContext;
	public callExpression(_p: number): CallExpressionContext;
	// @RuleVersion(0)
	public callExpression(_p?: number): CallExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: CallExpressionContext = new CallExpressionContext(this, this._ctx, _parentState);
		let _prevctx: CallExpressionContext = localctx;
		let _startState: number = 90;
		this.enterRecursionRule(localctx, 90, SpiralLangParser.RULE_callExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 626;
			this.memberExpression(0);
			this.state = 627;
			this.arguments();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 641;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 639;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
					case 1:
						{
						localctx = new CallExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SpiralLangParser.RULE_callExpression);
						this.state = 629;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 630;
						this.arguments();
						}
						break;
					case 2:
						{
						localctx = new CallExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SpiralLangParser.RULE_callExpression);
						this.state = 631;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 632;
						this.match(SpiralLangParser.LBRACKET);
						this.state = 633;
						this.expression();
						this.state = 634;
						this.match(SpiralLangParser.RBRACKET);
						}
						break;
					case 3:
						{
						localctx = new CallExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SpiralLangParser.RULE_callExpression);
						this.state = 636;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 637;
						this.match(SpiralLangParser.DOT);
						this.state = 638;
						this.identifier();
						}
						break;
					}
					}
				}
				this.state = 643;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
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

	public memberExpression(): MemberExpressionContext;
	public memberExpression(_p: number): MemberExpressionContext;
	// @RuleVersion(0)
	public memberExpression(_p?: number): MemberExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: MemberExpressionContext = new MemberExpressionContext(this, this._ctx, _parentState);
		let _prevctx: MemberExpressionContext = localctx;
		let _startState: number = 92;
		this.enterRecursionRule(localctx, 92, SpiralLangParser.RULE_memberExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 650;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 31:
			case 32:
			case 73:
			case 74:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 126:
			case 128:
			case 130:
				{
				this.state = 645;
				this.primaryExpression();
				}
				break;
			case 72:
				{
				this.state = 646;
				this.match(SpiralLangParser.NEW);
				this.state = 647;
				this.memberExpression(0);
				this.state = 648;
				this.arguments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 662;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 660;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
					case 1:
						{
						localctx = new MemberExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SpiralLangParser.RULE_memberExpression);
						this.state = 652;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 653;
						this.match(SpiralLangParser.LBRACKET);
						this.state = 654;
						this.expression();
						this.state = 655;
						this.match(SpiralLangParser.RBRACKET);
						}
						break;
					case 2:
						{
						localctx = new MemberExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SpiralLangParser.RULE_memberExpression);
						this.state = 657;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 658;
						this.match(SpiralLangParser.DOT);
						this.state = 659;
						this.identifier();
						}
						break;
					}
					}
				}
				this.state = 664;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
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
	public primaryExpression(): PrimaryExpressionContext {
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, SpiralLangParser.RULE_primaryExpression);
		try {
			this.state = 677;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 665;
				this.match(SpiralLangParser.THIS);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 666;
				this.match(SpiralLangParser.SUPER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 667;
				this.identifier();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 668;
				this.literal();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 669;
				this.arrayLiteral();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 670;
				this.objectLiteral();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 671;
				this.match(SpiralLangParser.LPAREN);
				this.state = 672;
				this.expression();
				this.state = 673;
				this.match(SpiralLangParser.RPAREN);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 675;
				this.phiExpression();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 676;
				this.quantumExpression();
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
	public phiExpression(): PhiExpressionContext {
		let localctx: PhiExpressionContext = new PhiExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, SpiralLangParser.RULE_phiExpression);
		try {
			this.state = 691;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 679;
				this.match(SpiralLangParser.PHI_CONSTANT);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 680;
				this.match(SpiralLangParser.PHI_CONSTANT);
				this.state = 681;
				this.match(SpiralLangParser.MULT);
				this.state = 682;
				this.expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 683;
				this.match(SpiralLangParser.T__3);
				this.state = 684;
				this.expression();
				this.state = 685;
				this.match(SpiralLangParser.RPAREN);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 687;
				this.match(SpiralLangParser.T__4);
				this.state = 688;
				this.expression();
				this.state = 689;
				this.match(SpiralLangParser.RPAREN);
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
	public quantumExpression(): QuantumExpressionContext {
		let localctx: QuantumExpressionContext = new QuantumExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, SpiralLangParser.RULE_quantumExpression);
		try {
			this.state = 705;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 693;
				this.match(SpiralLangParser.T__5);
				this.state = 694;
				this.expression();
				this.state = 695;
				this.match(SpiralLangParser.RPAREN);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 697;
				this.match(SpiralLangParser.T__6);
				this.state = 698;
				this.expressionList();
				this.state = 699;
				this.match(SpiralLangParser.RPAREN);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 701;
				this.match(SpiralLangParser.T__7);
				this.state = 702;
				this.expression();
				this.state = 703;
				this.match(SpiralLangParser.RPAREN);
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
	public entropyExpression(): EntropyExpressionContext {
		let localctx: EntropyExpressionContext = new EntropyExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, SpiralLangParser.RULE_entropyExpression);
		try {
			this.state = 719;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 707;
				this.match(SpiralLangParser.T__8);
				this.state = 708;
				this.expression();
				this.state = 709;
				this.match(SpiralLangParser.RPAREN);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 711;
				this.match(SpiralLangParser.T__9);
				this.state = 712;
				this.expression();
				this.state = 713;
				this.match(SpiralLangParser.RPAREN);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 715;
				this.match(SpiralLangParser.T__10);
				this.state = 716;
				this.expression();
				this.state = 717;
				this.match(SpiralLangParser.RPAREN);
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
	public proofStatement(): ProofStatementContext {
		let localctx: ProofStatementContext = new ProofStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, SpiralLangParser.RULE_proofStatement);
		try {
			this.state = 739;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 79:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 721;
				this.match(SpiralLangParser.REQUIRE);
				this.state = 722;
				this.expression();
				this.state = 723;
				this.match(SpiralLangParser.SEMICOLON);
				}
				break;
			case 80:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 725;
				this.match(SpiralLangParser.ASSERT);
				this.state = 726;
				this.expression();
				this.state = 727;
				this.match(SpiralLangParser.SEMICOLON);
				}
				break;
			case 81:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 729;
				this.match(SpiralLangParser.YIELD);
				this.state = 730;
				this.expression();
				this.state = 731;
				this.match(SpiralLangParser.SEMICOLON);
				}
				break;
			case 82:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 733;
				this.match(SpiralLangParser.VIA);
				this.state = 734;
				this.expression();
				this.state = 735;
				this.match(SpiralLangParser.SEMICOLON);
				}
				break;
			case 83:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 737;
				this.match(SpiralLangParser.QED);
				this.state = 738;
				this.match(SpiralLangParser.SEMICOLON);
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
	public memoryAccess(): MemoryAccessContext {
		let localctx: MemoryAccessContext = new MemoryAccessContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, SpiralLangParser.RULE_memoryAccess);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 741;
			this.match(SpiralLangParser.T__11);
			this.state = 742;
			this.identifier();
			this.state = 745;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===108) {
				{
				this.state = 743;
				this.match(SpiralLangParser.ASSIGN);
				this.state = 744;
				this.expression();
				}
			}

			this.state = 747;
			this.match(SpiralLangParser.SEMICOLON);
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
	public learningPattern(): LearningPatternContext {
		let localctx: LearningPatternContext = new LearningPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, SpiralLangParser.RULE_learningPattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 749;
			this.match(SpiralLangParser.LEARN);
			this.state = 750;
			this.match(SpiralLangParser.LPAREN);
			this.state = 751;
			this.expression();
			this.state = 752;
			this.match(SpiralLangParser.RPAREN);
			this.state = 753;
			this.match(SpiralLangParser.SEMICOLON);
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
	public emotionalState(): EmotionalStateContext {
		let localctx: EmotionalStateContext = new EmotionalStateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, SpiralLangParser.RULE_emotionalState);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 755;
			this.match(SpiralLangParser.T__12);
			this.state = 756;
			this.identifier();
			this.state = 757;
			this.match(SpiralLangParser.ASSIGN);
			this.state = 758;
			this.expression();
			this.state = 759;
			this.match(SpiralLangParser.SEMICOLON);
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
	public decisionTree(): DecisionTreeContext {
		let localctx: DecisionTreeContext = new DecisionTreeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, SpiralLangParser.RULE_decisionTree);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 761;
			this.match(SpiralLangParser.DECIDE);
			this.state = 762;
			this.match(SpiralLangParser.LPAREN);
			this.state = 763;
			this.expression();
			this.state = 764;
			this.match(SpiralLangParser.RPAREN);
			this.state = 765;
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
	public caseClause(): CaseClauseContext {
		let localctx: CaseClauseContext = new CaseClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, SpiralLangParser.RULE_caseClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 767;
			this.match(SpiralLangParser.CASE);
			this.state = 768;
			this.expression();
			this.state = 769;
			this.match(SpiralLangParser.COLON);
			this.state = 773;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 402653215) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 931297181) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 16515135) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & 3292528853) !== 0)) {
				{
				{
				this.state = 770;
				this.statement();
				}
				}
				this.state = 775;
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
	public defaultClause(): DefaultClauseContext {
		let localctx: DefaultClauseContext = new DefaultClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, SpiralLangParser.RULE_defaultClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 776;
			this.match(SpiralLangParser.DEFAULT);
			this.state = 777;
			this.match(SpiralLangParser.COLON);
			this.state = 781;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 402653215) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 931297181) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 16515135) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & 3292528853) !== 0)) {
				{
				{
				this.state = 778;
				this.statement();
				}
				}
				this.state = 783;
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
	public classMember(): ClassMemberContext {
		let localctx: ClassMemberContext = new ClassMemberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, SpiralLangParser.RULE_classMember);
		try {
			this.state = 787;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 784;
				this.propertyDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 785;
				this.methodDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 786;
				this.constructorDeclaration();
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
	public interfaceMember(): InterfaceMemberContext {
		let localctx: InterfaceMemberContext = new InterfaceMemberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, SpiralLangParser.RULE_interfaceMember);
		try {
			this.state = 791;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 789;
				this.propertySignature();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 790;
				this.methodSignature();
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
	public propertyDeclaration(): PropertyDeclarationContext {
		let localctx: PropertyDeclarationContext = new PropertyDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, SpiralLangParser.RULE_propertyDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 796;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 245760) !== 0)) {
				{
				{
				this.state = 793;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 245760) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 799;
			this.identifier();
			this.state = 800;
			this.match(SpiralLangParser.COLON);
			this.state = 801;
			this.type_();
			this.state = 804;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===108) {
				{
				this.state = 802;
				this.match(SpiralLangParser.ASSIGN);
				this.state = 803;
				this.expression();
				}
			}

			this.state = 806;
			this.match(SpiralLangParser.SEMICOLON);
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
	public methodDeclaration(): MethodDeclarationContext {
		let localctx: MethodDeclarationContext = new MethodDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, SpiralLangParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 245760) !== 0) || _la===75 || _la===85) {
				{
				{
				this.state = 808;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 245760) !== 0) || _la===75 || _la===85)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 814;
			this.identifier();
			this.state = 815;
			this.match(SpiralLangParser.LPAREN);
			this.state = 817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===107 || _la===158) {
				{
				this.state = 816;
				this.parameterList();
				}
			}

			this.state = 819;
			this.match(SpiralLangParser.RPAREN);
			this.state = 822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===121) {
				{
				this.state = 820;
				this.match(SpiralLangParser.COLON);
				this.state = 821;
				this.returnType();
				}
			}

			this.state = 824;
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
	public constructorDeclaration(): ConstructorDeclarationContext {
		let localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, SpiralLangParser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 826;
			this.match(SpiralLangParser.T__17);
			this.state = 827;
			this.match(SpiralLangParser.LPAREN);
			this.state = 829;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===107 || _la===158) {
				{
				this.state = 828;
				this.parameterList();
				}
			}

			this.state = 831;
			this.match(SpiralLangParser.RPAREN);
			this.state = 832;
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
	public propertySignature(): PropertySignatureContext {
		let localctx: PropertySignatureContext = new PropertySignatureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, SpiralLangParser.RULE_propertySignature);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 834;
			this.identifier();
			this.state = 835;
			this.match(SpiralLangParser.COLON);
			this.state = 836;
			this.type_();
			this.state = 837;
			this.match(SpiralLangParser.SEMICOLON);
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
	public methodSignature(): MethodSignatureContext {
		let localctx: MethodSignatureContext = new MethodSignatureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, SpiralLangParser.RULE_methodSignature);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 839;
			this.identifier();
			this.state = 840;
			this.match(SpiralLangParser.LPAREN);
			this.state = 842;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===107 || _la===158) {
				{
				this.state = 841;
				this.parameterList();
				}
			}

			this.state = 844;
			this.match(SpiralLangParser.RPAREN);
			this.state = 845;
			this.match(SpiralLangParser.COLON);
			this.state = 846;
			this.returnType();
			this.state = 847;
			this.match(SpiralLangParser.SEMICOLON);
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
		this.enterRule(localctx, 130, SpiralLangParser.RULE_type);
		let _la: number;
		try {
			this.state = 864;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 126:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 849;
				this.functionType();
				}
				break;
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 107:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 850;
				this.primaryType();
				this.state = 855;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===149 || _la===150) {
					{
					{
					this.state = 851;
					_la = this._input.LA(1);
					if(!(_la===149 || _la===150)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 852;
					this.primaryType();
					}
					}
					this.state = 857;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 861;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===19) {
					{
					{
					this.state = 858;
					this.match(SpiralLangParser.T__18);
					}
					}
					this.state = 863;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
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
	public primaryType(): PrimaryTypeContext {
		let localctx: PrimaryTypeContext = new PrimaryTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, SpiralLangParser.RULE_primaryType);
		try {
			this.state = 878;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 866;
				this.match(SpiralLangParser.T__19);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 867;
				this.match(SpiralLangParser.T__20);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 868;
				this.match(SpiralLangParser.T__21);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 869;
				this.match(SpiralLangParser.T__22);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 870;
				this.match(SpiralLangParser.T__23);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 871;
				this.match(SpiralLangParser.T__24);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 872;
				this.match(SpiralLangParser.T__25);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 873;
				this.match(SpiralLangParser.T__26);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 874;
				this.match(SpiralLangParser.T__27);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 875;
				this.match(SpiralLangParser.T__28);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 876;
				this.genericType();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 877;
				this.identifier();
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
	public functionType(): FunctionTypeContext {
		let localctx: FunctionTypeContext = new FunctionTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, SpiralLangParser.RULE_functionType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 880;
			this.match(SpiralLangParser.LPAREN);
			this.state = 882;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===107 || _la===158) {
				{
				this.state = 881;
				this.parameterList();
				}
			}

			this.state = 884;
			this.match(SpiralLangParser.RPAREN);
			this.state = 885;
			this.match(SpiralLangParser.ARROW);
			this.state = 886;
			this.returnType();
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
	public genericType(): GenericTypeContext {
		let localctx: GenericTypeContext = new GenericTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, SpiralLangParser.RULE_genericType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 888;
			this.identifier();
			this.state = 889;
			this.match(SpiralLangParser.LT);
			this.state = 890;
			this.typeList();
			this.state = 891;
			this.match(SpiralLangParser.GT);
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
	public returnType(): ReturnTypeContext {
		let localctx: ReturnTypeContext = new ReturnTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, SpiralLangParser.RULE_returnType);
		try {
			this.state = 899;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 107:
			case 126:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 893;
				this.type_();
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 894;
				this.match(SpiralLangParser.T__29);
				this.state = 895;
				this.match(SpiralLangParser.LT);
				this.state = 896;
				this.type_();
				this.state = 897;
				this.match(SpiralLangParser.GT);
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
	public typeList(): TypeListContext {
		let localctx: TypeListContext = new TypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, SpiralLangParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 901;
			this.type_();
			this.state = 906;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===123) {
				{
				{
				this.state = 902;
				this.match(SpiralLangParser.COMMA);
				this.state = 903;
				this.type_();
				}
				}
				this.state = 908;
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
	public typeParameters(): TypeParametersContext {
		let localctx: TypeParametersContext = new TypeParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, SpiralLangParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 909;
			this.match(SpiralLangParser.LT);
			this.state = 910;
			this.typeParameter();
			this.state = 915;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===123) {
				{
				{
				this.state = 911;
				this.match(SpiralLangParser.COMMA);
				this.state = 912;
				this.typeParameter();
				}
				}
				this.state = 917;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 918;
			this.match(SpiralLangParser.GT);
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
	public typeParameter(): TypeParameterContext {
		let localctx: TypeParameterContext = new TypeParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, SpiralLangParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 920;
			this.identifier();
			this.state = 923;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===54) {
				{
				this.state = 921;
				this.match(SpiralLangParser.EXTENDS);
				this.state = 922;
				this.type_();
				}
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
	public parameterList(): ParameterListContext {
		let localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, SpiralLangParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 925;
			this.parameter();
			this.state = 930;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===123) {
				{
				{
				this.state = 926;
				this.match(SpiralLangParser.COMMA);
				this.state = 927;
				this.parameter();
				}
				}
				this.state = 932;
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
		this.enterRule(localctx, 148, SpiralLangParser.RULE_parameter);
		let _la: number;
		try {
			this.state = 948;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 107:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 933;
				this.identifier();
				this.state = 936;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===121) {
					{
					this.state = 934;
					this.match(SpiralLangParser.COLON);
					this.state = 935;
					this.type_();
					}
				}

				this.state = 940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===108) {
					{
					this.state = 938;
					this.match(SpiralLangParser.ASSIGN);
					this.state = 939;
					this.expression();
					}
				}

				}
				break;
			case 158:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 942;
				this.match(SpiralLangParser.ELLIPSIS);
				this.state = 943;
				this.identifier();
				this.state = 946;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===121) {
					{
					this.state = 944;
					this.match(SpiralLangParser.COLON);
					this.state = 945;
					this.type_();
					}
				}

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
	public arguments(): ArgumentsContext {
		let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, SpiralLangParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 950;
			this.match(SpiralLangParser.LPAREN);
			this.state = 952;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 402653215) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 3221225479) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 893386767) !== 0) || ((((_la - 148)) & ~0x1F) === 0 && ((1 << (_la - 148)) & 785) !== 0)) {
				{
				this.state = 951;
				this.expressionList();
				}
			}

			this.state = 954;
			this.match(SpiralLangParser.RPAREN);
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
		this.enterRule(localctx, 152, SpiralLangParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 956;
			this.expression();
			this.state = 961;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===123) {
				{
				{
				this.state = 957;
				this.match(SpiralLangParser.COMMA);
				this.state = 958;
				this.expression();
				}
				}
				this.state = 963;
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
		this.enterRule(localctx, 154, SpiralLangParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 964;
			this.identifier();
			this.state = 969;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===123) {
				{
				{
				this.state = 965;
				this.match(SpiralLangParser.COMMA);
				this.state = 966;
				this.identifier();
				}
				}
				this.state = 971;
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
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, SpiralLangParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 972;
			_la = this._input.LA(1);
			if(!(_la===31 || _la===32 || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 31) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public arrayLiteral(): ArrayLiteralContext {
		let localctx: ArrayLiteralContext = new ArrayLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, SpiralLangParser.RULE_arrayLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 974;
			this.match(SpiralLangParser.LBRACKET);
			this.state = 976;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & 402653215) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 3221225479) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 893386767) !== 0) || ((((_la - 148)) & ~0x1F) === 0 && ((1 << (_la - 148)) & 785) !== 0)) {
				{
				this.state = 975;
				this.expressionList();
				}
			}

			this.state = 978;
			this.match(SpiralLangParser.RBRACKET);
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
	public objectLiteral(): ObjectLiteralContext {
		let localctx: ObjectLiteralContext = new ObjectLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, SpiralLangParser.RULE_objectLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 980;
			this.match(SpiralLangParser.LBRACE);
			this.state = 984;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 33554437) !== 0)) {
				{
				{
				this.state = 981;
				this.propertyAssignment();
				}
				}
				this.state = 986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 987;
			this.match(SpiralLangParser.RBRACE);
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
	public propertyAssignment(): PropertyAssignmentContext {
		let localctx: PropertyAssignmentContext = new PropertyAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, SpiralLangParser.RULE_propertyAssignment);
		try {
			this.state = 1002;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 107:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 989;
				this.identifier();
				this.state = 990;
				this.match(SpiralLangParser.COLON);
				this.state = 991;
				this.expression();
				}
				break;
			case 105:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 993;
				this.match(SpiralLangParser.STRING);
				this.state = 994;
				this.match(SpiralLangParser.COLON);
				this.state = 995;
				this.expression();
				}
				break;
			case 130:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 996;
				this.match(SpiralLangParser.LBRACKET);
				this.state = 997;
				this.expression();
				this.state = 998;
				this.match(SpiralLangParser.RBRACKET);
				this.state = 999;
				this.match(SpiralLangParser.COLON);
				this.state = 1000;
				this.expression();
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
	public qualifiedName(): QualifiedNameContext {
		let localctx: QualifiedNameContext = new QualifiedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, SpiralLangParser.RULE_qualifiedName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1004;
			this.identifier();
			this.state = 1009;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===124) {
				{
				{
				this.state = 1005;
				this.match(SpiralLangParser.DOT);
				this.state = 1006;
				this.identifier();
				}
				}
				this.state = 1011;
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
	public assignmentOperator(): AssignmentOperatorContext {
		let localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, SpiralLangParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1012;
			_la = this._input.LA(1);
			if(!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 4095) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public gateType(): GateTypeContext {
		let localctx: GateTypeContext = new GateTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, SpiralLangParser.RULE_gateType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1014;
			_la = this._input.LA(1);
			if(!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 32767) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, SpiralLangParser.RULE_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1016;
			this.match(SpiralLangParser.IDENTIFIER);
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
		case 35:
			return this.logicalOrExpression_sempred(localctx as LogicalOrExpressionContext, predIndex);
		case 36:
			return this.logicalAndExpression_sempred(localctx as LogicalAndExpressionContext, predIndex);
		case 37:
			return this.equalityExpression_sempred(localctx as EqualityExpressionContext, predIndex);
		case 38:
			return this.relationalExpression_sempred(localctx as RelationalExpressionContext, predIndex);
		case 39:
			return this.additiveExpression_sempred(localctx as AdditiveExpressionContext, predIndex);
		case 40:
			return this.multiplicativeExpression_sempred(localctx as MultiplicativeExpressionContext, predIndex);
		case 45:
			return this.callExpression_sempred(localctx as CallExpressionContext, predIndex);
		case 46:
			return this.memberExpression_sempred(localctx as MemberExpressionContext, predIndex);
		}
		return true;
	}
	private logicalOrExpression_sempred(localctx: LogicalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalAndExpression_sempred(localctx: LogicalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicativeExpression_sempred(localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private callExpression_sempred(localctx: CallExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 3);
		case 7:
			return this.precpred(this._ctx, 2);
		case 8:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private memberExpression_sempred(localctx: MemberExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 3);
		case 10:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,161,1019,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,1,0,4,0,174,8,0,11,0,12,0,175,1,0,1,
	0,1,1,1,1,5,1,182,8,1,10,1,12,1,185,9,1,1,1,4,1,188,8,1,11,1,12,1,189,3,
	1,192,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,206,8,3,1,
	4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,215,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
	5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,239,8,5,1,6,3,
	6,242,8,6,1,6,1,6,1,6,3,6,247,8,6,1,6,1,6,3,6,251,8,6,1,6,1,6,1,6,3,6,256,
	8,6,1,6,1,6,1,7,1,7,1,7,3,7,263,8,7,1,7,1,7,3,7,267,8,7,1,7,1,7,3,7,271,
	8,7,1,7,1,7,5,7,275,8,7,10,7,12,7,278,9,7,1,7,1,7,1,8,1,8,1,8,3,8,285,8,
	8,1,8,1,8,3,8,289,8,8,1,8,1,8,5,8,293,8,8,10,8,12,8,296,9,8,1,8,1,8,1,9,
	1,9,1,9,1,9,3,9,304,8,9,1,9,1,9,3,9,308,8,9,1,9,1,9,1,10,1,10,1,10,1,10,
	3,10,316,8,10,1,10,1,10,1,10,1,10,1,10,5,10,323,8,10,10,10,12,10,326,9,
	10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,336,8,11,10,11,12,11,339,
	9,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,3,12,348,8,12,1,13,1,13,1,13,1,
	13,1,13,1,13,1,13,3,13,357,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,
	1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,3,15,386,8,15,1,16,1,16,1,16,1,16,1,16,1,16,5,16,
	394,8,16,10,16,12,16,397,9,16,1,16,3,16,400,8,16,1,16,1,16,1,17,1,17,1,
	17,1,17,1,17,1,17,1,17,1,17,3,17,412,8,17,1,17,1,17,3,17,416,8,17,1,18,
	1,18,1,18,1,18,3,18,422,8,18,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,
	20,1,20,5,20,434,8,20,10,20,12,20,437,9,20,1,20,1,20,1,20,1,21,1,21,1,21,
	1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,5,23,458,
	8,23,10,23,12,23,461,9,23,1,23,1,23,1,24,1,24,1,24,1,24,3,24,469,8,24,1,
	25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,
	1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,5,
	29,500,8,29,10,29,12,29,503,9,29,1,29,1,29,1,30,1,30,1,30,1,30,3,30,511,
	8,30,1,31,1,31,5,31,515,8,31,10,31,12,31,518,9,31,1,31,1,31,1,32,1,32,1,
	33,1,33,1,33,1,33,1,33,3,33,529,8,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
	3,34,538,8,34,1,35,1,35,1,35,1,35,1,35,1,35,5,35,546,8,35,10,35,12,35,549,
	9,35,1,36,1,36,1,36,1,36,1,36,1,36,5,36,557,8,36,10,36,12,36,560,9,36,1,
	37,1,37,1,37,1,37,1,37,1,37,5,37,568,8,37,10,37,12,37,571,9,37,1,38,1,38,
	1,38,1,38,1,38,1,38,5,38,579,8,38,10,38,12,38,582,9,38,1,39,1,39,1,39,1,
	39,1,39,1,39,5,39,590,8,39,10,39,12,39,593,9,39,1,40,1,40,1,40,1,40,1,40,
	1,40,5,40,601,8,40,10,40,12,40,604,9,40,1,41,1,41,1,41,3,41,609,8,41,1,
	42,1,42,1,42,1,42,3,42,615,8,42,1,43,1,43,3,43,619,8,43,1,44,1,44,1,44,
	3,44,624,8,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,
	45,1,45,1,45,5,45,640,8,45,10,45,12,45,643,9,45,1,46,1,46,1,46,1,46,1,46,
	1,46,3,46,651,8,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,5,46,661,8,46,
	10,46,12,46,664,9,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,
	1,47,1,47,3,47,678,8,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
	48,1,48,1,48,3,48,692,8,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,
	1,49,1,49,1,49,3,49,706,8,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,
	50,1,50,1,50,1,50,3,50,720,8,50,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,
	1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,3,51,740,8,51,1,52,1,
	52,1,52,1,52,3,52,746,8,52,1,52,1,52,1,53,1,53,1,53,1,53,1,53,1,53,1,54,
	1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,
	56,5,56,772,8,56,10,56,12,56,775,9,56,1,57,1,57,1,57,5,57,780,8,57,10,57,
	12,57,783,9,57,1,58,1,58,1,58,3,58,788,8,58,1,59,1,59,3,59,792,8,59,1,60,
	5,60,795,8,60,10,60,12,60,798,9,60,1,60,1,60,1,60,1,60,1,60,3,60,805,8,
	60,1,60,1,60,1,61,5,61,810,8,61,10,61,12,61,813,9,61,1,61,1,61,1,61,3,61,
	818,8,61,1,61,1,61,1,61,3,61,823,8,61,1,61,1,61,1,62,1,62,1,62,3,62,830,
	8,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,64,3,64,843,8,
	64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,5,65,854,8,65,10,65,12,
	65,857,9,65,1,65,5,65,860,8,65,10,65,12,65,863,9,65,3,65,865,8,65,1,66,
	1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,3,66,879,8,66,1,
	67,1,67,3,67,883,8,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,69,
	1,69,1,69,1,69,1,69,1,69,3,69,900,8,69,1,70,1,70,1,70,5,70,905,8,70,10,
	70,12,70,908,9,70,1,71,1,71,1,71,1,71,5,71,914,8,71,10,71,12,71,917,9,71,
	1,71,1,71,1,72,1,72,1,72,3,72,924,8,72,1,73,1,73,1,73,5,73,929,8,73,10,
	73,12,73,932,9,73,1,74,1,74,1,74,3,74,937,8,74,1,74,1,74,3,74,941,8,74,
	1,74,1,74,1,74,1,74,3,74,947,8,74,3,74,949,8,74,1,75,1,75,3,75,953,8,75,
	1,75,1,75,1,76,1,76,1,76,5,76,960,8,76,10,76,12,76,963,9,76,1,77,1,77,1,
	77,5,77,968,8,77,10,77,12,77,971,9,77,1,78,1,78,1,79,1,79,3,79,977,8,79,
	1,79,1,79,1,80,1,80,5,80,983,8,80,10,80,12,80,986,9,80,1,80,1,80,1,81,1,
	81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,3,81,1003,8,81,
	1,82,1,82,1,82,5,82,1008,8,82,10,82,12,82,1011,9,82,1,83,1,83,1,84,1,84,
	1,85,1,85,1,85,0,8,70,72,74,76,78,80,90,92,86,0,2,4,6,8,10,12,14,16,18,
	20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,
	68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,
	112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,
	148,150,152,154,156,158,160,162,164,166,168,170,0,14,2,0,75,75,85,85,2,
	0,56,58,84,85,1,0,138,141,1,0,142,145,1,0,132,133,1,0,134,136,4,0,132,133,
	148,148,152,152,156,157,1,0,156,157,1,0,14,17,3,0,14,17,75,75,85,85,1,0,
	149,150,2,0,31,32,102,106,1,0,108,119,1,0,33,47,1071,0,173,1,0,0,0,2,191,
	1,0,0,0,4,193,1,0,0,0,6,205,1,0,0,0,8,214,1,0,0,0,10,238,1,0,0,0,12,241,
	1,0,0,0,14,259,1,0,0,0,16,281,1,0,0,0,18,299,1,0,0,0,20,311,1,0,0,0,22,
	329,1,0,0,0,24,347,1,0,0,0,26,349,1,0,0,0,28,358,1,0,0,0,30,385,1,0,0,0,
	32,387,1,0,0,0,34,403,1,0,0,0,36,421,1,0,0,0,38,423,1,0,0,0,40,428,1,0,
	0,0,42,441,1,0,0,0,44,446,1,0,0,0,46,454,1,0,0,0,48,468,1,0,0,0,50,470,
	1,0,0,0,52,476,1,0,0,0,54,482,1,0,0,0,56,490,1,0,0,0,58,496,1,0,0,0,60,
	510,1,0,0,0,62,512,1,0,0,0,64,521,1,0,0,0,66,528,1,0,0,0,68,537,1,0,0,0,
	70,539,1,0,0,0,72,550,1,0,0,0,74,561,1,0,0,0,76,572,1,0,0,0,78,583,1,0,
	0,0,80,594,1,0,0,0,82,608,1,0,0,0,84,614,1,0,0,0,86,618,1,0,0,0,88,623,
	1,0,0,0,90,625,1,0,0,0,92,650,1,0,0,0,94,677,1,0,0,0,96,691,1,0,0,0,98,
	705,1,0,0,0,100,719,1,0,0,0,102,739,1,0,0,0,104,741,1,0,0,0,106,749,1,0,
	0,0,108,755,1,0,0,0,110,761,1,0,0,0,112,767,1,0,0,0,114,776,1,0,0,0,116,
	787,1,0,0,0,118,791,1,0,0,0,120,796,1,0,0,0,122,811,1,0,0,0,124,826,1,0,
	0,0,126,834,1,0,0,0,128,839,1,0,0,0,130,864,1,0,0,0,132,878,1,0,0,0,134,
	880,1,0,0,0,136,888,1,0,0,0,138,899,1,0,0,0,140,901,1,0,0,0,142,909,1,0,
	0,0,144,920,1,0,0,0,146,925,1,0,0,0,148,948,1,0,0,0,150,950,1,0,0,0,152,
	956,1,0,0,0,154,964,1,0,0,0,156,972,1,0,0,0,158,974,1,0,0,0,160,980,1,0,
	0,0,162,1002,1,0,0,0,164,1004,1,0,0,0,166,1012,1,0,0,0,168,1014,1,0,0,0,
	170,1016,1,0,0,0,172,174,3,2,1,0,173,172,1,0,0,0,174,175,1,0,0,0,175,173,
	1,0,0,0,175,176,1,0,0,0,176,177,1,0,0,0,177,178,5,0,0,1,178,1,1,0,0,0,179,
	183,3,4,2,0,180,182,3,6,3,0,181,180,1,0,0,0,182,185,1,0,0,0,183,181,1,0,
	0,0,183,184,1,0,0,0,184,192,1,0,0,0,185,183,1,0,0,0,186,188,3,6,3,0,187,
	186,1,0,0,0,188,189,1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,192,1,0,
	0,0,191,179,1,0,0,0,191,187,1,0,0,0,192,3,1,0,0,0,193,194,5,48,0,0,194,
	195,3,164,82,0,195,196,5,122,0,0,196,5,1,0,0,0,197,206,3,8,4,0,198,199,
	3,64,32,0,199,200,5,122,0,0,200,206,1,0,0,0,201,206,3,24,12,0,202,206,3,
	36,18,0,203,206,3,46,23,0,204,206,3,58,29,0,205,197,1,0,0,0,205,198,1,0,
	0,0,205,201,1,0,0,0,205,202,1,0,0,0,205,203,1,0,0,0,205,204,1,0,0,0,206,
	7,1,0,0,0,207,215,3,10,5,0,208,215,3,12,6,0,209,215,3,14,7,0,210,215,3,
	16,8,0,211,215,3,18,9,0,212,215,3,20,10,0,213,215,3,22,11,0,214,207,1,0,
	0,0,214,208,1,0,0,0,214,209,1,0,0,0,214,210,1,0,0,0,214,211,1,0,0,0,214,
	212,1,0,0,0,214,213,1,0,0,0,215,9,1,0,0,0,216,217,5,49,0,0,217,218,5,128,
	0,0,218,219,3,154,77,0,219,220,5,129,0,0,220,221,5,50,0,0,221,222,5,105,
	0,0,222,223,5,122,0,0,223,239,1,0,0,0,224,225,5,49,0,0,225,226,3,170,85,
	0,226,227,5,50,0,0,227,228,5,105,0,0,228,229,5,122,0,0,229,239,1,0,0,0,
	230,231,5,49,0,0,231,232,3,170,85,0,232,233,5,108,0,0,233,234,5,1,0,0,234,
	235,5,105,0,0,235,236,5,127,0,0,236,237,5,122,0,0,237,239,1,0,0,0,238,216,
	1,0,0,0,238,224,1,0,0,0,238,230,1,0,0,0,239,11,1,0,0,0,240,242,7,0,0,0,
	241,240,1,0,0,0,241,242,1,0,0,0,242,243,1,0,0,0,243,244,5,51,0,0,244,246,
	3,170,85,0,245,247,3,142,71,0,246,245,1,0,0,0,246,247,1,0,0,0,247,248,1,
	0,0,0,248,250,5,126,0,0,249,251,3,146,73,0,250,249,1,0,0,0,250,251,1,0,
	0,0,251,252,1,0,0,0,252,255,5,127,0,0,253,254,5,121,0,0,254,256,3,138,69,
	0,255,253,1,0,0,0,255,256,1,0,0,0,256,257,1,0,0,0,257,258,3,62,31,0,258,
	13,1,0,0,0,259,260,5,52,0,0,260,262,3,170,85,0,261,263,3,142,71,0,262,261,
	1,0,0,0,262,263,1,0,0,0,263,266,1,0,0,0,264,265,5,54,0,0,265,267,3,130,
	65,0,266,264,1,0,0,0,266,267,1,0,0,0,267,270,1,0,0,0,268,269,5,55,0,0,269,
	271,3,140,70,0,270,268,1,0,0,0,270,271,1,0,0,0,271,272,1,0,0,0,272,276,
	5,128,0,0,273,275,3,116,58,0,274,273,1,0,0,0,275,278,1,0,0,0,276,274,1,
	0,0,0,276,277,1,0,0,0,277,279,1,0,0,0,278,276,1,0,0,0,279,280,5,129,0,0,
	280,15,1,0,0,0,281,282,5,53,0,0,282,284,3,170,85,0,283,285,3,142,71,0,284,
	283,1,0,0,0,284,285,1,0,0,0,285,288,1,0,0,0,286,287,5,54,0,0,287,289,3,
	140,70,0,288,286,1,0,0,0,288,289,1,0,0,0,289,290,1,0,0,0,290,294,5,128,
	0,0,291,293,3,118,59,0,292,291,1,0,0,0,293,296,1,0,0,0,294,292,1,0,0,0,
	294,295,1,0,0,0,295,297,1,0,0,0,296,294,1,0,0,0,297,298,5,129,0,0,298,17,
	1,0,0,0,299,300,7,1,0,0,300,303,3,170,85,0,301,302,5,121,0,0,302,304,3,
	130,65,0,303,301,1,0,0,0,303,304,1,0,0,0,304,307,1,0,0,0,305,306,5,108,
	0,0,306,308,3,64,32,0,307,305,1,0,0,0,307,308,1,0,0,0,308,309,1,0,0,0,309,
	310,5,122,0,0,310,19,1,0,0,0,311,312,5,77,0,0,312,313,3,170,85,0,313,315,
	5,126,0,0,314,316,3,146,73,0,315,314,1,0,0,0,315,316,1,0,0,0,316,317,1,
	0,0,0,317,318,5,127,0,0,318,319,5,121,0,0,319,320,3,130,65,0,320,324,5,
	128,0,0,321,323,3,102,51,0,322,321,1,0,0,0,323,326,1,0,0,0,324,322,1,0,
	0,0,324,325,1,0,0,0,325,327,1,0,0,0,326,324,1,0,0,0,327,328,5,129,0,0,328,
	21,1,0,0,0,329,330,5,78,0,0,330,331,3,170,85,0,331,332,5,2,0,0,332,333,
	3,170,85,0,333,337,5,128,0,0,334,336,3,102,51,0,335,334,1,0,0,0,336,339,
	1,0,0,0,337,335,1,0,0,0,337,338,1,0,0,0,338,340,1,0,0,0,339,337,1,0,0,0,
	340,341,5,129,0,0,341,23,1,0,0,0,342,348,3,26,13,0,343,348,3,28,14,0,344,
	348,3,30,15,0,345,348,3,32,16,0,346,348,3,34,17,0,347,342,1,0,0,0,347,343,
	1,0,0,0,347,344,1,0,0,0,347,345,1,0,0,0,347,346,1,0,0,0,348,25,1,0,0,0,
	349,350,5,59,0,0,350,351,5,126,0,0,351,352,3,64,32,0,352,353,5,127,0,0,
	353,356,3,6,3,0,354,355,5,60,0,0,355,357,3,6,3,0,356,354,1,0,0,0,356,357,
	1,0,0,0,357,27,1,0,0,0,358,359,5,61,0,0,359,360,5,126,0,0,360,361,3,64,
	32,0,361,362,5,127,0,0,362,363,3,6,3,0,363,29,1,0,0,0,364,365,5,62,0,0,
	365,366,5,126,0,0,366,367,3,18,9,0,367,368,3,64,32,0,368,369,5,122,0,0,
	369,370,3,64,32,0,370,371,5,127,0,0,371,372,3,6,3,0,372,386,1,0,0,0,373,
	374,5,62,0,0,374,375,3,170,85,0,375,376,5,3,0,0,376,377,3,64,32,0,377,378,
	3,6,3,0,378,386,1,0,0,0,379,380,5,62,0,0,380,381,3,170,85,0,381,382,5,2,
	0,0,382,383,3,64,32,0,383,384,3,6,3,0,384,386,1,0,0,0,385,364,1,0,0,0,385,
	373,1,0,0,0,385,379,1,0,0,0,386,31,1,0,0,0,387,388,5,63,0,0,388,389,5,126,
	0,0,389,390,3,64,32,0,390,391,5,127,0,0,391,395,5,128,0,0,392,394,3,112,
	56,0,393,392,1,0,0,0,394,397,1,0,0,0,395,393,1,0,0,0,395,396,1,0,0,0,396,
	399,1,0,0,0,397,395,1,0,0,0,398,400,3,114,57,0,399,398,1,0,0,0,399,400,
	1,0,0,0,400,401,1,0,0,0,401,402,5,129,0,0,402,33,1,0,0,0,403,404,5,66,0,
	0,404,411,3,62,31,0,405,406,5,67,0,0,406,407,5,126,0,0,407,408,3,170,85,
	0,408,409,5,127,0,0,409,410,3,62,31,0,410,412,1,0,0,0,411,405,1,0,0,0,411,
	412,1,0,0,0,412,415,1,0,0,0,413,414,5,68,0,0,414,416,3,62,31,0,415,413,
	1,0,0,0,415,416,1,0,0,0,416,35,1,0,0,0,417,422,3,38,19,0,418,422,3,40,20,
	0,419,422,3,42,21,0,420,422,3,44,22,0,421,417,1,0,0,0,421,418,1,0,0,0,421,
	419,1,0,0,0,421,420,1,0,0,0,422,37,1,0,0,0,423,424,5,84,0,0,424,425,5,128,
	0,0,425,426,3,96,48,0,426,427,5,129,0,0,427,39,1,0,0,0,428,429,5,86,0,0,
	429,430,5,126,0,0,430,435,3,64,32,0,431,432,5,123,0,0,432,434,3,64,32,0,
	433,431,1,0,0,0,434,437,1,0,0,0,435,433,1,0,0,0,435,436,1,0,0,0,436,438,
	1,0,0,0,437,435,1,0,0,0,438,439,5,127,0,0,439,440,3,62,31,0,440,41,1,0,
	0,0,441,442,5,87,0,0,442,443,5,128,0,0,443,444,3,100,50,0,444,445,5,129,
	0,0,445,43,1,0,0,0,446,447,5,88,0,0,447,448,5,126,0,0,448,449,3,64,32,0,
	449,450,5,123,0,0,450,451,3,64,32,0,451,452,5,127,0,0,452,453,3,62,31,0,
	453,45,1,0,0,0,454,455,5,85,0,0,455,459,5,128,0,0,456,458,3,48,24,0,457,
	456,1,0,0,0,458,461,1,0,0,0,459,457,1,0,0,0,459,460,1,0,0,0,460,462,1,0,
	0,0,461,459,1,0,0,0,462,463,5,129,0,0,463,47,1,0,0,0,464,469,3,50,25,0,
	465,469,3,52,26,0,466,469,3,54,27,0,467,469,3,56,28,0,468,464,1,0,0,0,468,
	465,1,0,0,0,468,466,1,0,0,0,468,467,1,0,0,0,469,49,1,0,0,0,470,471,3,168,
	84,0,471,472,5,126,0,0,472,473,3,152,76,0,473,474,5,127,0,0,474,475,5,122,
	0,0,475,51,1,0,0,0,476,477,5,99,0,0,477,478,5,126,0,0,478,479,3,152,76,
	0,479,480,5,127,0,0,480,481,5,122,0,0,481,53,1,0,0,0,482,483,5,100,0,0,
	483,484,5,126,0,0,484,485,3,64,32,0,485,486,5,123,0,0,486,487,3,64,32,0,
	487,488,5,127,0,0,488,489,5,122,0,0,489,55,1,0,0,0,490,491,5,101,0,0,491,
	492,5,126,0,0,492,493,3,64,32,0,493,494,5,127,0,0,494,495,5,122,0,0,495,
	57,1,0,0,0,496,497,5,89,0,0,497,501,5,128,0,0,498,500,3,60,30,0,499,498,
	1,0,0,0,500,503,1,0,0,0,501,499,1,0,0,0,501,502,1,0,0,0,502,504,1,0,0,0,
	503,501,1,0,0,0,504,505,5,129,0,0,505,59,1,0,0,0,506,511,3,104,52,0,507,
	511,3,106,53,0,508,511,3,108,54,0,509,511,3,110,55,0,510,506,1,0,0,0,510,
	507,1,0,0,0,510,508,1,0,0,0,510,509,1,0,0,0,511,61,1,0,0,0,512,516,5,128,
	0,0,513,515,3,6,3,0,514,513,1,0,0,0,515,518,1,0,0,0,516,514,1,0,0,0,516,
	517,1,0,0,0,517,519,1,0,0,0,518,516,1,0,0,0,519,520,5,129,0,0,520,63,1,
	0,0,0,521,522,3,66,33,0,522,65,1,0,0,0,523,529,3,68,34,0,524,525,3,86,43,
	0,525,526,3,166,83,0,526,527,3,66,33,0,527,529,1,0,0,0,528,523,1,0,0,0,
	528,524,1,0,0,0,529,67,1,0,0,0,530,538,3,70,35,0,531,532,3,70,35,0,532,
	533,5,120,0,0,533,534,3,66,33,0,534,535,5,121,0,0,535,536,3,66,33,0,536,
	538,1,0,0,0,537,530,1,0,0,0,537,531,1,0,0,0,538,69,1,0,0,0,539,540,6,35,
	-1,0,540,541,3,72,36,0,541,547,1,0,0,0,542,543,10,1,0,0,543,544,5,147,0,
	0,544,546,3,72,36,0,545,542,1,0,0,0,546,549,1,0,0,0,547,545,1,0,0,0,547,
	548,1,0,0,0,548,71,1,0,0,0,549,547,1,0,0,0,550,551,6,36,-1,0,551,552,3,
	74,37,0,552,558,1,0,0,0,553,554,10,1,0,0,554,555,5,146,0,0,555,557,3,74,
	37,0,556,553,1,0,0,0,557,560,1,0,0,0,558,556,1,0,0,0,558,559,1,0,0,0,559,
	73,1,0,0,0,560,558,1,0,0,0,561,562,6,37,-1,0,562,563,3,76,38,0,563,569,
	1,0,0,0,564,565,10,1,0,0,565,566,7,2,0,0,566,568,3,76,38,0,567,564,1,0,
	0,0,568,571,1,0,0,0,569,567,1,0,0,0,569,570,1,0,0,0,570,75,1,0,0,0,571,
	569,1,0,0,0,572,573,6,38,-1,0,573,574,3,78,39,0,574,580,1,0,0,0,575,576,
	10,1,0,0,576,577,7,3,0,0,577,579,3,78,39,0,578,575,1,0,0,0,579,582,1,0,
	0,0,580,578,1,0,0,0,580,581,1,0,0,0,581,77,1,0,0,0,582,580,1,0,0,0,583,
	584,6,39,-1,0,584,585,3,80,40,0,585,591,1,0,0,0,586,587,10,1,0,0,587,588,
	7,4,0,0,588,590,3,80,40,0,589,586,1,0,0,0,590,593,1,0,0,0,591,589,1,0,0,
	0,591,592,1,0,0,0,592,79,1,0,0,0,593,591,1,0,0,0,594,595,6,40,-1,0,595,
	596,3,82,41,0,596,602,1,0,0,0,597,598,10,1,0,0,598,599,7,5,0,0,599,601,
	3,82,41,0,600,597,1,0,0,0,601,604,1,0,0,0,602,600,1,0,0,0,602,603,1,0,0,
	0,603,81,1,0,0,0,604,602,1,0,0,0,605,609,3,84,42,0,606,607,7,6,0,0,607,
	609,3,82,41,0,608,605,1,0,0,0,608,606,1,0,0,0,609,83,1,0,0,0,610,615,3,
	86,43,0,611,612,3,86,43,0,612,613,7,7,0,0,613,615,1,0,0,0,614,610,1,0,0,
	0,614,611,1,0,0,0,615,85,1,0,0,0,616,619,3,88,44,0,617,619,3,90,45,0,618,
	616,1,0,0,0,618,617,1,0,0,0,619,87,1,0,0,0,620,624,3,92,46,0,621,622,5,
	72,0,0,622,624,3,88,44,0,623,620,1,0,0,0,623,621,1,0,0,0,624,89,1,0,0,0,
	625,626,6,45,-1,0,626,627,3,92,46,0,627,628,3,150,75,0,628,641,1,0,0,0,
	629,630,10,3,0,0,630,640,3,150,75,0,631,632,10,2,0,0,632,633,5,130,0,0,
	633,634,3,64,32,0,634,635,5,131,0,0,635,640,1,0,0,0,636,637,10,1,0,0,637,
	638,5,124,0,0,638,640,3,170,85,0,639,629,1,0,0,0,639,631,1,0,0,0,639,636,
	1,0,0,0,640,643,1,0,0,0,641,639,1,0,0,0,641,642,1,0,0,0,642,91,1,0,0,0,
	643,641,1,0,0,0,644,645,6,46,-1,0,645,651,3,94,47,0,646,647,5,72,0,0,647,
	648,3,92,46,0,648,649,3,150,75,0,649,651,1,0,0,0,650,644,1,0,0,0,650,646,
	1,0,0,0,651,662,1,0,0,0,652,653,10,3,0,0,653,654,5,130,0,0,654,655,3,64,
	32,0,655,656,5,131,0,0,656,661,1,0,0,0,657,658,10,2,0,0,658,659,5,124,0,
	0,659,661,3,170,85,0,660,652,1,0,0,0,660,657,1,0,0,0,661,664,1,0,0,0,662,
	660,1,0,0,0,662,663,1,0,0,0,663,93,1,0,0,0,664,662,1,0,0,0,665,678,5,73,
	0,0,666,678,5,74,0,0,667,678,3,170,85,0,668,678,3,156,78,0,669,678,3,158,
	79,0,670,678,3,160,80,0,671,672,5,126,0,0,672,673,3,64,32,0,673,674,5,127,
	0,0,674,678,1,0,0,0,675,678,3,96,48,0,676,678,3,98,49,0,677,665,1,0,0,0,
	677,666,1,0,0,0,677,667,1,0,0,0,677,668,1,0,0,0,677,669,1,0,0,0,677,670,
	1,0,0,0,677,671,1,0,0,0,677,675,1,0,0,0,677,676,1,0,0,0,678,95,1,0,0,0,
	679,692,5,102,0,0,680,681,5,102,0,0,681,682,5,134,0,0,682,692,3,64,32,0,
	683,684,5,4,0,0,684,685,3,64,32,0,685,686,5,127,0,0,686,692,1,0,0,0,687,
	688,5,5,0,0,688,689,3,64,32,0,689,690,5,127,0,0,690,692,1,0,0,0,691,679,
	1,0,0,0,691,680,1,0,0,0,691,683,1,0,0,0,691,687,1,0,0,0,692,97,1,0,0,0,
	693,694,5,6,0,0,694,695,3,64,32,0,695,696,5,127,0,0,696,706,1,0,0,0,697,
	698,5,7,0,0,698,699,3,152,76,0,699,700,5,127,0,0,700,706,1,0,0,0,701,702,
	5,8,0,0,702,703,3,64,32,0,703,704,5,127,0,0,704,706,1,0,0,0,705,693,1,0,
	0,0,705,697,1,0,0,0,705,701,1,0,0,0,706,99,1,0,0,0,707,708,5,9,0,0,708,
	709,3,64,32,0,709,710,5,127,0,0,710,720,1,0,0,0,711,712,5,10,0,0,712,713,
	3,64,32,0,713,714,5,127,0,0,714,720,1,0,0,0,715,716,5,11,0,0,716,717,3,
	64,32,0,717,718,5,127,0,0,718,720,1,0,0,0,719,707,1,0,0,0,719,711,1,0,0,
	0,719,715,1,0,0,0,720,101,1,0,0,0,721,722,5,79,0,0,722,723,3,64,32,0,723,
	724,5,122,0,0,724,740,1,0,0,0,725,726,5,80,0,0,726,727,3,64,32,0,727,728,
	5,122,0,0,728,740,1,0,0,0,729,730,5,81,0,0,730,731,3,64,32,0,731,732,5,
	122,0,0,732,740,1,0,0,0,733,734,5,82,0,0,734,735,3,64,32,0,735,736,5,122,
	0,0,736,740,1,0,0,0,737,738,5,83,0,0,738,740,5,122,0,0,739,721,1,0,0,0,
	739,725,1,0,0,0,739,729,1,0,0,0,739,733,1,0,0,0,739,737,1,0,0,0,740,103,
	1,0,0,0,741,742,5,12,0,0,742,745,3,170,85,0,743,744,5,108,0,0,744,746,3,
	64,32,0,745,743,1,0,0,0,745,746,1,0,0,0,746,747,1,0,0,0,747,748,5,122,0,
	0,748,105,1,0,0,0,749,750,5,91,0,0,750,751,5,126,0,0,751,752,3,64,32,0,
	752,753,5,127,0,0,753,754,5,122,0,0,754,107,1,0,0,0,755,756,5,13,0,0,756,
	757,3,170,85,0,757,758,5,108,0,0,758,759,3,64,32,0,759,760,5,122,0,0,760,
	109,1,0,0,0,761,762,5,93,0,0,762,763,5,126,0,0,763,764,3,64,32,0,764,765,
	5,127,0,0,765,766,3,62,31,0,766,111,1,0,0,0,767,768,5,64,0,0,768,769,3,
	64,32,0,769,773,5,121,0,0,770,772,3,6,3,0,771,770,1,0,0,0,772,775,1,0,0,
	0,773,771,1,0,0,0,773,774,1,0,0,0,774,113,1,0,0,0,775,773,1,0,0,0,776,777,
	5,65,0,0,777,781,5,121,0,0,778,780,3,6,3,0,779,778,1,0,0,0,780,783,1,0,
	0,0,781,779,1,0,0,0,781,782,1,0,0,0,782,115,1,0,0,0,783,781,1,0,0,0,784,
	788,3,120,60,0,785,788,3,122,61,0,786,788,3,124,62,0,787,784,1,0,0,0,787,
	785,1,0,0,0,787,786,1,0,0,0,788,117,1,0,0,0,789,792,3,126,63,0,790,792,
	3,128,64,0,791,789,1,0,0,0,791,790,1,0,0,0,792,119,1,0,0,0,793,795,7,8,
	0,0,794,793,1,0,0,0,795,798,1,0,0,0,796,794,1,0,0,0,796,797,1,0,0,0,797,
	799,1,0,0,0,798,796,1,0,0,0,799,800,3,170,85,0,800,801,5,121,0,0,801,804,
	3,130,65,0,802,803,5,108,0,0,803,805,3,64,32,0,804,802,1,0,0,0,804,805,
	1,0,0,0,805,806,1,0,0,0,806,807,5,122,0,0,807,121,1,0,0,0,808,810,7,9,0,
	0,809,808,1,0,0,0,810,813,1,0,0,0,811,809,1,0,0,0,811,812,1,0,0,0,812,814,
	1,0,0,0,813,811,1,0,0,0,814,815,3,170,85,0,815,817,5,126,0,0,816,818,3,
	146,73,0,817,816,1,0,0,0,817,818,1,0,0,0,818,819,1,0,0,0,819,822,5,127,
	0,0,820,821,5,121,0,0,821,823,3,138,69,0,822,820,1,0,0,0,822,823,1,0,0,
	0,823,824,1,0,0,0,824,825,3,62,31,0,825,123,1,0,0,0,826,827,5,18,0,0,827,
	829,5,126,0,0,828,830,3,146,73,0,829,828,1,0,0,0,829,830,1,0,0,0,830,831,
	1,0,0,0,831,832,5,127,0,0,832,833,3,62,31,0,833,125,1,0,0,0,834,835,3,170,
	85,0,835,836,5,121,0,0,836,837,3,130,65,0,837,838,5,122,0,0,838,127,1,0,
	0,0,839,840,3,170,85,0,840,842,5,126,0,0,841,843,3,146,73,0,842,841,1,0,
	0,0,842,843,1,0,0,0,843,844,1,0,0,0,844,845,5,127,0,0,845,846,5,121,0,0,
	846,847,3,138,69,0,847,848,5,122,0,0,848,129,1,0,0,0,849,865,3,134,67,0,
	850,855,3,132,66,0,851,852,7,10,0,0,852,854,3,132,66,0,853,851,1,0,0,0,
	854,857,1,0,0,0,855,853,1,0,0,0,855,856,1,0,0,0,856,861,1,0,0,0,857,855,
	1,0,0,0,858,860,5,19,0,0,859,858,1,0,0,0,860,863,1,0,0,0,861,859,1,0,0,
	0,861,862,1,0,0,0,862,865,1,0,0,0,863,861,1,0,0,0,864,849,1,0,0,0,864,850,
	1,0,0,0,865,131,1,0,0,0,866,879,5,20,0,0,867,879,5,21,0,0,868,879,5,22,
	0,0,869,879,5,23,0,0,870,879,5,24,0,0,871,879,5,25,0,0,872,879,5,26,0,0,
	873,879,5,27,0,0,874,879,5,28,0,0,875,879,5,29,0,0,876,879,3,136,68,0,877,
	879,3,170,85,0,878,866,1,0,0,0,878,867,1,0,0,0,878,868,1,0,0,0,878,869,
	1,0,0,0,878,870,1,0,0,0,878,871,1,0,0,0,878,872,1,0,0,0,878,873,1,0,0,0,
	878,874,1,0,0,0,878,875,1,0,0,0,878,876,1,0,0,0,878,877,1,0,0,0,879,133,
	1,0,0,0,880,882,5,126,0,0,881,883,3,146,73,0,882,881,1,0,0,0,882,883,1,
	0,0,0,883,884,1,0,0,0,884,885,5,127,0,0,885,886,5,125,0,0,886,887,3,138,
	69,0,887,135,1,0,0,0,888,889,3,170,85,0,889,890,5,142,0,0,890,891,3,140,
	70,0,891,892,5,144,0,0,892,137,1,0,0,0,893,900,3,130,65,0,894,895,5,30,
	0,0,895,896,5,142,0,0,896,897,3,130,65,0,897,898,5,144,0,0,898,900,1,0,
	0,0,899,893,1,0,0,0,899,894,1,0,0,0,900,139,1,0,0,0,901,906,3,130,65,0,
	902,903,5,123,0,0,903,905,3,130,65,0,904,902,1,0,0,0,905,908,1,0,0,0,906,
	904,1,0,0,0,906,907,1,0,0,0,907,141,1,0,0,0,908,906,1,0,0,0,909,910,5,142,
	0,0,910,915,3,144,72,0,911,912,5,123,0,0,912,914,3,144,72,0,913,911,1,0,
	0,0,914,917,1,0,0,0,915,913,1,0,0,0,915,916,1,0,0,0,916,918,1,0,0,0,917,
	915,1,0,0,0,918,919,5,144,0,0,919,143,1,0,0,0,920,923,3,170,85,0,921,922,
	5,54,0,0,922,924,3,130,65,0,923,921,1,0,0,0,923,924,1,0,0,0,924,145,1,0,
	0,0,925,930,3,148,74,0,926,927,5,123,0,0,927,929,3,148,74,0,928,926,1,0,
	0,0,929,932,1,0,0,0,930,928,1,0,0,0,930,931,1,0,0,0,931,147,1,0,0,0,932,
	930,1,0,0,0,933,936,3,170,85,0,934,935,5,121,0,0,935,937,3,130,65,0,936,
	934,1,0,0,0,936,937,1,0,0,0,937,940,1,0,0,0,938,939,5,108,0,0,939,941,3,
	64,32,0,940,938,1,0,0,0,940,941,1,0,0,0,941,949,1,0,0,0,942,943,5,158,0,
	0,943,946,3,170,85,0,944,945,5,121,0,0,945,947,3,130,65,0,946,944,1,0,0,
	0,946,947,1,0,0,0,947,949,1,0,0,0,948,933,1,0,0,0,948,942,1,0,0,0,949,149,
	1,0,0,0,950,952,5,126,0,0,951,953,3,152,76,0,952,951,1,0,0,0,952,953,1,
	0,0,0,953,954,1,0,0,0,954,955,5,127,0,0,955,151,1,0,0,0,956,961,3,64,32,
	0,957,958,5,123,0,0,958,960,3,64,32,0,959,957,1,0,0,0,960,963,1,0,0,0,961,
	959,1,0,0,0,961,962,1,0,0,0,962,153,1,0,0,0,963,961,1,0,0,0,964,969,3,170,
	85,0,965,966,5,123,0,0,966,968,3,170,85,0,967,965,1,0,0,0,968,971,1,0,0,
	0,969,967,1,0,0,0,969,970,1,0,0,0,970,155,1,0,0,0,971,969,1,0,0,0,972,973,
	7,11,0,0,973,157,1,0,0,0,974,976,5,130,0,0,975,977,3,152,76,0,976,975,1,
	0,0,0,976,977,1,0,0,0,977,978,1,0,0,0,978,979,5,131,0,0,979,159,1,0,0,0,
	980,984,5,128,0,0,981,983,3,162,81,0,982,981,1,0,0,0,983,986,1,0,0,0,984,
	982,1,0,0,0,984,985,1,0,0,0,985,987,1,0,0,0,986,984,1,0,0,0,987,988,5,129,
	0,0,988,161,1,0,0,0,989,990,3,170,85,0,990,991,5,121,0,0,991,992,3,64,32,
	0,992,1003,1,0,0,0,993,994,5,105,0,0,994,995,5,121,0,0,995,1003,3,64,32,
	0,996,997,5,130,0,0,997,998,3,64,32,0,998,999,5,131,0,0,999,1000,5,121,
	0,0,1000,1001,3,64,32,0,1001,1003,1,0,0,0,1002,989,1,0,0,0,1002,993,1,0,
	0,0,1002,996,1,0,0,0,1003,163,1,0,0,0,1004,1009,3,170,85,0,1005,1006,5,
	124,0,0,1006,1008,3,170,85,0,1007,1005,1,0,0,0,1008,1011,1,0,0,0,1009,1007,
	1,0,0,0,1009,1010,1,0,0,0,1010,165,1,0,0,0,1011,1009,1,0,0,0,1012,1013,
	7,12,0,0,1013,167,1,0,0,0,1014,1015,7,13,0,0,1015,169,1,0,0,0,1016,1017,
	5,107,0,0,1017,171,1,0,0,0,92,175,183,189,191,205,214,238,241,246,250,255,
	262,266,270,276,284,288,294,303,307,315,324,337,347,356,385,395,399,411,
	415,421,435,459,468,501,510,516,528,537,547,558,569,580,591,602,608,614,
	618,623,639,641,650,660,662,677,691,705,719,739,745,773,781,787,791,796,
	804,811,817,822,829,842,855,861,864,878,882,899,906,915,923,930,936,940,
	946,948,952,961,969,976,984,1002,1009];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SpiralLangParser.__ATN) {
			SpiralLangParser.__ATN = new ATNDeserializer().deserialize(SpiralLangParser._serializedATN);
		}

		return SpiralLangParser.__ATN;
	}


	static DecisionsToDFA = SpiralLangParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(SpiralLangParser.EOF, 0);
	}
	public module__list(): ModuleContext[] {
		return this.getTypedRuleContexts(ModuleContext) as ModuleContext[];
	}
	public module_(i: number): ModuleContext {
		return this.getTypedRuleContext(ModuleContext, i) as ModuleContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_program;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public moduleDeclaration(): ModuleDeclarationContext {
		return this.getTypedRuleContext(ModuleDeclarationContext, 0) as ModuleDeclarationContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_module;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterModule) {
			listener.enterModule(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitModule) {
			listener.exitModule(this);
		}
	}
}


export class ModuleDeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public MODULE(): TerminalNode {
		return this.getToken(SpiralLangParser.MODULE, 0);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_moduleDeclaration;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterModuleDeclaration) {
			listener.enterModuleDeclaration(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitModuleDeclaration) {
			listener.exitModuleDeclaration(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
	public controlFlow(): ControlFlowContext {
		return this.getTypedRuleContext(ControlFlowContext, 0) as ControlFlowContext;
	}
	public spiralConstruct(): SpiralConstructContext {
		return this.getTypedRuleContext(SpiralConstructContext, 0) as SpiralConstructContext;
	}
	public quantumBlock(): QuantumBlockContext {
		return this.getTypedRuleContext(QuantumBlockContext, 0) as QuantumBlockContext;
	}
	public consciousnessBlock(): ConsciousnessBlockContext {
		return this.getTypedRuleContext(ConsciousnessBlockContext, 0) as ConsciousnessBlockContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_statement;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
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
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public theoremDeclaration(): TheoremDeclarationContext {
		return this.getTypedRuleContext(TheoremDeclarationContext, 0) as TheoremDeclarationContext;
	}
	public proofDeclaration(): ProofDeclarationContext {
		return this.getTypedRuleContext(ProofDeclarationContext, 0) as ProofDeclarationContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_declaration;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(SpiralLangParser.IMPORT, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACE, 0);
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACE, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(SpiralLangParser.FROM, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SpiralLangParser.STRING, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.ASSIGN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_importDeclaration;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(SpiralLangParser.FUNCTION, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public blockStatement(): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, 0) as BlockStatementContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(SpiralLangParser.COLON, 0);
	}
	public returnType(): ReturnTypeContext {
		return this.getTypedRuleContext(ReturnTypeContext, 0) as ReturnTypeContext;
	}
	public ASYNC(): TerminalNode {
		return this.getToken(SpiralLangParser.ASYNC, 0);
	}
	public QUANTUM(): TerminalNode {
		return this.getToken(SpiralLangParser.QUANTUM, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_functionDeclaration;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public CLASS(): TerminalNode {
		return this.getToken(SpiralLangParser.CLASS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACE, 0);
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(SpiralLangParser.EXTENDS, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public IMPLEMENTS(): TerminalNode {
		return this.getToken(SpiralLangParser.IMPLEMENTS, 0);
	}
	public typeList(): TypeListContext {
		return this.getTypedRuleContext(TypeListContext, 0) as TypeListContext;
	}
	public classMember_list(): ClassMemberContext[] {
		return this.getTypedRuleContexts(ClassMemberContext) as ClassMemberContext[];
	}
	public classMember(i: number): ClassMemberContext {
		return this.getTypedRuleContext(ClassMemberContext, i) as ClassMemberContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_classDeclaration;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public INTERFACE(): TerminalNode {
		return this.getToken(SpiralLangParser.INTERFACE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACE, 0);
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(SpiralLangParser.EXTENDS, 0);
	}
	public typeList(): TypeListContext {
		return this.getTypedRuleContext(TypeListContext, 0) as TypeListContext;
	}
	public interfaceMember_list(): InterfaceMemberContext[] {
		return this.getTypedRuleContexts(InterfaceMemberContext) as InterfaceMemberContext[];
	}
	public interfaceMember(i: number): InterfaceMemberContext {
		return this.getTypedRuleContext(InterfaceMemberContext, i) as InterfaceMemberContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_interfaceDeclaration;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterInterfaceDeclaration) {
			listener.enterInterfaceDeclaration(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitInterfaceDeclaration) {
			listener.exitInterfaceDeclaration(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
	public CONST(): TerminalNode {
		return this.getToken(SpiralLangParser.CONST, 0);
	}
	public LET(): TerminalNode {
		return this.getToken(SpiralLangParser.LET, 0);
	}
	public VAR(): TerminalNode {
		return this.getToken(SpiralLangParser.VAR, 0);
	}
	public PHI(): TerminalNode {
		return this.getToken(SpiralLangParser.PHI, 0);
	}
	public QUANTUM(): TerminalNode {
		return this.getToken(SpiralLangParser.QUANTUM, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(SpiralLangParser.COLON, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_variableDeclaration;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
}


export class TheoremDeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public THEOREM(): TerminalNode {
		return this.getToken(SpiralLangParser.THEOREM, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(SpiralLangParser.COLON, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACE, 0);
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public proofStatement_list(): ProofStatementContext[] {
		return this.getTypedRuleContexts(ProofStatementContext) as ProofStatementContext[];
	}
	public proofStatement(i: number): ProofStatementContext {
		return this.getTypedRuleContext(ProofStatementContext, i) as ProofStatementContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_theoremDeclaration;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterTheoremDeclaration) {
			listener.enterTheoremDeclaration(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitTheoremDeclaration) {
			listener.exitTheoremDeclaration(this);
		}
	}
}


export class ProofDeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public PROOF(): TerminalNode {
		return this.getToken(SpiralLangParser.PROOF, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACE, 0);
	}
	public proofStatement_list(): ProofStatementContext[] {
		return this.getTypedRuleContexts(ProofStatementContext) as ProofStatementContext[];
	}
	public proofStatement(i: number): ProofStatementContext {
		return this.getTypedRuleContext(ProofStatementContext, i) as ProofStatementContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_proofDeclaration;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterProofDeclaration) {
			listener.enterProofDeclaration(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitProofDeclaration) {
			listener.exitProofDeclaration(this);
		}
	}
}


export class ControlFlowContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
	public whileStatement(): WhileStatementContext {
		return this.getTypedRuleContext(WhileStatementContext, 0) as WhileStatementContext;
	}
	public forStatement(): ForStatementContext {
		return this.getTypedRuleContext(ForStatementContext, 0) as ForStatementContext;
	}
	public switchStatement(): SwitchStatementContext {
		return this.getTypedRuleContext(SwitchStatementContext, 0) as SwitchStatementContext;
	}
	public tryStatement(): TryStatementContext {
		return this.getTypedRuleContext(TryStatementContext, 0) as TryStatementContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_controlFlow;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterControlFlow) {
			listener.enterControlFlow(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitControlFlow) {
			listener.exitControlFlow(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(SpiralLangParser.IF, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(SpiralLangParser.ELSE, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_ifStatement;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(SpiralLangParser.WHILE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_whileStatement;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(SpiralLangParser.FOR, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_forStatement;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public SWITCH(): TerminalNode {
		return this.getToken(SpiralLangParser.SWITCH, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACE, 0);
	}
	public caseClause_list(): CaseClauseContext[] {
		return this.getTypedRuleContexts(CaseClauseContext) as CaseClauseContext[];
	}
	public caseClause(i: number): CaseClauseContext {
		return this.getTypedRuleContext(CaseClauseContext, i) as CaseClauseContext;
	}
	public defaultClause(): DefaultClauseContext {
		return this.getTypedRuleContext(DefaultClauseContext, 0) as DefaultClauseContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_switchStatement;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public TRY(): TerminalNode {
		return this.getToken(SpiralLangParser.TRY, 0);
	}
	public blockStatement_list(): BlockStatementContext[] {
		return this.getTypedRuleContexts(BlockStatementContext) as BlockStatementContext[];
	}
	public blockStatement(i: number): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, i) as BlockStatementContext;
	}
	public CATCH(): TerminalNode {
		return this.getToken(SpiralLangParser.CATCH, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public FINALLY(): TerminalNode {
		return this.getToken(SpiralLangParser.FINALLY, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_tryStatement;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
}


export class SpiralConstructContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public phiCalculation(): PhiCalculationContext {
		return this.getTypedRuleContext(PhiCalculationContext, 0) as PhiCalculationContext;
	}
	public resonanceField(): ResonanceFieldContext {
		return this.getTypedRuleContext(ResonanceFieldContext, 0) as ResonanceFieldContext;
	}
	public entropyAnalysis(): EntropyAnalysisContext {
		return this.getTypedRuleContext(EntropyAnalysisContext, 0) as EntropyAnalysisContext;
	}
	public harmonicSequence(): HarmonicSequenceContext {
		return this.getTypedRuleContext(HarmonicSequenceContext, 0) as HarmonicSequenceContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_spiralConstruct;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterSpiralConstruct) {
			listener.enterSpiralConstruct(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitSpiralConstruct) {
			listener.exitSpiralConstruct(this);
		}
	}
}


export class PhiCalculationContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public PHI(): TerminalNode {
		return this.getToken(SpiralLangParser.PHI, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACE, 0);
	}
	public phiExpression(): PhiExpressionContext {
		return this.getTypedRuleContext(PhiExpressionContext, 0) as PhiExpressionContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACE, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_phiCalculation;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterPhiCalculation) {
			listener.enterPhiCalculation(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitPhiCalculation) {
			listener.exitPhiCalculation(this);
		}
	}
}


export class ResonanceFieldContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public RESONANCE(): TerminalNode {
		return this.getToken(SpiralLangParser.RESONANCE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public blockStatement(): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, 0) as BlockStatementContext;
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(SpiralLangParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SpiralLangParser.COMMA, i);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_resonanceField;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterResonanceField) {
			listener.enterResonanceField(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitResonanceField) {
			listener.exitResonanceField(this);
		}
	}
}


export class EntropyAnalysisContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ENTROPY(): TerminalNode {
		return this.getToken(SpiralLangParser.ENTROPY, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACE, 0);
	}
	public entropyExpression(): EntropyExpressionContext {
		return this.getTypedRuleContext(EntropyExpressionContext, 0) as EntropyExpressionContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACE, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_entropyAnalysis;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterEntropyAnalysis) {
			listener.enterEntropyAnalysis(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitEntropyAnalysis) {
			listener.exitEntropyAnalysis(this);
		}
	}
}


export class HarmonicSequenceContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public HARMONIC(): TerminalNode {
		return this.getToken(SpiralLangParser.HARMONIC, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(SpiralLangParser.COMMA, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public blockStatement(): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, 0) as BlockStatementContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_harmonicSequence;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterHarmonicSequence) {
			listener.enterHarmonicSequence(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitHarmonicSequence) {
			listener.exitHarmonicSequence(this);
		}
	}
}


export class QuantumBlockContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public QUANTUM(): TerminalNode {
		return this.getToken(SpiralLangParser.QUANTUM, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACE, 0);
	}
	public quantumStatement_list(): QuantumStatementContext[] {
		return this.getTypedRuleContexts(QuantumStatementContext) as QuantumStatementContext[];
	}
	public quantumStatement(i: number): QuantumStatementContext {
		return this.getTypedRuleContext(QuantumStatementContext, i) as QuantumStatementContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_quantumBlock;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterQuantumBlock) {
			listener.enterQuantumBlock(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitQuantumBlock) {
			listener.exitQuantumBlock(this);
		}
	}
}


export class QuantumStatementContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public quantumGate(): QuantumGateContext {
		return this.getTypedRuleContext(QuantumGateContext, 0) as QuantumGateContext;
	}
	public quantumMeasurement(): QuantumMeasurementContext {
		return this.getTypedRuleContext(QuantumMeasurementContext, 0) as QuantumMeasurementContext;
	}
	public quantumEntanglement(): QuantumEntanglementContext {
		return this.getTypedRuleContext(QuantumEntanglementContext, 0) as QuantumEntanglementContext;
	}
	public quantumCollapse(): QuantumCollapseContext {
		return this.getTypedRuleContext(QuantumCollapseContext, 0) as QuantumCollapseContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_quantumStatement;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterQuantumStatement) {
			listener.enterQuantumStatement(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitQuantumStatement) {
			listener.exitQuantumStatement(this);
		}
	}
}


export class QuantumGateContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public gateType(): GateTypeContext {
		return this.getTypedRuleContext(GateTypeContext, 0) as GateTypeContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_quantumGate;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterQuantumGate) {
			listener.enterQuantumGate(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitQuantumGate) {
			listener.exitQuantumGate(this);
		}
	}
}


export class QuantumMeasurementContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public MEASURE(): TerminalNode {
		return this.getToken(SpiralLangParser.MEASURE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_quantumMeasurement;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterQuantumMeasurement) {
			listener.enterQuantumMeasurement(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitQuantumMeasurement) {
			listener.exitQuantumMeasurement(this);
		}
	}
}


export class QuantumEntanglementContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ENTANGLE(): TerminalNode {
		return this.getToken(SpiralLangParser.ENTANGLE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(SpiralLangParser.COMMA, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_quantumEntanglement;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterQuantumEntanglement) {
			listener.enterQuantumEntanglement(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitQuantumEntanglement) {
			listener.exitQuantumEntanglement(this);
		}
	}
}


export class QuantumCollapseContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public COLLAPSE(): TerminalNode {
		return this.getToken(SpiralLangParser.COLLAPSE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_quantumCollapse;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterQuantumCollapse) {
			listener.enterQuantumCollapse(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitQuantumCollapse) {
			listener.exitQuantumCollapse(this);
		}
	}
}


export class ConsciousnessBlockContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public CONSCIOUSNESS(): TerminalNode {
		return this.getToken(SpiralLangParser.CONSCIOUSNESS, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACE, 0);
	}
	public consciousnessStatement_list(): ConsciousnessStatementContext[] {
		return this.getTypedRuleContexts(ConsciousnessStatementContext) as ConsciousnessStatementContext[];
	}
	public consciousnessStatement(i: number): ConsciousnessStatementContext {
		return this.getTypedRuleContext(ConsciousnessStatementContext, i) as ConsciousnessStatementContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_consciousnessBlock;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterConsciousnessBlock) {
			listener.enterConsciousnessBlock(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitConsciousnessBlock) {
			listener.exitConsciousnessBlock(this);
		}
	}
}


export class ConsciousnessStatementContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public memoryAccess(): MemoryAccessContext {
		return this.getTypedRuleContext(MemoryAccessContext, 0) as MemoryAccessContext;
	}
	public learningPattern(): LearningPatternContext {
		return this.getTypedRuleContext(LearningPatternContext, 0) as LearningPatternContext;
	}
	public emotionalState(): EmotionalStateContext {
		return this.getTypedRuleContext(EmotionalStateContext, 0) as EmotionalStateContext;
	}
	public decisionTree(): DecisionTreeContext {
		return this.getTypedRuleContext(DecisionTreeContext, 0) as DecisionTreeContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_consciousnessStatement;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterConsciousnessStatement) {
			listener.enterConsciousnessStatement(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitConsciousnessStatement) {
			listener.exitConsciousnessStatement(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACE, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_blockStatement;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_expression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
	public leftHandSideExpression(): LeftHandSideExpressionContext {
		return this.getTypedRuleContext(LeftHandSideExpressionContext, 0) as LeftHandSideExpressionContext;
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getTypedRuleContext(AssignmentOperatorContext, 0) as AssignmentOperatorContext;
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_assignmentExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getTypedRuleContext(LogicalOrExpressionContext, 0) as LogicalOrExpressionContext;
	}
	public QUESTION(): TerminalNode {
		return this.getToken(SpiralLangParser.QUESTION, 0);
	}
	public assignmentExpression_list(): AssignmentExpressionContext[] {
		return this.getTypedRuleContexts(AssignmentExpressionContext) as AssignmentExpressionContext[];
	}
	public assignmentExpression(i: number): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, i) as AssignmentExpressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(SpiralLangParser.COLON, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_conditionalExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public logicalAndExpression(): LogicalAndExpressionContext {
		return this.getTypedRuleContext(LogicalAndExpressionContext, 0) as LogicalAndExpressionContext;
	}
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getTypedRuleContext(LogicalOrExpressionContext, 0) as LogicalOrExpressionContext;
	}
	public OR(): TerminalNode {
		return this.getToken(SpiralLangParser.OR, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_logicalOrExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public equalityExpression(): EqualityExpressionContext {
		return this.getTypedRuleContext(EqualityExpressionContext, 0) as EqualityExpressionContext;
	}
	public logicalAndExpression(): LogicalAndExpressionContext {
		return this.getTypedRuleContext(LogicalAndExpressionContext, 0) as LogicalAndExpressionContext;
	}
	public AND(): TerminalNode {
		return this.getToken(SpiralLangParser.AND, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_logicalAndExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public relationalExpression(): RelationalExpressionContext {
		return this.getTypedRuleContext(RelationalExpressionContext, 0) as RelationalExpressionContext;
	}
	public equalityExpression(): EqualityExpressionContext {
		return this.getTypedRuleContext(EqualityExpressionContext, 0) as EqualityExpressionContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(SpiralLangParser.EQ, 0);
	}
	public NE(): TerminalNode {
		return this.getToken(SpiralLangParser.NE, 0);
	}
	public STRICT_EQ(): TerminalNode {
		return this.getToken(SpiralLangParser.STRICT_EQ, 0);
	}
	public STRICT_NE(): TerminalNode {
		return this.getToken(SpiralLangParser.STRICT_NE, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_equalityExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public relationalExpression(): RelationalExpressionContext {
		return this.getTypedRuleContext(RelationalExpressionContext, 0) as RelationalExpressionContext;
	}
	public LT(): TerminalNode {
		return this.getToken(SpiralLangParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(SpiralLangParser.GT, 0);
	}
	public LE(): TerminalNode {
		return this.getToken(SpiralLangParser.LE, 0);
	}
	public GE(): TerminalNode {
		return this.getToken(SpiralLangParser.GE, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_relationalExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, 0) as MultiplicativeExpressionContext;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(SpiralLangParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SpiralLangParser.MINUS, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_additiveExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, 0) as MultiplicativeExpressionContext;
	}
	public MULT(): TerminalNode {
		return this.getToken(SpiralLangParser.MULT, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(SpiralLangParser.DIV, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(SpiralLangParser.MOD, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_multiplicativeExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getTypedRuleContext(PostfixExpressionContext, 0) as PostfixExpressionContext;
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public INCREMENT(): TerminalNode {
		return this.getToken(SpiralLangParser.INCREMENT, 0);
	}
	public DECREMENT(): TerminalNode {
		return this.getToken(SpiralLangParser.DECREMENT, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(SpiralLangParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SpiralLangParser.MINUS, 0);
	}
	public BIT_NOT(): TerminalNode {
		return this.getToken(SpiralLangParser.BIT_NOT, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(SpiralLangParser.NOT, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_unaryExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public leftHandSideExpression(): LeftHandSideExpressionContext {
		return this.getTypedRuleContext(LeftHandSideExpressionContext, 0) as LeftHandSideExpressionContext;
	}
	public INCREMENT(): TerminalNode {
		return this.getToken(SpiralLangParser.INCREMENT, 0);
	}
	public DECREMENT(): TerminalNode {
		return this.getToken(SpiralLangParser.DECREMENT, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_postfixExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
}


export class LeftHandSideExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public newExpression(): NewExpressionContext {
		return this.getTypedRuleContext(NewExpressionContext, 0) as NewExpressionContext;
	}
	public callExpression(): CallExpressionContext {
		return this.getTypedRuleContext(CallExpressionContext, 0) as CallExpressionContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_leftHandSideExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterLeftHandSideExpression) {
			listener.enterLeftHandSideExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitLeftHandSideExpression) {
			listener.exitLeftHandSideExpression(this);
		}
	}
}


export class NewExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public memberExpression(): MemberExpressionContext {
		return this.getTypedRuleContext(MemberExpressionContext, 0) as MemberExpressionContext;
	}
	public NEW(): TerminalNode {
		return this.getToken(SpiralLangParser.NEW, 0);
	}
	public newExpression(): NewExpressionContext {
		return this.getTypedRuleContext(NewExpressionContext, 0) as NewExpressionContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_newExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterNewExpression) {
			listener.enterNewExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitNewExpression) {
			listener.exitNewExpression(this);
		}
	}
}


export class CallExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public memberExpression(): MemberExpressionContext {
		return this.getTypedRuleContext(MemberExpressionContext, 0) as MemberExpressionContext;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
	public callExpression(): CallExpressionContext {
		return this.getTypedRuleContext(CallExpressionContext, 0) as CallExpressionContext;
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACKET, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(SpiralLangParser.DOT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_callExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterCallExpression) {
			listener.enterCallExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitCallExpression) {
			listener.exitCallExpression(this);
		}
	}
}


export class MemberExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public NEW(): TerminalNode {
		return this.getToken(SpiralLangParser.NEW, 0);
	}
	public memberExpression(): MemberExpressionContext {
		return this.getTypedRuleContext(MemberExpressionContext, 0) as MemberExpressionContext;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACKET, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(SpiralLangParser.DOT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_memberExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterMemberExpression) {
			listener.enterMemberExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitMemberExpression) {
			listener.exitMemberExpression(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public THIS(): TerminalNode {
		return this.getToken(SpiralLangParser.THIS, 0);
	}
	public SUPER(): TerminalNode {
		return this.getToken(SpiralLangParser.SUPER, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public arrayLiteral(): ArrayLiteralContext {
		return this.getTypedRuleContext(ArrayLiteralContext, 0) as ArrayLiteralContext;
	}
	public objectLiteral(): ObjectLiteralContext {
		return this.getTypedRuleContext(ObjectLiteralContext, 0) as ObjectLiteralContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public phiExpression(): PhiExpressionContext {
		return this.getTypedRuleContext(PhiExpressionContext, 0) as PhiExpressionContext;
	}
	public quantumExpression(): QuantumExpressionContext {
		return this.getTypedRuleContext(QuantumExpressionContext, 0) as QuantumExpressionContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_primaryExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
}


export class PhiExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public PHI_CONSTANT(): TerminalNode {
		return this.getToken(SpiralLangParser.PHI_CONSTANT, 0);
	}
	public MULT(): TerminalNode {
		return this.getToken(SpiralLangParser.MULT, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_phiExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterPhiExpression) {
			listener.enterPhiExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitPhiExpression) {
			listener.exitPhiExpression(this);
		}
	}
}


export class QuantumExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_quantumExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterQuantumExpression) {
			listener.enterQuantumExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitQuantumExpression) {
			listener.exitQuantumExpression(this);
		}
	}
}


export class EntropyExpressionContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_entropyExpression;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterEntropyExpression) {
			listener.enterEntropyExpression(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitEntropyExpression) {
			listener.exitEntropyExpression(this);
		}
	}
}


export class ProofStatementContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public REQUIRE(): TerminalNode {
		return this.getToken(SpiralLangParser.REQUIRE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
	public ASSERT(): TerminalNode {
		return this.getToken(SpiralLangParser.ASSERT, 0);
	}
	public YIELD(): TerminalNode {
		return this.getToken(SpiralLangParser.YIELD, 0);
	}
	public VIA(): TerminalNode {
		return this.getToken(SpiralLangParser.VIA, 0);
	}
	public QED(): TerminalNode {
		return this.getToken(SpiralLangParser.QED, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_proofStatement;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterProofStatement) {
			listener.enterProofStatement(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitProofStatement) {
			listener.exitProofStatement(this);
		}
	}
}


export class MemoryAccessContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_memoryAccess;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterMemoryAccess) {
			listener.enterMemoryAccess(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitMemoryAccess) {
			listener.exitMemoryAccess(this);
		}
	}
}


export class LearningPatternContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public LEARN(): TerminalNode {
		return this.getToken(SpiralLangParser.LEARN, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_learningPattern;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterLearningPattern) {
			listener.enterLearningPattern(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitLearningPattern) {
			listener.exitLearningPattern(this);
		}
	}
}


export class EmotionalStateContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_emotionalState;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterEmotionalState) {
			listener.enterEmotionalState(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitEmotionalState) {
			listener.exitEmotionalState(this);
		}
	}
}


export class DecisionTreeContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DECIDE(): TerminalNode {
		return this.getToken(SpiralLangParser.DECIDE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public blockStatement(): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, 0) as BlockStatementContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_decisionTree;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterDecisionTree) {
			listener.enterDecisionTree(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitDecisionTree) {
			listener.exitDecisionTree(this);
		}
	}
}


export class CaseClauseContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public CASE(): TerminalNode {
		return this.getToken(SpiralLangParser.CASE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(SpiralLangParser.COLON, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_caseClause;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterCaseClause) {
			listener.enterCaseClause(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitCaseClause) {
			listener.exitCaseClause(this);
		}
	}
}


export class DefaultClauseContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(SpiralLangParser.DEFAULT, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(SpiralLangParser.COLON, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_defaultClause;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterDefaultClause) {
			listener.enterDefaultClause(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitDefaultClause) {
			listener.exitDefaultClause(this);
		}
	}
}


export class ClassMemberContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public propertyDeclaration(): PropertyDeclarationContext {
		return this.getTypedRuleContext(PropertyDeclarationContext, 0) as PropertyDeclarationContext;
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getTypedRuleContext(MethodDeclarationContext, 0) as MethodDeclarationContext;
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getTypedRuleContext(ConstructorDeclarationContext, 0) as ConstructorDeclarationContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_classMember;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterClassMember) {
			listener.enterClassMember(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitClassMember) {
			listener.exitClassMember(this);
		}
	}
}


export class InterfaceMemberContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public propertySignature(): PropertySignatureContext {
		return this.getTypedRuleContext(PropertySignatureContext, 0) as PropertySignatureContext;
	}
	public methodSignature(): MethodSignatureContext {
		return this.getTypedRuleContext(MethodSignatureContext, 0) as MethodSignatureContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_interfaceMember;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterInterfaceMember) {
			listener.enterInterfaceMember(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitInterfaceMember) {
			listener.exitInterfaceMember(this);
		}
	}
}


export class PropertyDeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(SpiralLangParser.COLON, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_propertyDeclaration;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterPropertyDeclaration) {
			listener.enterPropertyDeclaration(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitPropertyDeclaration) {
			listener.exitPropertyDeclaration(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public blockStatement(): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, 0) as BlockStatementContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(SpiralLangParser.COLON, 0);
	}
	public returnType(): ReturnTypeContext {
		return this.getTypedRuleContext(ReturnTypeContext, 0) as ReturnTypeContext;
	}
	public ASYNC_list(): TerminalNode[] {
		return this.getTokens(SpiralLangParser.ASYNC);
	}
	public ASYNC(i: number): TerminalNode {
		return this.getToken(SpiralLangParser.ASYNC, i);
	}
	public QUANTUM_list(): TerminalNode[] {
		return this.getTokens(SpiralLangParser.QUANTUM);
	}
	public QUANTUM(i: number): TerminalNode {
		return this.getToken(SpiralLangParser.QUANTUM, i);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_methodDeclaration;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public blockStatement(): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, 0) as BlockStatementContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_constructorDeclaration;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterConstructorDeclaration) {
			listener.enterConstructorDeclaration(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitConstructorDeclaration) {
			listener.exitConstructorDeclaration(this);
		}
	}
}


export class PropertySignatureContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(SpiralLangParser.COLON, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_propertySignature;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterPropertySignature) {
			listener.enterPropertySignature(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitPropertySignature) {
			listener.exitPropertySignature(this);
		}
	}
}


export class MethodSignatureContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(SpiralLangParser.COLON, 0);
	}
	public returnType(): ReturnTypeContext {
		return this.getTypedRuleContext(ReturnTypeContext, 0) as ReturnTypeContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SpiralLangParser.SEMICOLON, 0);
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_methodSignature;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterMethodSignature) {
			listener.enterMethodSignature(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitMethodSignature) {
			listener.exitMethodSignature(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public functionType(): FunctionTypeContext {
		return this.getTypedRuleContext(FunctionTypeContext, 0) as FunctionTypeContext;
	}
	public primaryType_list(): PrimaryTypeContext[] {
		return this.getTypedRuleContexts(PrimaryTypeContext) as PrimaryTypeContext[];
	}
	public primaryType(i: number): PrimaryTypeContext {
		return this.getTypedRuleContext(PrimaryTypeContext, i) as PrimaryTypeContext;
	}
	public BIT_OR_list(): TerminalNode[] {
		return this.getTokens(SpiralLangParser.BIT_OR);
	}
	public BIT_OR(i: number): TerminalNode {
		return this.getToken(SpiralLangParser.BIT_OR, i);
	}
	public BIT_AND_list(): TerminalNode[] {
		return this.getTokens(SpiralLangParser.BIT_AND);
	}
	public BIT_AND(i: number): TerminalNode {
		return this.getToken(SpiralLangParser.BIT_AND, i);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_type;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterType) {
			listener.enterType(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class PrimaryTypeContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public genericType(): GenericTypeContext {
		return this.getTypedRuleContext(GenericTypeContext, 0) as GenericTypeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_primaryType;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterPrimaryType) {
			listener.enterPrimaryType(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitPrimaryType) {
			listener.exitPrimaryType(this);
		}
	}
}


export class FunctionTypeContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public ARROW(): TerminalNode {
		return this.getToken(SpiralLangParser.ARROW, 0);
	}
	public returnType(): ReturnTypeContext {
		return this.getTypedRuleContext(ReturnTypeContext, 0) as ReturnTypeContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_functionType;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterFunctionType) {
			listener.enterFunctionType(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitFunctionType) {
			listener.exitFunctionType(this);
		}
	}
}


export class GenericTypeContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LT(): TerminalNode {
		return this.getToken(SpiralLangParser.LT, 0);
	}
	public typeList(): TypeListContext {
		return this.getTypedRuleContext(TypeListContext, 0) as TypeListContext;
	}
	public GT(): TerminalNode {
		return this.getToken(SpiralLangParser.GT, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_genericType;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterGenericType) {
			listener.enterGenericType(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitGenericType) {
			listener.exitGenericType(this);
		}
	}
}


export class ReturnTypeContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public LT(): TerminalNode {
		return this.getToken(SpiralLangParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(SpiralLangParser.GT, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_returnType;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterReturnType) {
			listener.enterReturnType(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitReturnType) {
			listener.exitReturnType(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(SpiralLangParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SpiralLangParser.COMMA, i);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_typeList;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(SpiralLangParser.LT, 0);
	}
	public typeParameter_list(): TypeParameterContext[] {
		return this.getTypedRuleContexts(TypeParameterContext) as TypeParameterContext[];
	}
	public typeParameter(i: number): TypeParameterContext {
		return this.getTypedRuleContext(TypeParameterContext, i) as TypeParameterContext;
	}
	public GT(): TerminalNode {
		return this.getToken(SpiralLangParser.GT, 0);
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(SpiralLangParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SpiralLangParser.COMMA, i);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_typeParameters;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(SpiralLangParser.EXTENDS, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_typeParameter;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getTokens(SpiralLangParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SpiralLangParser.COMMA, i);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_parameterList;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(SpiralLangParser.COLON, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public ELLIPSIS(): TerminalNode {
		return this.getToken(SpiralLangParser.ELLIPSIS, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_parameter;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(SpiralLangParser.RPAREN, 0);
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_arguments;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getTokens(SpiralLangParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SpiralLangParser.COMMA, i);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_expressionList;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getTokens(SpiralLangParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SpiralLangParser.COMMA, i);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_identifierList;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(SpiralLangParser.NUMBER, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(SpiralLangParser.STRING, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(SpiralLangParser.BOOLEAN, 0);
	}
	public PHI_CONSTANT(): TerminalNode {
		return this.getToken(SpiralLangParser.PHI_CONSTANT, 0);
	}
	public SPIRAL_CONSTANT(): TerminalNode {
		return this.getToken(SpiralLangParser.SPIRAL_CONSTANT, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_literal;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACKET, 0);
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACKET, 0);
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_arrayLiteral;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterArrayLiteral) {
			listener.enterArrayLiteral(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitArrayLiteral) {
			listener.exitArrayLiteral(this);
		}
	}
}


export class ObjectLiteralContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACE, 0);
	}
	public propertyAssignment_list(): PropertyAssignmentContext[] {
		return this.getTypedRuleContexts(PropertyAssignmentContext) as PropertyAssignmentContext[];
	}
	public propertyAssignment(i: number): PropertyAssignmentContext {
		return this.getTypedRuleContext(PropertyAssignmentContext, i) as PropertyAssignmentContext;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_objectLiteral;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterObjectLiteral) {
			listener.enterObjectLiteral(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitObjectLiteral) {
			listener.exitObjectLiteral(this);
		}
	}
}


export class PropertyAssignmentContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(SpiralLangParser.COLON, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(SpiralLangParser.STRING, 0);
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(SpiralLangParser.LBRACKET, 0);
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(SpiralLangParser.RBRACKET, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_propertyAssignment;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterPropertyAssignment) {
			listener.enterPropertyAssignment(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitPropertyAssignment) {
			listener.exitPropertyAssignment(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public DOT_list(): TerminalNode[] {
		return this.getTokens(SpiralLangParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(SpiralLangParser.DOT, i);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_qualifiedName;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.ASSIGN, 0);
	}
	public PLUS_ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.PLUS_ASSIGN, 0);
	}
	public MINUS_ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.MINUS_ASSIGN, 0);
	}
	public MULT_ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.MULT_ASSIGN, 0);
	}
	public DIV_ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.DIV_ASSIGN, 0);
	}
	public MOD_ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.MOD_ASSIGN, 0);
	}
	public LSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.LSHIFT_ASSIGN, 0);
	}
	public RSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.RSHIFT_ASSIGN, 0);
	}
	public URSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.URSHIFT_ASSIGN, 0);
	}
	public AND_ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.AND_ASSIGN, 0);
	}
	public OR_ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.OR_ASSIGN, 0);
	}
	public XOR_ASSIGN(): TerminalNode {
		return this.getToken(SpiralLangParser.XOR_ASSIGN, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_assignmentOperator;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
}


export class GateTypeContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_gateType;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterGateType) {
			listener.enterGateType(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitGateType) {
			listener.exitGateType(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: SpiralLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(SpiralLangParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
	return SpiralLangParser.RULE_identifier;
	}
	public enterRule(listener: SpiralLangListener): void {
	    if(listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: SpiralLangListener): void {
	    if(listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}
