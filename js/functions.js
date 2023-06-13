const checkLength = (string, maxLength) => {
  if(string.length <= 20){
    return true;
  } else if(maxLength.length === 18){
    return true;
  } else if(string.length > 10){
    return false;
  }
};
checkLength('Hello', 18);

const checkPalindrome = (string) => {
  string.replaceAll(' ', '');
  string.toLowerCase();
  const newString = string;

  let reverseString = '';

  for(let i = (-1); i === 0; i--){
    newString.at(i);
    reverseString += newString.at(i);
  }
  return newString === reverseString;
};
checkPalindrome('Poop');
