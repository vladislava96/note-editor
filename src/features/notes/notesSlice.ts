import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Note = { id: number; text: string, tags: string[] };

const notesAdapter = createEntityAdapter<Note>({
  selectId: (note) => note.id
})

export const notesSelectors = notesAdapter.getSelectors();

let id = 1;

const notesSlice = createSlice({
  name: 'notes',
  initialState: notesAdapter.getInitialState(),
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      action.payload.id = id++;
      notesAdapter.addOne(state, action);
    },
    updateNote: notesAdapter.updateOne,
    removeNote: notesAdapter.removeOne
  },
})

export const { addNote, updateNote, removeNote } = notesSlice.actions;

export default notesSlice.reducer;