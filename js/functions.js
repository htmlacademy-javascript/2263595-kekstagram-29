const checkLength = (stroke, maxStroke) => stroke.length <= maxStroke;
checkLength();

const isPolindrom = (rowString) => {
  const string = rowString.replaceAll(' ', '').toLowerCase();
  return string === string.split('').reverse().join('');
};
isPolindrom();

