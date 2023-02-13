import {
  useEffect,
  useRef,
  useState
} from 'react';

import {
  useHistory,
  useLocation
} from 'react-router-dom';

import S from 'string';
import qs from 'querystring';

const useQueryUrl = () => {
  const history = useHistory();
  const search = S(useLocation().search).chompLeft('?').s;

  const [searchString, setSearchString] = useState(search);

  const searchRef = useRef(search);
  useEffect(() => {
    if (search === searchRef.current) return;
    searchRef.current = search;
    setSearchString(search);
  }, [search]);

  const setQueryFields = (fields) => {
    history.push(`${location.pathname}?${qs.encode(fields)}`);
  };

  return [
    qs.parse(searchString),
    setQueryFields
  ];
};

export default useQueryUrl;
