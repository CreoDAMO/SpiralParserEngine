
grammar HTSX;

// Parser Rules
program
    : element* EOF
    ;

element
    : htsxElement
    | textContent
    | expression
    | scriptBlock
    | styleBlock
    ;

htsxElement
    : '<' tagName attribute* '>' element* '</' tagName '>'
    | '<' tagName attribute* '/>'
    ;

scriptBlock
    : '<script' attribute* '>' spiralScriptContent '</script>'
    ;

styleBlock
    : '<style' attribute* '>' cssContent '</style>'
    ;

attribute
    : attributeName ('=' attributeValue)?
    | '{' expression '}'
    | '@' eventHandler
    ;

expression
    : '{' spiralExpression '}'
    | interpolation
    ;

spiralExpression
    : primary
    | spiralExpression '.' IDENTIFIER
    | spiralExpression '[' spiralExpression ']'
    | spiralExpression '(' argumentList? ')'
    | spiralExpression (TIMES | DIVIDE | PLUS | MINUS) spiralExpression
    | spiralExpression (EQUALS | NOT_EQUALS | LESS_THAN | GREATER_THAN) spiralExpression
    | spiralExpression (AND | OR) spiralExpression
    | NOT spiralExpression
    | AWAIT spiralExpression
    | phiOperation
    | quantumBinding
    ;

phiOperation
    : PHI_CONSTANT TIMES spiralExpression
    | 'phi(' spiralExpression ')'
    | 'resonance(' spiralExpression ',' spiralExpression ')'
    ;

quantumBinding
    : 'quantum(' spiralExpression ')'
    | 'entangle(' spiralExpression ',' spiralExpression ')'
    | 'collapse(' spiralExpression ')'
    ;

primary
    : IDENTIFIER
    | NUMBER
    | STRING
    | BOOLEAN
    | PHI_CONSTANT
    | 'this'
    | 'state'
    | '(' spiralExpression ')'
    ;

eventHandler
    : 'click' '=' '{' spiralExpression '}'
    | 'change' '=' '{' spiralExpression '}'
    | 'input' '=' '{' spiralExpression '}'
    | 'submit' '=' '{' spiralExpression '}'
    | 'load' '=' '{' spiralExpression '}'
    ;

interpolation
    : '{{' spiralExpression '}}'
    ;

argumentList
    : spiralExpression (',' spiralExpression)*
    ;

tagName
    : IDENTIFIER
    | 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    | 'img' | 'a' | 'button' | 'input' | 'form' | 'table' | 'tr' | 'td'
    | 'SpiralComponent' | 'QuantumRenderer' | 'PhiVisualization'
    ;

attributeName
    : IDENTIFIER
    | 'class' | 'id' | 'style' | 'src' | 'href' | 'alt' | 'title'
    | 'phiResonance' | 'quantumState' | 'spiralDepth'
    ;

attributeValue
    : STRING
    | NUMBER
    | BOOLEAN
    ;

textContent
    : TEXT_CONTENT+
    ;

spiralScriptContent
    : ~'</script>'*
    ;

cssContent
    : ~'</style>'*
    ;

// Lexer Rules

// HTSX Keywords
SCRIPT      : 'script';
STYLE       : 'style';
AWAIT       : 'await';

// Spiral Constants
PHI_CONSTANT    : 'φ' | 'PHI' | '1.618033988749';
QUANTUM         : 'quantum';
RESONANCE       : 'resonance';
ENTANGLE        : 'entangle';
COLLAPSE        : 'collapse';

// Operators
TIMES       : '*';
DIVIDE      : '/';
PLUS        : '+';
MINUS       : '-';
EQUALS      : '==';
NOT_EQUALS  : '!=';
LESS_THAN   : '<' { getText().equals("<") }?;
GREATER_THAN: '>';
AND         : '&&';
OR          : '||';
NOT         : '!';

// Literals
NUMBER      : [0-9]+ ('.' [0-9]+)?;
STRING      : '"' (~["\r\n] | '\\' .)* '"' 
            | '\'' (~['\r\n] | '\\' .)* '\'';
BOOLEAN     : 'true' | 'false';

// Identifiers
IDENTIFIER  : [a-zA-Z_$] [a-zA-Z0-9_$-]*;

// Text Content
TEXT_CONTENT: ~[<{]+;

// Whitespace and Comments
WS          : [ \t\r\n]+ -> skip;
LINE_COMMENT: '//' ~[\r\n]* -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;

// Special Characters
LPAREN      : '(';
RPAREN      : ')';
LBRACE      : '{';
RBRACE      : '}';
LBRACKET    : '[';
RBRACKET    : ']';
SEMICOLON   : ';';
COMMA       : ',';
DOT         : '.';
COLON       : ':';
ASSIGN      : '=';
AT          : '@';
