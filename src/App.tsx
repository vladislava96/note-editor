import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectNoteForEdit } from "./features/note-editor/NodeEditorSlice";
import NoteEditor from "./features/note-editor/NoteEditor";
import NoteList from "./features/note-list/NoteList";
import { notesSelectors } from "./features/notes/notesSlice";
import './index.scss';

function App() {
  const dispatch = useAppDispatch();

  let notes = useAppSelector(state => notesSelectors.selectAll(state.notes));
  let dataHref = "data:json;charset=utf-8," + encodeURIComponent(JSON.stringify(notes));

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
        <a style={{marginLeft: "10px"}} href={dataHref} download="notes.json">Export file</a>
        <NoteEditor />
      </div>
      <NoteList />
    </div>
  );
}

export default App;
