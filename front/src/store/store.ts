import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import sessionReducer from './slices/sessionSlice';
import messageReducer from './slices/messageSlice';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    message: messageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
