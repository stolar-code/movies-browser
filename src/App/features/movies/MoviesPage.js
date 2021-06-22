import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList, selectResult } from '../listSlice';
import { fetchGenres } from './Genres/genresSlice';
import Subheader from '../../common/styled/Subheader';
import Movie from '../../common/structure/Movie';
import Section from '../../common/styled/Section';
import List from '../../common/styled/List';
import ThemeToggler from '../ThemeToggler';

const MoviesPage = () => {
  const resultPage = useSelector(selectResult);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList({ page: '1', type: 'movies' }));
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <Section>
      <Subheader extra>
        Popular movies
        <ThemeToggler />
      </Subheader>
      <List movies>
        {resultPage.map(
          ({
            title,
            release_date,
            genre_ids,
            vote_average,
            vote_count,
            poster_path,
            id,
          }) => (
            <Movie
              title={title}
              year={release_date}
              genres={genre_ids}
              rate={vote_average}
              votes={vote_count}
              source={poster_path}
              key={id}
            />
          )
        )}
      </List>
    </Section>
  );
};

export default MoviesPage;
