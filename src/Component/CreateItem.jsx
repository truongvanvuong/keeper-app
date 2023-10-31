import { useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';

const CreateItem = ({ onAdd, notes }) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  const handleclick = (event) => {
    if (note.title === '') {
      alert('Nhập đi');
    } else if (note.content === '') {
      alert('Nội dung không nhập à');
    } else {
      event.preventDefault();
      const newnote = {
        key: notes.length + 1,
        title: note.title,
        content: note.content,
      };
      onAdd(newnote);
      setNote({
        title: '',
        content: '',
      });
    }
  };
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <button onClick={handleclick}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
};
CreateItem.propTypes = {
  notes: PropTypes.array,
  onAdd: PropTypes.func,
};
export default CreateItem;
