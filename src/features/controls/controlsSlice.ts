import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

export interface ControlsState {
  isPlaying: boolean;
}

const initialState: ControlsState = {
  isPlaying: true,
};

export const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { togglePlay } = controlsSlice.actions;

export default controlsSlice.reducer;

const selectSelf = (state: RootState) => state.controls;
export const isControlPlayingSelector = createDraftSafeSelector(selectSelf, (state) => state.isPlaying);
