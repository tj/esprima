

exports.Node = Node;
exports.AssignmentExpression = AssignmentExpression;
exports.BlockStatement = BlockStatement
exports.BinaryExpression = BinaryExpression;
exports.BreakStatement = BreakStatement;
exports.CallExpression = CallExpression;
exports.CatchClause = CatchClause;
exports.ConditionalExpression = ConditionalExpression;
exports.ContinueStatement = ContinueStatement;
exports.DoWhileStatement = DoWhileStatement;
exports.DebuggerStatement = DebuggerStatement;
exports.EmptyStatement = EmptyStatement;
exports.ExpressionStatement = ExpressionStatement;
exports.ForStatement = ForStatement;
exports.ForInStatement = ForInStatement;
exports.FunctionDeclaration = FunctionDeclaration;
exports.FunctionExpression = FunctionExpression;
exports.Identifier = Identifier;
exports.FunctionDeclaration = FunctionDeclaration;
exports.IfStatement = IfStatement;
exports.Literal = Literal;
exports.LabeledStatement = LabeledStatement;
exports.LogicalExpression = LogicalExpression;
exports.MemberExpression = MemberExpression;
exports.NewExpression = NewExpression;
exports.Program = Program;
exports.ReturnStatement = ReturnStatement;
exports.SequenceExpression = SequenceExpression;
exports.SwitchStatement = SwitchStatement;
exports.SwitchCase = SwitchCase;
exports.ThisExpression = ThisExpression;
exports.ThrowStatement = ThrowStatement;
exports.TryStatement = TryStatement;
exports.UnaryExpression = UnaryExpression;
exports.UpdateExpression = UpdateExpression;
exports.VariableDeclaration = VariableDeclaration;
exports.WhileStatement = WhileStatement;
exports.WithStatement = WithStatement;

function Node() {
  
}

function AssignmentExpression() {
  Node.call(this);
}

function BlockStatement() {
  Node.call(this);
}

function BinaryExpression() {
  Node.call(this);
}

function BreakStatement() {
  Node.call(this);
}

function CallExpression() {
  Node.call(this);
}

function CatchClause() {
  Node.call(this);
}

function ConditionalExpression() {
  Node.call(this);
}

function ContinueStatement() {
  Node.call(this);
}

function DoWhileStatement() {
  Node.call(this);
}

function DebuggerStatement() {
  Node.call(this);
}

function EmptyStatement() {
  Node.call(this);
}

function ExpressionStatement() {
  Node.call(this);
}

function ForStatement() {
  Node.call(this);
}

function ForInStatement() {
  Node.call(this);
}

function FunctionDeclaration() {
  Node.call(this);
}

function FunctionExpression() {
  Node.call(this);
}

function Identifier(name) {
  Node.call(this);
  this.name = name;
}

function FunctionDeclaration() {
  Node.call(this);
}

function IfStatement() {
  Node.call(this);
}

function Literal(value) {
  Node.call(this);
  this.value = value;
}

function LabeledStatement() {
  Node.call(this);
}

function LogicalExpression() {
  Node.call(this);
}

function MemberExpression() {
  Node.call(this);
}

function NewExpression() {
  Node.call(this);
}

function Program() {
  Node.call(this);
}

function ReturnStatement() {
  Node.call(this);
}

function SequenceExpression() {
  Node.call(this);
}

function SwitchStatement() {
  Node.call(this);
}

function SwitchCase() {
  Node.call(this);
}

function ThisExpression() {
  Node.call(this);
}

function ThrowStatement() {
  Node.call(this);
}

function TryStatement() {
  Node.call(this);
}

function UnaryExpression(op, expr) {
  Node.call(this);
  this.op = op;
  this.expr = expr;
}

function UpdateExpression() {
  Node.call(this);
}

function VariableDeclaration() {
  Node.call(this);
}

function WhileStatement() {
  Node.call(this);
}

function WithStatement() {
  Node.call(this);
}
