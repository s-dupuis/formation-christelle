import React, { useState } from 'react';
import List from './List';
import CreateItem from './CreateItem';
const Items = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex justify-center shadow-lg bg-white">
      <div>
        <List setLoading = { setLoading } />
        <div>
          {!isModalOpen
            ? <button
              className="bg-purple-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-blue-600
          focus:outline-none focus:ring-2 focus:ring-green-300" type="submit" onClick={() => setIsModalOpen(true)}>Créer</button>
            : <>
              <CreateItem setIsModalOpen = {setIsModalOpen} setLoading = { setLoading } />
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Items;
