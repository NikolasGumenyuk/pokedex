import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import PokemonInfo from './PokemonInfo';
import PokemonsSlice from './PokemonsSlice';
import settingReducer from './SettingSlice';
import userReducer from './UserSlice';
import { pokemonApi } from '../services/pokemon/pokemon';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['setting', 'pokeBase', 'pokemonInfoState'],
};

const rootReducer = combineReducers({
  user: userReducer,
  setting: settingReducer,
  pokeBase: PokemonsSlice,
  pokemonInfoState: PokemonInfo,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const middleware = [pokemonApi.middleware];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat(middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
