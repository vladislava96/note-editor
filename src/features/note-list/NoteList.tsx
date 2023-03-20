import { useAppSelector } from "../../app/hooks";
import NoteItem from "../note-item/NoteItem";
import { notesSelectors } from "../notes/notesSlice";
import './NoteList.scss';

export default function NoteList() {
  const notes = useAppSelector(state => notesSelectors.selectAll(state.notes))
  return (
    <div className="Note-list">
      { notes.map((note) => <NoteItem note={note} />) }
    </div>
  )
}