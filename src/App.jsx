import { useState } from 'react';

import { Footer, Header, Note, CreateItem } from './Component';
const App = () => {
  const [notes, setnotes] = useState([]);
  const addNode = (newNode) => {
    setnotes((prevNote) => {
      return [...prevNote, newNode];
    });
  };
  const removeNode = (id) => {
    setnotes((prevNote) => {
      return prevNote.filter((item, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <Header />
      <CreateItem onAdd={addNode} notes={notes} />
      <div className="content">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={noteItem.key}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={removeNode}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default App;
