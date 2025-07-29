// Generated from client/src/grammars/HTSX.g4 by ANTLR 4.13.2
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
import HTSXListener from "./HTSXListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class HTSXParser extends Parser {
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
	public static readonly T__47 = 48;
	public static readonly SCRIPT = 49;
	public static readonly STYLE = 50;
	public static readonly AWAIT = 51;
	public static readonly PHI_CONSTANT = 52;
	public static readonly QUANTUM = 53;
	public static readonly RESONANCE = 54;
	public static readonly ENTANGLE = 55;
	public static readonly COLLAPSE = 56;
	public static readonly TIMES = 57;
	public static readonly DIVIDE = 58;
	public static readonly PLUS = 59;
	public static readonly MINUS = 60;
	public static readonly EQUALS = 61;
	public static readonly NOT_EQUALS = 62;
	public static readonly LESS_THAN = 63;
	public static readonly GREATER_THAN = 64;
	public static readonly AND = 65;
	public static readonly OR = 66;
	public static readonly NOT = 67;
	public static readonly NUMBER = 68;
	public static readonly STRING = 69;
	public static readonly BOOLEAN = 70;
	public static readonly IDENTIFIER = 71;
	public static readonly TEXT_CONTENT = 72;
	public static readonly WS = 73;
	public static readonly LINE_COMMENT = 74;
	public static readonly BLOCK_COMMENT = 75;
	public static readonly LPAREN = 76;
	public static readonly RPAREN = 77;
	public static readonly LBRACE = 78;
	public static readonly RBRACE = 79;
	public static readonly LBRACKET = 80;
	public static readonly RBRACKET = 81;
	public static readonly SEMICOLON = 82;
	public static readonly COMMA = 83;
	public static readonly DOT = 84;
	public static readonly COLON = 85;
	public static readonly ASSIGN = 86;
	public static readonly AT = 87;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_element = 1;
	public static readonly RULE_htsxElement = 2;
	public static readonly RULE_scriptBlock = 3;
	public static readonly RULE_styleBlock = 4;
	public static readonly RULE_attribute = 5;
	public static readonly RULE_expression = 6;
	public static readonly RULE_spiralExpression = 7;
	public static readonly RULE_phiOperation = 8;
	public static readonly RULE_quantumBinding = 9;
	public static readonly RULE_primary = 10;
	public static readonly RULE_eventHandler = 11;
	public static readonly RULE_interpolation = 12;
	public static readonly RULE_argumentList = 13;
	public static readonly RULE_tagName = 14;
	public static readonly RULE_attributeName = 15;
	public static readonly RULE_attributeValue = 16;
	public static readonly RULE_textContent = 17;
	public static readonly RULE_spiralScriptContent = 18;
	public static readonly RULE_cssContent = 19;
	public static readonly literalNames: (string | null)[] = [ null, "'</'",
                                                            "'/>'", "'<script'",
                                                            "'</script>'",
                                                            "'<style'",
                                                            "'</style>'",
                                                            "'phi('", "'resonance('",
                                                            "'quantum('",
                                                            "'entangle('",
                                                            "'collapse('",
                                                            "'this'", "'state'",
                                                            "'click'", "'change'",
                                                            "'input'", "'submit'",
                                                            "'load'", "'{{'",
                                                            "'}}'", "'div'",
                                                            "'span'", "'p'",
                                                            "'h1'", "'h2'",
                                                            "'h3'", "'h4'",
                                                            "'h5'", "'h6'",
                                                            "'img'", "'a'",
                                                            "'button'",
                                                            "'form'", "'table'",
                                                            "'tr'", "'td'",
                                                            "'SpiralComponent'",
                                                            "'QuantumRenderer'",
                                                            "'PhiVisualization'",
                                                            "'class'", "'id'",
                                                            "'src'", "'href'",
                                                            "'alt'", "'title'",
                                                            "'phiResonance'",
                                                            "'quantumState'",
                                                            "'spiralDepth'",
                                                            "'script'",
                                                            "'style'", "'await'",
                                                            null, "'quantum'",
                                                            "'resonance'",
                                                            "'entangle'",
                                                            "'collapse'",
                                                            "'*'", "'/'",
                                                            "'+'", "'-'",
                                                            "'=='", "'!='",
                                                            "'<'", "'>'",
                                                            "'&&'", "'||'",
                                                            "'!'", null,
                                                            null, null,
                                                            null, null,
                                                            null, null,
                                                            null, "'('",
                                                            "')'", "'{'",
                                                            "'}'", "'['",
                                                            "']'", "';'",
                                                            "','", "'.'",
                                                            "':'", "'='",
                                                            "'@'" ];
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
                                                             null, "SCRIPT",
                                                             "STYLE", "AWAIT",
                                                             "PHI_CONSTANT",
                                                             "QUANTUM",
                                                             "RESONANCE",
                                                             "ENTANGLE",
                                                             "COLLAPSE",
                                                             "TIMES", "DIVIDE",
                                                             "PLUS", "MINUS",
                                                             "EQUALS", "NOT_EQUALS",
                                                             "LESS_THAN",
                                                             "GREATER_THAN",
                                                             "AND", "OR",
                                                             "NOT", "NUMBER",
                                                             "STRING", "BOOLEAN",
                                                             "IDENTIFIER",
                                                             "TEXT_CONTENT",
                                                             "WS", "LINE_COMMENT",
                                                             "BLOCK_COMMENT",
                                                             "LPAREN", "RPAREN",
                                                             "LBRACE", "RBRACE",
                                                             "LBRACKET",
                                                             "RBRACKET",
                                                             "SEMICOLON",
                                                             "COMMA", "DOT",
                                                             "COLON", "ASSIGN",
                                                             "AT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "element", "htsxElement", "scriptBlock", "styleBlock", "attribute",
		"expression", "spiralExpression", "phiOperation", "quantumBinding", "primary",
		"eventHandler", "interpolation", "argumentList", "tagName", "attributeName",
		"attributeValue", "textContent", "spiralScriptContent", "cssContent",
	];
	public get grammarFileName(): string { return "HTSX.g4"; }
	public get literalNames(): (string | null)[] { return HTSXParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return HTSXParser.symbolicNames; }
	public get ruleNames(): string[] { return HTSXParser.ruleNames; }
	public get serializedATN(): number[] { return HTSXParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, HTSXParser._ATN, HTSXParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, HTSXParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524328) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & 33281) !== 0)) {
				{
				{
				this.state = 40;
				this.element();
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 46;
			this.match(HTSXParser.EOF);
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
	public element(): ElementContext {
		let localctx: ElementContext = new ElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, HTSXParser.RULE_element);
		try {
			this.state = 53;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 63:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 48;
				this.htsxElement();
				}
				break;
			case 72:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 49;
				this.textContent();
				}
				break;
			case 19:
			case 78:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 50;
				this.expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 51;
				this.scriptBlock();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 52;
				this.styleBlock();
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
	public htsxElement(): HtsxElementContext {
		let localctx: HtsxElementContext = new HtsxElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, HTSXParser.RULE_htsxElement);
		let _la: number;
		try {
			this.state = 84;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 55;
				this.match(HTSXParser.LESS_THAN);
				this.state = 56;
				this.tagName();
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 2147485183) !== 0) || _la===78 || _la===87) {
					{
					{
					this.state = 57;
					this.attribute();
					}
					}
					this.state = 62;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 63;
				this.match(HTSXParser.GREATER_THAN);
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524328) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & 33281) !== 0)) {
					{
					{
					this.state = 64;
					this.element();
					}
					}
					this.state = 69;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 70;
				this.match(HTSXParser.T__0);
				this.state = 71;
				this.tagName();
				this.state = 72;
				this.match(HTSXParser.GREATER_THAN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 74;
				this.match(HTSXParser.LESS_THAN);
				this.state = 75;
				this.tagName();
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 2147485183) !== 0) || _la===78 || _la===87) {
					{
					{
					this.state = 76;
					this.attribute();
					}
					}
					this.state = 81;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 82;
				this.match(HTSXParser.T__1);
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
	public scriptBlock(): ScriptBlockContext {
		let localctx: ScriptBlockContext = new ScriptBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, HTSXParser.RULE_scriptBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			this.match(HTSXParser.T__2);
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 2147485183) !== 0) || _la===78 || _la===87) {
				{
				{
				this.state = 87;
				this.attribute();
				}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 93;
			this.match(HTSXParser.GREATER_THAN);
			this.state = 94;
			this.spiralScriptContent();
			this.state = 95;
			this.match(HTSXParser.T__3);
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
	public styleBlock(): StyleBlockContext {
		let localctx: StyleBlockContext = new StyleBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, HTSXParser.RULE_styleBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 97;
			this.match(HTSXParser.T__4);
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 2147485183) !== 0) || _la===78 || _la===87) {
				{
				{
				this.state = 98;
				this.attribute();
				}
				}
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 104;
			this.match(HTSXParser.GREATER_THAN);
			this.state = 105;
			this.cssContent();
			this.state = 106;
			this.match(HTSXParser.T__5);
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
	public attribute(): AttributeContext {
		let localctx: AttributeContext = new AttributeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, HTSXParser.RULE_attribute);
		let _la: number;
		try {
			this.state = 119;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 50:
			case 71:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 108;
				this.attributeName();
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===86) {
					{
					this.state = 109;
					this.match(HTSXParser.ASSIGN);
					this.state = 110;
					this.attributeValue();
					}
				}

				}
				break;
			case 78:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 113;
				this.match(HTSXParser.LBRACE);
				this.state = 114;
				this.expression();
				this.state = 115;
				this.match(HTSXParser.RBRACE);
				}
				break;
			case 87:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 117;
				this.match(HTSXParser.AT);
				this.state = 118;
				this.eventHandler();
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
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, HTSXParser.RULE_expression);
		try {
			this.state = 126;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 78:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 121;
				this.match(HTSXParser.LBRACE);
				this.state = 122;
				this.spiralExpression(0);
				this.state = 123;
				this.match(HTSXParser.RBRACE);
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 125;
				this.interpolation();
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

	public spiralExpression(): SpiralExpressionContext;
	public spiralExpression(_p: number): SpiralExpressionContext;
	// @RuleVersion(0)
	public spiralExpression(_p?: number): SpiralExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: SpiralExpressionContext = new SpiralExpressionContext(this, this._ctx, _parentState);
		let _prevctx: SpiralExpressionContext = localctx;
		let _startState: number = 14;
		this.enterRecursionRule(localctx, 14, HTSXParser.RULE_spiralExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 136;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 129;
				this.primary();
				}
				break;
			case 2:
				{
				this.state = 130;
				this.match(HTSXParser.NOT);
				this.state = 131;
				this.spiralExpression(4);
				}
				break;
			case 3:
				{
				this.state = 132;
				this.match(HTSXParser.AWAIT);
				this.state = 133;
				this.spiralExpression(3);
				}
				break;
			case 4:
				{
				this.state = 134;
				this.phiOperation();
				}
				break;
			case 5:
				{
				this.state = 135;
				this.quantumBinding();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 163;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 161;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						localctx = new SpiralExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, HTSXParser.RULE_spiralExpression);
						this.state = 138;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 139;
						_la = this._input.LA(1);
						if(!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 15) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 140;
						this.spiralExpression(8);
						}
						break;
					case 2:
						{
						localctx = new SpiralExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, HTSXParser.RULE_spiralExpression);
						this.state = 141;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 142;
						_la = this._input.LA(1);
						if(!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & 15) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 143;
						this.spiralExpression(7);
						}
						break;
					case 3:
						{
						localctx = new SpiralExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, HTSXParser.RULE_spiralExpression);
						this.state = 144;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 145;
						_la = this._input.LA(1);
						if(!(_la===65 || _la===66)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 146;
						this.spiralExpression(6);
						}
						break;
					case 4:
						{
						localctx = new SpiralExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, HTSXParser.RULE_spiralExpression);
						this.state = 147;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 148;
						this.match(HTSXParser.DOT);
						this.state = 149;
						this.match(HTSXParser.IDENTIFIER);
						}
						break;
					case 5:
						{
						localctx = new SpiralExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, HTSXParser.RULE_spiralExpression);
						this.state = 150;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 151;
						this.match(HTSXParser.LBRACKET);
						this.state = 152;
						this.spiralExpression(0);
						this.state = 153;
						this.match(HTSXParser.RBRACKET);
						}
						break;
					case 6:
						{
						localctx = new SpiralExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, HTSXParser.RULE_spiralExpression);
						this.state = 155;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 156;
						this.match(HTSXParser.LPAREN);
						this.state = 158;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16256) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 35586051) !== 0)) {
							{
							this.state = 157;
							this.argumentList();
							}
						}

						this.state = 160;
						this.match(HTSXParser.RPAREN);
						}
						break;
					}
					}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
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
	public phiOperation(): PhiOperationContext {
		let localctx: PhiOperationContext = new PhiOperationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, HTSXParser.RULE_phiOperation);
		try {
			this.state = 179;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 52:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 166;
				this.match(HTSXParser.PHI_CONSTANT);
				this.state = 167;
				this.match(HTSXParser.TIMES);
				this.state = 168;
				this.spiralExpression(0);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 169;
				this.match(HTSXParser.T__6);
				this.state = 170;
				this.spiralExpression(0);
				this.state = 171;
				this.match(HTSXParser.RPAREN);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 173;
				this.match(HTSXParser.T__7);
				this.state = 174;
				this.spiralExpression(0);
				this.state = 175;
				this.match(HTSXParser.COMMA);
				this.state = 176;
				this.spiralExpression(0);
				this.state = 177;
				this.match(HTSXParser.RPAREN);
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
	public quantumBinding(): QuantumBindingContext {
		let localctx: QuantumBindingContext = new QuantumBindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, HTSXParser.RULE_quantumBinding);
		try {
			this.state = 195;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 181;
				this.match(HTSXParser.T__8);
				this.state = 182;
				this.spiralExpression(0);
				this.state = 183;
				this.match(HTSXParser.RPAREN);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 185;
				this.match(HTSXParser.T__9);
				this.state = 186;
				this.spiralExpression(0);
				this.state = 187;
				this.match(HTSXParser.COMMA);
				this.state = 188;
				this.spiralExpression(0);
				this.state = 189;
				this.match(HTSXParser.RPAREN);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 191;
				this.match(HTSXParser.T__10);
				this.state = 192;
				this.spiralExpression(0);
				this.state = 193;
				this.match(HTSXParser.RPAREN);
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
	public primary(): PrimaryContext {
		let localctx: PrimaryContext = new PrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, HTSXParser.RULE_primary);
		try {
			this.state = 208;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 71:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 197;
				this.match(HTSXParser.IDENTIFIER);
				}
				break;
			case 68:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 198;
				this.match(HTSXParser.NUMBER);
				}
				break;
			case 69:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 199;
				this.match(HTSXParser.STRING);
				}
				break;
			case 70:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 200;
				this.match(HTSXParser.BOOLEAN);
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 201;
				this.match(HTSXParser.PHI_CONSTANT);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 202;
				this.match(HTSXParser.T__11);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 203;
				this.match(HTSXParser.T__12);
				}
				break;
			case 76:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 204;
				this.match(HTSXParser.LPAREN);
				this.state = 205;
				this.spiralExpression(0);
				this.state = 206;
				this.match(HTSXParser.RPAREN);
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
	public eventHandler(): EventHandlerContext {
		let localctx: EventHandlerContext = new EventHandlerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, HTSXParser.RULE_eventHandler);
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 210;
				this.match(HTSXParser.T__13);
				this.state = 211;
				this.match(HTSXParser.ASSIGN);
				this.state = 212;
				this.match(HTSXParser.LBRACE);
				this.state = 213;
				this.spiralExpression(0);
				this.state = 214;
				this.match(HTSXParser.RBRACE);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 216;
				this.match(HTSXParser.T__14);
				this.state = 217;
				this.match(HTSXParser.ASSIGN);
				this.state = 218;
				this.match(HTSXParser.LBRACE);
				this.state = 219;
				this.spiralExpression(0);
				this.state = 220;
				this.match(HTSXParser.RBRACE);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 222;
				this.match(HTSXParser.T__15);
				this.state = 223;
				this.match(HTSXParser.ASSIGN);
				this.state = 224;
				this.match(HTSXParser.LBRACE);
				this.state = 225;
				this.spiralExpression(0);
				this.state = 226;
				this.match(HTSXParser.RBRACE);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 228;
				this.match(HTSXParser.T__16);
				this.state = 229;
				this.match(HTSXParser.ASSIGN);
				this.state = 230;
				this.match(HTSXParser.LBRACE);
				this.state = 231;
				this.spiralExpression(0);
				this.state = 232;
				this.match(HTSXParser.RBRACE);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 234;
				this.match(HTSXParser.T__17);
				this.state = 235;
				this.match(HTSXParser.ASSIGN);
				this.state = 236;
				this.match(HTSXParser.LBRACE);
				this.state = 237;
				this.spiralExpression(0);
				this.state = 238;
				this.match(HTSXParser.RBRACE);
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
	public interpolation(): InterpolationContext {
		let localctx: InterpolationContext = new InterpolationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, HTSXParser.RULE_interpolation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 242;
			this.match(HTSXParser.T__18);
			this.state = 243;
			this.spiralExpression(0);
			this.state = 244;
			this.match(HTSXParser.T__19);
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
	public argumentList(): ArgumentListContext {
		let localctx: ArgumentListContext = new ArgumentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, HTSXParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 246;
			this.spiralExpression(0);
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===83) {
				{
				{
				this.state = 247;
				this.match(HTSXParser.COMMA);
				this.state = 248;
				this.spiralExpression(0);
				}
				}
				this.state = 253;
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
	public tagName(): TagNameContext {
		let localctx: TagNameContext = new TagNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, HTSXParser.RULE_tagName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 254;
			_la = this._input.LA(1);
			if(!(((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & 16777185) !== 0) || _la===71)) {
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
	public attributeName(): AttributeNameContext {
		let localctx: AttributeNameContext = new AttributeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, HTSXParser.RULE_attributeName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 256;
			_la = this._input.LA(1);
			if(!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 2147485183) !== 0))) {
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
	public attributeValue(): AttributeValueContext {
		let localctx: AttributeValueContext = new AttributeValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, HTSXParser.RULE_attributeValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 258;
			_la = this._input.LA(1);
			if(!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 7) !== 0))) {
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
	public textContent(): TextContentContext {
		let localctx: TextContentContext = new TextContentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, HTSXParser.RULE_textContent);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 261;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 260;
					this.match(HTSXParser.TEXT_CONTENT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 263;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public spiralScriptContent(): SpiralScriptContentContext {
		let localctx: SpiralScriptContentContext = new SpiralScriptContentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, HTSXParser.RULE_spiralScriptContent);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967278) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 16777215) !== 0)) {
				{
				{
				this.state = 265;
				_la = this._input.LA(1);
				if(_la<=0 || _la===4) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 270;
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
	public cssContent(): CssContentContext {
		let localctx: CssContentContext = new CssContentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, HTSXParser.RULE_cssContent);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967230) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 16777215) !== 0)) {
				{
				{
				this.state = 271;
				_la = this._input.LA(1);
				if(_la<=0 || _la===6) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 276;
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

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 7:
			return this.spiralExpression_sempred(localctx as SpiralExpressionContext, predIndex);
		}
		return true;
	}
	private spiralExpression_sempred(localctx: SpiralExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);
		case 1:
			return this.precpred(this._ctx, 6);
		case 2:
			return this.precpred(this._ctx, 5);
		case 3:
			return this.precpred(this._ctx, 10);
		case 4:
			return this.precpred(this._ctx, 9);
		case 5:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,87,278,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,1,0,5,0,42,8,0,10,0,12,0,45,9,0,1,0,1,0,1,1,1,
	1,1,1,1,1,1,1,3,1,54,8,1,1,2,1,2,1,2,5,2,59,8,2,10,2,12,2,62,9,2,1,2,1,
	2,5,2,66,8,2,10,2,12,2,69,9,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,78,8,2,10,
	2,12,2,81,9,2,1,2,1,2,3,2,85,8,2,1,3,1,3,5,3,89,8,3,10,3,12,3,92,9,3,1,
	3,1,3,1,3,1,3,1,4,1,4,5,4,100,8,4,10,4,12,4,103,9,4,1,4,1,4,1,4,1,4,1,5,
	1,5,1,5,3,5,112,8,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,120,8,5,1,6,1,6,1,6,1,6,
	1,6,3,6,127,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,137,8,7,1,7,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,
	159,8,7,1,7,5,7,162,8,7,10,7,12,7,165,9,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
	8,1,8,1,8,1,8,1,8,1,8,3,8,180,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,3,9,196,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,3,10,209,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
	1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
	11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,241,8,11,1,12,1,12,1,12,1,12,1,13,
	1,13,1,13,5,13,250,8,13,10,13,12,13,253,9,13,1,14,1,14,1,15,1,15,1,16,1,
	16,1,17,4,17,262,8,17,11,17,12,17,263,1,18,5,18,267,8,18,10,18,12,18,270,
	9,18,1,19,5,19,273,8,19,10,19,12,19,276,9,19,1,19,0,1,14,20,0,2,4,6,8,10,
	12,14,16,18,20,22,24,26,28,30,32,34,36,38,0,8,1,0,57,60,1,0,61,64,1,0,65,
	66,3,0,16,16,21,39,71,71,3,0,40,48,50,50,71,71,1,0,68,70,1,0,4,4,1,0,6,
	6,302,0,43,1,0,0,0,2,53,1,0,0,0,4,84,1,0,0,0,6,86,1,0,0,0,8,97,1,0,0,0,
	10,119,1,0,0,0,12,126,1,0,0,0,14,136,1,0,0,0,16,179,1,0,0,0,18,195,1,0,
	0,0,20,208,1,0,0,0,22,240,1,0,0,0,24,242,1,0,0,0,26,246,1,0,0,0,28,254,
	1,0,0,0,30,256,1,0,0,0,32,258,1,0,0,0,34,261,1,0,0,0,36,268,1,0,0,0,38,
	274,1,0,0,0,40,42,3,2,1,0,41,40,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,
	44,1,0,0,0,44,46,1,0,0,0,45,43,1,0,0,0,46,47,5,0,0,1,47,1,1,0,0,0,48,54,
	3,4,2,0,49,54,3,34,17,0,50,54,3,12,6,0,51,54,3,6,3,0,52,54,3,8,4,0,53,48,
	1,0,0,0,53,49,1,0,0,0,53,50,1,0,0,0,53,51,1,0,0,0,53,52,1,0,0,0,54,3,1,
	0,0,0,55,56,5,63,0,0,56,60,3,28,14,0,57,59,3,10,5,0,58,57,1,0,0,0,59,62,
	1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,63,1,0,0,0,62,60,1,0,0,0,63,67,5,
	64,0,0,64,66,3,2,1,0,65,64,1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,
	0,0,0,68,70,1,0,0,0,69,67,1,0,0,0,70,71,5,1,0,0,71,72,3,28,14,0,72,73,5,
	64,0,0,73,85,1,0,0,0,74,75,5,63,0,0,75,79,3,28,14,0,76,78,3,10,5,0,77,76,
	1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,82,1,0,0,0,81,79,1,
	0,0,0,82,83,5,2,0,0,83,85,1,0,0,0,84,55,1,0,0,0,84,74,1,0,0,0,85,5,1,0,
	0,0,86,90,5,3,0,0,87,89,3,10,5,0,88,87,1,0,0,0,89,92,1,0,0,0,90,88,1,0,
	0,0,90,91,1,0,0,0,91,93,1,0,0,0,92,90,1,0,0,0,93,94,5,64,0,0,94,95,3,36,
	18,0,95,96,5,4,0,0,96,7,1,0,0,0,97,101,5,5,0,0,98,100,3,10,5,0,99,98,1,
	0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,104,1,0,0,0,103,
	101,1,0,0,0,104,105,5,64,0,0,105,106,3,38,19,0,106,107,5,6,0,0,107,9,1,
	0,0,0,108,111,3,30,15,0,109,110,5,86,0,0,110,112,3,32,16,0,111,109,1,0,
	0,0,111,112,1,0,0,0,112,120,1,0,0,0,113,114,5,78,0,0,114,115,3,12,6,0,115,
	116,5,79,0,0,116,120,1,0,0,0,117,118,5,87,0,0,118,120,3,22,11,0,119,108,
	1,0,0,0,119,113,1,0,0,0,119,117,1,0,0,0,120,11,1,0,0,0,121,122,5,78,0,0,
	122,123,3,14,7,0,123,124,5,79,0,0,124,127,1,0,0,0,125,127,3,24,12,0,126,
	121,1,0,0,0,126,125,1,0,0,0,127,13,1,0,0,0,128,129,6,7,-1,0,129,137,3,20,
	10,0,130,131,5,67,0,0,131,137,3,14,7,4,132,133,5,51,0,0,133,137,3,14,7,
	3,134,137,3,16,8,0,135,137,3,18,9,0,136,128,1,0,0,0,136,130,1,0,0,0,136,
	132,1,0,0,0,136,134,1,0,0,0,136,135,1,0,0,0,137,163,1,0,0,0,138,139,10,
	7,0,0,139,140,7,0,0,0,140,162,3,14,7,8,141,142,10,6,0,0,142,143,7,1,0,0,
	143,162,3,14,7,7,144,145,10,5,0,0,145,146,7,2,0,0,146,162,3,14,7,6,147,
	148,10,10,0,0,148,149,5,84,0,0,149,162,5,71,0,0,150,151,10,9,0,0,151,152,
	5,80,0,0,152,153,3,14,7,0,153,154,5,81,0,0,154,162,1,0,0,0,155,156,10,8,
	0,0,156,158,5,76,0,0,157,159,3,26,13,0,158,157,1,0,0,0,158,159,1,0,0,0,
	159,160,1,0,0,0,160,162,5,77,0,0,161,138,1,0,0,0,161,141,1,0,0,0,161,144,
	1,0,0,0,161,147,1,0,0,0,161,150,1,0,0,0,161,155,1,0,0,0,162,165,1,0,0,0,
	163,161,1,0,0,0,163,164,1,0,0,0,164,15,1,0,0,0,165,163,1,0,0,0,166,167,
	5,52,0,0,167,168,5,57,0,0,168,180,3,14,7,0,169,170,5,7,0,0,170,171,3,14,
	7,0,171,172,5,77,0,0,172,180,1,0,0,0,173,174,5,8,0,0,174,175,3,14,7,0,175,
	176,5,83,0,0,176,177,3,14,7,0,177,178,5,77,0,0,178,180,1,0,0,0,179,166,
	1,0,0,0,179,169,1,0,0,0,179,173,1,0,0,0,180,17,1,0,0,0,181,182,5,9,0,0,
	182,183,3,14,7,0,183,184,5,77,0,0,184,196,1,0,0,0,185,186,5,10,0,0,186,
	187,3,14,7,0,187,188,5,83,0,0,188,189,3,14,7,0,189,190,5,77,0,0,190,196,
	1,0,0,0,191,192,5,11,0,0,192,193,3,14,7,0,193,194,5,77,0,0,194,196,1,0,
	0,0,195,181,1,0,0,0,195,185,1,0,0,0,195,191,1,0,0,0,196,19,1,0,0,0,197,
	209,5,71,0,0,198,209,5,68,0,0,199,209,5,69,0,0,200,209,5,70,0,0,201,209,
	5,52,0,0,202,209,5,12,0,0,203,209,5,13,0,0,204,205,5,76,0,0,205,206,3,14,
	7,0,206,207,5,77,0,0,207,209,1,0,0,0,208,197,1,0,0,0,208,198,1,0,0,0,208,
	199,1,0,0,0,208,200,1,0,0,0,208,201,1,0,0,0,208,202,1,0,0,0,208,203,1,0,
	0,0,208,204,1,0,0,0,209,21,1,0,0,0,210,211,5,14,0,0,211,212,5,86,0,0,212,
	213,5,78,0,0,213,214,3,14,7,0,214,215,5,79,0,0,215,241,1,0,0,0,216,217,
	5,15,0,0,217,218,5,86,0,0,218,219,5,78,0,0,219,220,3,14,7,0,220,221,5,79,
	0,0,221,241,1,0,0,0,222,223,5,16,0,0,223,224,5,86,0,0,224,225,5,78,0,0,
	225,226,3,14,7,0,226,227,5,79,0,0,227,241,1,0,0,0,228,229,5,17,0,0,229,
	230,5,86,0,0,230,231,5,78,0,0,231,232,3,14,7,0,232,233,5,79,0,0,233,241,
	1,0,0,0,234,235,5,18,0,0,235,236,5,86,0,0,236,237,5,78,0,0,237,238,3,14,
	7,0,238,239,5,79,0,0,239,241,1,0,0,0,240,210,1,0,0,0,240,216,1,0,0,0,240,
	222,1,0,0,0,240,228,1,0,0,0,240,234,1,0,0,0,241,23,1,0,0,0,242,243,5,19,
	0,0,243,244,3,14,7,0,244,245,5,20,0,0,245,25,1,0,0,0,246,251,3,14,7,0,247,
	248,5,83,0,0,248,250,3,14,7,0,249,247,1,0,0,0,250,253,1,0,0,0,251,249,1,
	0,0,0,251,252,1,0,0,0,252,27,1,0,0,0,253,251,1,0,0,0,254,255,7,3,0,0,255,
	29,1,0,0,0,256,257,7,4,0,0,257,31,1,0,0,0,258,259,7,5,0,0,259,33,1,0,0,
	0,260,262,5,72,0,0,261,260,1,0,0,0,262,263,1,0,0,0,263,261,1,0,0,0,263,
	264,1,0,0,0,264,35,1,0,0,0,265,267,8,6,0,0,266,265,1,0,0,0,267,270,1,0,
	0,0,268,266,1,0,0,0,268,269,1,0,0,0,269,37,1,0,0,0,270,268,1,0,0,0,271,
	273,8,7,0,0,272,271,1,0,0,0,273,276,1,0,0,0,274,272,1,0,0,0,274,275,1,0,
	0,0,275,39,1,0,0,0,276,274,1,0,0,0,23,43,53,60,67,79,84,90,101,111,119,
	126,136,158,161,163,179,195,208,240,251,263,268,274];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HTSXParser.__ATN) {
			HTSXParser.__ATN = new ATNDeserializer().deserialize(HTSXParser._serializedATN);
		}

		return HTSXParser.__ATN;
	}


	static DecisionsToDFA = HTSXParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(HTSXParser.EOF, 0);
	}
	public element_list(): ElementContext[] {
		return this.getTypedRuleContexts(ElementContext) as ElementContext[];
	}
	public element(i: number): ElementContext {
		return this.getTypedRuleContext(ElementContext, i) as ElementContext;
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_program;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public htsxElement(): HtsxElementContext {
		return this.getTypedRuleContext(HtsxElementContext, 0) as HtsxElementContext;
	}
	public textContent(): TextContentContext {
		return this.getTypedRuleContext(TextContentContext, 0) as TextContentContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public scriptBlock(): ScriptBlockContext {
		return this.getTypedRuleContext(ScriptBlockContext, 0) as ScriptBlockContext;
	}
	public styleBlock(): StyleBlockContext {
		return this.getTypedRuleContext(StyleBlockContext, 0) as StyleBlockContext;
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_element;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterElement) {
			listener.enterElement(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitElement) {
			listener.exitElement(this);
		}
	}
}


export class HtsxElementContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public LESS_THAN(): TerminalNode {
		return this.getToken(HTSXParser.LESS_THAN, 0);
	}
	public tagName_list(): TagNameContext[] {
		return this.getTypedRuleContexts(TagNameContext) as TagNameContext[];
	}
	public tagName(i: number): TagNameContext {
		return this.getTypedRuleContext(TagNameContext, i) as TagNameContext;
	}
	public GREATER_THAN_list(): TerminalNode[] {
		return this.getTokens(HTSXParser.GREATER_THAN);
	}
	public GREATER_THAN(i: number): TerminalNode {
		return this.getToken(HTSXParser.GREATER_THAN, i);
	}
	public attribute_list(): AttributeContext[] {
		return this.getTypedRuleContexts(AttributeContext) as AttributeContext[];
	}
	public attribute(i: number): AttributeContext {
		return this.getTypedRuleContext(AttributeContext, i) as AttributeContext;
	}
	public element_list(): ElementContext[] {
		return this.getTypedRuleContexts(ElementContext) as ElementContext[];
	}
	public element(i: number): ElementContext {
		return this.getTypedRuleContext(ElementContext, i) as ElementContext;
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_htsxElement;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterHtsxElement) {
			listener.enterHtsxElement(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitHtsxElement) {
			listener.exitHtsxElement(this);
		}
	}
}


