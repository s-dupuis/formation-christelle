import React from 'react';
import useItems from '../../hooks/useItems';

const R = require('ramda');
const List = () => {
  const data = useItems().items;
  const isNotEmpty = R.length(data.items) > 0;

  const ValueCellTh = (children) => {
    return <th className="bg-blue-100 border text-center px-8 py-4">{children}</th>;
  };
  const columns = ['Item ID', 'Item Name', 'Item Category', 'Item Group'];
  const ValueCellTd = (children) => {
    return <td className="border text-center px-8 py-4">{children}</td>;
  };
  return (
    <div>
      <h1>
        <table>
          <thead>
            <tr className="hover:border-collapse">
              {
                R.map(ValueCellTh, columns)
              }
            </tr>
          </thead>
          <tbody>
            {!isNotEmpty
              ? <span>Aucun item à afficher</span>
              : <>
                {R.map((item) =>
                  <tr key={item.id}>
                    {
                      R.map(ValueCellTd, R.valuesIn(item))
                    }
                  </tr>
                , data.items)
                }
              </>
            }
          </tbody>
        </table>
      </h1>
    </div>
  );
};

export default List;
