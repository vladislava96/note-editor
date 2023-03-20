import { useState } from "react";
import { useAppDispatch } from "./app/hooks";
import NoteEditor from "./features/note-editor/NoteEditor";
import NoteList from "./features/note-list/NoteList";
import { addNote } from "./features/notes/notesSlice";
import './index.scss';

function App() {
  const dispatch = useAppDispatch();
  const [editedNote, setEditedNote] = useState({
    id: 0,
    text: '',
    tags: [],
  });

  return (
    <div className="App">
      <div className="create-btn">
        <button className="btn btn-primary" onClick={() => setEditedNote({ id: 0, text: '', tags: [],})}>
          Create
        </button>
      </div>
      <NoteEditor note={editedNote} onSave={newNote => dispatch(addNote(newNote))} />
      <NoteList />
    </div>
  );
}

export default App;
