const test = require("tape");
const babel = require("@babel/core");

const plugin = require("..");

const plain = `
var text = __("Yo");
`;

const custom = `
var text = t("Yo");
`;

test(t => {
  const resPlain = babel.transform(plain, { plugins: [plugin] });
  t.equals(resPlain.code, 'var text = "Yo";');

  const resCustom = babel.transform(custom, {
    plugins: [[plugin, { fn: "t" }]]
  });
  t.equals(resCustom.code, 'var text = "Yo";');

  t.end();
});
