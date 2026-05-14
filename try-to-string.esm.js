var $String = String;

var tryToString = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};

export { tryToString as t };
