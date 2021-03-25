import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import authReducer from './auth/auth-reducer';
import caseIntakeReducer from './case-intake/case-intake-reducer';
import sharedReducer from './_shared/_shared-reducer';

const persistConfig = {
    key: 'root',
    storage: storageSession,
  }

const rootReducer = combineReducers({
    auth: authReducer,
    caseIntake: caseIntakeReducer,
    shared: sharedReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
