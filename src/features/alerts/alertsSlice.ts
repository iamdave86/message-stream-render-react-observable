import { createDraftSafeSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { RootState } from 'app/store';

export interface AlertItemType {
  id: string;
  message: string;
}

export type AlertsState = AlertItemType[];

const initialState: AlertsState = [];

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    addAlert: (state, action: PayloadAction<AlertItemType['message']>) => {
      state.push({ id: uuidv4(), message: action.payload });
    },
    clearAlert: (state, action: PayloadAction<AlertItemType['id']>) => {
      return state.filter((alert) => alert.id !== action.payload);
    },
    clearAlerts: () => {
      return [];
    },
  },
});

export const { addAlert, clearAlert, clearAlerts } = alertsSlice.actions;

export default alertsSlice.reducer;

const selectSelf = (state: RootState) => state.alerts;
export const alertsSelector = createDraftSafeSelector(selectSelf, (alerts) => alerts.slice().reverse());
export const latestAlertSelector = createDraftSafeSelector(alertsSelector, (alerts) => alerts[0]);
