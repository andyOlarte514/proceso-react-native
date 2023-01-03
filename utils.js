export const validateText = string => {
  let openParenSpec = '({[';
  let closeParenSpec = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    let myChar = string.charAt(i);
    let openSpecItem = openParenSpec.includes(myChar);
    let cop = closeParenSpec[myChar];
    if (openSpecItem) {
      stack.push(myChar);
    } else if (cop) {
      let popped = stack.pop();
      if (cop !== popped) {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
};
