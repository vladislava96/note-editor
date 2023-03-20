import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export type Note = { id: number; text: string, tags: string[] };

const notesAdapter = createEntityAdapter<Note>({
  selectId: (note) => note.id
})

export const notesSelectors = notesAdapter.getSelectors();

const booksSlice = createSlice({
  name: 'notes',
  initialState: notesAdapter.getInitialState(),
  reducers: {
    addNote: notesAdapter.addOne,
    updateNote: notesAdapter.updateOne,
    removeNote: notesAdapter.removeOne
  },
})

export default booksSlice.reducer;