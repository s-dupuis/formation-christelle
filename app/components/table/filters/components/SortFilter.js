import React from 'react';

const SortFilter = ({ children, onUpdateFilter }) => (
  <div className="w-full flex items-center">
    {children}
    <div className="flex flex-col ml-1">
      <button onClick={onUpdateFilter('ASC')}><img src="/icon/sort-up-off.svg"/></button>
      <div className="my-1"/>
      <button onClick={onUpdateFilter('DESC')}><img src="/icon/sort-down-on.svg"/></button>
    </div>
  </div>
);

export default SortFilter;
