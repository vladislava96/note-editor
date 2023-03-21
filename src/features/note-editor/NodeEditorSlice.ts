import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../notes/notesSlice";

export type NoteEditor = { value: Note };

const initialState: NoteEditor = {
  value: {
    id: 0,
    text: '',
    tags: [],
  }
};

const noteEditorSlice = createSlice({
  name: 'noteEditor',
  initialState,
  reducers: {
    selectNoteForEdit(state, action: PayloadAction<Note>){
      state.value = action.payload
    },
    updateEditedNoteText(state, action: PayloadAction<string>){
      state.value.text = action.payload
    },
    updateEditedNoteTags(state, action: PayloadAction<string[]>){
      state.value.tags = action.payload
    }
  },
})

export const { selectNoteForEdit, updateEditedNoteText, updateEditedNoteTags } = noteEditorSlice.actions;

export default noteEditorSlice.reducer;