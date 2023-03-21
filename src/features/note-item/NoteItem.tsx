import { useAppDispatch } from "../../app/hooks";
import { selectNoteForEdit } from "../note-editor/NodeEditorSlice";
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
        { note.tags.map((tag) => <span key={tag}>#{ tag } </span>) }
      </div>
      <div>
        <button
          onClick={() => dispatch(removeNote(note.id))}
          type="button"
          className="btn btn-outline-danger"
        >
          Delete
        </button>
        <button
          onClick={() => dispatch(selectNoteForEdit(note))}
          type="button"
          className="btn btn-outline-success"
        >
          Update
        </button>
      </div>
    </div>
  )
}