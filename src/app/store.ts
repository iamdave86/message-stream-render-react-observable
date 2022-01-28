import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import alertsReducer from '../features/alerts/alertsSlice';
import controlsReducer from '../features/controls/controlsSlice';
import messagesReducer from '../features/messages/messagesSlice';

const isDevEnv = process.env.NODE_ENV === 'development';
const middlewares: any = [];

if (isDevEnv) {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: { alerts: alertsReducer, controls: controlsReducer, messages: messagesReducer },
  devTools: isDevEnv,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
});

export type AppStore = typeof store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
