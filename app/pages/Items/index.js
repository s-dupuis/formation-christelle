import React from 'react';
import useItems from '../../hooks/useItems';

const Items = () => {
  const data = useItems().items;

  return (
    <div className="tailwind">
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
              {data.items?.map((item) => (
                <tr key={item.id}>
                  <td>{item?.id}</td>
                  <td>{item?.name}</td>
                  <td>{item?.category}</td>
                  <td>{item?.group}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </h1>
      </div>
    </div>
  );
};

export default Items;
