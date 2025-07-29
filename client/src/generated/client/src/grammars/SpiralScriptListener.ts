// Generated from client/src/grammars/SpiralScript.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./SpiralScriptParser.js";
import { StatementContext } from "./SpiralScriptParser.js";
import { DeclarationContext } from "./SpiralScriptParser.js";
import { ImportDeclarationContext } from "./SpiralScriptParser.js";
import { FunctionDeclarationContext } from "./SpiralScriptParser.js";
import { ClassDeclarationContext } from "./SpiralScriptParser.js";
import { VariableDeclarationContext } from "./SpiralScriptParser.js";
import { QuantumBlockContext } from "./SpiralScriptParser.js";
import { QuantumStatementContext } from "./SpiralScriptParser.js";
import { QuantumGateContext } from "./SpiralScriptParser.js";
import { PhiGateContext } from "./SpiralScriptParser.js";
import { QuantumMeasurementContext } from "./SpiralScriptParser.js";
import { PhiCalculationContext } from "./SpiralScriptParser.js";
import { PhiExpressionContext } from "./SpiralScriptParser.js";
import { BlockStatementContext } from "./SpiralScriptParser.js";
import { ExpressionContext } from "./SpiralScriptParser.js";
import { PrimaryContext } from "./SpiralScriptParser.js";
import { ParameterListContext } from "./SpiralScriptParser.js";
import { ParameterContext } from "./SpiralScriptParser.js";
import { ExpressionListContext } from "./SpiralScriptParser.js";
import { IdentifierListContext } from "./SpiralScriptParser.js";
import { TypeContext } from "./SpiralScriptParser.js";
import { IdentifierContext } from "./SpiralScriptParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SpiralScriptParser`.
 */
export default class SpiralScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.quantumBlock`.
	 * @param ctx the parse tree
	 */
	enterQuantumBlock?: (ctx: QuantumBlockContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.quantumBlock`.
	 * @param ctx the parse tree
	 */
	exitQuantumBlock?: (ctx: QuantumBlockContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.quantumStatement`.
	 * @param ctx the parse tree
	 */
	enterQuantumStatement?: (ctx: QuantumStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.quantumStatement`.
	 * @param ctx the parse tree
	 */
	exitQuantumStatement?: (ctx: QuantumStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.quantumGate`.
	 * @param ctx the parse tree
	 */
	enterQuantumGate?: (ctx: QuantumGateContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.quantumGate`.
	 * @param ctx the parse tree
	 */
	exitQuantumGate?: (ctx: QuantumGateContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.phiGate`.
	 * @param ctx the parse tree
	 */
	enterPhiGate?: (ctx: PhiGateContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.phiGate`.
	 * @param ctx the parse tree
	 */
	exitPhiGate?: (ctx: PhiGateContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.quantumMeasurement`.
	 * @param ctx the parse tree
	 */
	enterQuantumMeasurement?: (ctx: QuantumMeasurementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.quantumMeasurement`.
	 * @param ctx the parse tree
	 */
	exitQuantumMeasurement?: (ctx: QuantumMeasurementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.phiCalculation`.
	 * @param ctx the parse tree
	 */
	enterPhiCalculation?: (ctx: PhiCalculationContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.phiCalculation`.
	 * @param ctx the parse tree
	 */
	exitPhiCalculation?: (ctx: PhiCalculationContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.phiExpression`.
	 * @param ctx the parse tree
	 */
	enterPhiExpression?: (ctx: PhiExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.phiExpression`.
	 * @param ctx the parse tree
	 */
	exitPhiExpression?: (ctx: PhiExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
	/**
	 * Enter a parse tree produced by `SpiralScriptParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SpiralScriptParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}
