palindrome = str => {
  str = prompt('слово?')
  str = str.toLowerCase();
  let str2 = str.split('');
  str2 = str2.reverse();
  str2 = str2.join('');
  console.log(str, str2);
  if (str == str2) {
    alert(str + ' => ' + str2 + '. да, палиндром')
    return true;
  } else {
    alert(str + ' => ' + str2 + '. нет, не палиндром')
    return false
  }

}

console.log(palindrome('abba'));
