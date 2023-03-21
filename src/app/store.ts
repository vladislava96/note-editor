import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import notesReducer from '../features/notes/notesSlice';
import noteEditorReducer from '../features/note-editor/NodeEditorSlice'

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    noteEditor: noteEditorReducer
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
