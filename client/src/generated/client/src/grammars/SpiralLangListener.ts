// Generated from client/src/grammars/SpiralLang.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./SpiralLangParser.js";
import { ModuleContext } from "./SpiralLangParser.js";
import { ModuleDeclarationContext } from "./SpiralLangParser.js";
import { StatementContext } from "./SpiralLangParser.js";
import { DeclarationContext } from "./SpiralLangParser.js";
import { ImportDeclarationContext } from "./SpiralLangParser.js";
import { FunctionDeclarationContext } from "./SpiralLangParser.js";
import { ClassDeclarationContext } from "./SpiralLangParser.js";
import { InterfaceDeclarationContext } from "./SpiralLangParser.js";
import { VariableDeclarationContext } from "./SpiralLangParser.js";
import { TheoremDeclarationContext } from "./SpiralLangParser.js";
import { ProofDeclarationContext } from "./SpiralLangParser.js";
import { ControlFlowContext } from "./SpiralLangParser.js";
import { IfStatementContext } from "./SpiralLangParser.js";
import { WhileStatementContext } from "./SpiralLangParser.js";
import { ForStatementContext } from "./SpiralLangParser.js";
import { SwitchStatementContext } from "./SpiralLangParser.js";
import { TryStatementContext } from "./SpiralLangParser.js";
import { SpiralConstructContext } from "./SpiralLangParser.js";
import { PhiCalculationContext } from "./SpiralLangParser.js";
import { ResonanceFieldContext } from "./SpiralLangParser.js";
import { EntropyAnalysisContext } from "./SpiralLangParser.js";
import { HarmonicSequenceContext } from "./SpiralLangParser.js";
import { QuantumBlockContext } from "./SpiralLangParser.js";
import { QuantumStatementContext } from "./SpiralLangParser.js";
import { QuantumGateContext } from "./SpiralLangParser.js";
import { QuantumMeasurementContext } from "./SpiralLangParser.js";
import { QuantumEntanglementContext } from "./SpiralLangParser.js";
import { QuantumCollapseContext } from "./SpiralLangParser.js";
import { ConsciousnessBlockContext } from "./SpiralLangParser.js";
import { ConsciousnessStatementContext } from "./SpiralLangParser.js";
import { BlockStatementContext } from "./SpiralLangParser.js";
import { ExpressionContext } from "./SpiralLangParser.js";
import { AssignmentExpressionContext } from "./SpiralLangParser.js";
import { ConditionalExpressionContext } from "./SpiralLangParser.js";
import { LogicalOrExpressionContext } from "./SpiralLangParser.js";
import { LogicalAndExpressionContext } from "./SpiralLangParser.js";
import { EqualityExpressionContext } from "./SpiralLangParser.js";
import { RelationalExpressionContext } from "./SpiralLangParser.js";
import { AdditiveExpressionContext } from "./SpiralLangParser.js";
import { MultiplicativeExpressionContext } from "./SpiralLangParser.js";
import { UnaryExpressionContext } from "./SpiralLangParser.js";
import { PostfixExpressionContext } from "./SpiralLangParser.js";
import { LeftHandSideExpressionContext } from "./SpiralLangParser.js";
import { NewExpressionContext } from "./SpiralLangParser.js";
import { CallExpressionContext } from "./SpiralLangParser.js";
import { MemberExpressionContext } from "./SpiralLangParser.js";
import { PrimaryExpressionContext } from "./SpiralLangParser.js";
import { PhiExpressionContext } from "./SpiralLangParser.js";
import { QuantumExpressionContext } from "./SpiralLangParser.js";
import { EntropyExpressionContext } from "./SpiralLangParser.js";
import { ProofStatementContext } from "./SpiralLangParser.js";
import { MemoryAccessContext } from "./SpiralLangParser.js";
import { LearningPatternContext } from "./SpiralLangParser.js";
import { EmotionalStateContext } from "./SpiralLangParser.js";
import { DecisionTreeContext } from "./SpiralLangParser.js";
import { CaseClauseContext } from "./SpiralLangParser.js";
import { DefaultClauseContext } from "./SpiralLangParser.js";
import { ClassMemberContext } from "./SpiralLangParser.js";
import { InterfaceMemberContext } from "./SpiralLangParser.js";
import { PropertyDeclarationContext } from "./SpiralLangParser.js";
import { MethodDeclarationContext } from "./SpiralLangParser.js";
import { ConstructorDeclarationContext } from "./SpiralLangParser.js";
import { PropertySignatureContext } from "./SpiralLangParser.js";
import { MethodSignatureContext } from "./SpiralLangParser.js";
import { TypeContext } from "./SpiralLangParser.js";
import { PrimaryTypeContext } from "./SpiralLangParser.js";
import { FunctionTypeContext } from "./SpiralLangParser.js";
import { GenericTypeContext } from "./SpiralLangParser.js";
import { ReturnTypeContext } from "./SpiralLangParser.js";
import { TypeListContext } from "./SpiralLangParser.js";
import { TypeParametersContext } from "./SpiralLangParser.js";
import { TypeParameterContext } from "./SpiralLangParser.js";
import { ParameterListContext } from "./SpiralLangParser.js";
import { ParameterContext } from "./SpiralLangParser.js";
import { ArgumentsContext } from "./SpiralLangParser.js";
import { ExpressionListContext } from "./SpiralLangParser.js";
import { IdentifierListContext } from "./SpiralLangParser.js";
import { LiteralContext } from "./SpiralLangParser.js";
import { ArrayLiteralContext } from "./SpiralLangParser.js";
import { ObjectLiteralContext } from "./SpiralLangParser.js";
import { PropertyAssignmentContext } from "./SpiralLangParser.js";
import { QualifiedNameContext } from "./SpiralLangParser.js";
import { AssignmentOperatorContext } from "./SpiralLangParser.js";
import { GateTypeContext } from "./SpiralLangParser.js";
import { IdentifierContext } from "./SpiralLangParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SpiralLangParser`.
 */
