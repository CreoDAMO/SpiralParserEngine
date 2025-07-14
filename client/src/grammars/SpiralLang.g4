
grammar SpiralLang;

// Parser Rules
program
    : module* EOF
    ;

module
    : moduleDeclaration statement*
    | statement*
    ;

moduleDeclaration
    : 'module' qualifiedName ';'
    ;

statement
    : declaration
    | expression ';'
    | controlFlow
    | spiralConstruct
    | quantumBlock
    | consciousnessBlock
    ;

declaration
    : importDeclaration
    | functionDeclaration
    | classDeclaration
    | interfaceDeclaration
    | variableDeclaration
    | theoremDeclaration
    | proofDeclaration
    ;

importDeclaration
    : 'import' '{' identifierList '}' 'from' STRING ';'
    | 'import' identifier 'from' STRING ';'
    | 'import' identifier '=' 'require(' STRING ')' ';'
    ;

functionDeclaration
    : ('async' | 'quantum')? 'function' identifier 
      typeParameters?
      '(' parameterList? ')' 
      (':' returnType)? 
      blockStatement
    ;

classDeclaration
    : 'class' identifier typeParameters?
      ('extends' type)?
      ('implements' typeList)?
      '{' classMember* '}'
    ;

interfaceDeclaration
    : 'interface' identifier typeParameters?
      ('extends' typeList)?
      '{' interfaceMember* '}'
    ;

variableDeclaration
    : ('const' | 'let' | 'var' | 'phi' | 'quantum') 
      identifier 
      (':' type)? 
      ('=' expression)? 
      ';'
    ;

theoremDeclaration
    : 'theorem' identifier 
      '(' parameterList? ')' 
      ':' type
      '{' proofStatement* '}'
    ;

proofDeclaration
    : 'proof' identifier 
      'of' identifier
      '{' proofStatement* '}'
    ;

controlFlow
    : ifStatement
    | whileStatement
    | forStatement
    | switchStatement
    | tryStatement
    ;

ifStatement
    : 'if' '(' expression ')' statement ('else' statement)?
    ;

whileStatement
    : 'while' '(' expression ')' statement
    ;

forStatement
    : 'for' '(' variableDeclaration expression ';' expression ')' statement
    | 'for' identifier 'in' expression statement
    | 'for' identifier 'of' expression statement
    ;

switchStatement
    : 'switch' '(' expression ')' '{' caseClause* defaultClause? '}'
    ;

tryStatement
    : 'try' blockStatement ('catch' '(' identifier ')' blockStatement)? ('finally' blockStatement)?
    ;

spiralConstruct
    : phiCalculation
    | resonanceField
    | entropyAnalysis
    | harmonicSequence
    ;

phiCalculation
    : 'phi' '{' phiExpression '}'
    ;

resonanceField
    : 'resonance' '(' expression (',' expression)* ')' blockStatement
    ;

entropyAnalysis
    : 'entropy' '{' entropyExpression '}'
    ;

harmonicSequence
    : 'harmonic' '(' expression ',' expression ')' blockStatement
    ;

quantumBlock
    : 'quantum' '{' quantumStatement* '}'
    ;

quantumStatement
    : quantumGate
    | quantumMeasurement
    | quantumEntanglement
    | quantumCollapse
    ;

quantumGate
    : gateType '(' expressionList ')' ';'
    ;

quantumMeasurement
    : 'measure' '(' expressionList ')' ';'
    ;

quantumEntanglement
    : 'entangle' '(' expression ',' expression ')' ';'
    ;

quantumCollapse
    : 'collapse' '(' expression ')' ';'
    ;

consciousnessBlock
    : 'consciousness' '{' consciousnessStatement* '}'
    ;

consciousnessStatement
    : memoryAccess
    | learningPattern
    | emotionalState
    | decisionTree
    ;

blockStatement
    : '{' statement* '}'
    ;

expression
    : assignmentExpression
    ;

assignmentExpression
    : conditionalExpression
    | leftHandSideExpression assignmentOperator assignmentExpression
    ;

conditionalExpression
    : logicalOrExpression
    | logicalOrExpression '?' assignmentExpression ':' assignmentExpression
    ;

logicalOrExpression
    : logicalAndExpression
    | logicalOrExpression '||' logicalAndExpression
    ;

logicalAndExpression
    : equalityExpression
    | logicalAndExpression '&&' equalityExpression
    ;

equalityExpression
    : relationalExpression
    | equalityExpression ('==' | '!=' | '===' | '!==') relationalExpression
    ;

relationalExpression
    : additiveExpression
    | relationalExpression ('<' | '>' | '<=' | '>=') additiveExpression
    ;

additiveExpression
    : multiplicativeExpression
    | additiveExpression ('+' | '-') multiplicativeExpression
    ;

