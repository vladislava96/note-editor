import { useState, FormEvent } from 'react';
import { Note } from '../notes/notesSlice';
import { TagData } from '@yaireo/tagify';
import Tags from '@yaireo/tagify/dist/react.tagify';
import '@yaireo/tagify/dist/tagify.css';
import './NoteEditor.scss';

interface NoteEditorProps {
  note: Note;
  onSave: (newNote: Note) => void;
}

export default function NoteEditor(props: NoteEditorProps) {
  const { note, onSave } = props;
  const [tags, setTags] = useState(note.tags);
  const [text, setText] = useState(note.text);

  function toTagify(values: string[]): TagData[] {
    return values.map(value => ({ value }));
  }

  function fromTagify(tags: TagData[]): string[] {
    return tags.map((tag) => tag.value);
  }

  function onFormSubmit(event: FormEvent) {
    event.preventDefault();
    onSave({ id: note.id, text, tags });
    setText('');
    setTags([]);
  }

  return (
    <div className='Note-editor'>
      <form className='Note-editor__form' onSubmit={onFormSubmit}>
        <textarea
          className='Note-editor__textarea'
          name="text"
          onChange={event => setText(event.target.value)}
          value={text}
        />
        <Tags
          value={toTagify(tags)}
          onChange={event => setTags(fromTagify(event.detail.tagify.value))}
        />
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  )
}