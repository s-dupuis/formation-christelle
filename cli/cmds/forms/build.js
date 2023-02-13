require('@babel/register');
const path = require('path');
const { compute } = require('@fasstech/formtastic');

compute({
  formsPath: path.join('..', '_forms')
});
