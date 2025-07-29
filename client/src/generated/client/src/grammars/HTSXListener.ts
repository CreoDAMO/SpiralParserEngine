// Generated from client/src/grammars/HTSX.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./HTSXParser.js";
import { ElementContext } from "./HTSXParser.js";
import { HtsxElementContext } from "./HTSXParser.js";
import { ScriptBlockContext } from "./HTSXParser.js";
import { StyleBlockContext } from "./HTSXParser.js";
import { AttributeContext } from "./HTSXParser.js";
import { ExpressionContext } from "./HTSXParser.js";
import { SpiralExpressionContext } from "./HTSXParser.js";
import { PhiOperationContext } from "./HTSXParser.js";
import { QuantumBindingContext } from "./HTSXParser.js";
import { PrimaryContext } from "./HTSXParser.js";
import { EventHandlerContext } from "./HTSXParser.js";
import { InterpolationContext } from "./HTSXParser.js";
import { ArgumentListContext } from "./HTSXParser.js";
import { TagNameContext } from "./HTSXParser.js";
import { AttributeNameContext } from "./HTSXParser.js";
import { AttributeValueContext } from "./HTSXParser.js";
import { TextContentContext } from "./HTSXParser.js";
import { SpiralScriptContentContext } from "./HTSXParser.js";
import { CssContentContext } from "./HTSXParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HTSXParser`.
 */
export default class HTSXListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `HTSXParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.htsxElement`.
	 * @param ctx the parse tree
	 */
	enterHtsxElement?: (ctx: HtsxElementContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.htsxElement`.
	 * @param ctx the parse tree
	 */
	exitHtsxElement?: (ctx: HtsxElementContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.scriptBlock`.
	 * @param ctx the parse tree
	 */
	enterScriptBlock?: (ctx: ScriptBlockContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.scriptBlock`.
	 * @param ctx the parse tree
	 */
	exitScriptBlock?: (ctx: ScriptBlockContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.styleBlock`.
	 * @param ctx the parse tree
	 */
	enterStyleBlock?: (ctx: StyleBlockContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.styleBlock`.
	 * @param ctx the parse tree
	 */
	exitStyleBlock?: (ctx: StyleBlockContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.spiralExpression`.
	 * @param ctx the parse tree
	 */
	enterSpiralExpression?: (ctx: SpiralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.spiralExpression`.
	 * @param ctx the parse tree
	 */
	exitSpiralExpression?: (ctx: SpiralExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.phiOperation`.
	 * @param ctx the parse tree
	 */
	enterPhiOperation?: (ctx: PhiOperationContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.phiOperation`.
	 * @param ctx the parse tree
	 */
	exitPhiOperation?: (ctx: PhiOperationContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.quantumBinding`.
	 * @param ctx the parse tree
	 */
	enterQuantumBinding?: (ctx: QuantumBindingContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.quantumBinding`.
	 * @param ctx the parse tree
	 */
	exitQuantumBinding?: (ctx: QuantumBindingContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.eventHandler`.
	 * @param ctx the parse tree
	 */
	enterEventHandler?: (ctx: EventHandlerContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.eventHandler`.
	 * @param ctx the parse tree
	 */
	exitEventHandler?: (ctx: EventHandlerContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.interpolation`.
	 * @param ctx the parse tree
	 */
	enterInterpolation?: (ctx: InterpolationContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.interpolation`.
	 * @param ctx the parse tree
	 */
	exitInterpolation?: (ctx: InterpolationContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.tagName`.
	 * @param ctx the parse tree
	 */
	enterTagName?: (ctx: TagNameContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.tagName`.
	 * @param ctx the parse tree
	 */
	exitTagName?: (ctx: TagNameContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.attributeName`.
	 * @param ctx the parse tree
	 */
	enterAttributeName?: (ctx: AttributeNameContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.attributeName`.
	 * @param ctx the parse tree
	 */
	exitAttributeName?: (ctx: AttributeNameContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.attributeValue`.
	 * @param ctx the parse tree
	 */
	enterAttributeValue?: (ctx: AttributeValueContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.attributeValue`.
	 * @param ctx the parse tree
	 */
	exitAttributeValue?: (ctx: AttributeValueContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.textContent`.
	 * @param ctx the parse tree
	 */
	enterTextContent?: (ctx: TextContentContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.textContent`.
	 * @param ctx the parse tree
	 */
	exitTextContent?: (ctx: TextContentContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.spiralScriptContent`.
	 * @param ctx the parse tree
	 */
	enterSpiralScriptContent?: (ctx: SpiralScriptContentContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.spiralScriptContent`.
	 * @param ctx the parse tree
	 */
	exitSpiralScriptContent?: (ctx: SpiralScriptContentContext) => void;
	/**
	 * Enter a parse tree produced by `HTSXParser.cssContent`.
	 * @param ctx the parse tree
	 */
	enterCssContent?: (ctx: CssContentContext) => void;
	/**
	 * Exit a parse tree produced by `HTSXParser.cssContent`.
	 * @param ctx the parse tree
	 */
	exitCssContent?: (ctx: CssContentContext) => void;
}
