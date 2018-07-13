module.exports = function id(babel) {
  return {
    visitor: {
      CallExpression: function CallExpression(path, state) {
        var fn = (state.opts && state.opts.fn) || "__";
        if (path.node.callee.name === fn) {
          if (
            path.node.arguments.length !== 1 ||
            path.node.arguments[0].type !== "StringLiteral"
          ) {
            throw path.buildCodeFrameError(
              "Function '" + fn + "' expects exactly 1 argument of type String!"
            );
          }

          path.replaceWith(
            babel.types.stringLiteral(path.node.arguments[0].value)
          );
        }
      }
    }
  };
};