multiplicativeExpression
    : unaryExpression
    | multiplicativeExpression ('*' | '/' | '%') unaryExpression
    ;

unaryExpression
    : postfixExpression
    | ('++' | '--' | '+' | '-' | '~' | '!') unaryExpression
    ;

postfixExpression
    : leftHandSideExpression
    | leftHandSideExpression ('++' | '--')
    ;

leftHandSideExpression
    : newExpression
    | callExpression
    ;

newExpression
    : memberExpression
    | 'new' newExpression
    ;

callExpression
    : memberExpression arguments
    | callExpression arguments
    | callExpression '[' expression ']'
    | callExpression '.' identifier
    ;

memberExpression
    : primaryExpression
    | memberExpression '[' expression ']'
    | memberExpression '.' identifier
    | 'new' memberExpression arguments
    ;

primaryExpression
    : 'this'
    | 'super'
    | identifier
    | literal
    | arrayLiteral
    | objectLiteral
    | '(' expression ')'
    | phiExpression
    | quantumExpression
    ;

phiExpression
    : PHI_CONSTANT
    | PHI_CONSTANT '*' expression
    | 'phi(' expression ')'
    | 'golden(' expression ')'
    ;

quantumExpression
    : 'qubit(' expression ')'
    | 'superposition(' expressionList ')'
    | 'measurement(' expression ')'
    ;

entropyExpression
    : 'entropy(' expression ')'
    | 'chaos(' expression ')'
    | 'order(' expression ')'
    ;

proofStatement
    : 'require' expression ';'
    | 'assert' expression ';'
    | 'yield' expression ';'
    | 'via' expression ';'
    | 'qed' ';'
    ;

memoryAccess
    : 'memory.' identifier ('=' expression)? ';'
    ;

learningPattern
    : 'learn' '(' expression ')' ';'
    ;

emotionalState
    : 'emotion.' identifier '=' expression ';'
    ;

decisionTree
    : 'decide' '(' expression ')' blockStatement
    ;

caseClause
    : 'case' expression ':' statement*
    ;

defaultClause
    : 'default' ':' statement*
    ;

classMember
    : propertyDeclaration
    | methodDeclaration
    | constructorDeclaration
    ;

interfaceMember
    : propertySignature
    | methodSignature
    ;

propertyDeclaration
    : ('public' | 'private' | 'protected' | 'static')* 
      identifier ':' type ('=' expression)? ';'
    ;

methodDeclaration
    : ('public' | 'private' | 'protected' | 'static' | 'async' | 'quantum')* 
      identifier '(' parameterList? ')' (':' returnType)? blockStatement
    ;

constructorDeclaration
    : 'constructor' '(' parameterList? ')' blockStatement
    ;

propertySignature
    : identifier ':' type ';'
    ;

methodSignature
    : identifier '(' parameterList? ')' ':' returnType ';'
    ;

// Types
type
    : primaryType
    | unionType
    | intersectionType
    | functionType
    | arrayType
    | genericType
    ;

primaryType
    : 'number' | 'string' | 'boolean' | 'void' | 'any' | 'unknown'
    | 'PhiSeed' | 'QuantumState' | 'TrustUnit' | 'ConsciousnessLevel'
    | identifier
    ;

unionType
    : type ('|' type)+
    ;

intersectionType
    : type ('&' type)+
    ;

functionType
    : '(' parameterList? ')' '=>' returnType
    ;

arrayType
    : type '[]'
    | 'Array' '<' type '>'
    ;

genericType
    : identifier '<' typeList '>'
    ;

returnType
    : type
    | 'Promise' '<' type '>'
    ;

typeList
    : type (',' type)*
    ;

typeParameters
    : '<' typeParameter (',' typeParameter)* '>'
    ;

typeParameter
    : identifier ('extends' type)?
    ;

parameterList
    : parameter (',' parameter)*
    ;

parameter
    : identifier (':' type)? ('=' expression)?
    | '...' identifier (':' arrayType)?
    ;

arguments
    : '(' expressionList? ')'
    ;

expressionList
    : expression (',' expression)*
    ;

identifierList
    : identifier (',' identifier)*
    ;

literal
    : NUMBER
    | STRING
    | BOOLEAN
    | 'null'
    | 'undefined'
    | PHI_CONSTANT
    | SPIRAL_CONSTANT
    ;

arrayLiteral
    : '[' expressionList? ']'
    ;

objectLiteral
    : '{' propertyAssignment* '}'
    ;

propertyAssignment
    : identifier ':' expression
    | STRING ':' expression
    | '[' expression ']' ':' expression
    ;

qualifiedName
    : identifier ('.' identifier)*
    ;

