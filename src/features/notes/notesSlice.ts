import { createEntityAdapter, createSlice, PayloadAction, Update } from "@reduxjs/toolkit";

export type Note = { id: number; text: string, tags: string[] };

const notesAdapter = createEntityAdapter<Note>({
  selectId: (note) => note.id
})

export const notesSelectors = notesAdapter.getSelectors();

let id = 1;

const initialState = notesAdapter.getInitialState(JSON.parse(localStorage.getItem('note') ?? ''))

const notes = notesSelectors.selectAll(initialState)

for (const note of notes) {
  if (note.id + 1 > id) {
    id = note.id + 1
  }
}

type InitialState = typeof initialState;

function saveToLocalStorage(state: InitialState) {
  let json = JSON.stringify(state);
  localStorage.setItem('note', json)
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      action.payload.id = id++;
      notesAdapter.addOne(state, action);
      saveToLocalStorage(state);
    },
    updateNote(state, action: PayloadAction<Update<Note>>) {
      notesAdapter.updateOne(state, action);
      saveToLocalStorage(state);
    },
    removeNote(state, action: PayloadAction<number>) {
      notesAdapter.removeOne(state, action);
      saveToLocalStorage(state);
    } 
  },
})

export const { addNote, updateNote, removeNote } = notesSlice.actions;

export default notesSlice.reducer;