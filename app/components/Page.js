import React from 'react';
import classNames from 'classnames';

const Page = ({ title, fw, actions, children }) => (
  <div className={classNames('f-page', { 'f-page-fw': fw })}>
    <h1 className="f-page-title">
      {title}
      {actions && <div className="float-right mr-4">{actions}</div>}
    </h1>
    {children}
  </div>
);

export default Page;
