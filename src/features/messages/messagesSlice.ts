import { createDraftSafeSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Message, Priority } from 'app/Api';
import { RootState } from 'app/store';

export type MessagesState = Message[];

const initialState: MessagesState = [];

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.push({ ...action.payload });
    },
    clearMessage: (state, action: PayloadAction<Message['id']>) => {
      return state.filter((message) => message.id !== action.payload);
    },
    clearAllMessages: () => {
      return [];
    },
  },
});

export const { addMessage, clearMessage, clearAllMessages } = messagesSlice.actions;

export default messagesSlice.reducer;

const selectSelf = (state: RootState) => state.messages;
const messagesSelector = createDraftSafeSelector(selectSelf, (messages) => messages);
export const errorMessagesSelector = createDraftSafeSelector(messagesSelector, (messages) =>
  messages
    .filter((message) => message.priority === Priority.Error)
    .slice()
    .reverse(),
);
export const warnMessagesSelector = createDraftSafeSelector(messagesSelector, (messages) =>
  messages
    .filter((message) => message.priority === Priority.Warn)
    .slice()
    .reverse(),
);
export const infoMessagesSelector = createDraftSafeSelector(messagesSelector, (messages) =>
  messages
    .filter((message) => message.priority === Priority.Info)
    .slice()
    .reverse(),
);
