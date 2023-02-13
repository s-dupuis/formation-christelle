const offers = [{
  id: 'SanteTns',
  title: 'Santé TNS',
  logo: '',
  link: '/sante-tns'
}, {
  id: 'SanteCollective',
  title: 'Santé Collective',
  logo: '',
  link: '/sante-collective'
}, {
  id: 'PrevoyanceCollective',
  title: 'Prévoyance Collective',
  logo: '',
  link: '/prevoyance-collective'
}, {
  id: 'PrevoyanceTns',
  title: 'Prévoyance TNS',
  logo: '',
  link: '/prevoyance-tns'
}, {
  id: 'MRPro',
  title: 'MR Pro',
  logo: '',
  link: '/mr-pro'
}, {
  id: 'RepriseProposition',
  title: 'Reprise d\' une proposition',
  logo: '',
  link: '/reprise-proposition'
}];

const useOffer = () => {
  return {
    offers
  };
};

export default useOffer;
