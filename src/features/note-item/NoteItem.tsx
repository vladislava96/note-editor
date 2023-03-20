import { Note } from "../notes/notesSlice";
import './NodeItem.scss';

interface NoteItemProps {
  note: Note;
}

export default function NoteItem(props: NoteItemProps) {
  const note = props.note;
  return (
    <div className="Node-item">
      <div className="Node-item__text">
        <b>Text: </b>
        { note.text }
      </div>
      <div>
        <b>Tags: </b>
        { note.tags.map((tag) => <span>{ tag }</span>) }
      </div>
    </div>
  )
}