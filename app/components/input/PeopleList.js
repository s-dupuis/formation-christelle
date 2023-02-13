import React from 'react';
import Checkbox from 'rc-checkbox';

const PeopleList = ({ value, onChange }) => {
  const onToggleCheck = (index) => (e) => {

  };
  return (
    <ul>
      {value.map(({ firstname, lastname, checked }, index) => (
        <li className="flex" key={index}>
          <div>
            {`${lastname} ${firstname}`}
          </div>
          <div>
            <Checkbox checked={checked} onChange={onToggleCheck(index)} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
