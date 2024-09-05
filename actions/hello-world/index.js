// .github/actions/hello-world/index.js
const actionsCore = require('@actions/core');

try {
  const nameToGreet = actionsCore.getInput('who-to-greet');
  console.log(`Hola, ${nameToGreet}! Se ha realizado un push a la branch main en este momento`);
} catch (error) {
  actionsCore.setFailed(`Se ha producido un error: ${error.message}`);
}
