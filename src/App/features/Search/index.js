import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useReplacePageParameters } from '../useReplacePageParameters';
import { selectQuery, toggleOpen, setQuery } from './searchSlice';
import { StyledSearch, Button, Label, SearchIcon, Field } from './styled';
import { searchKey } from '../../paramKeys';
import ResultsBox from './ResultsBox';

const Search = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);
  const trimmedQuery = query.trim();
  const { pathname } = useLocation();
  const replacePageParameters = useReplacePageParameters();

  useEffect(() => {
    dispatch(setQuery(''));
  }, [pathname, dispatch]);

  const onFormSubmit = event => {
    event.preventDefault();

    replacePageParameters({
      key: searchKey,
      value: trimmedQuery,
    });

    dispatch(setQuery(''));
  };

  const onChange = value => {
    dispatch(setQuery(value));
  };

  const onFormTarget = ({ currentTarget, relatedTarget }) => {
    if (!currentTarget.contains(relatedTarget)) {
      dispatch(toggleOpen());
    }
  };

  return (
    <StyledSearch
      open={trimmedQuery}
      onFocus={onFormTarget}
      onBlur={onFormTarget}
      onSubmit={onFormSubmit}
    >
      <Button title={'Search'}>
        <SearchIcon />
      </Button>
      <Label>
        <Field
          value={query}
          onChange={({ target }) => onChange(target.value)}
          placeholder={`Search for ${
            pathname.includes('movies') ? 'movies' : 'people'
          }...`}
        />
      </Label>
      {trimmedQuery && <ResultsBox query={trimmedQuery} />}
    </StyledSearch>
  );
};

export default Search;
