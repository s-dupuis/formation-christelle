import React, { useEffect, useRef } from 'react';
import { useQueryLoader, usePreloadedQuery, RelayEnvironmentProvider, useRelayEnvironment } from 'react-relay/hooks';
import mock from '../mock';

const R = require('ramda');

const Populate = ({
  query,
  queryReference,
  children
}) => {
  const data = usePreloadedQuery(query, queryReference);
  console.log(JSON.stringify(data));
  if (R.is(Function, children)) return children(data);
  if (!R.is(Function, children)) return React.cloneElement(children, data);
  return null;
};

const QueryProxy = ({
  query,
  args,
  fetchPolicy,
  mockKey,
  mockData,
  renderError,
  renderFetching,
  children,
  onFetching,
  onError
}) => {
  const environment = useRelayEnvironment();
  const mockDataFn = R.is(Function, mockData) ? mockData(environment) : process.env.MOCK_ENABLED === 'true' ? mock(mockKey)(environment) : null;
  if (!R.isNil(environment)) {
    return (
      <RelayEnvironmentProvider environment={environment}>
        <Query
          query={query}
          args={args}
          fetchPolicy={fetchPolicy}
          mockData={mockDataFn}
        >
          {children}
        </Query>
      </RelayEnvironmentProvider>
    );
  }
  return (
    <Query
      query={query}
      args={args}
      mockData={mockDataFn}
      fetchPolicy={fetchPolicy}
    >
      {children}
    </Query>
  );
};

const Query = ({
  fetchPolicy,
  query,
  args,
  children,
  mockData
}) => {
  const [
    queryReference,
    loadQuery
  ] = useQueryLoader(query);

  const hashRef = useRef('_');
  const argsRef = useRef('_');
  useEffect(() => {
    const hash = R.propOr('_', 'hash', query);
    if (R.equals(hashRef.current, hash) && R.equals(argsRef.current, args)) return;
    hashRef.current = hash;
    argsRef.current = args;
    if (R.is(Function, mockData)) mockData(query, args);
    loadQuery(args, { fetchPolicy });
  }, [args, query]);

  if (R.isNil(queryReference)) {
    return (<div>fetching</div>);
  }
  return (
    <React.Suspense fallback="Chargement en cours">
      <Populate queryReference={queryReference} query={query}>
        {children}
      </Populate>
    </React.Suspense>
  );
};

QueryProxy.defaultProps = {
  fetchPolicy: 'store-or-network',
  renderFetching: () => <div>fetching</div>,
  renderError: (error) => <div type="error">{error}</div>
};

export default QueryProxy;
