import React, { useState } from 'react';
import List from './List';
import CreateItem from './CreateItem';
const Items = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-center shadow-lg bg-white">
      <div>
        <List />
        <CreateItem isModalOpen = {isModalOpen} setIsModalOpen = {setIsModalOpen} />
      </div>
    </div>
  );
};

export default Items;
