import { useState, useEffect } from 'react';

import { QGroupsQuery as query } from '../_graphql/queries/QGroups';

const { fetchQuery } = require('react-relay');
const { useRelayEnvironment } = require('react-relay');

const useGroups = () => {
  const environment = useRelayEnvironment();
  const [loadingGroups, setLoadingGroups] = useState(true);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    let cancelled = false;
    fetchGroups(cancelled);
    return () => (cancelled = true);
  }, []);

  const fetchGroups = async (cancelled) => {
    try {
      const { groups: data } = await fetchQuery(environment, query).toPromise();
      if (!cancelled) {
        setGroups(data);
        setLoadingGroups(false);
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return {
    loadingGroups,
    groups
  };
};

export default useGroups;
