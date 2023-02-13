import React from 'react';
const R = require('ramda');

const Layout = ({
  top,
  menu,
  children,
  showMenu,
  footer
}) => {
  const menuClasses = [
    'f-layout-menu',
    (showMenu) ? 'show' : undefined
  ].join(' ');

  return (
    <div className="f-layout">
      <div className="f-layout-top">{top}</div>
      <div className="f-layout-row">
        {!R.isNil(menu) && <div className={menuClasses}>{menu}</div>}
        <div className='f-layout-body'>
          {children}
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Layout;
