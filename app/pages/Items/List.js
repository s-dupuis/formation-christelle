import React, { useState } from 'react';
import useItems from '../../hooks/useItems';
import UpdateItem from './UpdateItem';

const R = require('ramda');

const ValueCellTh = (children) => {
  return <th className="bg-blue-100 border text-center px-8 py-4" key={children.id}>{children.value}</th>;
};
const columns = [{ id: 'id', value: 'Item ID' }, { id: 'name', value: 'Item Name' }, { id: 'category', value: 'Item Category' }, { id: 'group', value: 'Item Group' }];
const ValueCellTd = (children) => {
  return <td className="border text-center px-8 py-4" key={children}>{children}</td>;
};
const List = (setLoading) => {
  const [isUpdateItemModalOpen, setIsUpdateItemModalOpen] = useState(false);
  const { items } = useItems();
  const { deleteItem } = useItems();

  return (
    <div>
      <h1>
        {items.items
          ? <table>
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
                    R.map(ValueCellTd, R.values(item))
                  }
                  <td>
                    <button
                      className="bg-purple-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-blue-600
          focus:outline-none focus:ring-2 focus:ring-green-300" type="submit" onClick={() => deleteItem(item.id)}>Supprimer
                    </button>
                  </td>
                  <td>
                    {!isUpdateItemModalOpen
                      ? <button
                        className="bg-purple-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-blue-600
          focus:outline-none focus:ring-2 focus:ring-green-300" type="submit" onClick={() => setIsUpdateItemModalOpen(true)}>Modifier</button>
                      : <>
                        <UpdateItem setIsUpdateItemModalOpen = {setIsUpdateItemModalOpen} setLoading = { setLoading } itemId = { item.id } />
                      </>
                    }
                  </td>
                </tr>
              , items.items)
              }
            </tbody>
          </table>
          : <span>Aucun item à afficher</span>
        }
      </h1>
    </div>
  );
};

export default List;
