import { useAppDispatch } from "../../app/hooks";
import { Note, removeNote } from "../notes/notesSlice";
import './NodeItem.scss';

interface NoteItemProps {
  note: Note;
}

export default function NoteItem(props: NoteItemProps) {
  const dispatch = useAppDispatch();
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
      <div>
        <button onClick={() => dispatch(removeNote(note.id))} type="button" className="btn btn-outline-danger">Delete</button>
      </div>
    </div>
  )
}