export default class SpiralLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SpiralLangParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.moduleDeclaration`.
	 * @param ctx the parse tree
	 */
	enterModuleDeclaration?: (ctx: ModuleDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.moduleDeclaration`.
	 * @param ctx the parse tree
	 */
	exitModuleDeclaration?: (ctx: ModuleDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.theoremDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTheoremDeclaration?: (ctx: TheoremDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.theoremDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTheoremDeclaration?: (ctx: TheoremDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.proofDeclaration`.
	 * @param ctx the parse tree
	 */
	enterProofDeclaration?: (ctx: ProofDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.proofDeclaration`.
	 * @param ctx the parse tree
	 */
	exitProofDeclaration?: (ctx: ProofDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.controlFlow`.
	 * @param ctx the parse tree
	 */
	enterControlFlow?: (ctx: ControlFlowContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.controlFlow`.
	 * @param ctx the parse tree
	 */
	exitControlFlow?: (ctx: ControlFlowContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	enterTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	exitTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.spiralConstruct`.
	 * @param ctx the parse tree
	 */
	enterSpiralConstruct?: (ctx: SpiralConstructContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.spiralConstruct`.
	 * @param ctx the parse tree
	 */
	exitSpiralConstruct?: (ctx: SpiralConstructContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.phiCalculation`.
	 * @param ctx the parse tree
	 */
	enterPhiCalculation?: (ctx: PhiCalculationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.phiCalculation`.
	 * @param ctx the parse tree
	 */
	exitPhiCalculation?: (ctx: PhiCalculationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.resonanceField`.
	 * @param ctx the parse tree
	 */
	enterResonanceField?: (ctx: ResonanceFieldContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.resonanceField`.
	 * @param ctx the parse tree
	 */
	exitResonanceField?: (ctx: ResonanceFieldContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.entropyAnalysis`.
	 * @param ctx the parse tree
	 */
	enterEntropyAnalysis?: (ctx: EntropyAnalysisContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.entropyAnalysis`.
	 * @param ctx the parse tree
	 */
	exitEntropyAnalysis?: (ctx: EntropyAnalysisContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.harmonicSequence`.
	 * @param ctx the parse tree
	 */
	enterHarmonicSequence?: (ctx: HarmonicSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.harmonicSequence`.
	 * @param ctx the parse tree
	 */
	exitHarmonicSequence?: (ctx: HarmonicSequenceContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.quantumBlock`.
	 * @param ctx the parse tree
	 */
	enterQuantumBlock?: (ctx: QuantumBlockContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.quantumBlock`.
	 * @param ctx the parse tree
	 */
	exitQuantumBlock?: (ctx: QuantumBlockContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.quantumStatement`.
	 * @param ctx the parse tree
	 */
	enterQuantumStatement?: (ctx: QuantumStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.quantumStatement`.
	 * @param ctx the parse tree
	 */
	exitQuantumStatement?: (ctx: QuantumStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.quantumGate`.
	 * @param ctx the parse tree
	 */
	enterQuantumGate?: (ctx: QuantumGateContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.quantumGate`.
	 * @param ctx the parse tree
	 */
	exitQuantumGate?: (ctx: QuantumGateContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.quantumMeasurement`.
	 * @param ctx the parse tree
	 */
	enterQuantumMeasurement?: (ctx: QuantumMeasurementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.quantumMeasurement`.
	 * @param ctx the parse tree
	 */
	exitQuantumMeasurement?: (ctx: QuantumMeasurementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.quantumEntanglement`.
	 * @param ctx the parse tree
	 */
	enterQuantumEntanglement?: (ctx: QuantumEntanglementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.quantumEntanglement`.
	 * @param ctx the parse tree
	 */
	exitQuantumEntanglement?: (ctx: QuantumEntanglementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.quantumCollapse`.
	 * @param ctx the parse tree
	 */
	enterQuantumCollapse?: (ctx: QuantumCollapseContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.quantumCollapse`.
	 * @param ctx the parse tree
	 */
	exitQuantumCollapse?: (ctx: QuantumCollapseContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.consciousnessBlock`.
	 * @param ctx the parse tree
	 */
	enterConsciousnessBlock?: (ctx: ConsciousnessBlockContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.consciousnessBlock`.
	 * @param ctx the parse tree
	 */
	exitConsciousnessBlock?: (ctx: ConsciousnessBlockContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.consciousnessStatement`.
	 * @param ctx the parse tree
	 */
	enterConsciousnessStatement?: (ctx: ConsciousnessStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.consciousnessStatement`.
	 * @param ctx the parse tree
	 */
	exitConsciousnessStatement?: (ctx: ConsciousnessStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.leftHandSideExpression`.
	 * @param ctx the parse tree
	 */
	enterLeftHandSideExpression?: (ctx: LeftHandSideExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.leftHandSideExpression`.
	 * @param ctx the parse tree
	 */
	exitLeftHandSideExpression?: (ctx: LeftHandSideExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.newExpression`.
	 * @param ctx the parse tree
	 */
	enterNewExpression?: (ctx: NewExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.newExpression`.
	 * @param ctx the parse tree
	 */
	exitNewExpression?: (ctx: NewExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.callExpression`.
	 * @param ctx the parse tree
	 */
	enterCallExpression?: (ctx: CallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.callExpression`.
	 * @param ctx the parse tree
	 */
	exitCallExpression?: (ctx: CallExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.memberExpression`.
	 * @param ctx the parse tree
	 */
	enterMemberExpression?: (ctx: MemberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.memberExpression`.
	 * @param ctx the parse tree
	 */
	exitMemberExpression?: (ctx: MemberExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.phiExpression`.
	 * @param ctx the parse tree
	 */
	enterPhiExpression?: (ctx: PhiExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.phiExpression`.
	 * @param ctx the parse tree
	 */
	exitPhiExpression?: (ctx: PhiExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.quantumExpression`.
	 * @param ctx the parse tree
	 */
	enterQuantumExpression?: (ctx: QuantumExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.quantumExpression`.
	 * @param ctx the parse tree
	 */
	exitQuantumExpression?: (ctx: QuantumExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.entropyExpression`.
	 * @param ctx the parse tree
	 */
	enterEntropyExpression?: (ctx: EntropyExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.entropyExpression`.
	 * @param ctx the parse tree
	 */
	exitEntropyExpression?: (ctx: EntropyExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.proofStatement`.
	 * @param ctx the parse tree
	 */
	enterProofStatement?: (ctx: ProofStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.proofStatement`.
	 * @param ctx the parse tree
	 */
	exitProofStatement?: (ctx: ProofStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.memoryAccess`.
	 * @param ctx the parse tree
	 */
	enterMemoryAccess?: (ctx: MemoryAccessContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.memoryAccess`.
	 * @param ctx the parse tree
	 */
	exitMemoryAccess?: (ctx: MemoryAccessContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.learningPattern`.
	 * @param ctx the parse tree
	 */
	enterLearningPattern?: (ctx: LearningPatternContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.learningPattern`.
	 * @param ctx the parse tree
	 */
	exitLearningPattern?: (ctx: LearningPatternContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.emotionalState`.
	 * @param ctx the parse tree
	 */
	enterEmotionalState?: (ctx: EmotionalStateContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.emotionalState`.
	 * @param ctx the parse tree
	 */
	exitEmotionalState?: (ctx: EmotionalStateContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.decisionTree`.
	 * @param ctx the parse tree
	 */
	enterDecisionTree?: (ctx: DecisionTreeContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.decisionTree`.
	 * @param ctx the parse tree
	 */
	exitDecisionTree?: (ctx: DecisionTreeContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.caseClause`.
	 * @param ctx the parse tree
	 */
	enterCaseClause?: (ctx: CaseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.caseClause`.
	 * @param ctx the parse tree
	 */
	exitCaseClause?: (ctx: CaseClauseContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.defaultClause`.
	 * @param ctx the parse tree
	 */
	enterDefaultClause?: (ctx: DefaultClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.defaultClause`.
	 * @param ctx the parse tree
	 */
	exitDefaultClause?: (ctx: DefaultClauseContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.classMember`.
	 * @param ctx the parse tree
	 */
	enterClassMember?: (ctx: ClassMemberContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.classMember`.
	 * @param ctx the parse tree
	 */
	exitClassMember?: (ctx: ClassMemberContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.interfaceMember`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMember?: (ctx: InterfaceMemberContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.interfaceMember`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMember?: (ctx: InterfaceMemberContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.propertySignature`.
	 * @param ctx the parse tree
	 */
	enterPropertySignature?: (ctx: PropertySignatureContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.propertySignature`.
	 * @param ctx the parse tree
	 */
	exitPropertySignature?: (ctx: PropertySignatureContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.methodSignature`.
	 * @param ctx the parse tree
	 */
	enterMethodSignature?: (ctx: MethodSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.methodSignature`.
	 * @param ctx the parse tree
	 */
	exitMethodSignature?: (ctx: MethodSignatureContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterPrimaryType?: (ctx: PrimaryTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitPrimaryType?: (ctx: PrimaryTypeContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.functionType`.
	 * @param ctx the parse tree
	 */
	enterFunctionType?: (ctx: FunctionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.functionType`.
	 * @param ctx the parse tree
	 */
	exitFunctionType?: (ctx: FunctionTypeContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.genericType`.
	 * @param ctx the parse tree
	 */
	enterGenericType?: (ctx: GenericTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.genericType`.
	 * @param ctx the parse tree
	 */
	exitGenericType?: (ctx: GenericTypeContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.returnType`.
	 * @param ctx the parse tree
	 */
	enterReturnType?: (ctx: ReturnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.returnType`.
	 * @param ctx the parse tree
	 */
	exitReturnType?: (ctx: ReturnTypeContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.objectLiteral`.
	 * @param ctx the parse tree
	 */
	enterObjectLiteral?: (ctx: ObjectLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.objectLiteral`.
	 * @param ctx the parse tree
	 */
	exitObjectLiteral?: (ctx: ObjectLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertyAssignment?: (ctx: PropertyAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertyAssignment?: (ctx: PropertyAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.gateType`.
	 * @param ctx the parse tree
	 */
	enterGateType?: (ctx: GateTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.gateType`.
	 * @param ctx the parse tree
	 */
	exitGateType?: (ctx: GateTypeContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralLangParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralLangParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}
