import { useState, useEffect } from 'react';

import { QBeneficiariesQuery as query } from '../_graphql/queries/QBeneficiaries';

const { fetchQuery } = require('react-relay');
const { useRelayEnvironment } = require('react-relay');

const useBeneficiaries = (subscriberId) => {
  const environment = useRelayEnvironment();

  const [loading, setLoading] = useState(true);
  const [beneficiaries, setBeneficiaries] = useState();

  useEffect(() => {
    let hasBeenCancelled = false;
    const fetchData = async () => {
      console.log('fetch data using subscriber id ', { subscriberId });
      try {
        const { getBeneficiaries: data } = await fetchQuery(environment, query, { subscriberId }).toPromise();
        if (!hasBeenCancelled) {
          setBeneficiaries(data);
          setLoading(false);
        }
      } catch (e) {
        console.error(e);
        throw e;
      }
    };

    fetchData();

    return () => (hasBeenCancelled = true);
  }, [subscriberId]);

  return {
    loading,
    beneficiaries
  };
};

export default useBeneficiaries;
