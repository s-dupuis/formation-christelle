import React from 'react';
const R = require('ramda');

const populateChildren = (dataKey, mockData) => (children, childDataProp) => (data) => {
  if (R.isNil(children)) return null;
  if (R.is(String, dataKey)) {
    data = data[dataKey];
    if (R.is(Function, children)) return children(data);
    if (!R.isNil(childDataProp)) {
      return React.cloneElement(children, { [childDataProp]: data });
    }
    return React.cloneElement(children, { [dataKey]: data });
  } else {
    data = R.pick(dataKey, data);
    if (R.is(Function, children)) return children(data);
    if (!R.isNil(childDataProp)) {
      throw new Error('can not use childDataProp when multiple keys are defined');
    }
    return React.cloneElement(children, data);
  }
};

export {
  populateChildren
};
