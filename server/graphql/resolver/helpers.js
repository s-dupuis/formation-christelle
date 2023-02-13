const R = require('ramda');

const OK = (additionnalFieds = {}) => ({
  ok: true,
  ...additionnalFieds
});

const KO = (error, additionnalFieds = {}) => ({
  ok: false,
  error,
  ...additionnalFieds
});

const withPagination = ({ docs, limit, page, pages, total }) => {
  return {
    docs,
    pagination: {
      page,
      pages,
      limit,
      total
    }
  };
};

const getRefGroups = (garantyRefs) => {
  return R.compose(
    R.uniq,
    R.values,
    R.map(R.compose(
      R.prop('garantyGroup')
    )),
    R.values
  )(garantyRefs);
};

const getCollegeName = college => R.compose(
  R.propOr('', 'title'),
  R.find(R.propEq('value', college))
)([
  {
    title: 'Cadre',
    value: '_cadre_'
  }, {
    title: 'Non cadre',
    value: '_non_cadre_'
  }, {
    title: 'Tous',
    value: '_tous_'
  }
]);

module.exports = {
  OK,
  KO,
  getCollegeName,
  getRefGroups,
  withPagination
};
