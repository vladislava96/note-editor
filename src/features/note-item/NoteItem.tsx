import { Note } from "../notes/notesSlice";

interface NoteItemProps {
  note: Note;
}

export default function NoteItem(props: NoteItemProps) {
  const note = props.note;
  return (
    <div>
      <p>{ note.text }</p>
      <div>
        { note.tags.map((tag) => <p>{ tag }</p>) }
      </div>
    </div>
  )
}