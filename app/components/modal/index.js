import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const R = require('ramda');

const ModalPortal = ({
  children
}) => {
  const [nodeElement, setNodeElement] = React.useState();

  React.useEffect(() => {
    console.log('***********');
    setNodeElement(window.parent.getElementById('root'));
  }, []);

  console.log(JSON.stringify(nodeElement));
  if (R.isNil(nodeElement)) return null;

  const newElement = document.createElement('span');
  newElement.innerText = 'portal element';

  return ReactDOM.createPortal(
    children,
    nodeElement.appendChild(newElement)
  );
};

ModalPortal.propTypes = {
  show: PropTypes.bool,
  onDisable: PropTypes.func,
  title: PropTypes.string,
  footer: PropTypes.element
};

ModalPortal.defaultProps = {
  show: false,
  onDisable: () => { }
};

export default ModalPortal;
