module.exports = function check(str, bracketsConfig) {
  let stack = [];

  let openBrackets = {};
  let closeBrackets = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    let open = bracketsConfig[i][0];
    let close = bracketsConfig[i][1];
    openBrackets[open] = close;
    closeBrackets[close] = open;
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (openBrackets[char]) {
      if (openBrackets[char] === char && stack[stack.length - 1] === char) {
        stack.pop(); 
      } else {
        stack.push(char);
      }
    } 
    else if (closeBrackets[char]) {
      let lastOpen = stack.pop(); 
      if (lastOpen !== closeBrackets[char]) {
        return false; 
      }
    }
  }

  return stack.length === 0;
}
