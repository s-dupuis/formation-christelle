import { useState, useEffect } from 'react';

import { QItemsQuery as query } from '../_graphql/queries/QItems';
import CreateItemMutation from '../_graphql/mutations/item/CreateItemMutation';

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
  });

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
        fetchData(false);
        return (response);
      }
    });
  };

  return {
    loading,
    items,
    createItem,
    fetchData
  };
};

export default useItems;
