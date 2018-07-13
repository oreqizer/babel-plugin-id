const test = require("tape");
const babel = require("@babel/core");

const plugin = require("..");

const plain = `
var text = __("Yo");
`;

const custom = `
var text = t("Yo");
`;

const multipleArg = `
var text = __("Yo", "sup");
`;

const badArg = `
var text = __({ kek: "bur" });
`;

test(t => {
  const resPlain = babel.transform(plain, { plugins: [plugin] });
  t.equals(resPlain.code, 'var text = "Yo";');

  const resCustom = babel.transform(custom, {
    plugins: [[plugin, { fn: "t" }]]
  });
  t.equals(resCustom.code, 'var text = "Yo";');

  t.throws(() => babel.transform(multipleArg, { plugins: [plugin] }), /'__'/);
  t.throws(() => babel.transform(badArg, { plugins: [plugin] }), /'__'/);

  t.end();
});
