// .github/actions/hello-world/index.js
const ActionsCore = require('@actions/core');

try {
  const nameToGreet = ActionsCore.getInput('who-to-greet');
  console.log(`Hola, ${nameToGreet}!`);
} catch (error) {
  ActionsCore.setFailed(`Se ha producido un error: ${error.message}`);
}
