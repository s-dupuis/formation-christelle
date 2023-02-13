const R = require('ramda');

const reduceFileName = (filename) => {
  if (filename) {
    const maxLength = 24;
    const extension = R.compose(R.last, R.split('.'))(filename);
    const filenameNoExt = R.compose(R.join('.'), R.dropLast(1), R.split('.'))(filename);

    const cleanFileName = R.when(
      R.compose(R.gte(R.__, maxLength), R.length),
      () => R.join('….', [R.slice(0, maxLength, filenameNoExt), extension])
    )(filename);
    return cleanFileName;
  } else {
    return '';
  }
};
export {
  reduceFileName
};
