import { useState, useEffect } from 'react';

import { QItemsQuery as query } from '../_graphql/queries/QItems';
import CreateItemMutation from '../_graphql/mutations/item/CreateItemMutation';
import DeleteItemMutation from '../_graphql/mutations/item/DeleteItemMutation';
import UpdateItemMutation from '../_graphql/mutations/item/UpdateItemMutation';
const { fetchQuery } = require('react-relay');
const { useRelayEnvironment } = require('react-relay');

const useItems = () => {
  const environment = useRelayEnvironment();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let hasBeenCancelled = false;
    fetchData(hasBeenCancelled);
    return () => (hasBeenCancelled = true);
  }, []);

  const fetchData = async (hasBeenCancelled) => {
    try {
      const { items: data } = await fetchQuery(environment, query).toPromise();
      if (!hasBeenCancelled) {
        setItems(data);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const createItem = async (data) => {
    CreateItemMutation(data, (ok, err, response) => {
      if (ok) {
        return (response);
      }
    });
  };

  const deleteItem = async (id) => {
    DeleteItemMutation(id, (ok, err, response) => {
      if (ok) {
        return (response);
      }
    });
  };
  const updateItem = async (itemId, data) => {
    UpdateItemMutation(itemId, data, (ok, err, response) => {
      if (ok) {
        return (response);
      }
    });
  };

  return {
    loading,
    items,
    createItem,
    deleteItem,
    updateItem,
    fetchData
  };
};

export default useItems;
