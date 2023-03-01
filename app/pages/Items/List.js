import React from 'react';
import useItems from '../../hooks/useItems';

const R = require('ramda');
const List = () => {
  const data = useItems().items;
  const isNotEmpty = R.length(data.items) > 0;
  console.log(data.items);
  const ValueCellTh = (children) => {
    return <th className="bg-blue-100 border text-center px-8 py-4" key={children.id}>{children.value}</th>;
  };
  const columns = [{ id: 'id', value: 'Item ID' }, { id: 'name', value: 'Item Name' }, { id: 'category', value: 'Item Category' }, { id: 'group', value: 'Item Group' }];
  const ValueCellTd = (children) => {
    return <td className="border text-center px-8 py-4">{children}</td>;
  };
  return (
    <div>
      <h1>
        {!isNotEmpty
          ? <span>Aucun item à afficher</span>
          : <>
            <table>
              <thead>
                <tr className="hover:border-collapse">
                  {
                    R.map(ValueCellTh, columns)
                  }
                </tr>
              </thead>
              <tbody>
                {R.map((item) =>
                  <tr key={item.id}>
                    {
                      R.map(ValueCellTd, item)
                    }
                  </tr>
                , data.items)
                }
              </tbody>
            </table>
          </>
        }
      </h1>
    </div>
  );
};

export default List;
