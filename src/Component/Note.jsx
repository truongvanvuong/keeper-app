import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
const Note = ({ title, content, id, onDelete }) => {
  return (
    <div className="wrap_note">
      <h2>{title}</h2>
      <p>{content}</p>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

Note.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
};
export default Note;
