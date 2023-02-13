import './css/tailwind.css';
// import '../node_modules/rc-switch/assets/index.css';
// import 'rc-checkbox/assets/index.css';
// import 'rc-dropdown/assets/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import GQLEnvironment from '@@graphql/Environment';
import Tokens from './lib/Tokens';

const getDocumentRoot = () => {
  const element = document.createElement('div');
  document.body.appendChild(element);
  return element;
};

Tokens.setKey(process.env.API_USER_ID, process.env.API_KEY);

(async () => {
  await GQLEnvironment.init();
  ReactDOM.render(
    <Routes />,
    getDocumentRoot()
  );
})();

export {
  GQLEnvironment as environment
};
