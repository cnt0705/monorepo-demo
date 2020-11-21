// Thanks to https://medium.com/frontend-digest/using-nextjs-in-a-monorepo-e011ff1826f5
const withTM = require("next-transpile-modules")(["components"]);
module.exports = withTM();
