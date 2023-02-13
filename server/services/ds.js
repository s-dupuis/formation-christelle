import fetch from './helpers/fetchLegacy';

const ds = (() => {
  const buildUrl = route => `${process.env.COM_TAILWIND_DS_SERVICE_URL}/universign${route}`;

  const getStatus = async (id) => {
    return await fetch.get(buildUrl(`/get_transaction_info/${id}`));
  };

  const cancel = async (id) => {
    return await fetch.get(buildUrl(`/cancel_transaction/${id}`));
  };

  const relaunch = async (id) => {
    return fetch.get(buildUrl(`/relaunch_transaction/${id}`));
  };

  const createSignature = async (body) => {
    return fetch.post(buildUrl('/request_transaction_binary_from_zip'), body);
  };

  return {
    cancel,
    getStatus,
    relaunch,
    createSignature
  };
})();

module.exports = ds;
