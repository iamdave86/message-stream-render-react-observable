import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import alertsReducer from '../features/alerts/alertsSlice';
import controlsReducer from '../features/controls/controlsSlice';
import messagesReducer from '../features/messages/messagesSlice';
import { AppStore, RootState } from './store';

const initRootState: Partial<RootState> = { alerts: [], controls: { isPlaying: true }, messages: [] };

const render = (ui: React.ReactElement, { preloadedState = initRootState, ...renderOptions } = {}) => {
  const store: AppStore = configureStore({
    reducer: { alerts: alertsReducer, controls: controlsReducer, messages: messagesReducer },
    preloadedState,
  });
  const Wrapper = ({ children }: { children: any }) => <Provider store={store}>{children}</Provider>;
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
