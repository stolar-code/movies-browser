import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import themeReducer from './features/themeToggler/themeSlice';
import listReducer from './features/listSlice';
import genresReducer from './common/structure/Genres/genresSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
    list: listReducer,
    genres: genresReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
