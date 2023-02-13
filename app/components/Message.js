import React from 'react';

const Message = ({ value, action, onClick }) => (
  <div>
    <div>
      {value}
    </div>
    <button className="f-button f-button-blue mt-4" onClick={onClick}>{action}</button>
  </div>
);

export default Message;
