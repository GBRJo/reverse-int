module.exports = function reverse (n) {
  let str = n.toString();
  let reverse = str.split('').reverse().join('');
  const result = parseInt(reverse);
  return result;
}
