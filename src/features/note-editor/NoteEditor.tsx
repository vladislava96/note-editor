import { FormEvent } from 'react';
import { addNote, updateNote } from '../notes/notesSlice';
import { TagData } from '@yaireo/tagify';
import Tags from '@yaireo/tagify/dist/react.tagify';
import '@yaireo/tagify/dist/tagify.css';
import './NoteEditor.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectNoteForEdit, updateEditedNoteTags, updateEditedNoteText } from './NodeEditorSlice';


export default function NoteEditor() {
  const dispatch = useAppDispatch();
  const note = useAppSelector(state => state.noteEditor.value)
  
  function toTagify(values: string[]): TagData[] {
    return values.map(value => ({ value }));
  }

  function fromTagify(tags: TagData[]): string[] {
    return tags.map((tag) => tag.value);
  }

  function onFormSubmit(event: FormEvent) {
    event.preventDefault();

    const newNote = { id: note.id, text: note.text, tags: note.tags }

    if(note.id === 0) {
      dispatch(addNote(newNote));
    } else {
      dispatch(updateNote({ id: note.id, changes: newNote }));
    }

    dispatch(selectNoteForEdit({id: 0, text: '', tags: []}))
  }

  return (
    <div className='Note-editor'>
      <form className='Note-editor__form' onSubmit={onFormSubmit}>
        Add text:
        <textarea
          className='Note-editor__textarea'
          name="text"
          onChange={event => dispatch(updateEditedNoteText(event.target.value))}
          value={note.text}
        />
        Add tags:
        <Tags
          value={toTagify(note.tags)}
          onChange={event => dispatch(updateEditedNoteTags(fromTagify(event.detail.tagify.value)))}
        />
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  )
}