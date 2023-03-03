import React from 'react';
import { useForm } from 'react-hook-form';
import useItems from '../../hooks/useItems';
import useGroups from '../../hooks/useGroups';

const R = require('ramda');
const UpdateItem = ({ setIsUpdateItemModalOpen, setLoading, itemId }) => {
  const { register, handleSubmit } = useForm();
  const { updateItem } = useItems();
  const { groups } = useGroups();

  const ValueOptionSelect = (children) => {
    return <option value={children.value} key={children.label}>{children.value}</option>;
  };

  return (
    <div>
      {groups.groups
        ? <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border border-solid border-gray-300 rounded">
                <h3 className="text-3xl font=semibold">Modifier un item</h3>
                <button className="bg-transparent border-0 text-black float-right" onClick={() => setIsUpdateItemModalOpen(false)}>
                  <span className="text-black opacity-7 h-6 w-6 text-xl block bg-white py-0 rounded-full">
                      x
                  </span>
                </button>
              </div>
              <div>
                <form className="inline-table bg-gray-200 shadow-md rounded px-8 pt-6 pb-8" onSubmit={
                  handleSubmit((data) => {
                    updateItem(itemId, data);
                    setIsUpdateItemModalOpen(false);
                    setLoading(true);
                  })
                }>
                  <input className="block" {...register('name', { required: 'This is required' })} placeholder='Name'/>
                  <select className="block" {...register('category')}>
                    <option hidden>Choisir une catégories</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                  <select className="block" {...register('group')}>
                    <option hidden>Choisir un groupe</option>
                    {
                      R.map(ValueOptionSelect, groups.groups)
                    }
                  </select>
                  <input className="block" type="submit"/>
                </form>
              </div>
            </div>
          </div>
        </div>
        : <span>Aucun groupe à afficher</span>
      }
    </div>
  );
};

export default UpdateItem;
