import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import Note from "./components/Note";
function App() {
  const [notes, setNotes] = useState([
    {
      title: "# Enter Title Here",
      content: "# Enter Title Here",
    },
  ]);
  const [currentNote, setCurrentNote] = useState(0);

  const addNote = () => {
    setNotes([
      ...notes,
      {
        title: "# Enter Title Here",
        content: "# Enter Title Here",
      },
    ]);
  };

  const deleteNote = (index) => {
    const temp = [...notes];
    temp.splice(index, 1);
    setNotes(temp);
  };

  const changeCurrent = (index) => {
    setCurrentNote(index);
  };

  const modifyTheCurrentNote = (text) => {
    let temp = [...notes];
    temp[currentNote].content = text;
    temp[currentNote].title = text.split("\n")[0];
    setNotes(temp);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
        height: "100vh",
        marginLeft:"2rem"
      }}
    >
      <div style={{ width: "20%" }}>
        <h1>Notes</h1> <button onClick={addNote}> Add Note</button>
        {notes.map((item, index) => (
          <Note
            title={item.title}
            index={index}
            delNote={deleteNote}
            changeCurrent={changeCurrent}
          />
        ))}
      </div>
      <hr />
      <div style={{  height: "90dvh", margin:"1.6rem", width:"80dvw" }}>
        <MDEditor
          value={notes[currentNote].content}
          onChange={(value) => modifyTheCurrentNote(value)}
          height="100%" width="100%"
        />
      </div>
    </div>
  );
}

export default App;