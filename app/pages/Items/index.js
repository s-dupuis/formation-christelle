import React, {useState} from 'react';
import useItems from '../../hooks/useItems';
import { useForm } from 'react-hook-form';
import CreateItemMutation from '../../_graphql/mutations/item/CreateItemMutation';

const R = require('ramda');
const Items = () => {
  const data = useItems().items;
  const isNotEmpty = R.length(data.items) > 0;
 const [isModalOpen, setIsModalOpen] = useState(false);

 const { register, handleSubmit, formState: { errors } } = useForm();
  const ValueCellTh = (children) => {
    return  <th className="bg-blue-100 border text-center px-8 py-4">{children}</th>;
  };
  const columns = ['Item ID', 'Item Name', 'Item Category', 'Item Group'];
 const ValueCellTd = (children) => {
    return  <td className="border text-center px-8 py-4">{children}</td>;
  };
  return (
    <div className="flex justify-center shadow-lg bg-white">
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
              {!isNotEmpty ?
                <span>Aucun item à afficher</span>
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
            {!isModalOpen ?
              <button
                className="bg-purple-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-blue-600
    focus:outline-none focus:ring-2 focus:ring-green-300" type="button" onClick={() => setIsModalOpen(true)}>Créer</button>
              : <>
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border border-solid border-gray-300 rounded">
                        <h3 className="text-3xl font=semibold">Créer un item</h3>
                        <button className="bg-transparent border-0 text-black float-right" onClick={() => setIsModalOpen(false)}>
                <span className="text-black opacity-7 h-6 w-6 text-xl block bg-white py-0 rounded-full">
                      x
                </span>
                        </button>
                      </div>
                      <div className="columns-1">
                        <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full" onSubmit={
                          handleSubmit((data) => {
                            CreateItemMutation(data, (ok, err, response) => {
                              if(ok) {
                                return (response);
                              }
                            });
                        })
                        }>
                          <input {...register('name', { required: 'This is required' })} placeholder='Name'/>
                          <p>{errors.name?.message}</p>
                          <select {...register('category')}>
                            <option value="" disabled selected>Choisir une catégories</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                          </select>
                          <p></p>
                          <input {...register('group')} placeholder='Groupe' />
                          <p>{errors.group?.message}</p>
                          <input type="submit" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
      </div>
    </div>
  );
};

export default Items;
