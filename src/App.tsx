import { useState } from "react";
import { useAppDispatch } from "./app/hooks";
import NoteEditor from "./features/note-editor/NoteEditor";
import NoteList from "./features/note-list/NoteList";
import { addNote } from "./features/notes/notesSlice";

function App() {
  const dispatch = useAppDispatch();
  const [editedNote, setEditedNote] = useState({
    id: 0,
    text: '',
    tags: [],
  });

  return (
    <div>
      <button onClick={() => setEditedNote({ id: 0, text: '', tags: [],})}>
        Create</button>
      <NoteEditor note={editedNote} onSave={newNote => dispatch(addNote(newNote))} />
      <NoteList />
    </div>
  );
}

export default App;
