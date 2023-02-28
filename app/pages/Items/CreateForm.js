import React from 'react';
import { useForm } from 'react-hook-form';

const CreateForm = ({
  data
}) => {
  const { register, handleSubmit } = useForm();
  console.log(data);
  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              <h3 className="text-3xl font=semibold">Créer un item</h3>
              <button className="bg-transparent border-0 text-black float-right"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="text-black opacity-7 h-6 w-6 text-xl block bg-white py-0 rounded-full">
                      x
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full" onSubmit={handleSubmit((data) => {
                console.log(data);
              })}>
                <input {...register('name', { required: true })} placeholder='Nom' />
                <select {...register('category')}>
                  <option value="" disabled selected>Catégories</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
                <input {...register('group')} placeholder='Groupe' />
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateForm;
