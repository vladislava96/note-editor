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
      state.value = action.payload;
    },
    updateEditedNoteText(state, action: PayloadAction<string>){
      state.value.text = action.payload;
    },
    fillTagsFromText(state) {
      const { text, tags } = state.value;
      const matches = text.match(/#.+?(\s|$)/gm);
      if(matches) {
        for(const match of matches) {
          const tag = match.trim().slice(1);
          if (!tags.includes(tag)) {
            tags.push(tag)
          }
        }
      }
    },
    updateEditedNoteTags(state, action: PayloadAction<string[]>){
      state.value.tags = action.payload;
    }
  },
})

export const {
  selectNoteForEdit,
  updateEditedNoteText,
  fillTagsFromText,
  updateEditedNoteTags
} = noteEditorSlice.actions;

export default noteEditorSlice.reducer;