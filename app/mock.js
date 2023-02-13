const mockData = (query) => {
  if (process.env.MOCK_ENABLED !== 'true') return null;
  console.warn('mocks are enabled but no mock found for ' + query);
  return null;
};

export default mockData;
