const readline = require('readline');

/**
 * Get user input from the console.
 * @param {string} question - Question to prompt the user.
 * @returns {Promise<string>} - User's response.
 */
function getUserChoice(question) {
  const readUserInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    readUserInput.question(question, answer => {
      readUserInput.close();
      resolve(answer);
    });
  });
}

module.exports = { getUserChoice };