grammar SpiralScript;

// Parser Rules
program
    : statement* EOF
    ;

statement
    : declaration
    | expression ';'
    | quantumBlock
    | phiCalculation
    ;

declaration
    : importDeclaration
    | functionDeclaration
    | classDeclaration
    | variableDeclaration
    ;

importDeclaration
    : IMPORT '{' identifierList '}' FROM STRING ';'
    | IMPORT identifier FROM STRING ';'
    ;

functionDeclaration
    : FUNCTION identifier '(' parameterList? ')' (':' type)? blockStatement
    ;

classDeclaration
    : CLASS identifier (EXTENDS identifier)? blockStatement
    ;

variableDeclaration
    : (CONST | LET | VAR) identifier (':' type)? ('=' expression)? ';'
    ;

quantumBlock
    : QUANTUM '{' quantumStatement* '}'
    ;

quantumStatement
    : quantumGate
    | quantumMeasurement
    | phiGate
    ;

quantumGate
    : HADAMARD '(' expression ')' ';'
    | CNOT '(' expression ',' expression ')' ';'
    | PAULI_X '(' expression ')' ';'
    | PAULI_Y '(' expression ')' ';'
    | PAULI_Z '(' expression ')' ';'
    ;

phiGate
    : PHI_GATE '(' expression (',' expression)? ')' ';'
    ;

quantumMeasurement
    : MEASURE '(' expressionList ')' ';'
    ;

phiCalculation
    : PHI_CALC '{' phiExpression '}'
    ;

phiExpression
    : expression TIMES PHI_CONSTANT
    | expression RESONANCE expression
    | ENTROPY '(' expression ')'
    | HARMONIC '(' expression ',' expression ')'
    ;

blockStatement
    : '{' statement* '}'
    ;

expression
    : primary
    | expression '.' identifier
    | expression '[' expression ']'
    | expression '(' expressionList? ')'
    | expression (TIMES | DIVIDE | PLUS | MINUS) expression
    | expression (EQUALS | NOT_EQUALS | LESS_THAN | GREATER_THAN) expression
    | expression (AND | OR) expression
    | NOT expression
    | AWAIT expression
    ;

primary
    : identifier
    | NUMBER
    | STRING
    | BOOLEAN
    | PHI_CONSTANT
    | SPIRAL_CONSTANT
    | '(' expression ')'
    ;

parameterList
    : parameter (',' parameter)*
    ;

parameter
    : identifier ':' type
    ;

expressionList
    : expression (',' expression)*
    ;

identifierList
    : identifier (',' identifier)*
    ;

type
    : 'number'
    | 'string'
    | 'boolean'
    | 'PhiSeed'
    | 'QuantumState'
    | 'TrustUnit'
    | identifier
    ;

identifier
    : IDENTIFIER
    ;

// Lexer Rules

// Keywords
IMPORT      : 'import';
FROM        : 'from';
FUNCTION    : 'function';
CLASS       : 'class';
EXTENDS     : 'extends';
CONST       : 'const';
LET         : 'let';
VAR         : 'var';
AWAIT       : 'await';
QUANTUM     : 'quantum';
PHI_CALC    : 'phi_calc';

// Quantum Gates
HADAMARD    : 'H' | 'Hadamard';
CNOT        : 'CNOT' | 'CX';
PAULI_X     : 'X' | 'PauliX';
PAULI_Y     : 'Y' | 'PauliY';
PAULI_Z     : 'Z' | 'PauliZ';
PHI_GATE    : 'Φ' | 'PHI';
MEASURE     : 'measure';

// Phi Constants and Operations
PHI_CONSTANT    : 'φ' | 'PHI' | '1.618033988749';
SPIRAL_CONSTANT : '∞' | 'INFINITY';
RESONANCE       : '⟨⟩' | 'resonance';
ENTROPY         : 'entropy';
HARMONIC        : 'harmonic';

// Operators
TIMES       : '*';
DIVIDE      : '/';
PLUS        : '+';
MINUS       : '-';
EQUALS      : '==';
NOT_EQUALS  : '!=';
LESS_THAN   : '<';
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
IDENTIFIER  : [a-zA-Z_$] [a-zA-Z0-9_$]*;

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
