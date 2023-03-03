import { useState } from 'react';

const useUpdateItemModal = () => {
  const [isUpdateItemModalOpen, setIsUpdateItemModalOpen] = useState(false);

  const openUpdateItemModal = () => setIsUpdateItemModalOpen(true);

  const closeUpdateItemModal = e => {
    e.preventDefault();
    setIsUpdateItemModalOpen(false);
  };

  return { isUpdateItemModalOpen, openUpdateItemModal, closeUpdateItemModal };
};

export default useUpdateItemModal;