export class ScriptBlockContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public GREATER_THAN(): TerminalNode {
		return this.getToken(HTSXParser.GREATER_THAN, 0);
	}
	public spiralScriptContent(): SpiralScriptContentContext {
		return this.getTypedRuleContext(SpiralScriptContentContext, 0) as SpiralScriptContentContext;
	}
	public attribute_list(): AttributeContext[] {
		return this.getTypedRuleContexts(AttributeContext) as AttributeContext[];
	}
	public attribute(i: number): AttributeContext {
		return this.getTypedRuleContext(AttributeContext, i) as AttributeContext;
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_scriptBlock;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterScriptBlock) {
			listener.enterScriptBlock(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitScriptBlock) {
			listener.exitScriptBlock(this);
		}
	}
}


export class StyleBlockContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public GREATER_THAN(): TerminalNode {
		return this.getToken(HTSXParser.GREATER_THAN, 0);
	}
	public cssContent(): CssContentContext {
		return this.getTypedRuleContext(CssContentContext, 0) as CssContentContext;
	}
	public attribute_list(): AttributeContext[] {
		return this.getTypedRuleContexts(AttributeContext) as AttributeContext[];
	}
	public attribute(i: number): AttributeContext {
		return this.getTypedRuleContext(AttributeContext, i) as AttributeContext;
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_styleBlock;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterStyleBlock) {
			listener.enterStyleBlock(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitStyleBlock) {
			listener.exitStyleBlock(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public attributeName(): AttributeNameContext {
		return this.getTypedRuleContext(AttributeNameContext, 0) as AttributeNameContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(HTSXParser.ASSIGN, 0);
	}
	public attributeValue(): AttributeValueContext {
		return this.getTypedRuleContext(AttributeValueContext, 0) as AttributeValueContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(HTSXParser.LBRACE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(HTSXParser.RBRACE, 0);
	}
	public AT(): TerminalNode {
		return this.getToken(HTSXParser.AT, 0);
	}
	public eventHandler(): EventHandlerContext {
		return this.getTypedRuleContext(EventHandlerContext, 0) as EventHandlerContext;
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_attribute;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(HTSXParser.LBRACE, 0);
	}
	public spiralExpression(): SpiralExpressionContext {
		return this.getTypedRuleContext(SpiralExpressionContext, 0) as SpiralExpressionContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(HTSXParser.RBRACE, 0);
	}
	public interpolation(): InterpolationContext {
		return this.getTypedRuleContext(InterpolationContext, 0) as InterpolationContext;
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_expression;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class SpiralExpressionContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(HTSXParser.NOT, 0);
	}
	public spiralExpression_list(): SpiralExpressionContext[] {
		return this.getTypedRuleContexts(SpiralExpressionContext) as SpiralExpressionContext[];
	}
	public spiralExpression(i: number): SpiralExpressionContext {
		return this.getTypedRuleContext(SpiralExpressionContext, i) as SpiralExpressionContext;
	}
	public AWAIT(): TerminalNode {
		return this.getToken(HTSXParser.AWAIT, 0);
	}
	public phiOperation(): PhiOperationContext {
		return this.getTypedRuleContext(PhiOperationContext, 0) as PhiOperationContext;
	}
	public quantumBinding(): QuantumBindingContext {
		return this.getTypedRuleContext(QuantumBindingContext, 0) as QuantumBindingContext;
	}
	public TIMES(): TerminalNode {
		return this.getToken(HTSXParser.TIMES, 0);
	}
	public DIVIDE(): TerminalNode {
		return this.getToken(HTSXParser.DIVIDE, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(HTSXParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(HTSXParser.MINUS, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(HTSXParser.EQUALS, 0);
	}
	public NOT_EQUALS(): TerminalNode {
		return this.getToken(HTSXParser.NOT_EQUALS, 0);
	}
	public LESS_THAN(): TerminalNode {
		return this.getToken(HTSXParser.LESS_THAN, 0);
	}
	public GREATER_THAN(): TerminalNode {
		return this.getToken(HTSXParser.GREATER_THAN, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(HTSXParser.AND, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(HTSXParser.OR, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(HTSXParser.DOT, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(HTSXParser.IDENTIFIER, 0);
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(HTSXParser.LBRACKET, 0);
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(HTSXParser.RBRACKET, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(HTSXParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(HTSXParser.RPAREN, 0);
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_spiralExpression;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterSpiralExpression) {
			listener.enterSpiralExpression(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitSpiralExpression) {
			listener.exitSpiralExpression(this);
		}
	}
}


export class PhiOperationContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public PHI_CONSTANT(): TerminalNode {
		return this.getToken(HTSXParser.PHI_CONSTANT, 0);
	}
	public TIMES(): TerminalNode {
		return this.getToken(HTSXParser.TIMES, 0);
	}
	public spiralExpression_list(): SpiralExpressionContext[] {
		return this.getTypedRuleContexts(SpiralExpressionContext) as SpiralExpressionContext[];
	}
	public spiralExpression(i: number): SpiralExpressionContext {
		return this.getTypedRuleContext(SpiralExpressionContext, i) as SpiralExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(HTSXParser.RPAREN, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(HTSXParser.COMMA, 0);
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_phiOperation;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterPhiOperation) {
			listener.enterPhiOperation(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitPhiOperation) {
			listener.exitPhiOperation(this);
		}
	}
}


export class QuantumBindingContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public spiralExpression_list(): SpiralExpressionContext[] {
		return this.getTypedRuleContexts(SpiralExpressionContext) as SpiralExpressionContext[];
	}
	public spiralExpression(i: number): SpiralExpressionContext {
		return this.getTypedRuleContext(SpiralExpressionContext, i) as SpiralExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(HTSXParser.RPAREN, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(HTSXParser.COMMA, 0);
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_quantumBinding;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterQuantumBinding) {
			listener.enterQuantumBinding(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitQuantumBinding) {
			listener.exitQuantumBinding(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(HTSXParser.IDENTIFIER, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(HTSXParser.NUMBER, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(HTSXParser.STRING, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(HTSXParser.BOOLEAN, 0);
	}
	public PHI_CONSTANT(): TerminalNode {
		return this.getToken(HTSXParser.PHI_CONSTANT, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(HTSXParser.LPAREN, 0);
	}
	public spiralExpression(): SpiralExpressionContext {
		return this.getTypedRuleContext(SpiralExpressionContext, 0) as SpiralExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(HTSXParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_primary;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
}


export class EventHandlerContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(HTSXParser.ASSIGN, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(HTSXParser.LBRACE, 0);
	}
	public spiralExpression(): SpiralExpressionContext {
		return this.getTypedRuleContext(SpiralExpressionContext, 0) as SpiralExpressionContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(HTSXParser.RBRACE, 0);
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_eventHandler;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterEventHandler) {
			listener.enterEventHandler(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitEventHandler) {
			listener.exitEventHandler(this);
		}
	}
}


export class InterpolationContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public spiralExpression(): SpiralExpressionContext {
		return this.getTypedRuleContext(SpiralExpressionContext, 0) as SpiralExpressionContext;
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_interpolation;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterInterpolation) {
			listener.enterInterpolation(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitInterpolation) {
			listener.exitInterpolation(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public spiralExpression_list(): SpiralExpressionContext[] {
		return this.getTypedRuleContexts(SpiralExpressionContext) as SpiralExpressionContext[];
	}
	public spiralExpression(i: number): SpiralExpressionContext {
		return this.getTypedRuleContext(SpiralExpressionContext, i) as SpiralExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
		return this.getTokens(HTSXParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(HTSXParser.COMMA, i);
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_argumentList;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
}


export class TagNameContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(HTSXParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_tagName;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterTagName) {
			listener.enterTagName(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitTagName) {
			listener.exitTagName(this);
		}
	}
}


export class AttributeNameContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(HTSXParser.IDENTIFIER, 0);
	}
	public STYLE(): TerminalNode {
		return this.getToken(HTSXParser.STYLE, 0);
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_attributeName;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterAttributeName) {
			listener.enterAttributeName(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitAttributeName) {
			listener.exitAttributeName(this);
		}
	}
}


export class AttributeValueContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(HTSXParser.STRING, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(HTSXParser.NUMBER, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(HTSXParser.BOOLEAN, 0);
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_attributeValue;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterAttributeValue) {
			listener.enterAttributeValue(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitAttributeValue) {
			listener.exitAttributeValue(this);
		}
	}
}


export class TextContentContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
	public TEXT_CONTENT_list(): TerminalNode[] {
		return this.getTokens(HTSXParser.TEXT_CONTENT);
	}
	public TEXT_CONTENT(i: number): TerminalNode {
		return this.getToken(HTSXParser.TEXT_CONTENT, i);
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_textContent;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterTextContent) {
			listener.enterTextContent(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitTextContent) {
			listener.exitTextContent(this);
		}
	}
}


export class SpiralScriptContentContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_spiralScriptContent;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterSpiralScriptContent) {
			listener.enterSpiralScriptContent(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitSpiralScriptContent) {
			listener.exitSpiralScriptContent(this);
		}
	}
}


export class CssContentContext extends ParserRuleContext {
	constructor(parser?: HTSXParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	this.parser = parser;
	}
    public get ruleIndex(): number {
	return HTSXParser.RULE_cssContent;
	}
	public enterRule(listener: HTSXListener): void {
	    if(listener.enterCssContent) {
			listener.enterCssContent(this);
		}
	}
	public exitRule(listener: HTSXListener): void {
	    if(listener.exitCssContent) {
			listener.exitCssContent(this);
		}
	}
}
