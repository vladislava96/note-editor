import { useAppDispatch } from "./app/hooks";
import { selectNoteForEdit } from "./features/note-editor/NodeEditorSlice";
import NoteEditor from "./features/note-editor/NoteEditor";
import NoteList from "./features/note-list/NoteList";
import './index.scss';

function App() {
  const dispatch = useAppDispatch();

  function onCreateButtonClick() {
    dispatch(selectNoteForEdit({ 
      id: 0,
      text: '',
      tags: []
    }))
  }

  return (
    <div className="App">
      <div className="App__block">
        <button
          className="btn btn-primary" 
          onClick={onCreateButtonClick}
        >
          Create
        </button>
        <NoteEditor />
      </div>
      <NoteList />
    </div>
  );
}

export default App;