assignmentOperator
    : '=' | '+=' | '-=' | '*=' | '/=' | '%=' | '<<=' | '>>=' | '>>>=' | '&=' | '|=' | '^='
    ;

gateType
    : 'H' | 'X' | 'Y' | 'Z' | 'CNOT' | 'CZ' | 'SWAP' | 'Toffoli' | 'Fredkin'
    | 'RX' | 'RY' | 'RZ' | 'Phase' | 'T' | 'S'
    ;

identifier
    : IDENTIFIER
    ;

// Lexer Rules

// Keywords
MODULE      : 'module';
IMPORT      : 'import';
FROM        : 'from';
FUNCTION    : 'function';
CLASS       : 'class';
INTERFACE   : 'interface';
EXTENDS     : 'extends';
IMPLEMENTS  : 'implements';
CONST       : 'const';
LET         : 'let';
VAR         : 'var';
IF          : 'if';
ELSE        : 'else';
WHILE       : 'while';
FOR         : 'for';
SWITCH      : 'switch';
CASE        : 'case';
DEFAULT     : 'default';
TRY         : 'try';
CATCH       : 'catch';
FINALLY     : 'finally';
RETURN      : 'return';
BREAK       : 'break';
CONTINUE    : 'continue';
NEW         : 'new';
THIS        : 'this';
SUPER       : 'super';
ASYNC       : 'async';
AWAIT       : 'await';

// Spiral Keywords
THEOREM     : 'theorem';
PROOF       : 'proof';
REQUIRE     : 'require';
ASSERT      : 'assert';
YIELD       : 'yield';
VIA         : 'via';
QED         : 'qed';
PHI         : 'phi';
QUANTUM     : 'quantum';
RESONANCE   : 'resonance';
ENTROPY     : 'entropy';
HARMONIC    : 'harmonic';
CONSCIOUSNESS: 'consciousness';
MEMORY      : 'memory';
LEARN       : 'learn';
EMOTION     : 'emotion';
DECIDE      : 'decide';

// Quantum Gates
HADAMARD    : 'H' | 'Hadamard';
PAULI_X     : 'X' | 'PauliX';
PAULI_Y     : 'Y' | 'PauliY';
PAULI_Z     : 'Z' | 'PauliZ';
CNOT_GATE   : 'CNOT' | 'CX';
MEASURE     : 'measure';
ENTANGLE    : 'entangle';
COLLAPSE    : 'collapse';

// Constants
PHI_CONSTANT    : 'φ' | 'PHI' | '1.618033988749';
SPIRAL_CONSTANT : '∞' | 'INFINITY';

// Literals
NUMBER      : [0-9]+ ('.' [0-9]+)? ([eE] [+-]? [0-9]+)?;
STRING      : '"' (~["\r\n] | '\\' .)* '"' 
            | '\'' (~['\r\n] | '\\' .)* '\''
            | '`' (~[`] | '\\' .)* '`';
BOOLEAN     : 'true' | 'false';

// Identifiers
IDENTIFIER  : [a-zA-Z_$] [a-zA-Z0-9_$]*;

// Operators and Punctuation
ASSIGN      : '=';
PLUS_ASSIGN : '+=';
MINUS_ASSIGN: '-=';
MULT_ASSIGN : '*=';
DIV_ASSIGN  : '/=';
MOD_ASSIGN  : '%=';
AND_ASSIGN  : '&=';
OR_ASSIGN   : '|=';
XOR_ASSIGN  : '^=';
LSHIFT_ASSIGN: '<<=';
RSHIFT_ASSIGN: '>>=';
URSHIFT_ASSIGN: '>>>=';

QUESTION    : '?';
COLON       : ':';
SEMICOLON   : ';';
COMMA       : ',';
DOT         : '.';
ARROW       : '=>';

LPAREN      : '(';
RPAREN      : ')';
LBRACE      : '{';
RBRACE      : '}';
LBRACKET    : '[';
RBRACKET    : ']';

PLUS        : '+';
MINUS       : '-';
MULT        : '*';
DIV         : '/';
MOD         : '%';
POWER       : '**';

EQ          : '==';
NE          : '!=';
STRICT_EQ   : '===';
STRICT_NE   : '!==';
LT          : '<';
LE          : '<=';
GT          : '>';
GE          : '>=';

AND         : '&&';
OR          : '||';
NOT         : '!';

BIT_AND     : '&';
BIT_OR      : '|';
BIT_XOR     : '^';
BIT_NOT     : '~';
LSHIFT      : '<<';
RSHIFT      : '>>';
URSHIFT     : '>>>';

INCREMENT   : '++';
DECREMENT   : '--';

ELLIPSIS    : '...';

// Whitespace and Comments
WS          : [ \t\r\n]+ -> skip;
LINE_COMMENT: '//' ~[\r\n]* -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;
