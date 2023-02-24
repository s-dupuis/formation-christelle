import { useState, useEffect } from 'react';

import { QItemsQuery as query } from '../_graphql/queries/QItems';

const { fetchQuery } = require('react-relay');
const { useRelayEnvironment } = require('react-relay');

const useItems = () => {
  const environment = useRelayEnvironment();

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState({});

  useEffect(() => {
    let hasBeenCancelled = false;
    const fetchData = async () => {
      console.log('fetch data');
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

    fetchData();

    return () => (hasBeenCancelled = true);
  }, []);

  return {
    loading,
    items
  };
};

export default useItems;
