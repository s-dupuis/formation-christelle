import { useState } from 'react';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

const useQueryContext = () => {
  const search = new URLSearchParams(window.location.search);
  const getFromQuery = (k, or = '') => R.when(RA.isNilOrEmpty, R.always(or))(search.get(k));

  const [query, setQuery] = useState({
    externalId: getFromQuery('externalId')
  });

  const getQueryParam = queryParam => R.propOr('', queryParam, query);
  const setQueryParam = (queryParam, value) => setQuery(R.assoc(queryParam, value));

  return {
    getQueryParam,
    setQueryParam,
    query
  };
};

export default useQueryContext;
