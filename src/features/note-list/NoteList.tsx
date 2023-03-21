import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import NoteItem from "../note-item/NoteItem";
import { notesSelectors } from "../notes/notesSlice";
import './NoteList.scss';

export default function NoteList() {
  let [searchQuery, setSearchQuery] = useState('');

  const notes = useAppSelector(state => notesSelectors.selectAll(state.notes))

  let filteredNotes = notes;

  if (searchQuery !== '') {
    filteredNotes = notes.filter((note) => {
      for (const tag of note.tags) {
        if (tag.toUpperCase().includes(searchQuery.toUpperCase())) {
          return true;
        }
      }
      return false;
    })
  }

  return (
    <div className="Note-list">
      <input
        onChange={(event) => setSearchQuery(event.target.value)}
        type="text"
        placeholder="search by tag"
      ></input>
      { filteredNotes.map((note) => <NoteItem note={note} key={note.id}/>) }
    </div>
  )
}