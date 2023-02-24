import React from 'react';
import useItems from '../../hooks/useItems';
const R = require('ramda');
const Items = () => {
  let items = [{
    "_id" : "63f74fafe43f6ba34ab46457",
    "name" : "myFirstItem",
    "category" : "A",
    "group" : "dev",
    "createdAt" : "2023-02-22T14:02:09.801Z",
    "updatedAt" : "2023-02-22T14:02:09.801Z"
  }]
  const data = useItems().items;

  return (
    <div className="tailwindcss">
      <div>
        <h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item ID</th>
                <th scope="col">Item Name</th>
                <th scope="col">Item Category</th>
                <th scope="col">Item Group</th>
              </tr>
            </thead>
            <tbody>
              {
                R.map((item) =>
                  <tr key={item.id}>
                    <td>{item?.id}</td>
                    <td>{item?.name}</td>
                    <td>{item?.category}</td>
                    <td>{item?.group}</td>
                  </tr>
                  , data?.items)
              }
            </tbody>
          </table>
        </h1>
      </div>
    </div>
  );
};

export default Items;
